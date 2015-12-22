// import dependencies
import 'src/components/custom-forms'
import template from './form-radio.html'

// export component object
export default {
  template: template,
  replace: true,
  data() {
    return {
      selection: '',
    }
  },
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
    returnObject: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    selection: {
      handler() {
        // set the model based on selection
        if (this.returnObject) {
          this.list.forEach((item) => {
            if (item.value === this.selection) {
              this.model = item
            }
          })
        } else {
          this.model = this.selection
        }
        // dispatch an event
        this.$dispatch('changed::button-radio', this.model)
      },
      deep: true,
    }
  },
  ready() {
    // handle initial selection
    this.selection = this.model.value
  }
}
