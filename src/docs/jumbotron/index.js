import meta from './jumbotron.json'
import template from './jumbotron.html'
import snippet from './snippet.html'
import vsJumbotron from 'src/components/jumbotron'
import docsDemo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/jumbotron',
    name: 'jumbotron',
    title: 'Jumbotron',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
    }
  },
  components: {
    vsJumbotron,
    docsDemo,
  },
}
