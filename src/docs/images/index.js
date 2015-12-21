import 'src/components/images'
import meta from './images.json'
import template from './images.html'
import snippet from './snippet.html'
import docsDemo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/images',
    name: 'images',
    title: 'Images',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
    }
  },
  components: {
    docsDemo,
  },
}
