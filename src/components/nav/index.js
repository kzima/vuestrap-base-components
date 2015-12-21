// import dependencies
import 'vuestrap/components/nav'
import './_nav-override.scss'
import template from './nav.html'

// export component object
export const nav = {
  template: template,
  replace: true,
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
  },
}

// export slide object
export const navItem = {
  template: '<li class="nav-item"><a href="{{href}}" class="nav-link {{active ? \'active\' : \'\'}} {{disabled ? \'disabled\' : \'\'}}"><slot></slot></a></li>',
  replace: true,
  props: {
    href: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  }
}
