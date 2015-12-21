import meta from './accordion.json'
import template from './accordion.html'
import snippet from './snippet.html'
import {collapse as vsCollapse, collapseToggle as vsCollapseToggle} from 'src/components/collapse'
import docsDemo from 'vuestrap-docs/src/components/demo'

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
    vsCollapse,
    vsCollapseToggle,
    docsDemo,
  },
}
