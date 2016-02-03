/**
 * IMPORT GLOBAL STYLING
 */
// import normalize, grid, utilities and
import 'vuestrap/core'
/**
 * IMPORT EACH COMPONENT
 */
import alert from './alert'
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
import labels from './labels'
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
	'vsAlert': alert,
	'vsBadge': labels,
	'vsBreadcrumb': breadcrumb,
	'vsButtonCheckbox': buttonCheckbox,
	'vsButtonGroup': buttonGroup,
	'vsButtonRadio': buttonRadio,
	'vsBtn': buttons,
	'vsCard': card,
	'vsSlide': slide,
	'vsCarousel': carousel,
	'vsCollapse': collapse,
	'vsCollapseToggle': collapseToggle,
	'vsDropdown': dropdown,
	'vsDropdownSelect': dropdownSelect,
	'vsFormCheckbox': formCheckbox,
	'vsFormRadio': formRadio,
	'vsFormInput': formInput,
	'vsFormSelect': formSelect,
	'vsFormTextarea': formTextarea,
	'vsImages': images,
	'vsJumbotron': jumbotron,
	'vsLabel': labels,
	'vsListGroup': listGroup,
	'vsListGroupItem': listGroupItem,
	'vsMedia': media,
	'vsModal': modal,
	'vsNav': nav,
	'vsNavItem': navItem,
	'vsNavbar': navbar,
	'vsPager': pager,
	'vsPagination': pagination,
	'vsPopover': popover,
	'vsProgress': progress,
	'vsTables': tables,
	'vsTab': tab,
	'vsTabs': tabs,
	'vsTooltip': tooltip,
}

// export all components under global variable
export default vuestrapBase
