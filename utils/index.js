/**
 * Routes helper
 */
import director from 'director'
export const router = new director.Router
export const handleRoute = (route, cb) => {
    // listen to the route changes and set currentView object for the current route
    router.on(route.route, () => {
        window.scrollTo(0, 0)
        cb()
    })
}

/**
 * Some common stuff used in demo pages
 */
export const positions = [
  {text: 'left', value: 'left'},
  {text: 'right', value: 'right'},
]
export const states = [
  {text: 'default', value: 'default'},
  {text: 'success', value: 'success'},
  {text: 'error', value: 'error'},
  {text: 'warning', value: 'warning'},
]
export const variants = [
  {
    text: 'default',
    value: 'default'
  }, {
    text: 'primary',
    value: 'primary'
  }, {
    text: 'success',
    value: 'success'
  }, {
    text: 'info',
    value: 'info'
  }, {
    text: 'warning',
    value: 'warning'
  }, {
    text: 'danger',
    value: 'danger'
  }
]
export const sizes = [
  {
    text: 'sm',
    value: 'sm'
  }, {
    text: 'md',
    value: 'md'
  }, {
    text: 'lg',
    value: 'lg'
  }
]
