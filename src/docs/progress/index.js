import meta from './progress.json'
import template from './progress.html'
import snippet from './snippet.html'
import vsProgress from 'src/components/progress'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {variants} from 'src/utils'

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
    vsProgress,
    docsDemo,
  },
}
