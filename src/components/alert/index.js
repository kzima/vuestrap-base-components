// import dependencies
import 'vuestrap/components/alert'
import template from './alert.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    alertState() {
      return !this.state || this.state === `default` ? `alert-success` : `alert-${this.state}`
    },
  },
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    },
    state: {
      type: String,
      default: 'success'
    },
    dismissible: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    dismiss: function dismiss() {
      // hide an alert
      this.show = false
        // Dispatch an event from the current vm that propagates all the way up to its $root
      this.$dispatch('dismissed::alert')
    },
  }
}
