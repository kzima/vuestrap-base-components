// import dependencies
import template from './media.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    align() {
      return this.position.split(' ')
    },
    mediaVerticalAlign() {
      const verticalAlign = this.align[0]
      return `media-${verticalAlign}`
    },
    mediaHorizontalAlign() {
      const horizontalAlign = this.align[1]
      return `media-${horizontalAlign}`
    },
  },
  props: {
  	position: {
      type: String,
      default: 'top left'
    },
  },
}
