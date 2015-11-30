/**
 * IMPORT GLOBAL STYLING
 */
// import normalize, grid, utilities and
import 'vuestrap/core'

/**
 * IMPORT EACH COMPONENT
 */
import accordion from 'src/docs/pages/accordion'
import alert from 'src/docs/pages/alert'
import breadcrumb from 'src/docs/pages/breadcrumb'
import buttonCheckbox from 'src/docs/pages/button-checkbox'
import buttonGroup from 'src/docs/pages/button-group'
import buttonRadio from 'src/docs/pages/button-radio'
import buttons from 'src/docs/pages/buttons'
import card from 'src/docs/pages/card'
import carousel from 'src/docs/pages/carousel'
import collapse from 'src/docs/pages/collapse'
import dropdown from 'src/docs/pages/dropdown'
import dropdownSelect from 'src/docs/pages/dropdown-select'
import formCheckbox from 'src/docs/pages/form-checkbox'
import formRadio from 'src/docs/pages/form-radio'
import formInput from 'src/docs/pages/form-input'
import formSelect from 'src/docs/pages/form-select'
import formTextarea from 'src/docs/pages/form-textarea'
import images from 'src/docs/pages/images'
import jumbotron from 'src/docs/pages/jumbotron'
import labels from 'src/docs/pages/labels'
import listGroup from 'src/docs/pages/list-group'
import media from 'src/docs/pages/media'
import modal from 'src/docs/pages/modal'
import navigation from 'src/docs/pages/nav'
import navbar from 'src/docs/pages/navbar'
import pager from 'src/docs/pages/pager'
import pagination from 'src/docs/pages/pagination'
import popover from 'src/docs/pages/popover'
import progress from 'src/docs/pages/progress'
import tables from 'src/docs/pages/tables'
import tabs from 'src/docs/pages/tabs'
import tooltip from 'src/docs/pages/tooltip'


const vuestrapBase = {
	intro: introductionPage,
	accordion: accordion,
	alert: alert,
	breadcrumb: breadcrumb,
	'button-checkbox': buttonCheckbox,
	'button-group': buttonGroup,
	'button-radio': buttonRadio,
	buttons: buttons,
	card: card,
	carousel: carousel,
	collapse: collapse,
	dropdown: dropdown,
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
	'tabs': tabs,
	'tooltip': tooltip,
}

module.exports = vuestrapBase
