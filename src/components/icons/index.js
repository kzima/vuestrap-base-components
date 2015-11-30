// import dependencies
import 'vuestrap/components/icons'
import template from './icons.html'

// export component object
export default {
  template: template,
    replace: true,
    computed: {
      iconsSize() {
        return !this.size ? `icons-sm` : `icons-${this.size}`
      },
      iconsAlign() {
        return !this.align ? `` : `icons-${this.align}`
      },
      iconsVariant() {
        return !this.variant ? `` : `icons-${this.variant}`
      },
      iconsBackground() {
        let bg = this.background.split('-')
        bg = (bg[1]) ? bg[1] : 'fill'
        return !this.background ? `` : `icons-bg-${bg}`
      },
    },
    props: {
      name: {
        type: String
      },
      background: {
        type: String,
        default: '',
      },
      align: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'sm'
      },
      text: {
        type: String,
        default: ''
      },
      variant: {
        type: String,
        default: 'standard'
      },
      path: {
        type: String,
        default() {
          return 'node_modules/vuestrap/components/icons/sprite.svg'
        }
      }
    }
}
