// import normalize, grid, utilities and Vue
import 'vuestrap/core'

// import pages
import introductionPage from 'src/docs/pages/introduction'
import accordion from 'src/docs/pages/accordion'
import alert from 'src/docs/pages/alert'
import breadcrumb from 'src/docs/pages/breadcrumb'
import buttonGroup from 'src/docs/pages/button-group'
import buttonCheckbox from 'src/docs/pages/button-checkbox'
import buttonRadio from 'src/docs/pages/button-radio'
import buttons from 'src/docs/pages/buttons'
import card from 'src/docs/pages/card'
import carousel from 'src/docs/pages/carousel'
import collapse from 'src/docs/pages/collapse'
import dropdown from 'src/docs/pages/dropdown'
import dropdownSelect from 'src/docs/pages/dropdown-select'
import formCheckbox from 'src/docs/pages/form-checkbox'
import formRadio from 'src/docs/pages/form-radio'
import formInput from 'src/docs/pages/form-input'
import formSelect from 'src/docs/pages/form-select'
import formTextarea from 'src/docs/pages/form-textarea'
import images from 'src/docs/pages/images'
import jumbotron from 'src/docs/pages/jumbotron'
import labels from 'src/docs/pages/labels'
import listGroup from 'src/docs/pages/list-group'
import media from 'src/docs/pages/media'
import modal from 'src/docs/pages/modal'
import navigation from 'src/docs/pages/nav'
import navbar from 'src/docs/pages/navbar'
import pager from 'src/docs/pages/pager'
import pagination from 'src/docs/pages/pagination'
import popover from 'src/docs/pages/popover'
import progress from 'src/docs/pages/progress'
import tables from 'src/docs/pages/tables'
import tabs from 'src/docs/pages/tabs'
import tooltip from 'src/docs/pages/tooltip'

// import component dependencies
import search from 'vuestrap-docs/src/components/search'

// import vuestrap dependencies
import 'vuestrap/components/nav'
import 'vuestrap/components/navbar'
import 'vuestrap/components/buttons'
import 'vuestrap/components/list-group'
import 'vuestrap/components/jumbotron'
import 'vuestrap/components/tables'

// import package.json meta data
import pkg from 'package.json'

// import route util
import {router, handleRoute} from 'utils'

// components
// list of all dependencies
const components = {
	'docs-search': search
}

// component pages
const pages = {
	intro: introductionPage,
	accordion: accordion,
	alert: alert,
	breadcrumb: breadcrumb,
	'button-group': buttonGroup,
	'button-checkbox': buttonCheckbox,
	'button-radio': buttonRadio,
	buttons: buttons,
	card: card,
	carousel: carousel,
	collapse: collapse,
	dropdown: dropdown,
	'dropdown-select': dropdownSelect,
	'form-checkbox': formCheckbox,
	'form-radio': formRadio,
	'form-input': formInput,
	'form-select': formSelect,
	'form-textarea': formTextarea,
	'images': images,
	'jumbotron': jumbotron,
	'labels': labels,
	'list-group': listGroup,
	'media': media,
	'modal': modal,
	'navigation': navigation,
	'navbar': navbar,
	'pager': pager,
	'pagination': pagination,
	'popover': popover,
	'progress': progress,
	'tables': tables,
	'tabs': tabs,
	'tooltip': tooltip,
}

// list of routes
const routes = []
const demoPages = []

// list of all comps used in the searchbar
for (const key in pages) {
	if (pages.hasOwnProperty(key)) {
		if (key !== 'intro') {
	    const meta = pages[key].data().meta
	    const route = {
				name: meta.name,
				title: meta.title,
				pageTitle: 'Vuestrap Base Components - ' + meta.title,
				route: '/' + meta.name,
				url: '#/' + meta.name
			}

	    // add route for demo page
			routes.push(route)

			// add to demoPages Collection
			demoPages.push(route)
		} else {
			// add special route for intro
			routes.push({
				name: 'intro',
				title: 'Introduction',
				pageTitle: 'Vuestrap Base Components',
				route: '/',
				url: '#/'
			})
		}
		// add to components
		components[key] = pages[key]
	}
}

// start docs instance
window.docs = new Vue({
	el: '#docs',
	data: {
		pageTitle: 'Vuestrap Base Components',
		pkg: pkg,
		demoPages: demoPages,
		currentView: '',
	},
	methods: {
    closeDropdownsAndPopovers() {
      this.$broadcast('hide::popover')
      this.$broadcast('hide::tooltip')
      this.$broadcast('hide::dropdown')
      this.console = ''
    },
  },
	components: components,
	ready() {
		// handle routes for other demo pages
		routes.forEach((route) => {
      handleRoute(route, () => {
      	this.$set('currentView', route.name)
        this.$set('pageTitle', route.pageTitle)
      })
    })

		// init router
    router.init('/')
	}
})
