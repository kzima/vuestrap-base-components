import meta from './form-select.json'
import template from './form-select.html'
import snippet from './snippet.html'
import formSelect from 'src/components/form-select'
import demo from 'vuestrap-docs/src/components/demo'
import {sizes, states} from 'utils'

export default {
  route: {
    url: '/form-select',
    name: 'form-select',
    title: 'Form select',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      model: 'male',
      options: [
        {
          text: 'Male',
          value: 'male',
        }, {
          text: 'Female',
          value: 'female',
        },
      ],
      size: 'md',
      sizes: sizes,
      state: 'default',
      states: states,
    }
  },
  components: {
    'form-select': formSelect,
    'docs-demo': demo,
  },
}
