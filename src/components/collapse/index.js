// import dependencies
import template from './collapse.html'
import {csstransitions} from '../../../utils/helpers.js'

// import polyfill for IE9
import '../../../utils/ie9_polyfill.js'

// for browsers that do not support transitions like IE9 just change immediately
const TRANSITION_DURATION = csstransitions() ? 350 : 0

// export component object
export const collapse = {
  template: template,
  replace: true,
  props: {
    id: {
      type: String,
      default: '',
    },
    group: {
      type: String,
      default: '',
    }
  },
  methods: {
    show() {
      this.$el.classList.remove('collapse')
      const height = this.$el.scrollHeight
      this.$el.classList.add('collapsing')
      this.$el.offsetWidth
      this.$el.style.height = height + 'px'
      setTimeout(()=> {
        this.$el.classList.remove('collapsing')
        this.$el.classList.add('collapse', 'in')
      }, TRANSITION_DURATION)
    },
    hide() {
      this.$el.classList.remove('collapse')
      this.$el.classList.remove('in')
      this.$el.classList.add('collapsing')
      this.$el.offsetWidth
      this.$el.style.height = '0px'
      setTimeout(()=> {
        this.$el.classList.remove('collapsing')
        this.$el.classList.add('collapse')
      }, TRANSITION_DURATION)
    },
  },
  events: {
    'toggled::collapse'(data) {
      if (data.id === this.id || data.group === this.group) {
        if ((this.$el.className + ' ').indexOf(' in ') > -1) {
          this.hide()
        } else {
          this.show()
        }
      }
    },
    'toggled::accordion'(data) {
      // if id and group id is provided it means it is an accordion and takes priority over all
      if (data.id && data.group && data.group === this.group) {
        // for current element
        if (data.id === this.id) {
          // collapse if selected item is already opened
          if ((this.$el.className + ' ').indexOf(' in ') > -1) {
            this.hide()
          } else {
            this.show()
          }
        } else {
          // ignore if non-selected item is already closed
          if ((this.$el.className + ' ').indexOf(' in ') === -1) return

           // close all items in the group, and open the one selected
          this.hide()
        }
      }
    },
  },
}

// export component object
export const collapseToggle = {
  template: '<span v-on:click.stop.prevent="toggle($event)"><slot></slot></span>',
  replace: true,
  computed: {

  },
  props: {
    id: {
      type: String,
      default: ''
    },
    group: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggle() {
      // if both attributes missing, ignore
      if (!this.id && !this.group) return

      // broadcast accordion toggle if both id and group are set otherwise broadcast collapse
      // we also use dispatch to tell other components about the change
      if (this.id && this.group) {
        this.$root.$broadcast('toggled::accordion', {id: this.id, group: this.group})
        this.$root.$dispatch('toggled::accordion', {id: this.id, group: this.group})
      } else {
        this.$root.$broadcast('toggled::collapse', {id: this.id, group: this.group})
        this.$root.$dispatch('toggled::collapse', {id: this.id, group: this.group})
      }
    }
  },
}
