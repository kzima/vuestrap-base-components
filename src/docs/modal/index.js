import meta from './modal.json'
import template from './modal.html'
import snippet from './snippet.html'
import modal from 'src/components/modal'
import demo from 'vuestrap-docs/src/components/demo'
import {sizes} from 'utils'

export default {
  route: {
    url: '/modal',
    name: 'modal',
    title: 'Modal',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      size: 'md',
      sizes: sizes,
      fade: true,
    }
  },
  components: {
    'modal': modal,
    'docs-demo': demo,
  },
}
