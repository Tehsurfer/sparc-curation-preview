<template>
  <div class="white-background">
    <h2 class="title">
      Refine results
    </h2>
    <hr />
		<tags-container :selectedFacets="selectedFacets" @deselect-facet="deselectFacet" @deselect-all-facets="deselectAllFacets"/>
    <hr />
    <facet-menu ref="menu" :facets="facets" :defaultCheckedFacetIds="defaultCheckedFacetIds" :visibleFacets="visibleFacets" @selected-facets-changed="selectedFacetsChanged"/>
  </div>
</template>

<script>
import FacetMenu from '@/components/FacetMenu/FacetMenu.vue'
import TagsContainer from '@/components/FacetMenu/TagsContainer.vue'
export default {
  name: 'DatasetFacetMenu',

  components: { FacetMenu, TagsContainer },

  props: {
    facets: {
      type: Array,
      default: () => []
    },
    visibleFacets: {
      type: Object,
      default: () => {}
    },
    defaultCheckedFacetIds: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      selectedFacets: [],
    }
  },

	mounted() {
		// Work around el-tree component not firing onFacetChecked event when setting default checked keys.
		// When user navigates between tabs, we need to force selectedFacets to update so that the tags get shown
		if (this.$refs.menu.facets.length > 0) {
			this.$refs.menu.onFacetChecked()
		}
	},

  methods: {
    selectedFacetsChanged: function(newSelectedFacets) {
			this.selectedFacets = newSelectedFacets
      this.$emit('selected-facets-changed', newSelectedFacets)
  	},
		deselectAllFacets() {
      this.$refs.menu.deselectAllFacets()
    },
    deselectFacet(id) {
      this.$refs.menu.deselectFacet(id)
    }
	}
}
</script>

<style lang="scss" scoped>
@import '../../assets/_variables.scss';
	.white-background {
		background-color: white;
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 500;
		line-height: 1.2;
	}

	.title {
		margin-bottom: 0;
		padding: 0.5rem 1rem;
	}

	hr {
		border: none;
		border-bottom: 1px solid #dbdfe6;
		margin: 0;
	}
  
</style>
