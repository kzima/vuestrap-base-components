import meta from './dropdown.json'
import template from './dropdown.html'
import snippet from './snippet.html'
import vsDropdown from 'src/components/dropdown'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {sizes, variants} from 'src/utils'

export default {
  route: {
    url: '/dropdown',
    name: 'dropdown',
    title: 'Dropdown',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      arrow: true,
      caret: true,
      dropup: false,
      size: 'md',
      sizes: sizes,
      variant: 'primary',
      variants: variants,
    }
  },
  components: {
    vsDropdown,
    docsDemo,
  },
}
