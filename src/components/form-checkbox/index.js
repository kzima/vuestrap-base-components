// import dependencies
import 'vuestrap/components/forms'
import template from './form-checkbox.html'

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
    list: {
      type: Array,
      twoWay: true,
      default: [],
      required: true
    },
    model: {
      type: Array,
      twoWay: true,
      default: []
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
    list: {
      handler() {
        this.model = []
        this.list.forEach((item) => {
          if (item.checked) {
            this.model.push(item.value)
          }
        })
        // dispatch an event
        this.$dispatch('changed::form-checkbox', this.model)
      },
      deep: true,
    },
  },
  ready() {
    // handle initial selection
    Vue.nextTick(() => {
      this.list.forEach((item) => {
        if (this.model.indexOf(item.value) !== -1) {
          item.checked = true
        }
      })
    })
  }
}
