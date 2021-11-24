<template>
  <div class="plot-viewer-page">
    <div class="page-wrap container">
      <detail-tabs
        :tabs="tabs"
        :active-tab="activeTab"
        class="container"
        @set-active-tab="activeTab = $event"
      >
        <client-only placeholder="Loading plot ...">
          <div class="plotvuer-container">
            <plot-vuer
              :data-source="{ url: source_url }"
              :metadata="metadata"
              :supplemental-data="supplemental_data"
              :plot-layout="layout"
            />
          </div>
        </client-only>
      </detail-tabs>
      <div class="subpage">
        <div class="page-heading">
          <h1>{{ fileName }}</h1>
        </div>
        <div class="file-detail">
          <strong class="file-detail__column">File Details</strong>
        </div>
        <div class="file-detail">
          <strong class="file-detail__column">Type</strong>
          <div class="file-detail__column">
            <p>{{ plotType }} plot</p>
          </div>
        </div>
        <div class="file-detail">
          <strong class="file-detail__column">Dataset id</strong>
          <div class="file-detail__column">
            {{ datasetId }}
          </div>
        </div>
        <div class="file-detail">
          <strong class="file-detail__column">Version</strong>
          <div class="file-detail__column">
            {{ versionNumber }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailTabs from '@/components/DetailTabs/DetailTabs.vue'
import scicrunch from '@/services/scicrunch'
import discover from '@/services/discover'

import curations from '@/curation/previews'

export default {
  name: 'PlotViewerPage',

  components: {
    DetailTabs,
    PlotVuer: process.client
      ? () => import('@abi-software/plotvuer').then(m => m.PlotVuer)
      : null
  },
  async asyncData({ route }) {
    const identifier = route.query.identifier

    const scicrunchResponse = await scicrunch.getDatasetInfoFromObjectIdentifier(
      identifier
    )
    console.log('data.result', scicrunchResponse.data.result[0])
    const firstResult = scicrunchResponse.data.result[0]

    // Check for curations
    let foundCuration = false
    let curation = undefined
    curations.forEach(cur => {
      if (cur.pennsieveId === identifier){
        foundCuration = true
        curation = cur
      }
    })

    // get temporary curation urls if they exist
    if (foundCuration){
      console.log('calling curation', `${process.env.BF_DOWNLOAD_API}/urlFromPackageId/${identifier}`)

      console.log('curation', curation)

      let source_url = await fetch(`${process.env.BF_DOWNLOAD_API}/urlFromPackageId/${identifier}`).then(d =>d.json()).then(d=>d.url)
      let supplemental_data = []

      if (curation.additionalId){
        let supplemental_url = await fetch(`${process.env.BF_DOWNLOAD_API}/urlFromPackageId/${curation.additionalId}`).then(d =>d.json()).then(d=>d.url)
        supplemental_data.push({
          url: supplemental_url
        })
      }
      let metadata = curation.metadata
      console.log('source', source_url, metadata, supplemental_data)

      let layout = { height: 667 }
      if (curation.layout) {
        Object.assign(layout, curation.layout)
      }
      // let source_url = source_url_response.data.result[0].url
      return {source_url, metadata, supplemental_data, layout}
    }

    if ('abi-plot' in firstResult){
      console.log('found abi plot')
      const plot_info = firstResult
      const plot_annotation = plot_info.datacite
      const file_path = `${route.query.dataset_id}/${route.query.dataset_version}/files/${plot_info.dataset.path}`
      const source_url_response = await discover.downloadLink(file_path)
      let source_url = source_url_response.data
      if (process.env.portal_api === 'http://localhost:8000') {
        source_url = `${process.env.portal_api}/s3-resource/${file_path}`
      }

      const metadata = JSON.parse(
        plot_annotation.supplemental_json_metadata.description
      )
    

      let supplemental_data = []
      if (plot_annotation.isDescribedBy) {
        let tmp_path = plot_annotation.isDescribedBy.path
        // Hack to fix path entry.
        if (tmp_path === '../derivative/sub-1/subject1_header.txt') {
          tmp_path = 'derivative/sub-1/sam-1/subject1_header.txt'
        }

        const supplemental_file_path = `${route.query.dataset_id}/${route.query.dataset_version}/files/${tmp_path}`

        const supplemental_url_response = await discover.downloadLink(
          supplemental_file_path
        )
        let supplemental_url = supplemental_url_response.data
        if (process.env.portal_api === 'http://localhost:8000') {
          supplemental_url = `${process.env.portal_api}/s3-resource/${supplemental_file_path}`
        }     
        supplemental_data.push({
          url: supplemental_url
        })
      }
      return {
        source_url,
        metadata,
        supplemental_data
      }
    } 

    


  },

  data: () => {
    return {
      tabs: [
        {
          label: 'Plot Viewer',
          type: 'plot'
        }
      ],
      activeTab: 'plot',
      layout: {
        height: 667
      }
    }
  },
  computed: {
    /**
     * Get the file name from the query parameter.
     * @returns String
     */
    fileName: function() {
      return this.$route.query.id
    },

    /**
     * Get the dataset id from the query parameter.
     * @returns Number
     */
    datasetId: function() {
      return this.$route.query.dataset_id
    },

    /**
     * Get the version number from the query parameter.
     * @returns Number
     */
    versionNumber: function() {
      return this.$route.query.dataset_version
    },

    plotType: function() {
      return this.metadata.attrs.style
    }
  }
}
</script>

<style scoped lang="scss">
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
.file-detail__column {
  flex: 1;
}
</style>
<style lang="scss">
.plotvuer-container {
  margin-top: 1.5rem;
  height: 90vh;
  max-width: calc(100% - 48px);
  @import '~@abi-software/plotvuer/dist/plotvuer';
}
</style>
