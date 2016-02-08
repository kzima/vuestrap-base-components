// import dependencies
import './_nav-override.scss'
import template from './nav.html'
import {changeLocation} from '../../utils/helpers.js'

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
  template: '<li class="nav-item"><a href="#" v-on:click.stop.prevent="changeLocation($router, link)" class="nav-link {{active ? \'active\' : \'\'}} {{disabled ? \'disabled\' : \'\'}}"><slot></slot></a></li>',
  replace: true,
  props: {
    link: {
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
  },
  methods: {
    changeLocation: changeLocation
  },
}
