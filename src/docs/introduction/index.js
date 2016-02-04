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
			componentName: 'alert',
			componentNameSurfixed: 'vs-alert',
			componentNameCamelCase: 'vsAlert',
		}
	},
  template: template,
}
