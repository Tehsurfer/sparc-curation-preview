<template>
  <el-dialog
    :show-close="false"
    :visible="open"
    :before-close="beforeClose"
    @close="closeHandler"
    @opened="openedHandler"
  >
    <bf-dialog-header slot="title" title="Select a service" />
    <dialog-body>
      <el-select
        v-model="selectedViewer"
        value-key="title"
        placeholder="Select a service..."
      >
        <el-option
          v-for="viewer in viewersForFile"
          :key="viewer.title"
          :value="viewer"
          :label="viewer.title"
        />
      </el-select>
      <bf-button
        :disabled="selectedViewer === ''"
        :processing="isFetching"
        @click="openFile"
      >
        Open in oSPARC
      </bf-button>
    </dialog-body>
  </el-dialog>
</template>

<script>
import { compose, split, last, defaultTo, pathOr } from 'ramda'
import BfDialogHeader from '@/components/bf-dialog-header/BfDialogHeader.vue'
import DialogBody from '@/components/dialog-body/DialogBody.vue'
import BfButton from '@/components/shared/BfButton/BfButton.vue'
import { extractExtension } from '~/pages/data/utils'
import { contentTypes } from '@/components/FilesTable/FilesTable.vue'

export default {
  name: 'OsparcFileViewersDialog',
  components: { BfButton, BfDialogHeader, DialogBody },
  props: {
    selectedFile: {
      type: Object,
      default: () => {}
    },
    viewers: {
      type: Object,
      default: () => {}
    },
    open: {
      type: Boolean
    },
    onClose: {
      type: Function
    }
  },
  data() {
    return {
      selectedViewer: '',
      isFetching: false
    }
  },
  computed: {
    viewersForFile: function() {
      if (this.selectedFile && this.viewers) {
        return this.viewers[this.fileExtension]
      }
      return []
    },
    fileExtension: function() {
      return extractExtension(this.selectedFile.path)
    }
  },
  methods: {
    openFile() {
      const fileSize = this.selectedFile.size
      const filePath = compose(
        last,
        defaultTo([]),
        split('s3://pennsieve-prod-discover-publish-use1/'),
        pathOr('', ['uri'])
      )(this.selectedFile)

      this.isFetching = true

      const requestUrl = new URL(process.env.portal_api + '/download')
      requestUrl.searchParams.append('key', filePath)
      const fileType = this.selectedFile.fileType.toLowerCase()
      const contentType = contentTypes[fileType]
      if (contentType) {
        requestUrl.searchParams.append('contentType', contentType)
      }

      this.$axios
        .$get(requestUrl)
        .then(fileUrl => {
          const redirectionUrl = new URL(this.selectedViewer['view_url'])

          redirectionUrl.searchParams.append('download_link', fileUrl)
          redirectionUrl.searchParams.append('file_size', fileSize)

          window.open(redirectionUrl, '_blank')

          this.selectedViewer = ''
          this.closeHandler()
        })
        .finally(() => {
          this.isFetching = false
        })
    },
    beforeClose(done) {
      this.selectedViewer = ''
      done()
    },
    openedHandler() {
      this.selectedViewer = this.viewersForFile[0]
    },
    closeHandler() {
      this.$emit('close')
    }
  }
}
</script>
