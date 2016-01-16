import meta from './button-group.json'
import template from './button-group.html'
import snippet from './snippet.html'
import vsButtonGroup from 'src/components/button-group'
import vsButton from 'src/components/buttons'
import docsDemo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/button-group',
    name: 'button-group',
    title: 'Button Group',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      vertical: false
    }
  },
  components: {
    vsButton,
    vsButtonGroup,
    docsDemo,
  },
}
