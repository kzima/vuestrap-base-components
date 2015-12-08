import meta from './nav.json'
import template from './nav.html'
import snippet from './snippet.html'
import navigation from 'src/components/nav'
import demo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/nav',
    name: 'nav',
    title: 'Nav',
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
    'navigation': navigation,
    'docs-demo': demo,
  },
}
