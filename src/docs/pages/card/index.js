import meta from './card.json'
import template from './card.html'
import snippet from './snippet.html'
import card from 'src/components/card'
import demo from 'vuestrap-docs/src/components/demo'
import {variants} from 'utils'

export default {
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      align: 'left',
      aligns: [{text: 'left', value: 'left'}, {text: 'center', value: 'center'}, {text: 'right', value: 'right'}],
      type: 'default',
      types: [{text: 'default', value: 'default'}, {text: 'inverse', value: 'inverse'}, {text: 'image-overlay', value: 'image-overlay'}],
      variant: 'default',
      variants: variants,
    }
  },
  components: {
    'card': card,
    'docs-demo': demo,
  },
}
