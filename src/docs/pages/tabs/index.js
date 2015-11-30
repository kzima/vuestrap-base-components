import meta from './tabs.json'
import template from './tabs.html'
import snippet from './snippet.html'
import {tab, tabs} from 'src/components/tabs'
import demo from 'vuestrap-docs/src/components/demo'
import {sizes} from 'utils'

export default {
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      fade: true,
      size: 'md',
      sizes: sizes,
    }
  },
  components: {
    'tab': tab,
    'tabs': tabs,
    'docs-demo': demo,
  },
}
