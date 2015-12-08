import meta from './button-group.json'
import template from './button-group.html'
import snippet from './snippet.html'
import buttonGroup from 'src/components/button-group'
import demo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/button-group',
    name: 'button-group',
    title: 'Button Group',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
    }
  },
  components: {
    'button-group': buttonGroup,
    'docs-demo': demo,
  },
}
