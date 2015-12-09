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
	accordion,
	labels,
	alert,
	breadcrumb,
	buttonCheckbox,
	buttonGroup,
	buttonRadio,
	buttons,
	card,
	slide,
	carousel,
	collapse,
	dropdown,
	dropdownSelect,
	formCheckbox,
	formRadio,
	formInput,
	formSelect,
	formTextarea,
	images,
	jumbotron,
	labels,
	listGroup,
	media,
	modal,
	navigation,
	navbar,
	pager,
	pagination,
	popover,
	progress,
	tables,
	tab,
	tabs,
	tooltip,
}

// export all components under global variable
module.exports = vuestrapBase
