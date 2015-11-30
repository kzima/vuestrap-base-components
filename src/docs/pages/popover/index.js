import meta from './popover.json'
import template from './popover.html'
import snippet from './snippet.html'
import popover from 'src/components/popover'
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
    'popover': popover,
    'docs-demo': demo,
  },
}
