import meta from './progress.json'
import template from './progress.html'
import snippet from './snippet.html'
import progress from 'src/components/progress'
import demo from 'vuestrap-docs/src/components/demo'
import {variants} from 'utils'

export default {
  route: {
    url: '/progress',
    name: 'progress',
    title: 'Progress',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      value: 25,
      animated: true,
      striped: true,
      variant: 'primary',
      variants: variants,
    }
  },
  components: {
    'progress': progress,
    'docs-demo': demo,
  },
}
