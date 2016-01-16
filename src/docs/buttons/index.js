import meta from './buttons.json'
import template from './buttons.html'
import snippet from './snippet.html'
import vsBtn from 'src/components/buttons'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {sizes, variants} from 'src/utils'

export default {
  route: {
    url: '/buttons',
    name: 'buttons',
    title: 'Buttons',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      size: 'md',
      sizes: sizes,
      variant: 'primary',
      variants: variants,
    }
  },
  components: {
    vsBtn,
    docsDemo,
  },
}

