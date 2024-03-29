<template>
  <div class="file-detail-page">
    <div class="page-wrap container">
      <detail-tabs
        :tabs="tabs"
        :active-tab="activeTab"
        class="container"
        @set-active-tab="activeTab = $event"
      >
        <el-row :gutter="16">
          <el-col :offset="22" :span="4" class="details">
            <button
              class="ml-8 btn-copy-permalink-solid hidden"
              @click="copyLink"
            >
              <svg-icon name="icon-permalink" height="28" width="28" />
              <span class="visuallyhidden">Copy permalink</span>
            </button>
          </el-col>
        </el-row>
        <biolucida-viewer
          v-show="activeTab === 'viewer'"
          :data="biolucidaData"
          :query-view="queryView"
        />
      </detail-tabs>
      <div class="subpage">
        <div class="file-detail">
          <strong class="file-detail__column_1">Dataset</strong>
          <div class="file-detail__column_2">
            <nuxt-link
              :to="{
                name: 'datasets-datasetId',
                params: {
                  datasetId
                }
              }"
            >
              {{ title }}
            </nuxt-link>
          </div>
        </div>
        <div class="file-detail">
          <strong class="file-detail__column_1">Filename</strong>
          <div class="file-detail__column_2">
            {{ image_info.name }}
          </div>
        </div>
        <div class="file-detail">
          <strong class="file-detail__column_1">Data collection</strong>
          <div class="file-detail__column_2">
            {{ data_collection }}
          </div>
        </div>
        <div class="file-detail">
          <strong class="file-detail__column_1">Modality</strong>
          <div class="file-detail__column_2">
            {{ xmp_metadata.modality }}
          </div>
        </div>
        <div class="file-detail">
          <strong class="file-detail__column_1">Channel target labels</strong>
          <div class="file-detail__column_2">
            <image-channels :channel-colours="xmp_metadata.channel_colours" />
          </div>
        </div>
        <div class="file-detail">
          <strong class="file-detail__column_1">Image scaling</strong>
          <div class="file-detail__column_2">
            <image-scaling
              :x-scale="xmp_metadata.pixel_height"
              :y-scale="xmp_metadata.pixel_width"
              :z-scale="xmp_metadata.z_spacing"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import biolucida from '@/services/biolucida'
import scicrunch from '@/services/scicrunch'

import BiolucidaViewer from '@/components/BiolucidaViewer/BiolucidaViewer'
import DetailTabs from '@/components/DetailTabs/DetailTabs.vue'
import ImageScaling from '@/components/Images/ImageScaling.vue'
import ImageChannels from '@/components/Images/ImageChannels.vue'

import MarkedMixin from '@/mixins/marked'

import { extractSection } from '@/utils/common'

export default {
  name: 'BiolucidaViewerPage',

  components: {
    BiolucidaViewer,
    DetailTabs,
    ImageScaling,
    ImageChannels
  },

  mixins: [MarkedMixin],

  async asyncData({ route }) {
    const image_identifier = route.params.id
    const identifier = route.query.item_id.substring(2)

    const [image_info, dataset_response, xmp_metadata] = await Promise.all([
      biolucida.getImageInfo(image_identifier),
      scicrunch.getDatasetInfoFromObjectIdentifier(identifier),
      biolucida.getXMPInfo(image_identifier)
    ])

    let dataset_info = dataset_response.data.result[0]
    if (dataset_info === undefined) {
      dataset_info = { readme: '', title: '' }
    }

    return {
      image_info,
      xmp_metadata,
      readme: dataset_info.readme,
      title: dataset_info.title
    }
  },

  data: () => {
    return {
      tabs: [
        {
          label: 'Image Viewer',
          type: 'viewer'
        }
      ],
      activeTab: 'viewer',
      file: {},
      data_collection: '',
      queryView: false
    }
  },

  computed: {
    /**
     * Compute biolucida data
     * @returns {Object}
     */
    biolucidaData: function() {
      return {
        biolucida_image_id: '',
        share_link: process.env.BL_SHARE_LINK_PREFIX + this.$route.query.view,
        status: ''
      }
    },

    /**
     * Return the dataset id from the route query.
     * @returns String
     */
    datasetId: function() {
      return this.$route.query.dataset_id
    }
  },

  mounted: function() {
    const html = this.parseMarkdown(this.readme)
    this.data_collection = extractSection(/data collect[^:]+:/i, html)
  },
  methods: {
    copyLink: function() {
      this.queryView = !this.queryView
    }
  }
}
</script>

<style scoped lang="scss">
.hidden {
  visibility: hidden;
}

.page {
  display: flex;
  margin-top: 7rem;

  p {
    color: #606266;
  }
}

.about {
  text-align: center;
  min-height: 50vh;
  margin-top: 9rem;
}

h1 {
  flex: 1;
  font-size: 1.5em;
  line-height: 2rem;
}
.page-heading {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.375rem;
  @media (min-width: 48em) {
    flex-direction: row;
  }
}
.page-heading__button {
  flex-shrink: 0;
}

.file-detail {
  border-bottom: 1px solid #dbdfe6;
  flex-direction: column;
  font-size: 0.875em;
  display: flex;
  padding: 1rem 0.625rem;
  @media (min-width: 48em) {
    flex-direction: row;
  }
}
.file-detail__column_1 {
  flex: 0.2;
}
.file-detail__column_2 {
  flex: 0.8;
}
</style>
