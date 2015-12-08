import meta from './accordion.json'
import template from './accordion.html'
import snippet from './snippet.html'
import {collapse, collapseToggle} from 'src/components/collapse'
import demo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/accordion',
    name: 'accordion',
    title: 'Accordion',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
    }
  },
  components: {
    'collapse': collapse,
    'collapseToggle': collapseToggle,
    'docs-demo': demo,
  },
}
