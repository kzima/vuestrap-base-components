// import dependencies
import template from './button-group.html'

// export component object
export default {
  template: template,
  replace: true,
    props: {
        vertical: {
            type: Boolean,
            default: false
        },
    },
}
