import meta from './list-group.json'
import template from './list-group.html'
import snippet from './snippet.html'
import listGroup from 'src/components/list-group'
import badge from 'src/components/labels'
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
    'list-group': listGroup,
    'badge': badge,
    'docs-demo': demo,
  },
}
