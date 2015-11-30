import meta from './form-checkbox.json'
import template from './form-checkbox.html'
import snippet from './snippet.html'
import formCheckbox from 'src/components/form-checkbox'
import demo from 'vuestrap-docs/src/components/demo'
import {states} from 'utils'

export default {
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      model: ['second'],
      list: [{
          text: 'First',
          checked: false,
          value: 'first'
        }, {
          text: 'Second',
          checked: false,
          value: 'second'
        }, {
          text: 'Third',
          checked: false,
          value: 'third'
        },
      ],
      custom: true,
      vertical: true,
      state: 'default',
      states: states,
    }
  },
  components: {
    'form-checkbox': formCheckbox,
    'docs-demo': demo,
  },
}
