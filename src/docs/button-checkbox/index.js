import meta from './button-checkbox.json'
import template from './button-checkbox.html'
import snippet from './snippet.html'
import buttonCheckbox from 'src/components/button-checkbox'
import demo from 'vuestrap-docs/src/components/demo'
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
      model: ['second'],
      list: [
        {
          text: 'First',
          value: 'first',
          checked: false,
        }, {
          text: 'Second',
          value: 'second',
          checked: false,
        }, {
          text: 'Third',
          value: 'third',
          checked: false,
        },
      ],
      size: 'md',
      sizes: sizes,
      variant: 'primary',
      variants: variants,
    }
  },
  components: {
    'button-checkbox': buttonCheckbox,
    'docs-demo': demo,
  },
}
