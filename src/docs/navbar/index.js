import meta from './navbar.json'
import template from './navbar.html'
import snippet from './snippet.html'
import vsNavbar from 'src/components/navbar'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {variants} from 'src/utils'

export default {
  route: {
    url: '/navbar',
    name: 'navbar',
    title: 'Navbar',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      fixed: '',
      fixeds: [{text: 'default', value: ''}, {text: 'top', value: 'top'}, {text: 'bottom', value: 'bottom'}],
      type: 'default',
      types: [{text: 'default', value: 'default'}, {text: 'dark', value: 'dark'}],
      variant: 'default',
      variants: variants.concat([{text: 'inverse', value: 'inverse'}]),
    }
  },
  components: {
    vsNavbar,
    docsDemo,
  },
  watch: {
    type(val) {
      if (val === 'dark' && this.variant !== 'primary' && this.variant !== 'inverse') {
        this.variant = 'inverse'
      }
    },
    variant(val) {
      if (val === 'primary' || val === 'inverse') {
        this.type = 'dark'
      }
    }
  }
}
