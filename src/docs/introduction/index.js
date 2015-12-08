import template from './introduction.html'
import 'vuestrap/components/jumbotron'

export default {
	route: {
		url: '/',
		name: 'introduction',
		title: 'Intoduction',
	},
	data() {
		return {
			pkg: this.$parent.pkg,
			componentNameCamelCase: 'alert',
			componentName: 'alert',
			componentNameSurfixed: 'vs-alert'
		}
	},
  template: template,
}
