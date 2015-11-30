import meta from './form-textarea.json'
import template from './form-textarea.html'
import snippet from './snippet.html'
import formTextarea from 'src/components/form-textarea'
import demo from 'vuestrap-docs/src/components/demo'
import {states} from 'utils'

export default {
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      model: '',
      state: 'default',
      states: states,
    }
  },
  components: {
    'form-textarea': formTextarea,
    'docs-demo': demo,
  },
}
