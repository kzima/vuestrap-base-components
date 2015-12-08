/**
 * IMPORT GLOBAL STYLING
 */
// import normalize, grid, utilities and
import 'vuestrap/core'

// import external dependencies
// docs component handles routing and demo pages
import docsPages from 'vuestrap-docs/src/components/docs'

// import utils
import {getRoutes} from 'vuestrap-docs/utils'

// import demo pages compatibile with docs component
import docsRoutes from 'src/docs'


// get list of the route objects
const routes = getRoutes(docsRoutes)

// create components from routes and attach it to the docs.components object
routes.forEach((route) => {
	docsPages.components[route.id] = route.component
})

// start docs instance
window.docs = new Vue({
	el: '#docs',
	data: {
		routes: routes,
		pageTitle: 'Vuestrap Docs',
	},
	components: {
		docsPages,
	},
})

