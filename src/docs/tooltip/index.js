import meta from './tooltip.json'
import template from './tooltip.html'
import snippet from './snippet.html'
import vsTooltip from 'src/components/tooltip'
import docsDemo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/tooltip',
    name: 'tooltip',
    title: 'Tooltip',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
    }
  },
  components: {
    vsTooltip,
    docsDemo,
  },
}
