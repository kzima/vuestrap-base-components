import meta from './labels.json'
import template from './labels.html'
import snippet from './snippet.html'
import badge from 'src/components/badge'
import demo from 'vuestrap-docs/src/components/demo'
import {variants} from 'utils'

export default {
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      variant: 'primary',
      variants: variants,
      type: 'default',
      types: [{text: 'default', value: 'default'}, {text: 'pill', value: 'pill'}],
    }
  },
  components: {
    'badge': badge,
    'docs-demo': demo,
  },
}
