import meta from './button-radio.json'
import template from './button-radio.html'
import snippet from './snippet.html'
import buttonRadio from 'src/components/button-radio'
import demo from 'vuestrap-docs/src/components/demo'
import {sizes, variants} from 'utils'

export default {
  route: {
    url: '/button-radio',
    name: 'button-radio',
    title: 'Button Radio',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      model: 'second',
      list: [{
          text: 'First',
          value: 'first',
        }, {
          text: 'Second',
          value: 'second',
        }, {
          text: 'Third',
          value: 'third',
        },
      ],
      size: 'md',
      sizes: sizes,
      variant: 'primary',
      variants: variants,
    }
  },
  components: {
    'button-radio': buttonRadio,
    'docs-demo': demo,
  },
}
