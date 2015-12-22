// import dependencies
import 'vuestrap/components/dropdown'
import template from './dropdown.html'
import './dropdown-override.scss'

// export component object
export default {
  template: template,
  replace: true,
  data() {
    return {
      show: false
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
    icon: {
      type: String,
      default: ''
    },
    caret: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    variant: {
      type: String,
      default: 'default'
    },
    dropup: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    toggle(e) {
      // hide an alert
      this.show = !this.show
      // Dispatch an event from the current vm that propagates all the way up to its $root
      if (this.show) {
        this.$dispatch('shown::dropdown')
        e.stopPropagation()
      } else {
        this.$dispatch('hidden::dropdown')
      }
    }
  },
  events: {
    'hide::dropdown'() {
      this.show = false
    }
  },
}
