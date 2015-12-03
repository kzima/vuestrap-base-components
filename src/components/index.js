/**
 * IMPORT GLOBAL STYLING
 */
// import normalize, grid, utilities and
import 'vuestrap/core'

/**
 * IMPORT EACH COMPONENT
 */
import accordion from './collapse'
import alert from './alert'
import breadcrumb from './breadcrumb'
import buttonCheckbox from './button-checkbox'
import buttonGroup from './button-group'
import buttonRadio from './button-radio'
import buttons from './buttons'
import card from './card'
import {slide, carousel} from './carousel'
import collapse from './collapse'
import dropdown from './dropdown'
import dropdownSelect from './dropdown-select'
import formCheckbox from './form-checkbox'
import formRadio from './form-radio'
import formInput from './form-input'
import formSelect from './form-select'
import formTextarea from './form-textarea'
import images from './images'
import jumbotron from './jumbotron'
import labels from './labels'
import listGroup from './list-group'
import media from './media'
import modal from './modal'
import navigation from './nav'
import navbar from './navbar'
import pager from './pager'
import pagination from './pagination'
import popover from './popover'
import progress from './progress'
import tables from './tables'
import {tab, tabs} from './tabs'
import tooltip from './tooltip'

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
