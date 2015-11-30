// import dependencies
import 'vuestrap/components/labels'
import template from './labels.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    labelVariant() {
      return !this.variant || this.variant === `default` ? `label-default` : `label-${this.variant}`
    },
    labelType() {
      return !this.type ? `` : `label-${this.type}`
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
