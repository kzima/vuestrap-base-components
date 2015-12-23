// import dependencies
import '../custom-forms'
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
    returnObject: {
      type: Boolean,
      default: false
    },
	},
  watch: {
    list: {
      handler() {
        this.model = []
        this.list.forEach((item) => {
          if (item.checked) {
            if (this.returnObject) {
              this.model.push(item)
            } else {
              this.model.push(item.value)
            }
          }
        })
        // dispatch an event
        this.$dispatch('changed::button-checkbox', this.model)
      },
      deep: true,
    }
  },
  ready() {
    // handle initial selection
    this.list.forEach((item) => {
      if (this.returnObject) {
        this.model.forEach((modelItem) => {
          if (modelItem.value === item.value) {
            item.checked = true
          }
        })
      } else {
         if (this.model.indexOf(item.value) !== -1) {
          item.checked = true
        }
      }
    })
  }
}
