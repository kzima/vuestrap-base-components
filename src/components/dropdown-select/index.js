// import dependencies
import 'vuestrap/components/dropdown'
import template from './dropdown-select.html'

// export component object
export default {
  template: template,
  replace: true,
  data() {
    return {
      show: false,
      selected: false,
    }
  },
  computed: {
    btnVariant() {
      return !this.variant || this.variant === `default` ? `btn-secondary` : `btn-${this.variant}`
    },
    btnSize() {
      return !this.size || this.size === `default` ? `` : `btn-${this.size}`
    },
    dropdownToggle() {
      return this.caret ? 'dropdown-toggle' : ''
    },
  },
  props: {
    model: {
      type: Object,
      default: false,
      required: true
    },
    list: {
      type: Array,
      default: [],
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    caret: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'left'
    },
    size: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'default'
    },
    defaultText: {
      type: String,
      default: 'Plase select one'
    },
  },
  methods: {
    toggle(e) {
      // hide an alert
      this.show = !this.show
      // Dispatch an event from the current vm that propagates all the way up to its $root
      if (this.show) {
        this.$dispatch('shown:dropdown')
        e.stopPropagation()
      } else {
        this.$dispatch('hidden::dropdown')
      }
    },
    select(item) {
      this.model = item
      this.show = false
      this.selected = true
      // Dispatch an event from the current vm that propagates all the way up to its $root
      this.$dispatch('selected::dropdown', item)
    }
  },
  events: {
    'hide::dropdown'() {
      this.show = false
    }
  },
  ready() {
    if (this.model) {
      this.selected = true
    }
  }
}
