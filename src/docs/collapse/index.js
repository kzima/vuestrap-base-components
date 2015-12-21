import meta from './collapse.json'
import template from './collapse.html'
import snippet from './snippet.html'
import {collapse as vsCollapse, collapseToggle as vsCollapseToggle} from 'src/components/collapse'
import docsDemo from 'vuestrap-docs/src/components/demo'

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
    vsCollapse,
    vsCollapseToggle,
    docsDemo,
  },
}
