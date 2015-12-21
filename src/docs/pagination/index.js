import meta from './pagination.json'
import template from './pagination.html'
import snippet from './snippet.html'
import vsPagination from 'src/components/pagination'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {sizes, variants} from 'utils'

export default {
  route: {
    url: '/pagination',
    name: 'pagination',
    title: 'Pagination',
  },
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
    vsPagination,
    docsDemo,
  },
}
