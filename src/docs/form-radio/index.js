import meta from './form-radio.json'
import template from './form-radio.html'
import snippet from './snippet.html'
import vsFormRadio from 'src/components/form-radio'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {states} from 'src/utils'

export default {
  route: {
    url: '/form-radio',
    name: 'form-radio',
    title: 'Form radio',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      model: {
        name: 'Second',
        value: 'second',
      },
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
    vsFormRadio,
    docsDemo,
  },
}
