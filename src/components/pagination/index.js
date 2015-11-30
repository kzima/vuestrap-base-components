// import dependencies
import 'vuestrap/components/pagination'
import template from './pagination.html'

// export component object
export default {
  template: template,
  replace: true,
  data() {
    return {
      diff: 1,
      showPrev: false,
      showNext: false
    }
  },
  computed: {
    numberOfPages() {
      const result = Math.ceil(this.totalRows / this.perPage)
      return (result < 1) ? 1 : result
    },
    btnSize() {
      return !this.size || this.size === `default` ? `` : `btn-${this.size}`
    },
    pageLinks() {
      let result = this.limit
      if (this.currentPage > this.numberOfPages) {
        this.currentPage = 1
      }
      this.diff = 1
      this.showPrev = false
      this.showNext = false
      // if less pages than limit just show this pages
      if (this.numberOfPages <= this.limit) {
        return this.numberOfPages
      }
      // if at the beggining of the list or at the end show full number of pages within limit - 2
      // -2 is reserves space for two buttons: "..." and "first/last button"
      if (this.currentPage <= this.limit - 2) {
        this.diff = 1
        this.showNext = true
        result = this.limit - 2
      }
      // at the end of the range
      if (this.currentPage > this.numberOfPages - this.limit + 2) {
        this.diff = this.numberOfPages - this.limit + 3
        this.showPrev = true
        result = this.limit - 2
      }
      // if somehere in the middle show just limit - 4 links in the middle and one button on the left with "..." and on button on the right preceeded with "..."
      if (this.currentPage >= this.limit - 2 && this.currentPage <= this.numberOfPages - this.limit + 2) {
        this.diff = this.currentPage - 1
        this.showPrev = true
        this.showNext = true
        result = this.limit - 4
      }
      return result
    },
  },
  methods: {
    btnVariant(index) {
      return (index + this.diff === this.currentPage) ? `btn-${this.variant}` : `btn-secondary`
    },
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 7,
    },
    perPage: {
      type: Number,
      default: 20,
    },
    totalRows: {
      type: Number,
      default: 20,
    },
    size: {
      type: String,
      default: 'secondary',
    },
    variant: {
      type: String,
      default: '',
    },
  }
}
