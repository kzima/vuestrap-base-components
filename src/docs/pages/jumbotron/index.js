import meta from './jumbotron.json'
import template from './jumbotron.html'
import snippet from './snippet.html'
import jumbotron from 'src/components/jumbotron'
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
    'jumbotron': jumbotron,
    'docs-demo': demo,
  },
}
