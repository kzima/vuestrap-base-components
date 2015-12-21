import meta from './button-checkbox.json'
import template from './button-checkbox.html'
import snippet from './snippet.html'
import vsButtonCheckbox from 'src/components/button-checkbox'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {sizes, variants} from 'utils'

export default {
  route: {
    url: '/button-checkbox',
    name: 'button-checkbox',
    title: 'Button Checkbox',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      model: [{text: 'Second', value: 'second'}],
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
      size: 'md',
      sizes: sizes,
      variant: 'primary',
      variants: variants,
    }
  },
  components: {
    vsButtonCheckbox,
    docsDemo,
  },
}
