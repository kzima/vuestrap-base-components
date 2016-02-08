/**
 * IMPORT GLOBAL STYLING
 */
// import normalize, grid, utilities and
import 'vuestrap/core'
/**
 * IMPORT EACH COMPONENT
 */
import alert from './alert'
import badge from './labels'
import breadcrumb from './breadcrumb'
import buttonCheckbox from './button-checkbox'
import buttonGroup from './button-group'
import buttonRadio from './button-radio'
import buttons from './buttons'
import card from './card'
import {slide, carousel} from './carousel'
import {collapse, collapseToggle} from './collapse'
import dropdown from './dropdown'
import dropdownSelect from './dropdown-select'
import formCheckbox from './form-checkbox'
import formRadio from './form-radio'
import formInput from './form-input'
import formSelect from './form-select'
import formTextarea from './form-textarea'
import images from './images'
import jumbotron from './jumbotron'
import label from './labels'
import {listGroup, listGroupItem} from './list-group'
import media from './media'
import modal from './modal'
import {nav, navItem} from './nav'
import navbar from './navbar'
import pager from './pager'
import pagination from './pagination'
import popover from './popover'
import progress from './progress'
import tables from './tables'
import {tab, tabs} from './tabs'
import tooltip from './tooltip'

const vuestrapBase = {
	alert,
	badge,
	breadcrumb,
	buttonCheckbox,
	buttonGroup,
	buttonRadio,
	buttons,
	card,
	slide,
	carousel,
	collapse,
	collapseToggle,
	dropdown,
	dropdownSelect,
	formCheckbox,
	formRadio,
	formInput,
	formSelect,
	formTextarea,
	images,
	jumbotron,
	label,
	listGroup,
	listGroupItem,
	media,
	modal,
	nav,
	navItem,
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
export default vuestrapBase
