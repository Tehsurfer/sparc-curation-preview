<template>
  <div class="learn-more-card">
    <h3>
      <nuxt-link class="about-link" :to="aboutLink">
        {{ aboutDetailsItem.fields ? aboutDetailsItem.fields.title : '' }}
      </nuxt-link>
    </h3>
    <p
      v-html="aboutDetailsItem.fields ? aboutDetailsItem.fields.summary : ''"
    />
  </div>
</template>

<script>
import { pathOr } from 'ramda'

export default {
  name: 'LearnMoreCard',

  props: {
    aboutDetailsItem: {
      type: Object,
      default: () => {
        return {
          sys: {},
          fields: {}
        }
      }
    },
    parentPath: {
      type: String,
      default: ''
    }
  },

  computed: {
    /**
     * Compute the link to the about details article
     * This will use the slug if available, and fallback
     * to the ID of the entry if not
     * @returns {Object}
     */
    aboutLink() {
      const sysId = pathOr('', ['sys', 'id'], this.aboutDetailsItem)
      const aboutDetailsId = pathOr(
        sysId,
        ['fields', 'slug'],
        this.aboutDetailsItem
      )
      const aboutDetailsLevel = pathOr(
        '',
        ['fields', 'level'],
        this.aboutDetailsItem
      )
      const route =
        aboutDetailsLevel === '3rd Level Details'
          ? `about-${this.parentPath}-aboutDetailsId`
          : 'about-aboutDetailsId'
      return { name: route, params: { aboutDetailsId } }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';
.learn-more-card {
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: .5rem;
  }
}
.small-title {
  h3 {
    font-size: 1em !important;
  }
}
.about-link {
  color: $median;
}
.about-link:not(:hover) {
  text-decoration: none;
}
</style>
