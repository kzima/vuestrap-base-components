import meta from './dropdown.json'
import template from './dropdown.html'
import snippet from './snippet.html'
import dropdown from 'src/components/dropdown'
import demo from 'vuestrap-docs/src/components/demo'
import {sizes, variants} from 'utils'

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
      caret: true,
      size: 'md',
      sizes: sizes,
      variant: 'primary',
      variants: variants,
    }
  },
  components: {
    'dropdown': dropdown,
    'docs-demo': demo,
  },
}
