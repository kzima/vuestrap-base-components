// import dependencies
import 'vuestrap/components/progress'
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
}
