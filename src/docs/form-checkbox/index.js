import meta from './form-checkbox.json'
import template from './form-checkbox.html'
import snippet from './snippet.html'
import vsFormCheckbox from 'src/components/form-checkbox'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {states} from 'src/utils'

export default {
  route: {
    url: '/form-checkbox',
    name: 'form-checkbox',
    title: 'Form checkbox',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      model: [{
        text: 'Second',
        value: 'second'
      }],
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
          value: 'third',
          disabled: true,
        },
      ],
      custom: true,
      vertical: true,
      state: 'default',
      states: states,
    }
  },
  components: {
    vsFormCheckbox,
    docsDemo,
  },
}
