import template from './introduction.html'

export default {
	data() {
		return {
			pkg: this.$parent.pkg,
			sampleComponentName: this.$parent.demoPages[0].name,
		}
	},
  template: template,
}
