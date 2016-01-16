import meta from './modal.json'
import template from './modal.html'
import snippet from './snippet.html'
import vsModal from 'src/components/modal'
import vsButton from 'src/components/buttons'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {sizes} from 'src/utils'

export default {
  route: {
    url: '/modal',
    name: 'modal',
    title: 'Modal',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      size: 'md',
      sizes: sizes,
      fade: true,
    }
  },
  components: {
    vsButton,
    vsModal,
    docsDemo,
  },
}
