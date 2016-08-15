import meta from './tags.json'
import template from './tags.html'
import snippet from './snippet.html'
import vsBadge from 'src/components/badge'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {variants} from 'src/utils'

export default {
  route: {
    url: '/tags',
    name: 'tags',
    title: 'Tags',
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
