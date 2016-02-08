import template from './buttons.html'
import './buttons-override.scss'
import {changeLocation} from '../../utils/helpers.js'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    btnBlock() {
      return this.block ? `btn-block` : ``
    },
    btnVariant() {
      return !this.variant || this.variant === `default` ? `btn-secondary` : `btn-${this.variant}`
    },
    btnSize() {
      return !this.size || this.size === `default` ? `` : `btn-${this.size}`
    },
    btnDisabled() {
      return this.disabled ? 'disabled' : ''
    }
  },
  props: {
  	block: {
    	type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inactive: {
    	type: Boolean,
      default: false
    },
    link: {
    	type: String,
      default: ''
    },
    role: {
    	type: String,
      default: ''
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
  methods: {
    changeLocation: changeLocation
  },
}
