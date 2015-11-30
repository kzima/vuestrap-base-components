// import dependencies
import 'vuestrap/components/forms'
import template from './form-radio.html'

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
      type: String,
      twoWay: true,
      required: true
    },
    name: {
      type: String,
      default: 'options'
    },
    list: {
      type: Array,
      default: [],
      required: true
    },
    custom: {
      type: Boolean,
      default: true
    },
    vertical: {
      type: Boolean,
      default: false
    },
    state: {
      type: String,
      default: 'default'
    },
  },
  watch: {
    model: {
      handler() {
        // dispatch an event
        this.$dispatch('changed::form-radio', this.model)
      },
      deep: true,
    }
  }
}
