import meta from './tables.json'
import template from './tables.html'
import snippet from './snippet.html'
import vsTable from 'src/components/tables'
import docsDemo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/tables',
    name: 'tables',
    title: 'Tables',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      hover: false,
    }
  },
  components: {
    vsTable,
    docsDemo,
  },
}
