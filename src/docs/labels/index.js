import meta from './labels.json'
import template from './labels.html'
import snippet from './snippet.html'
import vsBadge from 'src/components/badge'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {variants} from 'utils'

export default {
  route: {
    url: '/labels',
    name: 'labels',
    title: 'Labels',
  },
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
    vsBadge,
    docsDemo,
  },
}
