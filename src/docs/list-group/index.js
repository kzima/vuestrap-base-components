import meta from './list-group.json'
import template from './list-group.html'
import snippet from './snippet.html'
import {listGroup as vsListGroup, listGroupItem as vsListGroupItem} from 'src/components/list-group'
import vsBadge from 'src/components/labels'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {states} from 'utils'

// remove error from the list and later replace with danger
states.splice(2, 1)

export default {
  route: {
    url: '/list-group',
    name: 'list-group',
    title: 'List group',
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      state: 'success',
      states: states.concat([{text: 'danger', value: 'danger'}, {text: 'info', value: 'info'}]),
      type: 'default',
      types: [{text: 'default', value: 'default'}, {text: 'pill', value: 'pill'}],
    }
  },
  components: {
    vsListGroup,
    vsListGroupItem,
    vsBadge,
    docsDemo,
  },
}
