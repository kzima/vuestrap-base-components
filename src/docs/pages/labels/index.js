import meta from './labels.json'
import template from './labels.html'
import snippet from './snippet.html'
import labels from 'src/components/labels'
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
    'badge': labels,
    'docs-demo': demo,
  },
}
