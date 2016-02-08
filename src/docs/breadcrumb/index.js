import meta from './breadcrumb.json'
import template from './breadcrumb.html'
import snippet from './snippet.html'
import vsBreadcrumb from 'src/components/breadcrumb'
import docsDemo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/breadcrumb',
    name: 'breadcrumb',
    title: 'Breadcrumb',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      list: [{text: 'Home', link: '#', active: true}, {text: 'Library', active: false}],
    }
  },
  components: {
    vsBreadcrumb,
    docsDemo,
  },
}
