// import dependencies
import template from './tags.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    labelVariant() {
      return !this.variant || this.variant === `default` ? `tag-default` : `tag-${this.variant}`
    },
    labelType() {
      return !this.type ? `` : `tag-${this.type}`
    }
  },
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: ''
    }
  }
}
