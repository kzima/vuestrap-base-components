import meta from './carousel.json'
import template from './carousel.html'
import snippet from './snippet.html'
import {carousel, slide} from 'src/components/carousel'
import demo from 'vuestrap-docs/src/components/demo'
import {variants} from 'utils'

export default {
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      controls: true,
      indicators: true,
    }
  },
  components: {
    'slide': slide,
    'carousel': carousel,
    'docs-demo': demo,
  },
}
