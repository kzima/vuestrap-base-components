// import dependencies
import template from './breadcrumb.html'
import {changeLocation} from '../../utils/helpers.js'

// export component object
export default {
  template: template,
  replace: true,
  props: {
    list: {
      type: Array,
      default: [],
      required: true
    },
  },
  methods: {
    changeLocation: changeLocation
  },
}
