import meta from './tables.json'
import template from './tables.html'
import snippet from './snippet.html'
import tables from 'src/components/tables'
import demo from 'vuestrap-docs/src/components/demo'

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
    }
  },
  components: {
    'tables': tables,
    'docs-demo': demo,
  },
}
