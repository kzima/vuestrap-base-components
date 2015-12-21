import meta from './nav.json'
import template from './nav.html'
import snippet from './snippet.html'
import {nav as vsNav, navItem as vsNavItem} from 'src/components/nav'
import docsDemo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/navigation',
    name: 'navigation',
    title: 'Navigation',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      vertical: false,
      type: 'default',
      types: [{text: 'default', value: 'default'}, {text: 'pills', value: 'pills'}],
    }
  },
  components: {
    vsNav,
    vsNavItem,
    docsDemo,
  },
}
