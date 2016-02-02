// import dependencies
import template from './navbar-toggler.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    targetElement() {
      const noHashTarget = this.target.replace(/^#/, '')
      return document.getElementById(noHashTarget)
    }
  },
  props: {
    target: {
      type: String,
      required: true,
      validator(value) {
        // Cannot allow [attr] selectors, or .class selectors.
        return !value.match(/^[\[.]/)
      }
    }
  },
  data() {
    isTransitioning: false
  },
  methods: {
    targetElementExpanded() {
      return this.targetElement.classList.contains('in')
    },
    toggleCollapsible() {
      if (!this.targetElement) {
        return
      }

      if (this.targetElementExpanded()) {
        this.hideCollapsible()
      } else {
        this.showCollapsible()
      }
    },
    showCollapsible() {
      if (this.targetElementExpanded() || this.isTransitioning) {
        return
      }

      this.targetElement.classList.remove('collapse')
      this.targetElement.classList.add('collapsing')

      // TODO: Make this detect dimension.
      this.targetElement.style.height = 0

      this.isTransitioning = true

      this.targetElement.style.height = `${this.targetElement.scrollHeight}px`

      setTimeout(() => {
        this.targetElement.classList.remove('collapsing')
        this.targetElement.classList.add('collapse')
        this.targetElement.classList.add('in')

        this.targetElement.style.height = ''

        this.isTransitioning = false
      }, 600) // TRANSITION_DURATION
    },
    hideCollapsible() {
      if (!this.targetElementExpanded() || this.isTransitioning) {
        return
      }

      this.targetElement.style.height = `${this.targetElement.offsetHeight}px`

      // Force a reflow.
      ; () => {
        return this.targetElement.offsetHeight
      }()

      this.targetElement.classList.add('collapsing')
      this.targetElement.classList.remove('collapse')
      this.targetElement.classList.remove('in')

      this.isTransitioning = true

      this.targetElement.style.height = 0

      setTimeout(() => {
        this.isTransitioning = false
        this.targetElement.classList.remove('collapsing')
        this.targetElement.classList.add('collapse')
      }, 600) // TRANSITION_DURATION
    }
  }
}
