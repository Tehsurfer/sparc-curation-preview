<template>
  <div :class="{ disabled: disabled }">
    <hr />
    <h2 class="title">
      <span>
        {{ label }}
        <el-tooltip placement="top-start" transition="none">
          <div slot="content" v-html="tooltip">{{tooltip}}</div>
          <svg-icon v-show="showHelpIcon" class="purple-fill" icon="icon-help" width="26" height="26" />
        </el-tooltip>
      </span>
      <svg-icon
        v-show="showCollapsibleArrow"
        class="ml-8 icon-arrow"
        name="icon-arrow"
        :dir="collapsibleArrowDir"
        height="15"
        width="15"
        @click="onArrowClicked"
      />
    </h2>
    <div v-show="showContent" class="light-gray-background">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FacetLabel',

  components: {},

  props: {
    label: {
      type: String,
      default: ''
    },
    collapseByDefault: {
      type: Boolean,
      default: false
    },
    showCollapsibleArrow: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showHelpIcon: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      collapsed: this.collapseByDefault
    }
  },
  computed: {
    collapsibleArrowDir: function() {
      return this.showContent ? 'down' : 'up'
    },
    showContent: function() {
      return !(this.collapsed || this.disabled)
    }
  },
  methods: {
    onArrowClicked() {
      if (!this.disabled) {
        this.collapsed = !this.collapsed
      }
      return this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/_variables.scss';

.light-gray-background {
  background-color: rgb(250, 251, 252);
}

h2 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
}

.title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  padding: 0.5rem 1rem;
  font-weight: 500;
  align-items: center;
  text-transform: uppercase;
  cursor: default;
  svg {
    cursor: pointer
  }
}

.purple-fill {
  fill: $median;
}

hr {
  border: none;
  border-bottom: 1px solid #dbdfe6;
  margin: 0;
}

.disabled {
  opacity: 0.5;
  background-color: #fafbfc;
}
</style>
