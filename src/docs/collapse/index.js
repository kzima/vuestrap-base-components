import meta from './collapse.json'
import template from './collapse.html'
import snippet from './snippet.html'
import {collapse, collapseToggle} from 'src/components/collapse'
import demo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/collapse',
    name: 'collapse',
    title: 'Collapse',
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
