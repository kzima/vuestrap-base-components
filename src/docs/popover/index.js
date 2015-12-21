import meta from './popover.json'
import template from './popover.html'
import snippet from './snippet.html'
import vsPopover from 'src/components/popover'
import docsDemo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/popover',
    name: 'popover',
    title: 'Popover',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
    }
  },
  components: {
    vsPopover,
    docsDemo,
  },
}
