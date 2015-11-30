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
  methods: {
    checked(index) {
      if (!this.list) return false
      return this.model.indexOf(this.list[index].value) !== -1
    }
  },
  props: {
    list: {
      type: Array,
      default: [],
      twoWay: true,
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
        this.$dispatch('changed::button-checkbox', this.model)
      },
      deep: true,
    }
  },
  ready() {
    // handle initial selection
    this.list.forEach((item) => {
      if (this.model.indexOf(item.value) !== -1) {
        item.checked = true
      }
    })
  }
}
