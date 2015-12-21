// import dependencies
import 'vuestrap/components/list-group'
import template from './list-group.html'
import './list-group-override.scss'

// export component object
export const listGroup = {
  template: template,
  replace: true,
}

export const listGroupItem = {
  template: '<li class="list-group-item {{listState}} {{active ? \'active\' : \'\'}} {{disabled ? \'disabled\' : \'\'}}"><slot></slot></li>',
  computed: {
    listState() {
      return !this.state || this.state === `default` ? `` : `list-group-item-${this.state}`
    },
  },
  replace: true,
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    state: {
      type: String,
      default: 'default',
    },
  }
}
