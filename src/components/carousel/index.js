/**
 * Carousel Notes
 * - Ie9 does not support transitions and might require javascript fallbacks. B4 deliberately dropped support for this.
 * - It is not accessible.
 *
 * How it works:
 * - active element applies the transition to the slide but not triggers it
 * - we need to use 'right' and 'left' classes to trigger animation
 * - 'next' and 'prev' class makes the incoming slide positioned absolute, so it can follow outgoing slide
 *
 * The slide right to left we have to:
 * - add class 'active', 'next', and right to the next slide
 * - add class 'left' on the current slide same time as remove the 'right' class on the incoming one
 * - remove all classes and only leave 'active' on the incoming slide
 *
 */

// import dependencies
import 'vuestrap/components/carousel'
import template from './carousel.html'
import {csstransitions} from 'utils'

// this is directly linked to the bootstrap animation timing in _carusel.scss
// for browsers that do not support transitions like IE9 just change slide immediately
const TRANSITION_DURATION = csstransitions() ? 600 : 0

// when next is set, we want to move from right to left
// when previous is set, we want to move from left to right
const DIRECTION = {
  rtl: {
    outgoing: 'left',
    incoming: 'right',
    overlay: 'next',
  },
  ltr: {
    outgoing: 'right',
    incoming: 'left',
    overlay: 'prev',
  }
}

// export carosuel object
export const carousel = {
  template: template,
  replace: true,
  computed: {

  },
  data() {
    return {
      index: 0,
      slidesCount: 0,
      animating: false,
      slides: [],
      direction: DIRECTION.rtl,
    }
  },
  props: {
    interval: {
      type: Number,
      default: 5000
    },
    indicators: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    // previous slide
    prev() {
      if (this.animating) return
      this.index--
      if (this.index < 0) {
        this.index = this.slidesCount
      }
    },
    // next slide
    next() {
      if (this.animating) return
      this.index++
      if (this.index > this.slidesCount) {
        this.index = 0
      }
    },
    // on slide change
    changeSlide(index) {
      this.index = index
    },
    // pause auto rotation
    pause() {
      if (this.interval === 0 || typeof this.interval === 'undefined') return
      clearInterval(this._intervalId)
    },
    // start auto rotate slides
    start() {
      if (this.interval === 0 || typeof this.interval === 'undefined') return
      this._intervalId = setInterval(() => {
        this.next()
      }, this.interval)
    }
  },
  ready() {
    // get all slides
    this._items = this.$el.querySelectorAll('.carousel-item')
    this.slidesCount = this._items.length - 1
    this.slides = Array.apply(null, {length: this._items.length}).map(Number.call, Number)

    // set first slide as active
    this._items[0].classList.add('active')

    // auto rotate slides
    this.start()
  },
  watch: {
    index(val, oldVal) {
      this.animating = true
      this.direction = DIRECTION.rtl

      // when previous is pressed we want to move from left to right
      if (val < oldVal) {
       this.direction = DIRECTION.ltr
      }

      // lets animate
      // prepare next slide to animate (position it on the opposite side of the direction as a starting point)
      this._items[val].classList.add(this.direction.incoming, this.direction.overlay)
      // reflow
      this._items[val].offsetWidth
      // add class active
      this._items[val].classList.add('active')
      // trigger animation on outgoing and incoming slide
      this._items[oldVal].classList.add(this.direction.outgoing)
      this._items[val].classList.remove(this.direction.incoming)
      // wait for animation to finish and cleanup classes
      setTimeout(() => {
        this._items[oldVal].classList.remove(this.direction.outgoing, 'active')
        this._items[val].classList.remove(this.direction.overlay)
        this.animating = false
        // trigger an event
        this.$dispatch('slid::carousel', val)
      }, TRANSITION_DURATION)
    }
  }
}

// export slide object
export const slide = {
  template: '<div class="carousel-item"><slot></slot></div>',
  replace: true,
}

