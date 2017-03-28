// import dependencies
import template from './tabs.html'
import {csstransitions} from '../../utils/helpers.js'

// this is directly linked to the bootstrap animation timing in _tabs.scss
// for browsers that do not support transitions like IE9 just change slide immediately
const TRANSITION_DURATION = csstransitions() ? 150 : 0

// export component object
export const tabs = {
  template: template,
  replace: true,
  data() {
    return {
      items: []
    }
  },
  computed: {
    btnSize() {
      return !this.size || this.size === 'default' ? '' : `btn-${this.size}`
    },
  },
  props: {
    fade: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  methods: {

    /**
     * get an index of an active tab
     * @return {Number}
     */
    getActive() {
      let active = -1
      this.items.forEach((item, index) => {
        if (item.active) {
          active = index
        }
      })
      return active
    },

    /**
     * set active tab on the items collection and the child 'tab' component
     */
    setActive(index) {
      // ignore disabled
      if (this.items[index].disabled) return

      // deactivate previous active tab
      const activeTab = this.getActive()
      if (activeTab !== -1) {
        // setting animate to false will trigger fade out effect
        this.items[activeTab].active = false
        this.$children[activeTab].$set('animate', false)
        this.$children[activeTab].$set('active', false)
      }

      // set new active tab and animate (if fade flag is set to true)
      this.$children[index].$set('active', true)
      this._tabAnimation = setTimeout(() => {
        // setting animate to true will trigger fade in effect
        this.items[index].active = true
        this.$children[index].$set('animate', true)
        this.$dispatch('changed::tab', this.items[index].id)
      }, this.fade ? TRANSITION_DURATION : 0)
    },
  },
  ready() {
    // if no active tab, set the first one by default
    if (this.getActive() === -1) {
      this.setActive(0)
    }
  },
  destroyed() {
    clearTimeout(this._tabAnimation)
  }
}

// export tab object
export const tab = {
  template: '<div role="tabpanel" class="tab-pane" v-bind:class="{active: active, disabled: disabled, fade: fade, in: animate}"><slot></slot></div>',
  replace: true,
  data() {
    return {
      fade: this.$parent.fade,
      animate: false,
    }
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  ready() {
    const items = this.$parent.$get('items')
    items.push({id: this.id, title: this.title, active: this.active, disabled: this.disabled})
  },
  watch: {
    title(n) {
      const items = this.$parent.$get('items')

      const index = _.indexOf(_.map(items, item => item.id), this.id)

      items[index].title = n
    }
  }
}
