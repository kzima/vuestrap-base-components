import meta from './media.json'
import template from './media.html'
import snippet from './snippet.html'
import vsMedia from 'src/components/media'
import docsDemo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/media',
    name: 'media',
    title: 'Media',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      position: 'top left',
      positions: [
        {text: 'top left', value: 'top left'},
        {text: 'top right', value: 'top right'},
        {text: 'middle left', value: 'middle left'},
        {text: 'middle right', value: 'middle right'},
        {text: 'bottom left', value: 'bottom left'},
        {text: 'bottom right', value: 'bottom right'},
      ],
    }
  },
  components: {
    vsMedia,
    docsDemo,
  },
}
