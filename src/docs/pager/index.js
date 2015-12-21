import meta from './pager.json'
import template from './pager.html'
import snippet from './snippet.html'
import vsPager from 'src/components/pager'
import docsDemo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/pager',
    name: 'pager',
    title: 'Pager',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      vertical: false,
      type: 'default',
      types: [{text: 'default', value: 'default'}, {text: 'pills', value: 'pills'}],
    }
  },
  components: {
    vsPager,
    docsDemo,
  },
}
