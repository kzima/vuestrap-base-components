// import dependencies
import 'vuestrap/components/button-group'
import template from './button-radio.html'

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
    btnVariant() {
      return !this.variant || this.variant === `default` ? `btn-secondary` : `btn-${this.variant}`
    },
    btnSize() {
      return !this.size || this.size === `default` ? `` : `btn-${this.size}`
    },
    btnActive() {
      return item.value
    },
  },
  props: {
    model: {
      required: true
    },
    list: {
      type: Array,
      default: [],
      required: true
    },
    size: {
      type: String,
      default: 'md'
    },
    variant: {
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
