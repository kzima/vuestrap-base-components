import meta from './images.json'
import template from './images.html'
import snippet from './snippet.html'
import images from 'src/components/images'
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
    'images': images,
    'docs-demo': demo,
  },
}
