import meta from './form-input.json'
import template from './form-input.html'
import snippet from './snippet.html'
import formInput from 'src/components/form-input'
import demo from 'vuestrap-docs/src/components/demo'
import {sizes, states} from 'utils'

export default {
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      model: "",
      custom: true,
      vertical: true,
      size: 'md',
      sizes: sizes,
      state: 'success',
      states: states,
      stateIcon: true,
    }
  },
  components: {
    'form-input': formInput,
    'docs-demo': demo,
  },
}
