import marked from 'marked'
import youtubeEmbeddedSrc from '../youtube-embedded-src'

/**
 * Modify the link renderer to add `target="blank"`
 * https://github.com/markedjs/marked/pull/1371#issuecomment-434320596
 */
const renderer = new marked.Renderer()
const linkRenderer = renderer.link
const tableRenderer = renderer.table

export const isAnchor = str => {
  return /(?:^|\s)(#[^ ]+)/i.test(str)
}

/**
 * Compute if the link is an external link
 * @param {String} str
 * @returns {Boolean}
 */
export const isInternalLink = str => {
  return isAnchor(str)
    ? true
    : str.includes(process.env.ROOT_URL) || str.startsWith('/')
}

renderer.link = function(href, title, text) {
  const html = linkRenderer.call(renderer, href, title, text)
  const isInternal = isInternalLink(href)

  return isInternal
    ? html
    : html.replace(/^<a /, '<a target="_blank" rel="nofollow" ')
}

renderer.table = function(header, body) {
  const html = tableRenderer.call(renderer, header, body)

  return `<div class="markdown-table-wrap">${html}</div>`
}

renderer.oldImage = renderer.image

renderer.image = function(href, title, text) {
  const videos = ['webm', 'mp4', 'mov']
  const filetype = href.split('.').pop()
  if (videos.indexOf(filetype) > -1) {
    // for further reading on fluid sizing of vidoes https://css-tricks.com/fluid-width-video/
    return `<div style="position:relative;padding-bottom:56.25%;height:0;">
      <video alt="${text}" controls><source src="${href}" type="video/${filetype}"></video>
    </div>`
  } else if (href.includes('youtube.com') || href.includes('youtu.be')) {
    // Idea for rendering youtube comes from: https://gist.github.com/Snugug/9203fd0dc5e00d8ce799
    return renderYoutube(href, title)
  } else {
    return renderer.oldImage(href, title, text)
  }
}

marked.setOptions({
  sanitize: true,
  renderer
})

let renderYoutube = function(href, title) {
  // for further reading on fluid sizing of videos: https://css-tricks.com/fluid-width-video/
  // Note that content div has '::v-deep video' and '::v-deep iframe' for setting the css of those elements
  return `<div style="position:relative;padding-bottom:56.25%;height:0;">
    <iframe
      src="${youtubeEmbeddedSrc(href)}"
      frameBorder="0"
      scrolling="no"
      title="${title}"
      allowFullScreen="true"
      allowtransparency="true"
    >
    </iframe>
  </div>`
}

export default {
  methods: {
    /**
     * Parse markdown
     * @param {String} markdown
     * @returns {HTML}
     */
    parseMarkdown: function(markdown = '') {
      return marked(markdown)
    }
  }
}
