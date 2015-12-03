/**
 * IMPORT GLOBAL STYLING
 */
// import normalize, grid, utilities and
import 'vuestrap/core'

/**
 * IMPORT EACH COMPONENT
 */
import accordion from 'src/components/collapse'
import alert from 'src/components/alert'
import breadcrumb from 'src/components/breadcrumb'
import buttonCheckbox from 'src/components/button-checkbox'
import buttonGroup from 'src/components/button-group'
import buttonRadio from 'src/components/button-radio'
import buttons from 'src/components/buttons'
import card from 'src/components/card'
import {slide, carousel} from 'src/components/carousel'
import collapse from 'src/components/collapse'
import dropdown from 'src/components/dropdown'
import dropdownSelect from 'src/components/dropdown-select'
import formCheckbox from 'src/components/form-checkbox'
import formRadio from 'src/components/form-radio'
import formInput from 'src/components/form-input'
import formSelect from 'src/components/form-select'
import formTextarea from 'src/components/form-textarea'
import images from 'src/components/images'
import jumbotron from 'src/components/jumbotron'
import labels from 'src/components/labels'
import listGroup from 'src/components/list-group'
import media from 'src/components/media'
import modal from 'src/components/modal'
import navigation from 'src/components/nav'
import navbar from 'src/components/navbar'
import pager from 'src/components/pager'
import pagination from 'src/components/pagination'
import popover from 'src/components/popover'
import progress from 'src/components/progress'
import tables from 'src/components/tables'
import {tab, tabs} from 'src/components/tabs'
import tooltip from 'src/components/tooltip'

const vuestrapBase = {
	'accordion': accordion,
	'badge': labels,
	'alert': alert,
	'breadcrumb': breadcrumb,
	'button-checkbox': buttonCheckbox,
	'button-group': buttonGroup,
	'button-radio': buttonRadio,
	'buttons': buttons,
	'card': card,
	'slide': slide,
	'carousel': carousel,
	'collapse': collapse,
	'dropdown': dropdown,
	'dropdown-select': dropdownSelect,
	'form-checkbox': formCheckbox,
	'form-radio': formRadio,
	'form-input': formInput,
	'form-select': formSelect,
	'form-textarea': formTextarea,
	'images': images,
	'jumbotron': jumbotron,
	'labels': labels,
	'list-group': listGroup,
	'media': media,
	'modal': modal,
	'navigation': navigation,
	'navbar': navbar,
	'pager': pager,
	'pagination': pagination,
	'popover': popover,
	'progress': progress,
	'tables': tables,
	'tab': tab,
	'tabs': tabs,
	'tooltip': tooltip,
}

// export all components under global variable
module.exports = vuestrapBase
