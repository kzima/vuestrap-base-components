// import dependencies
import 'vuestrap/components/nav'
import './_nav-override.scss'
import template from './nav.html'

// export component object
export default {
  template: template,
  replace: true,
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
  },
}
