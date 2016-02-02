// import dependencies
import 'vuestrap/components/modal'
import {csstransitions} from '../../utils/helpers.js'
import template from './modal.html'

// this is directly linked to the bootstrap animation timing in _modal.scss
// // for browsers that do not support transitions like IE9 just change slide immediately
const TRANSITION_DURATION = csstransitions() ? 300 : 0

// export component object
export default {
  template: template,
  replace: true,
  data() {
    return {
      animateBackdrop: false,
      animateModal: false,
    }
  },
  props: {
    id: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'md'
    },
    fade: {
      type: Boolean,
      default: true
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    show() {
      this.$el.style.display = 'block'
      const _this = this
      // wait for the display block, and then add class "in" class on the modal
      this._modalAnimation = setTimeout(() => {
        _this.animateBackdrop = true
        this._modalAnimation = setTimeout(() => {
          _this.animateModal = true
          _this.$dispatch('shown::modal')
        }, (_this.fade) ? TRANSITION_DURATION : 0)
      }, 0)
    },
    hide() {
      const _this = this
      // first animate modal out
      this.animateModal = false
      this._modalAnimation = setTimeout(() => {
        // wait for animation to complete and then hide the backdrop
        _this.animateBackdrop = false
        this._modalAnimation = setTimeout(() => {
          // no hide the modal wrapper
          _this.$el.style.display = 'none'
          _this.$dispatch('hidden::modal')
        }, (_this.fade) ? TRANSITION_DURATION : 0)
      }, (_this.fade) ? TRANSITION_DURATION : 0)
    },
    onClickOut(e) {
      // if backdrop clicked, hide modal
      if (this.closeOnBackdrop && e.target.id && e.target.id === this.id) {
        this.hide()
      }
    },
  },
  events: {
    // control modal from outside via events
    'show::modal'(id) {
      if (id === this.id) {
        this.show()
      }
    },
    'hide::modal'(id) {
      if (id === this.id) {
        this.hide()
      }
    }
  },
  ready() {
    // support for esc key press
    document.addEventListener('keydown', (e) => {
      const key = e.which || e.keyCode
      if (key === 27) { // 27 is esc
        this.hide()
      }
    })
  },
  destroyed() {
    clearTimeout(this._modalAnimation)
  },
}
