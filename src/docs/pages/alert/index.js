import meta from './alert.json'
import template from './alert.html'
import snippet from './snippet.html'
import alert from 'src/components/alert'
import demo from 'vuestrap-docs/src/components/demo'

export default {
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      show: true,
      dismissible: true,
      message: '<strong>Note</strong> This is an html message',
      state: 'success',
      states: [
        {text: 'default', value: 'default'},
        {text: 'success', value: 'success'},
        {text: 'danger', value: 'danger'},
        {text: 'warning', value: 'warning'},
        {text: 'info', value: 'info'},
      ],
    }
  },
  components: {
    'alert': alert,
    'docs-demo': demo,
  },
}
