import template from './list-group.html'

// export component object
export default {
  template: template,
  replace: true,
  props: {
    flush: {
      type: Boolean,
      default: false,
    },
  },
}
