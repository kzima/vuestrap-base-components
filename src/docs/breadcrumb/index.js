import meta from './breadcrumb.json'
import template from './breadcrumb.html'
import snippet from './snippet.html'
import breadCrumb from 'src/components/breadcrumb'
import demo from 'vuestrap-docs/src/components/demo'

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
      list: [{text: 'Home', href: '#'}, {text: 'Library', active: true}],
    }
  },
  components: {
    'breadcrumb': breadCrumb,
    'docs-demo': demo,
  },
}
