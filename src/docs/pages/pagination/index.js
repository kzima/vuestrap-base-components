import meta from './pagination.json'
import template from './pagination.html'
import snippet from './snippet.html'
import pagination from 'src/components/pagination'
import demo from 'vuestrap-docs/src/components/demo'
import {sizes, variants} from 'utils'

export default {
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      vertical: false,
      size: 'md',
      sizes: sizes,
      variant: 'primary',
      variants: variants,
      totalRows: 100,
      currentPage: 1,
      perPage: 10,
    }
  },
  components: {
    'pagination': pagination,
    'docs-demo': demo,
  },
}
