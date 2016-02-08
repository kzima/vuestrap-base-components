// import dependencies
import template from './progress.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
  	progressVariant() {
      return !this.variant || this.variant === `default` ? `progress-primary` : `progress-${this.variant}`
    },
  },
  props: {
    animated: {
      type: Boolean,
      default: false,
    },
  	max: {
  		type: Number,
      default: 100,
  	},
    striped: {
      type: Boolean,
      default: false,
    },
    value: {
    	type: Number,
    	default: 0,
    },
    variant: {
      type: String,
      default: 'default',
    },
  },
  ready() {
    this._progress = this.$els.progress
    this._progressBar = this.$els.progressbar
    this._progressBar.style.width = this.value + '%'
    this._progress.setAttribute('value',  this.value)
  },
  watch: {
    value(val) {
      this._progress.setAttribute('value', val)
      this._progressBar.style.width = this.value + '%'
    }
  }
}
