<template>
  <div v-loading="isLoadingOrganFacetIds" class="featured-data container">
    <h2>Find Data by Category</h2>
    <div class="data-wrap">
      <nuxt-link
        v-for="item in featuredData"
        :key="item.sys.id"
        class="featured-data__item"
        :to="`${getLink(item.fields)}`"
      >
        <img
          :src="imageUrl(item)"
          :alt="`Icon for ${item.fields.label} category`"
        />
        <p class="mb-0 mt-8">
          {{ item.fields.label }}
        </p>
      </nuxt-link>
    </div>

    <nuxt-link :to="{ name: 'data', query: { type: 'dataset' } }">
      <el-button class="btn-view-more mt-32">
        View more
      </el-button>
    </nuxt-link>
  </div>
</template>

<script>
import createAlgoliaClient from '@/plugins/algolia.js'
import { getAlgoliaFacets, facetPropPathMapping } from '../../pages/data/utils'
import { isEmpty, pathOr } from 'ramda'

const algoliaClient = createAlgoliaClient();
const algoliaIndex = algoliaClient.initIndex(process.env.ALGOLIA_INDEX)
export default {
  name: 'FeaturedData',

  props: {
    featuredData: {
      type: Array,
      default: () => []
    }
  },

  data: () => {
    return {
      organFacets: [],
      isLoadingOrganFacetIds: true
    }
  },

  created() {
    this.loadOrganFacets()
  },

  methods: {
    /**
     * Get image URL for the featured data
     * @param {Object} item
     * @returns {String}
     */
    imageUrl: function(item) {
      return pathOr('', ['fields', 'image', 'fields', 'file', 'url'], item)
    },
    loadOrganFacets: function() {
      this.isLoadingOrganFacetIds = true;
      getAlgoliaFacets(algoliaIndex, facetPropPathMapping).then(data => {
        this.organFacets = data.filter(facet => facet.key === 'anatomy.organ.name')[0].children
      }).finally(() => {
        this.isLoadingOrganFacetIds = false
      })
    },
    getLink(contentfulFields) {
      if (isEmpty(this.organFacetIds)) {
        return contentfulFields.link
      }
      var organ = this.organFacets.find(organ => organ.label.toLowerCase() === contentfulFields.label.toLowerCase())
      return organ === undefined ? contentfulFields.link : `${contentfulFields.link}&selectedFacetIds=${organ.id}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/_variables.scss';

.featured-data {
  text-align: center;
  padding: 3em 0 4em;
}
h2 {
  margin-bottom: 1.5625em;
}
.data-wrap {
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    padding-left: 0.4375rem;
    padding-right: 0.4375rem;
  }
}
.featured-data__item {
  color: #000;
  margin: 1rem 2rem;
  text-decoration: none;
  width: 70px;
  @media (min-width: 768px) {
    width: 128px;
    margin: 1.5625em 2rem;
  }
  &:hover,
  &:focus {
    opacity: 0.9;
  }
  img {
    background: #fff;
    border-radius: 50%;
    display: block;
    height: 70px;
    margin-bottom: 8px;
    width: 100%;
    border: solid 1px $lightblue;
    @media (min-width: 768px) {
      height: 100%;
    }
  }
  p {
    font-size: 1em;
    font-weight: 700;
    color: $navy;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
