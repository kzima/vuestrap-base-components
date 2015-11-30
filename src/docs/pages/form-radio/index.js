import meta from './form-radio.json'
import template from './form-radio.html'
import snippet from './snippet.html'
import formRadio from 'src/components/form-radio'
import demo from 'vuestrap-docs/src/components/demo'
import {states} from 'utils'

export default {
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      model: 'second',
      list: [
        {
          name: 'First',
          value: 'first',
        }, {
          name: 'Second',
          value: 'second',
        }, {
          name: 'Third (disabled)',
          value: 'third',
          disabled: true,
        },
      ],
      vertical: true,
      custom: true,
      state: 'default',
      states: states,
    }
  },
  components: {
    'form-radio': formRadio,
    'docs-demo': demo,
  },
}
