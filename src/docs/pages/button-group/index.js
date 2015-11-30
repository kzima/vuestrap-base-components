import meta from './button-group.json'
import template from './button-group.html'
import snippet from './snippet.html'
import buttonGroup from 'src/components/button-group'
import demo from 'vuestrap-docs/src/components/demo'

export default {
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
