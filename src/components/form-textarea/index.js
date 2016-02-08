// import dependencies
import {uniqueId} from '../../utils/helpers.js'
import template from './form-textarea.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    inputState() {
      return !this.state || this.state === `default` ? `` : `has-${this.state}`
    },
  },
  props: {
    model: {
      twoWay: true,
      required: true
    },
    id: {
      type: String,
      default: uniqueId
    },
    label: {
      type: String,
      default: false
    },
    description: {
      type: String,
      default: false
    },
    state: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 3
    }
  }
}
