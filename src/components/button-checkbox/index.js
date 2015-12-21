// import dependencies
import 'vuestrap/components/button-group'
import template from './button-checkbox.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    btnVariant() {
      return !this.variant || this.variant === `default` ? `btn-secondary` : `btn-${this.variant}`
    },
    btnSize() {
      return !this.size || this.size === `default` ? `` : `btn-${this.size}`
    },
  },
  props: {
    list: {
      type: Array,
      default: [],
      required: true
    },
    model: {
      type: Array,
      twoWay: true,
      default: [],
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
  methods: {
    checked(index) {
      if (!this.list) return false
      let result = false
      if (this.returnObject) {
        for (let i = 0; i < this.model.length; i++) {
          if (this.model[i].value === this.list[index].value) {
            result = true
          }
        }
      } else {
         result = this.model.indexOf(this.list[index].value) !== -1
      }
      return result
    }
  },
  watch: {
    list: {
      handler(val) {
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
