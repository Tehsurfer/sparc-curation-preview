<template>
  <facet-menu
    :selected-facets="selectedFacet"
    :visible-facet-categories="visibleCategories"
    @deselect-facet="deselectFacet"
    @deselect-all-facets="deselectAllFacets"
  >
    <facet-radio-button-category
      :label="'News/Event Type'"
      :options="options"
      :default-selected-option="selectedNewsAndEventTypeLabel"
      @selection-changed="selectedTypeChanged"
    />
    <facet-radio-button-date-category
      ref="publicationCategory"
      :label="'Publication Date'"
      :enabled="selectedNewsAndEventTypeLabel === options[0].label"
      :default-selected-option="publicationDateOption"
      :default-selected-month="publicationMonth"
      :default-selected-year="publicationYear"
      @selected-date-option-changed="publicationDateOptionChanged"
      @selected-month-changed="publicationMonthChanged"
      @selected-year-changed="publicationYearChanged"
    />
    <facet-radio-button-date-category
      ref="eventCategory"
      :label="'Event Date'"
      :enabled="selectedNewsAndEventTypeLabel === options[1].label"
      :default-selected-option="eventDateOption"
      :default-selected-month="eventMonth"
      :default-selected-year="eventYear"
      @selected-date-option-changed="eventDateOptionChanged"
      @selected-month-changed="eventMonthChanged"
      @selected-year-changed="eventYearChanged"
    />
  </facet-menu>
</template>

<script>
import FacetMenu from './FacetMenu.vue'
import FacetRadioButtonCategory from './FacetRadioButtonCategory.vue'
import FacetRadioButtonDateCategory from './FacetRadioButtonDateCategory.vue'

const options = [
  {
    label: 'news',
    id: 'news',
    sortOrder: '-fields.publishedDate'
  },
  {
    label: 'events',
    id: 'event',
    sortOrder: '-fields.startDate'
  },
  {
    label: 'community spotlight',
    id: 'successStoryDisplay',
    sortOrder: '-fields.storyTitle'
  }
]

const visibleCategories = ['newsAndEvents']

export default {
  name: 'NewsAndEventsFacetMenu',

  components: {
    FacetMenu,
    FacetRadioButtonCategory,
    FacetRadioButtonDateCategory
  },

  props: {},

  data() {
    return {
      options: options,
      newsAndEventsType: options[0].id,
      publicationDateOption: 'show all',
      eventDateOption: 'show all',
      publicationMonth: 'Mar',
      publicationYear: 2020,
      eventMonth: 'Mar',
      eventYear: 2020,
      visibleCategories: visibleCategories,
    }
  },

  computed: {
    selectedNewsAndEventTypeLabel: function() {
      var selectedOption = this.options.find(
        option => this.newsAndEventsType === option.id
      )
      return selectedOption === undefined
        ? options[0].label
        : selectedOption.label
    },
    selectedFacet: function() {
      var facet = {
        label: '',
        id: '',
        facetPropPath: 'newsAndEvents'
      }
      if (this.newsAndEventsType === this.options[0].id) {
        if (this.publicationDateOption === 'show all') {
          return []
        }
        facet.label = `${this.publicationDateOption} ${this.publicationMonth} ${this.publicationYear}`
      } else if (this.newsAndEventsType === options[1].id) {
        if (this.eventDateOption === 'show all') {
          return []
        }
        facet.label = `${this.eventDateOption} ${this.eventMonth} ${this.eventYear}`
      }
      else if (this.newsAndEventsType === options[2].id) {
        return []
      }
      facet.id = this.newsAndEventsType
      return [facet]
    }
  },

  watch: {},

  mounted() {
    if (this.$route.query.newsAndEventsType) {
      this.newsAndEventsType = this.$route.query.newsAndEventsType
    }
    if (this.$route.query.publicationDateOption) {
      this.publicationDateOption = this.$route.query.publicationDateOption
    }
    if (this.$route.query.publicationMonth) {
      this.publicationMonth = this.$route.query.publicationMonth
    }
    if (this.$route.query.publicationYear) {
      this.publicationYear = Number(this.$route.query.publicationYear)
    }
    if (this.$route.query.eventDateOption) {
      this.eventDateOption = this.$route.query.eventDateOption
    }
    if (this.$route.query.eventMonth) {
      this.eventMonth = this.$route.query.eventMonth
    }
    if (this.$route.query.eventYear) {
      this.eventYear = Number(this.$route.query.eventYear)
    }
  },

  methods: {
    selectedTypeChanged(newValue) {
      if (this.newsAndEventsType === newValue) {
        return
      }
      this.newsAndEventsType = newValue
      this.$router.replace(
        {
          query: { ...this.$route.query, newsAndEventsType: newValue }
        },
        () => {
          this.$emit('news-and-events-selections-changed')
        }
      )
    },
    publicationDateOptionChanged(newValue) {
      if (this.publicationDateOption === newValue) {
        return
      }
      this.publicationDateOption = newValue
      this.$router.replace(
        {
          query: { ...this.$route.query, publicationDateOption: newValue }
        },
        () => {
          this.$emit('news-and-events-selections-changed')
        }
      )
    },
    publicationMonthChanged(newValue) {
      if (this.publicationMonth === newValue) {
        return
      }
      this.publicationMonth = newValue
      this.$router.replace(
        {
          query: { ...this.$route.query, publicationMonth: newValue }
        },
        () => {
          this.$emit('news-and-events-selections-changed')
        }
      )
    },
    publicationYearChanged(newValue) {
      if (this.publicationYear === newValue) {
        return
      }
      this.publicationYear = newValue
      this.$router.replace(
        {
          query: { ...this.$route.query, publicationYear: newValue }
        },
        () => {
          this.$emit('news-and-events-selections-changed')
        }
      )
    },
    eventDateOptionChanged(newValue) {
      if (this.eventDateOption === newValue) {
        return
      }
      this.eventDateOption = newValue
      this.$router.replace(
        {
          query: { ...this.$route.query, eventDateOption: newValue }
        },
        () => {
          this.$emit('news-and-events-selections-changed')
        }
      )
    },
    eventMonthChanged(newValue) {
      if (this.eventMonth === newValue) {
        return
      }
      this.eventMonth = newValue
      this.$router.replace(
        {
          query: { ...this.$route.query, eventMonth: newValue }
        },
        () => {
          this.$emit('news-and-events-selections-changed')
        }
      )
    },
    eventYearChanged(newValue) {
      if (this.eventYear === newValue) {
        return
      }
      this.eventYear = newValue
      this.$router.replace(
        {
          query: { ...this.$route.query, eventYear: newValue }
        },
        () => {
          this.$emit('news-and-events-selections-changed')
        }
      )
    },
    getPublishedLessThanDate() {
      return this.selectedNewsAndEventTypeLabel === this.options[0].label
        ? this.$refs.publicationCategory.getLessThanDate()
        : undefined
    },
    getEventsLessThanDate() {
      return this.selectedNewsAndEventTypeLabel === this.options[1].label
        ? this.$refs.eventCategory.getLessThanDate()
        : undefined
    },
    getPublishedGreaterThanOrEqualToDate() {
      return this.selectedNewsAndEventTypeLabel === this.options[0].label
        ? this.$refs.publicationCategory.getGreaterThanOrEqualToDate()
        : undefined
    },
    getEventsGreaterThanOrEqualToDate() {
      return this.selectedNewsAndEventTypeLabel === this.options[1].label
        ? this.$refs.eventCategory.getGreaterThanOrEqualToDate()
        : undefined
    },
    getSelectedType() {
      return this.newsAndEventsType
    },
    getSortOrder() {
      return options.find(option => {
        return option.id === this.newsAndEventsType
      }).sortOrder
    },
    deselectAllFacets() {
      this.$router.replace(
        {
          query: {
            ...this.$route.query,
            publicationDateOption: undefined,
            eventDateOption: undefined
          }
        },
        () => {
          this.$emit('tool-and-resources-selections-changed')
          this.$refs.publicationCategory.reset()
          this.$refs.eventCategory.reset()
        }
      )
    },
    deselectFacet() {
      if (this.newsAndEventsType === this.options[0].id) {
        this.$refs.publicationCategory.reset()
      } else if (this.newsAndEventsType === options[1].id) {
        this.$refs.eventCategory.reset()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/_variables.scss';
.white-background {
  background-color: white;
  border: 0.1rem solid #e4e7ed;
}

h2 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
}

.title {
  margin-bottom: 0;
  padding: 0.5rem 1rem;
  font-weight: 300;
}

hr {
  border: none;
  border-bottom: 1px solid #dbdfe6;
  margin: 0;
}
</style>
