import meta from './form-textarea.json'
import template from './form-textarea.html'
import snippet from './snippet.html'
import vsFormTextarea from 'src/components/form-textarea'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {states} from 'src/utils'

export default {
  route: {
    url: '/form-textarea',
    name: 'form-textarea',
    title: 'Form textarea',
  },
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
    vsFormTextarea,
    docsDemo,
  },
}
