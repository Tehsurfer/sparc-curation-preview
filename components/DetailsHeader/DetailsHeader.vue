<template>
  <div class="details-header">
    <div class="details-header__page-route">
      <p>
        <nuxt-link
          :to="{
            name: breadcrumb.name,
            query: {
              type: breadcrumb.type
            }
          }"
        >
          {{ breadcrumb.parent }}
        </nuxt-link>
        > {{ formatBreadcrumb(title) }}
      </p>
    </div>
    <div class="details-header__container container">
      <div class="details-header__container--image">
        <slot name="banner image" />
      </div>
      <div class="details-header__container--content">
        <h3>
          {{ subtitle }}
        </h3>
        <h2>
          {{ formatTitle(title) }}
        </h2>
        <p>
          {{ formatDescription(description) }}
        </p>
        <slot name="meta content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsHeader',

  props: {
    breadcrumb: {
      type: Object,
      default: () => {}
    },
    subtitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },

  methods: {
    /**
     * Formats breadcrumb length
     * @param {String} breadcrumb
     */
    formatBreadcrumb: function(breadcrumb) {
      return breadcrumb.length > 32
        ? breadcrumb.substring(0, 32) + '...'
        : breadcrumb
    },

    /**
     * Formats title length
     * @param {String} title
     */
    formatTitle: function(title) {
      return title.length > 150 ? title.substring(0, 150) + '...' : title
    },

    /**
     * Formats description based on length
     * @param {String} description
     */
    formatDescription: function(description) {
      return description.length > 540
        ? description.substring(0, 540) + '...'
        : description
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/_variables.scss';
.details-header {
  &__page-route {
    background: $purple-gray;
    height: 2.5rem;
    margin-top: 0;
    p {
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      padding-left: 2rem;
      padding-top: 0.75rem;
      margin-top: 0;
      color: $midnight;
    }

    a {
      text-decoration: none;
      color: $midnight;
    }
  }
  &__container {
    display: flex;
    flex-direction: row;
    border: solid 1px $cloudy;
    padding: 1rem;
    padding-top: 0;
    background: white;
    margin-top: 1.25rem;
    &--image {
      margin-right: 1rem;
      margin-top: 2rem;
      .dataset-image {
        border: solid 1px $cloudy;
      }
    }
    &--content {
      padding-top: 1.53rem;
      h3 {
        text-transform: uppercase;
        font-weight: 500;
        line-height: 24px;
        font-size: 14px;
        color: $medium-gray;
      }
      h2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
      }
      p {
        font-size: 14px;
        font-weight: normal;
        line-height: 24px;
      }
    }
    &--content-meta {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }

    &--content-links {
      a {
        font-size: 12px;
        color: $median;
        font-weight: bold;
        line-height: 24px;
        margin-left: 1rem;
      }
      button {
        background: $median;
        height: 2.5rem;
        width: 12rem;
        border-radius: 4px;
        a {
          color: white;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          text-decoration: none;
          margin-left: 0;
        }
      }
    }
    .content-meta__item {
      margin-right: 5.3rem;
      h3 {
        color: black;
        margin-bottom: -4rem;
      }
      p {
        padding-top: 3rem;
        margin-top: 0.5rem;
      }
    }

    &--dataset-description {
      font-size: 14px !important;
      font-weight: normal;
      line-height: 24px !important;
      color: black;
      margin-bottom: 3rem;
    }

    .header-stats-section {
      display: flex;
      margin: 40px 0 0;
    }

    .header-stats-block {
      align-items: center;
      display: flex;
      font-size: 14px;
      font-weight: 500;
      margin-right: 12px;
      margin-bottom: 1rem;
      .svg-icon {
        margin-right: 3px;
      }
      a {
        &:focus {
          color: #1c46bd;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .details-header {
    margin: 0;
    margin-top: 1.5rem;
    &__container {
      flex-direction: column;
    }
  }
}
</style>