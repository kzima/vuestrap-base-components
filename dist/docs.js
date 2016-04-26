/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT GLOBAL STYLING
	 */
	// import normalize, grid, utilities and
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(1);

	// import external dependencies
	// docs component handles routing and demo pages

	var _vuestrapDocsSrcComponents = __webpack_require__(6);

	var _gritcodeComponentsSrcComponentsOffcanvasDrawer = __webpack_require__(25);

	// import utils

	var _vuestrapDocsSrcUtils = __webpack_require__(19);

	// import demo pages compatibile with docs component

	var _srcDocs = __webpack_require__(29);

	var _srcDocs2 = _interopRequireDefault(_srcDocs);

	// import package.json meta data

	var _packageJson = __webpack_require__(310);

	var _packageJson2 = _interopRequireDefault(_packageJson);

	// get list of the route objects
	var routes = (0, _vuestrapDocsSrcUtils.getRoutes)(_srcDocs2['default']);

	// create components from routes and attach it to the docs.components object
	routes.forEach(function (route) {
		_vuestrapDocsSrcComponents.vsDocsPages.components[route.id] = route.component;
	});

	// start docs instance
	window.docs = new Vue({
		el: '#docs',
		data: {
			routes: routes,
			pkg: _packageJson2['default'],
			pageTitle: 'Vuestrap Docs'
		},
		methods: {
			closeDropdownsAndPopovers: function closeDropdownsAndPopovers() {
				this.$broadcast('hide::popover');
				this.$broadcast('hide::tooltip');
				this.$broadcast('hide::dropdown');
				this.console = '';
			}
		},
		components: {
			vsDocsPages: _vuestrapDocsSrcComponents.vsDocsPages,
			vsDocsDrawer: _vuestrapDocsSrcComponents.vsDocsDrawer,
			vsOffcanvasWrapper: _gritcodeComponentsSrcComponentsOffcanvasDrawer.offcanvasWrapper,
			vsOffcanvasDrawer: _gritcodeComponentsSrcComponentsOffcanvasDrawer.offcanvasDrawer
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// import core stuff
	'use strict';

	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_core.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_core.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active {\n  outline: 0; }\n\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\n@-moz-viewport {\n  width: device-width; }\n\n@-ms-viewport {\n  width: device-width; }\n\n@-o-viewport {\n  width: device-width; }\n\n@-webkit-viewport {\n  width: device-width; }\n\n@viewport {\n  width: device-width; }\n\nhtml {\n  font-size: 16px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #373a3c;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: none !important; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: .5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #818a91; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\na {\n  color: #563d7c;\n  text-decoration: none; }\n  a:focus, a:hover {\n    color: #322449;\n    text-decoration: underline; }\n  a:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation; }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #818a91;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: left; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  margin: 0;\n  line-height: inherit;\n  border-radius: 0; }\n\ntextarea {\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit; }\n\ninput[type=\"search\"] {\n  box-sizing: inherit;\n  -webkit-appearance: none; }\n\noutput {\n  display: inline-block; }\n\n[hidden] {\n  display: none !important; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height;\n  transition-property: height; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .2; }\n  .close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: .5; }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f7f7f9;\n  border-radius: 0.25rem; }\n\nkbd {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 0.2rem; }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold; }\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  line-height: 1.5;\n  color: #373a3c; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #55595c;\n  text-align: center;\n  background-color: #eceeef;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem; }\n  .input-group-addon.form-control-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 0.275rem 0.75rem;\n    font-size: 0.875rem;\n    border-radius: 0.2rem; }\n  .input-group-addon.form-control-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 0.75rem 1.25rem;\n    font-size: 1.25rem;\n    border-radius: 0.3rem; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\n      z-index: 3; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n    .input-group-btn:last-child > .btn:focus, .input-group-btn:last-child > .btn:active, .input-group-btn:last-child > .btn:hover,\n    .input-group-btn:last-child > .btn-group:focus,\n    .input-group-btn:last-child > .btn-group:active,\n    .input-group-btn:last-child > .btn-group:hover {\n      z-index: 3; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9 {\n  padding-bottom: 42.85714%; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\n.embed-responsive-1by1 {\n  padding-bottom: 100%; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n\nh1 {\n  font-size: 2.5rem; }\n\nh2 {\n  font-size: 2rem; }\n\nh3 {\n  font-size: 1.75rem; }\n\nh4 {\n  font-size: 1.5rem; }\n\nh5 {\n  font-size: 1.25rem; }\n\nh6 {\n  font-size: 1rem; }\n\n.h1 {\n  font-size: 2.5rem; }\n\n.h2 {\n  font-size: 2rem; }\n\n.h3 {\n  font-size: 1.75rem; }\n\n.h4 {\n  font-size: 1.5rem; }\n\n.h5 {\n  font-size: 1.25rem; }\n\n.h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: normal; }\n\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n  .list-inline-item:not(:last-child) {\n    margin-right: 5px; }\n\n.dl-horizontal {\n  margin-right: -1.875rem;\n  margin-left: -1.875rem; }\n  .dl-horizontal::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n  border-left: 0.25rem solid #eceeef; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  line-height: 1.5;\n  color: #818a91; }\n  .blockquote-footer::before {\n    content: \"\\2014   \\A0\"; }\n\n.blockquote-reverse {\n  padding-right: 1rem;\n  padding-left: 0;\n  text-align: right;\n  border-right: 0.25rem solid #eceeef;\n  border-left: 0; }\n\n.blockquote-reverse .blockquote-footer::before {\n  content: \"\"; }\n\n.blockquote-reverse .blockquote-footer::after {\n  content: \"\\A0   \\2014\"; }\n\n.bg-inverse {\n  color: #eceeef;\n  background-color: #373a3c; }\n\n.bg-faded {\n  background-color: #f7f7f9; }\n\n.bg-primary {\n  color: #fff !important;\n  background-color: #563d7c !important; }\n\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #3e2c5a; }\n\n.bg-success {\n  color: #fff !important;\n  background-color: #42b983 !important; }\n\na.bg-success:focus, a.bg-success:hover {\n  background-color: #359368; }\n\n.bg-info {\n  color: #fff !important;\n  background-color: #5bc0de !important; }\n\na.bg-info:focus, a.bg-info:hover {\n  background-color: #31b0d5; }\n\n.bg-warning {\n  color: #fff !important;\n  background-color: #f0ad4e !important; }\n\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #ec971f; }\n\n.bg-danger {\n  color: #fff !important;\n  background-color: #d9534f !important; }\n\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #c9302c; }\n\n.hidden-xs-up {\n  display: none !important; }\n\n@media (max-width: 543px) {\n  .hidden-xs-down {\n    display: none !important; } }\n\n@media (min-width: 544px) {\n  .hidden-sm-up {\n    display: none !important; } }\n\n@media (max-width: 767px) {\n  .hidden-sm-down {\n    display: none !important; } }\n\n@media (min-width: 768px) {\n  .hidden-md-up {\n    display: none !important; } }\n\n@media (max-width: 991px) {\n  .hidden-md-down {\n    display: none !important; } }\n\n@media (min-width: 992px) {\n  .hidden-lg-up {\n    display: none !important; } }\n\n@media (max-width: 1199px) {\n  .hidden-lg-down {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-xl-up {\n    display: none !important; } }\n\n.hidden-xl-down {\n  display: none !important; }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\n.m-x-auto {\n  margin-right: auto !important;\n  margin-left: auto !important; }\n\n.m-a-0 {\n  margin: 0 0 !important; }\n\n.m-t-0 {\n  margin-top: 0 !important; }\n\n.m-r-0 {\n  margin-right: 0 !important; }\n\n.m-b-0 {\n  margin-bottom: 0 !important; }\n\n.m-l-0 {\n  margin-left: 0 !important; }\n\n.m-x-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important; }\n\n.m-y-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.m-a-1 {\n  margin: 1rem 1rem !important; }\n\n.m-t-1 {\n  margin-top: 1rem !important; }\n\n.m-r-1 {\n  margin-right: 1rem !important; }\n\n.m-b-1 {\n  margin-bottom: 1rem !important; }\n\n.m-l-1 {\n  margin-left: 1rem !important; }\n\n.m-x-1 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important; }\n\n.m-y-1 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important; }\n\n.m-a-2 {\n  margin: 1.5rem 1.5rem !important; }\n\n.m-t-2 {\n  margin-top: 1.5rem !important; }\n\n.m-r-2 {\n  margin-right: 1.5rem !important; }\n\n.m-b-2 {\n  margin-bottom: 1.5rem !important; }\n\n.m-l-2 {\n  margin-left: 1.5rem !important; }\n\n.m-x-2 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important; }\n\n.m-y-2 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important; }\n\n.m-a-3 {\n  margin: 3rem 3rem !important; }\n\n.m-t-3 {\n  margin-top: 3rem !important; }\n\n.m-r-3 {\n  margin-right: 3rem !important; }\n\n.m-b-3 {\n  margin-bottom: 3rem !important; }\n\n.m-l-3 {\n  margin-left: 3rem !important; }\n\n.m-x-3 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important; }\n\n.m-y-3 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important; }\n\n.p-a-0 {\n  padding: 0 0 !important; }\n\n.p-t-0 {\n  padding-top: 0 !important; }\n\n.p-r-0 {\n  padding-right: 0 !important; }\n\n.p-b-0 {\n  padding-bottom: 0 !important; }\n\n.p-l-0 {\n  padding-left: 0 !important; }\n\n.p-x-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important; }\n\n.p-y-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n\n.p-a-1 {\n  padding: 1rem 1rem !important; }\n\n.p-t-1 {\n  padding-top: 1rem !important; }\n\n.p-r-1 {\n  padding-right: 1rem !important; }\n\n.p-b-1 {\n  padding-bottom: 1rem !important; }\n\n.p-l-1 {\n  padding-left: 1rem !important; }\n\n.p-x-1 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important; }\n\n.p-y-1 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important; }\n\n.p-a-2 {\n  padding: 1.5rem 1.5rem !important; }\n\n.p-t-2 {\n  padding-top: 1.5rem !important; }\n\n.p-r-2 {\n  padding-right: 1.5rem !important; }\n\n.p-b-2 {\n  padding-bottom: 1.5rem !important; }\n\n.p-l-2 {\n  padding-left: 1.5rem !important; }\n\n.p-x-2 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important; }\n\n.p-y-2 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important; }\n\n.p-a-3 {\n  padding: 3rem 3rem !important; }\n\n.p-t-3 {\n  padding-top: 3rem !important; }\n\n.p-r-3 {\n  padding-right: 3rem !important; }\n\n.p-b-3 {\n  padding-bottom: 3rem !important; }\n\n.p-l-3 {\n  padding-left: 3rem !important; }\n\n.p-x-3 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important; }\n\n.p-y-3 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important; }\n\n.pos-f-t {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-xs-left {\n  float: left !important; }\n\n.pull-xs-right {\n  float: right !important; }\n\n.pull-xs-none {\n  float: none !important; }\n\n@media (min-width: 544px) {\n  .pull-sm-left {\n    float: left !important; }\n  .pull-sm-right {\n    float: right !important; }\n  .pull-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .pull-md-left {\n    float: left !important; }\n  .pull-md-right {\n    float: right !important; }\n  .pull-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .pull-lg-left {\n    float: left !important; }\n  .pull-lg-right {\n    float: right !important; }\n  .pull-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .pull-xl-left {\n    float: left !important; }\n  .pull-xl-right {\n    float: right !important; }\n  .pull-xl-none {\n    float: none !important; } }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n.invisible {\n  visibility: hidden !important; }\n\n.text-hide {\n  font: \"0/0\" a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-xs-left {\n  text-align: left !important; }\n\n.text-xs-right {\n  text-align: right !important; }\n\n.text-xs-center {\n  text-align: center !important; }\n\n@media (min-width: 544px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n.text-muted {\n  color: #818a91; }\n\n.text-primary {\n  color: #563d7c !important; }\n\na.text-primary:focus, a.text-primary:hover {\n  color: #3e2c5a; }\n\n.text-success {\n  color: #42b983 !important; }\n\na.text-success:focus, a.text-success:hover {\n  color: #359368; }\n\n.text-info {\n  color: #5bc0de !important; }\n\na.text-info:focus, a.text-info:hover {\n  color: #31b0d5; }\n\n.text-warning {\n  color: #f0ad4e !important; }\n\na.text-warning:focus, a.text-warning:hover {\n  color: #ec971f; }\n\n.text-danger {\n  color: #d9534f !important; }\n\na.text-danger:focus, a.text-danger:hover {\n  color: #c9302c; }\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n  .container::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  @media (min-width: 544px) {\n    .container {\n      max-width: 576px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 940px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n  .container-fluid::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.row {\n  margin-left: -0.9375rem;\n  margin-right: -0.9375rem; }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 544px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 768px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {\n    float: left; }\n  .col-xl-1 {\n    width: 8.33333%; }\n  .col-xl-2 {\n    width: 16.66667%; }\n  .col-xl-3 {\n    width: 25%; }\n  .col-xl-4 {\n    width: 33.33333%; }\n  .col-xl-5 {\n    width: 41.66667%; }\n  .col-xl-6 {\n    width: 50%; }\n  .col-xl-7 {\n    width: 58.33333%; }\n  .col-xl-8 {\n    width: 66.66667%; }\n  .col-xl-9 {\n    width: 75%; }\n  .col-xl-10 {\n    width: 83.33333%; }\n  .col-xl-11 {\n    width: 91.66667%; }\n  .col-xl-12 {\n    width: 100%; }\n  .col-xl-pull-0 {\n    right: auto; }\n  .col-xl-pull-1 {\n    right: 8.33333%; }\n  .col-xl-pull-2 {\n    right: 16.66667%; }\n  .col-xl-pull-3 {\n    right: 25%; }\n  .col-xl-pull-4 {\n    right: 33.33333%; }\n  .col-xl-pull-5 {\n    right: 41.66667%; }\n  .col-xl-pull-6 {\n    right: 50%; }\n  .col-xl-pull-7 {\n    right: 58.33333%; }\n  .col-xl-pull-8 {\n    right: 66.66667%; }\n  .col-xl-pull-9 {\n    right: 75%; }\n  .col-xl-pull-10 {\n    right: 83.33333%; }\n  .col-xl-pull-11 {\n    right: 91.66667%; }\n  .col-xl-pull-12 {\n    right: 100%; }\n  .col-xl-push-0 {\n    left: auto; }\n  .col-xl-push-1 {\n    left: 8.33333%; }\n  .col-xl-push-2 {\n    left: 16.66667%; }\n  .col-xl-push-3 {\n    left: 25%; }\n  .col-xl-push-4 {\n    left: 33.33333%; }\n  .col-xl-push-5 {\n    left: 41.66667%; }\n  .col-xl-push-6 {\n    left: 50%; }\n  .col-xl-push-7 {\n    left: 58.33333%; }\n  .col-xl-push-8 {\n    left: 66.66667%; }\n  .col-xl-push-9 {\n    left: 75%; }\n  .col-xl-push-10 {\n    left: 83.33333%; }\n  .col-xl-push-11 {\n    left: 91.66667%; }\n  .col-xl-push-12 {\n    left: 100%; }\n  .col-xl-offset-0 {\n    margin-left: 0%; }\n  .col-xl-offset-1 {\n    margin-left: 8.33333%; }\n  .col-xl-offset-2 {\n    margin-left: 16.66667%; }\n  .col-xl-offset-3 {\n    margin-left: 25%; }\n  .col-xl-offset-4 {\n    margin-left: 33.33333%; }\n  .col-xl-offset-5 {\n    margin-left: 41.66667%; }\n  .col-xl-offset-6 {\n    margin-left: 50%; }\n  .col-xl-offset-7 {\n    margin-left: 58.33333%; }\n  .col-xl-offset-8 {\n    margin-left: 66.66667%; }\n  .col-xl-offset-9 {\n    margin-left: 75%; }\n  .col-xl-offset-10 {\n    margin-left: 83.33333%; }\n  .col-xl-offset-11 {\n    margin-left: 91.66667%; }\n  .col-xl-offset-12 {\n    margin-left: 100%; } }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT EACH COMPONENT
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _demo = __webpack_require__(7);

	var _demo2 = _interopRequireDefault(_demo);

	var _search = __webpack_require__(11);

	var _search2 = _interopRequireDefault(_search);

	var _docsPages = __webpack_require__(15);

	var _docsPages2 = _interopRequireDefault(_docsPages);

	var _docsDrawer = __webpack_require__(21);

	var _docsDrawer2 = _interopRequireDefault(_docsDrawer);

	var vuestrapDocs = {
	  'vsDemo': _demo2['default'],
	  'vsSearch': _search2['default'],
	  'vsDocsPages': _docsPages2['default'],
	  'vsDocsDrawer': _docsDrawer2['default']
	};

	exports['default'] = vuestrapDocs;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(8);

	var _demoHtml = __webpack_require__(10);

	var _demoHtml2 = _interopRequireDefault(_demoHtml);

	// export component object
	exports['default'] = {
	    template: _demoHtml2['default'],
	    replace: true,
	    props: {
	        meta: {
	            type: Object,
	            'default': {},
	            required: true
	        },
	        snippet: {
	            type: String,
	            'default': '',
	            required: true
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./demo.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./demo.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".vuestrap-docs-demo {\n  margin-bottom: 4rem; }\n  .vuestrap-docs-demo .code-demo {\n    position: relative;\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 2rem;\n    padding: 1rem;\n    padding-bottom: 0;\n    border: solid #f7f7f9;\n    border-width: .2rem; }\n    .vuestrap-docs-demo .code-demo > .inverse {\n      background-color: #898989;\n      padding: 0.2em; }\n  .vuestrap-docs-demo .highlight {\n    padding: 1rem;\n    margin: 1rem -1rem;\n    background-color: #f7f7f9;\n    margin-bottom: 0; }\n    .vuestrap-docs-demo .highlight pre {\n      margin-bottom: 0; }\n  .vuestrap-docs-demo .options > table code {\n    display: inline-block;\n    margin-right: 2px;\n    margin-bottom: 2px; }\n  .vuestrap-docs-demo .options > table td {\n    width: 10%; }\n    .vuestrap-docs-demo .options > table td p {\n      margin: 0; }\n    .vuestrap-docs-demo .options > table td p + p {\n      margin-top: 10px; }\n  .vuestrap-docs-demo .options > table td:nth-child(1) {\n    min-width: 50px;\n    max-width: 150px;\n    color: #563d7c; }\n  .vuestrap-docs-demo .options > table td:nth-child(5) {\n    width: 50%;\n    max-width: 50%;\n    min-width: 200px; }\n  .vuestrap-docs-demo [slot=\"controls\"] {\n    background-color: #f7f7f9;\n    padding: 1rem; }\n  .vuestrap-docs-demo [slot=\"controls\"] label {\n    margin-bottom: 0;\n    margin-right: 0.5rem; }\n  .vuestrap-docs-demo label.btn {\n    margin-bottom: 0; }\n  .vuestrap-docs-demo .label {\n    margin-right: 0.5rem; }\n  .vuestrap-docs-demo > .label {\n    background-color: #563d7c; }\n  .vuestrap-docs-demo > .alert {\n    border-right-color: #e6e6ec;\n    border-top-color: #e6e6ec;\n    border-bottom-color: #e6e6ec;\n    border-left-width: 5px;\n    background-color: transparent; }\n    .vuestrap-docs-demo > .alert .icons {\n      vertical-align: text-bottom; }\n  .vuestrap-docs-demo .tab-content .tab-pane {\n    padding: 1em 0; }\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<section class=\"vuestrap-docs-demo\" id=\"{{meta.name}}\">\r\n\r\n\t<!-- Meta title -->\r\n\t<h2>{{meta.title}}</h2>\r\n\t<p v-html=\"meta.description\"></p>\r\n\r\n\t<div class=\"m-b\"></div>\r\n\r\n\t<div class=\"alert alert-info\" role=\"alert\" v-if=\"meta.note\">\r\n  \t<!--<icon background=\"circle-outline\" size=\"sm\" variant=\"info\" text=\"i\"></icon>--> <span v-html=\"meta.note\"></span>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Component manipulators -->\r\n\t<slot name=\"controls\"></slot>\r\n\r\n\t<!-- Output & Code sample -->\r\n\t<div class=\"code-demo\">\r\n\r\n\t\t<slot class=\"markup\" name=\"markup\"></slot>\r\n\r\n\t\t<div class=\"highlight\">\r\n\t\t\t<pre><code v-html=\"snippet\"></code></pre>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Options -->\r\n\t<div class=\"options\" v-if=\"meta.options.length\">\r\n\t\t<h3>Options</h3>\r\n\t\t<table class='table table-responsive'>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Name</th>\r\n\t\t\t\t<th>Type</th>\r\n\t\t\t\t<th>Default</th>\r\n\t\t\t\t<th>Required</th>\r\n\t\t\t\t<th>Description</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr v-for=\"item in meta.options\">\r\n\t\t\t\t<td>{{item.name}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<code v-html=\"item.type\"></code>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td><code v-if=\"item.default\" v-html=\"item.default\"></code></td>\r\n\t\t\t\t<td>{{item.required == true ? 'yes' : ''}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p v-html=\"item.description\"></p>\r\n\t\t\t\t\t<p v-if=\"item.values\">\r\n\t\t\t\t\t\tPosible values:\r\n\t\t\t\t\t\t<code v-for=\"item in item.values\">{{item}}</code>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\t\r\n\t</div>\r\n\r\n\t<!-- Accessibility -->\r\n\t<div class=\"accessibility\" v-if=\"meta.accessibility\">\r\n\t\t<h3>Accessibility</h3>\r\n\t\t<p v-html=\"meta.accessibility\"></p>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Browser Support -->\r\n\t<div class=\"browserSupport\" v-if=\"meta.browserSupport\">\r\n\t\t<h3>Browser Support</h3>\r\n\t\t<span class=\"label label-primary\" v-for=\"item in meta.browserSupport.browsers\">{{ item }}</span>\r\n\t\t<p><small v-html=\"meta.browserSupport.note\"></small></p>\r\n\t</div>\r\n</section>\r\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(12);

	var _searchHtml = __webpack_require__(14);

	var _searchHtml2 = _interopRequireDefault(_searchHtml);

	// export component object
	exports['default'] = {
	    template: _searchHtml2['default'],
	    replace: true,
	    data: function data() {
	        return {
	            search: ''
	        };
	    },
	    filters: {
	        skipIntro: function skipIntro(elements) {
	            var filtered = [];
	            elements.forEach(function (element) {
	                if (element.name !== 'introduction') {
	                    filtered.push(element);
	                }
	            });
	            return filtered;
	        }
	    },
	    props: {
	        showSearch: {
	            type: Number,
	            'default': 5
	        },
	        list: {
	            type: Array,
	            'default': []
	        },
	        currentView: {
	            type: String,
	            'default': null
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./search.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./search.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".vuestrap-docs-search .list-group-search {\n  background: #f7f7f9; }\n\n.vuestrap-docs-search .list-group-item.active {\n  color: #42b983;\n  background-color: transparent;\n  border-color: #42b983; }\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"vuestrap-docs-search list-group\">\r\n  <!-- search -->\r\n  <div class=\"list-group-item list-group-search\" v-if=\"list.length > showSearch\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" v-model=\"search\" autocomplete=\"off\">\r\n  </div>\r\n  <!-- components -->\r\n  <a href=\"#{{item.url}}\" \r\n    v-bind:class=\"{\r\n      'list-group-item': true, \r\n      active: currentView && item.id === currentView,\r\n    }\" \r\n    v-for=\"item in list | skipIntro | filterBy search in 'title'\">\r\n    {{item.title}}\r\n  </a>\r\n</div>";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(16);

	var _docsPagesHtml = __webpack_require__(18);

	var _docsPagesHtml2 = _interopRequireDefault(_docsPagesHtml);

	// import external dependencies

	var _search = __webpack_require__(11);

	var _search2 = _interopRequireDefault(_search);

	// import utils

	var _utils = __webpack_require__(19);

	// export component object
	exports['default'] = {
	    template: _docsPagesHtml2['default'],
	    replace: true,
	    data: function data() {
	        return {
	            currentView: ''
	        };
	    },
	    props: {
	        routes: {
	            type: Array,
	            required: true
	        },
	        pageTitle: {
	            type: String,
	            required: true
	        },
	        pkg: {
	            type: Object,
	            required: true
	        }
	    },
	    components: {
	        docsSearch: _search2['default']
	    },
	    methods: {
	        changeRoute: function changeRoute(route) {
	            window.scrollTo(0, 0);
	            this.$set('currentView', route.id);
	            this.$set('pageTitle', route.pageTitle);
	        }
	    },
	    ready: function ready() {
	        var _this = this;

	        // set routes for each page
	        this.routes.forEach(function (route) {
	            // Adhoc Routing
	            _utils.router.on(route.url, function () {
	                if (route.redirect) {
	                    // if route has redirect param, redirect to the spcified route
	                    _utils.router.setRoute(route.redirect);
	                }
	                _this.changeRoute(route);
	            });
	        });

	        // init router
	        _utils.router.init('/');
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./docs-pages.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./docs-pages.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "html, body {\n  height: 100%; }\n\nhtml {\n  font-size: 16px; }\n  @media (max-width: 480px) {\n    html {\n      font-size: 14px; } }\n\nbody {\n  margin: auto;\n  padding: 0;\n  overflow-x: hidden; }\n\nh1, h2, h3 {\n  font-family: 'Source Sans Pro', sans-serif;\n  color: #563d7c; }\n\nh2 {\n  padding-bottom: 0.3rem;\n  border-bottom: 1px solid #42b983; }\n\nh3 {\n  font-size: 1.3rem !important; }\n\n#docs-pages {\n  overflow-x: hidden; }\n  #docs-pages > .navbar {\n    padding: 0.2em 0 !important;\n    line-height: 3em; }\n    #docs-pages > .navbar .navbar-brand {\n      padding: 0 !important; }\n      #docs-pages > .navbar .navbar-brand img {\n        height: 2.5em; }\n  #docs-pages > .container {\n    padding-top: 5em; }\n\n.list-group-item.active {\n  color: #42b983 !important;\n  border-color: #42b983 !important;\n  background-color: transparent !important; }\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<!-- header -->\r\n<nav class=\"navbar navbar-fixed-top navbar-light bg-faded\">\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand text-center\" href=\"#/\">\r\n\t\t\t\t<img v-bind:src=\"'assets/vuestrap-logo.svg'\" alt=\"Vuestrap logo\">\r\n\t\t\t</a>\r\n\t\t\t<a class=\"navbar-brand text-center hidden-sm-down\" href=\"#/\">\r\n\t\t\t\tDocumentation\r\n\t\t\t</a>\r\n\t\t\t<ul class=\"nav navbar-nav pull-xs-right\">\r\n\t\t\t\t<li class=\"nav-item hidden-sm-down\">\r\n\t\t\t\t\t<a href=\"#/\" class=\"btn\">Introduction</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item hidden-sm-down\">\r\n\t\t\t\t\t<a href=\"{{pkg.homepage}}\" class=\"btn btn-success\" target=\"_blank\">&#9733; Github</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item hidden-md-up\">\r\n\t\t\t\t\t<a href=\"#\" class=\"btn btn-success\" target=\"_blank\" v-on:click.stop.prevent=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">&#9776;</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n  </div><!-- /.container -->\r\n</nav><!-- /.navbar -->\r\n\r\n<!-- content -->\r\n<div class=\"container\">\r\n\t<div class=\"row row-offcanvas row-offcanvas-right\">\r\n\t\t<div class=\"col-xs-12 col-md-9\">\r\n\t\t\t<component :is=\"currentView\"></component>\r\n    </div><!-- /col-xs-12 -->\r\n\r\n\t\t<!-- sidebar -->\r\n\t\t<div class=\"col-xs-12 col-md-3 sidebar-offcanvas hidden-sm-down\" id=\"sidebar\">\r\n\t\t\t<docs-search :list=\"routes\" :current-view=\"currentView\"></docs-search>\r\n\t\t</div><!--/sidebar-->\r\n\r\n\t</div><!--/row-->\r\n</div><!--/container-->";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Routes helper
	 */

	// import router
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _director = __webpack_require__(20);

	var _director2 = _interopRequireDefault(_director);

	// create director instance
	var router = new _director2['default'].Router().configure({ strict: false });

	exports.router = router;
	// gets routes info from the nested array of pages
	var getRoutes = function getRoutes(arr) {
	  var parentId = '';
	  var parentTitle = '';
	  var parentUrl = '';
	  var routes = [];
	  var extractRoutes = function extractRoutes(data) {
	    for (var i = 0; i < data.pages.length; i++) {
	      var route = data.pages[i].route;
	      if (!route) throw new Error('Route object is missing.');
	      if (!route.name) throw new Error('Route object is missing "name" parameter.');
	      if (!route.url) throw new Error('Route object is missing "url" parameter.');
	      route.id = parentId ? parentId + route.name : route.name;
	      route.pageTitle = parentTitle ? parentTitle + route.title : route.title;
	      route.url = parentUrl ? parentUrl + route.url : route.url;

	      // add route to components object
	      route.component = data.pages[i];

	      // add route to the routes collection
	      routes.push(route);

	      // go to nested pages
	      if (data.pages[i].pages instanceof Array) {
	        parentId += route.name + '.';
	        parentTitle += route.title + ' - ';
	        parentUrl += route.url;
	        extractRoutes(data.pages[i]);
	      }
	    }
	  };

	  // get all routes from nested objects
	  extractRoutes(arr);
	  return routes;
	};
	exports.getRoutes = getRoutes;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	

	//
	// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
	// Version 1.2.6
	//

	(function (exports) {

	/*
	 * browser.js: Browser specific functionality for director.
	 *
	 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
	 * MIT LICENSE
	 *
	 */

	var dloc = document.location;

	function dlocHashEmpty() {
	  // Non-IE browsers return '' when the address bar shows '#'; Director's logic
	  // assumes both mean empty.
	  return dloc.hash === '' || dloc.hash === '#';
	}

	var listener = {
	  mode: 'modern',
	  hash: dloc.hash,
	  history: false,

	  check: function () {
	    var h = dloc.hash;
	    if (h != this.hash) {
	      this.hash = h;
	      this.onHashChanged();
	    }
	  },

	  fire: function () {
	    if (this.mode === 'modern') {
	      this.history === true ? window.onpopstate() : window.onhashchange();
	    }
	    else {
	      this.onHashChanged();
	    }
	  },

	  init: function (fn, history) {
	    var self = this;
	    this.history = history;

	    if (!Router.listeners) {
	      Router.listeners = [];
	    }

	    function onchange(onChangeEvent) {
	      for (var i = 0, l = Router.listeners.length; i < l; i++) {
	        Router.listeners[i](onChangeEvent);
	      }
	    }

	    //note IE8 is being counted as 'modern' because it has the hashchange event
	    if ('onhashchange' in window && (document.documentMode === undefined
	      || document.documentMode > 7)) {
	      // At least for now HTML5 history is available for 'modern' browsers only
	      if (this.history === true) {
	        // There is an old bug in Chrome that causes onpopstate to fire even
	        // upon initial page load. Since the handler is run manually in init(),
	        // this would cause Chrome to run it twise. Currently the only
	        // workaround seems to be to set the handler after the initial page load
	        // http://code.google.com/p/chromium/issues/detail?id=63040
	        setTimeout(function() {
	          window.onpopstate = onchange;
	        }, 500);
	      }
	      else {
	        window.onhashchange = onchange;
	      }
	      this.mode = 'modern';
	    }
	    else {
	      //
	      // IE support, based on a concept by Erik Arvidson ...
	      //
	      var frame = document.createElement('iframe');
	      frame.id = 'state-frame';
	      frame.style.display = 'none';
	      document.body.appendChild(frame);
	      this.writeFrame('');

	      if ('onpropertychange' in document && 'attachEvent' in document) {
	        document.attachEvent('onpropertychange', function () {
	          if (event.propertyName === 'location') {
	            self.check();
	          }
	        });
	      }

	      window.setInterval(function () { self.check(); }, 50);

	      this.onHashChanged = onchange;
	      this.mode = 'legacy';
	    }

	    Router.listeners.push(fn);

	    return this.mode;
	  },

	  destroy: function (fn) {
	    if (!Router || !Router.listeners) {
	      return;
	    }

	    var listeners = Router.listeners;

	    for (var i = listeners.length - 1; i >= 0; i--) {
	      if (listeners[i] === fn) {
	        listeners.splice(i, 1);
	      }
	    }
	  },

	  setHash: function (s) {
	    // Mozilla always adds an entry to the history
	    if (this.mode === 'legacy') {
	      this.writeFrame(s);
	    }

	    if (this.history === true) {
	      window.history.pushState({}, document.title, s);
	      // Fire an onpopstate event manually since pushing does not obviously
	      // trigger the pop event.
	      this.fire();
	    } else {
	      dloc.hash = (s[0] === '/') ? s : '/' + s;
	    }
	    return this;
	  },

	  writeFrame: function (s) {
	    // IE support...
	    var f = document.getElementById('state-frame');
	    var d = f.contentDocument || f.contentWindow.document;
	    d.open();
	    d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
	    d.close();
	  },

	  syncHash: function () {
	    // IE support...
	    var s = this._hash;
	    if (s != dloc.hash) {
	      dloc.hash = s;
	    }
	    return this;
	  },

	  onHashChanged: function () {}
	};

	var Router = exports.Router = function (routes) {
	  if (!(this instanceof Router)) return new Router(routes);

	  this.params   = {};
	  this.routes   = {};
	  this.methods  = ['on', 'once', 'after', 'before'];
	  this.scope    = [];
	  this._methods = {};

	  this._insert = this.insert;
	  this.insert = this.insertEx;

	  this.historySupport = (window.history != null ? window.history.pushState : null) != null

	  this.configure();
	  this.mount(routes || {});
	};

	Router.prototype.init = function (r) {
	  var self = this
	    , routeTo;
	  this.handler = function(onChangeEvent) {
	    var newURL = onChangeEvent && onChangeEvent.newURL || window.location.hash;
	    var url = self.history === true ? self.getPath() : newURL.replace(/.*#/, '');
	    self.dispatch('on', url.charAt(0) === '/' ? url : '/' + url);
	  };

	  listener.init(this.handler, this.history);

	  if (this.history === false) {
	    if (dlocHashEmpty() && r) {
	      dloc.hash = r;
	    } else if (!dlocHashEmpty()) {
	      self.dispatch('on', '/' + dloc.hash.replace(/^(#\/|#|\/)/, ''));
	    }
	  }
	  else {
	    if (this.convert_hash_in_init) {
	      // Use hash as route
	      routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
	      if (routeTo) {
	        window.history.replaceState({}, document.title, routeTo);
	      }
	    }
	    else {
	      // Use canonical url
	      routeTo = this.getPath();
	    }

	    // Router has been initialized, but due to the chrome bug it will not
	    // yet actually route HTML5 history state changes. Thus, decide if should route.
	    if (routeTo || this.run_in_init === true) {
	      this.handler();
	    }
	  }

	  return this;
	};

	Router.prototype.explode = function () {
	  var v = this.history === true ? this.getPath() : dloc.hash;
	  if (v.charAt(1) === '/') { v=v.slice(1) }
	  return v.slice(1, v.length).split("/");
	};

	Router.prototype.setRoute = function (i, v, val) {
	  var url = this.explode();

	  if (typeof i === 'number' && typeof v === 'string') {
	    url[i] = v;
	  }
	  else if (typeof val === 'string') {
	    url.splice(i, v, s);
	  }
	  else {
	    url = [i];
	  }

	  listener.setHash(url.join('/'));
	  return url;
	};

	//
	// ### function insertEx(method, path, route, parent)
	// #### @method {string} Method to insert the specific `route`.
	// #### @path {Array} Parsed path to insert the `route` at.
	// #### @route {Array|function} Route handlers to insert.
	// #### @parent {Object} **Optional** Parent "routes" to insert into.
	// insert a callback that will only occur once per the matched route.
	//
	Router.prototype.insertEx = function(method, path, route, parent) {
	  if (method === "once") {
	    method = "on";
	    route = function(route) {
	      var once = false;
	      return function() {
	        if (once) return;
	        once = true;
	        return route.apply(this, arguments);
	      };
	    }(route);
	  }
	  return this._insert(method, path, route, parent);
	};

	Router.prototype.getRoute = function (v) {
	  var ret = v;

	  if (typeof v === "number") {
	    ret = this.explode()[v];
	  }
	  else if (typeof v === "string"){
	    var h = this.explode();
	    ret = h.indexOf(v);
	  }
	  else {
	    ret = this.explode();
	  }

	  return ret;
	};

	Router.prototype.destroy = function () {
	  listener.destroy(this.handler);
	  return this;
	};

	Router.prototype.getPath = function () {
	  var path = window.location.pathname;
	  if (path.substr(0, 1) !== '/') {
	    path = '/' + path;
	  }
	  return path;
	};
	function _every(arr, iterator) {
	  for (var i = 0; i < arr.length; i += 1) {
	    if (iterator(arr[i], i, arr) === false) {
	      return;
	    }
	  }
	}

	function _flatten(arr) {
	  var flat = [];
	  for (var i = 0, n = arr.length; i < n; i++) {
	    flat = flat.concat(arr[i]);
	  }
	  return flat;
	}

	function _asyncEverySeries(arr, iterator, callback) {
	  if (!arr.length) {
	    return callback();
	  }
	  var completed = 0;
	  (function iterate() {
	    iterator(arr[completed], function(err) {
	      if (err || err === false) {
	        callback(err);
	        callback = function() {};
	      } else {
	        completed += 1;
	        if (completed === arr.length) {
	          callback();
	        } else {
	          iterate();
	        }
	      }
	    });
	  })();
	}

	function paramifyString(str, params, mod) {
	  mod = str;
	  for (var param in params) {
	    if (params.hasOwnProperty(param)) {
	      mod = params[param](str);
	      if (mod !== str) {
	        break;
	      }
	    }
	  }
	  return mod === str ? "([._a-zA-Z0-9-%()]+)" : mod;
	}

	function regifyString(str, params) {
	  var matches, last = 0, out = "";
	  while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
	    last = matches.index + matches[0].length;
	    matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
	    out += str.substr(0, matches.index) + matches[0];
	  }
	  str = out += str.substr(last);
	  var captures = str.match(/:([^\/]+)/ig), capture, length;
	  if (captures) {
	    length = captures.length;
	    for (var i = 0; i < length; i++) {
	      capture = captures[i];
	      if (capture.slice(0, 2) === "::") {
	        str = capture.slice(1);
	      } else {
	        str = str.replace(capture, paramifyString(capture, params));
	      }
	    }
	  }
	  return str;
	}

	function terminator(routes, delimiter, start, stop) {
	  var last = 0, left = 0, right = 0, start = (start || "(").toString(), stop = (stop || ")").toString(), i;
	  for (i = 0; i < routes.length; i++) {
	    var chunk = routes[i];
	    if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && !~chunk.indexOf(stop, last) || !~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
	      left = chunk.indexOf(start, last);
	      right = chunk.indexOf(stop, last);
	      if (~left && !~right || !~left && ~right) {
	        var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
	        routes = [ tmp ].concat(routes.slice((i || 1) + 1));
	      }
	      last = (right > left ? right : left) + 1;
	      i = 0;
	    } else {
	      last = 0;
	    }
	  }
	  return routes;
	}

	var QUERY_SEPARATOR = /\?.*/;

	Router.prototype.configure = function(options) {
	  options = options || {};
	  for (var i = 0; i < this.methods.length; i++) {
	    this._methods[this.methods[i]] = true;
	  }
	  this.recurse = options.recurse || this.recurse || false;
	  this.async = options.async || false;
	  this.delimiter = options.delimiter || "/";
	  this.strict = typeof options.strict === "undefined" ? true : options.strict;
	  this.notfound = options.notfound;
	  this.resource = options.resource;
	  this.history = options.html5history && this.historySupport || false;
	  this.run_in_init = this.history === true && options.run_handler_in_init !== false;
	  this.convert_hash_in_init = this.history === true && options.convert_hash_in_init !== false;
	  this.every = {
	    after: options.after || null,
	    before: options.before || null,
	    on: options.on || null
	  };
	  return this;
	};

	Router.prototype.param = function(token, matcher) {
	  if (token[0] !== ":") {
	    token = ":" + token;
	  }
	  var compiled = new RegExp(token, "g");
	  this.params[token] = function(str) {
	    return str.replace(compiled, matcher.source || matcher);
	  };
	  return this;
	};

	Router.prototype.on = Router.prototype.route = function(method, path, route) {
	  var self = this;
	  if (!route && typeof path == "function") {
	    route = path;
	    path = method;
	    method = "on";
	  }
	  if (Array.isArray(path)) {
	    return path.forEach(function(p) {
	      self.on(method, p, route);
	    });
	  }
	  if (path.source) {
	    path = path.source.replace(/\\\//ig, "/");
	  }
	  if (Array.isArray(method)) {
	    return method.forEach(function(m) {
	      self.on(m.toLowerCase(), path, route);
	    });
	  }
	  path = path.split(new RegExp(this.delimiter));
	  path = terminator(path, this.delimiter);
	  this.insert(method, this.scope.concat(path), route);
	};

	Router.prototype.path = function(path, routesFn) {
	  var self = this, length = this.scope.length;
	  if (path.source) {
	    path = path.source.replace(/\\\//ig, "/");
	  }
	  path = path.split(new RegExp(this.delimiter));
	  path = terminator(path, this.delimiter);
	  this.scope = this.scope.concat(path);
	  routesFn.call(this, this);
	  this.scope.splice(length, path.length);
	};

	Router.prototype.dispatch = function(method, path, callback) {
	  var self = this, fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""), invoked = this._invoked, after;
	  this._invoked = true;
	  if (!fns || fns.length === 0) {
	    this.last = [];
	    if (typeof this.notfound === "function") {
	      this.invoke([ this.notfound ], {
	        method: method,
	        path: path
	      }, callback);
	    }
	    return false;
	  }
	  if (this.recurse === "forward") {
	    fns = fns.reverse();
	  }
	  function updateAndInvoke() {
	    self.last = fns.after;
	    self.invoke(self.runlist(fns), self, callback);
	  }
	  after = this.every && this.every.after ? [ this.every.after ].concat(this.last) : [ this.last ];
	  if (after && after.length > 0 && invoked) {
	    if (this.async) {
	      this.invoke(after, this, updateAndInvoke);
	    } else {
	      this.invoke(after, this);
	      updateAndInvoke();
	    }
	    return true;
	  }
	  updateAndInvoke();
	  return true;
	};

	Router.prototype.invoke = function(fns, thisArg, callback) {
	  var self = this;
	  var apply;
	  if (this.async) {
	    apply = function(fn, next) {
	      if (Array.isArray(fn)) {
	        return _asyncEverySeries(fn, apply, next);
	      } else if (typeof fn == "function") {
	        fn.apply(thisArg, (fns.captures || []).concat(next));
	      }
	    };
	    _asyncEverySeries(fns, apply, function() {
	      if (callback) {
	        callback.apply(thisArg, arguments);
	      }
	    });
	  } else {
	    apply = function(fn) {
	      if (Array.isArray(fn)) {
	        return _every(fn, apply);
	      } else if (typeof fn === "function") {
	        return fn.apply(thisArg, fns.captures || []);
	      } else if (typeof fn === "string" && self.resource) {
	        self.resource[fn].apply(thisArg, fns.captures || []);
	      }
	    };
	    _every(fns, apply);
	  }
	};

	Router.prototype.traverse = function(method, path, routes, regexp, filter) {
	  var fns = [], current, exact, match, next, that;
	  function filterRoutes(routes) {
	    if (!filter) {
	      return routes;
	    }
	    function deepCopy(source) {
	      var result = [];
	      for (var i = 0; i < source.length; i++) {
	        result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
	      }
	      return result;
	    }
	    function applyFilter(fns) {
	      for (var i = fns.length - 1; i >= 0; i--) {
	        if (Array.isArray(fns[i])) {
	          applyFilter(fns[i]);
	          if (fns[i].length === 0) {
	            fns.splice(i, 1);
	          }
	        } else {
	          if (!filter(fns[i])) {
	            fns.splice(i, 1);
	          }
	        }
	      }
	    }
	    var newRoutes = deepCopy(routes);
	    newRoutes.matched = routes.matched;
	    newRoutes.captures = routes.captures;
	    newRoutes.after = routes.after.filter(filter);
	    applyFilter(newRoutes);
	    return newRoutes;
	  }
	  if (path === this.delimiter && routes[method]) {
	    next = [ [ routes.before, routes[method] ].filter(Boolean) ];
	    next.after = [ routes.after ].filter(Boolean);
	    next.matched = true;
	    next.captures = [];
	    return filterRoutes(next);
	  }
	  for (var r in routes) {
	    if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && typeof routes[r] === "object" && !Array.isArray(routes[r]))) {
	      current = exact = regexp + this.delimiter + r;
	      if (!this.strict) {
	        exact += "[" + this.delimiter + "]?";
	      }
	      match = path.match(new RegExp("^" + exact));
	      if (!match) {
	        continue;
	      }
	      if (match[0] && match[0] == path && routes[r][method]) {
	        next = [ [ routes[r].before, routes[r][method] ].filter(Boolean) ];
	        next.after = [ routes[r].after ].filter(Boolean);
	        next.matched = true;
	        next.captures = match.slice(1);
	        if (this.recurse && routes === this.routes) {
	          next.push([ routes.before, routes.on ].filter(Boolean));
	          next.after = next.after.concat([ routes.after ].filter(Boolean));
	        }
	        return filterRoutes(next);
	      }
	      next = this.traverse(method, path, routes[r], current);
	      if (next.matched) {
	        if (next.length > 0) {
	          fns = fns.concat(next);
	        }
	        if (this.recurse) {
	          fns.push([ routes[r].before, routes[r].on ].filter(Boolean));
	          next.after = next.after.concat([ routes[r].after ].filter(Boolean));
	          if (routes === this.routes) {
	            fns.push([ routes["before"], routes["on"] ].filter(Boolean));
	            next.after = next.after.concat([ routes["after"] ].filter(Boolean));
	          }
	        }
	        fns.matched = true;
	        fns.captures = next.captures;
	        fns.after = next.after;
	        return filterRoutes(fns);
	      }
	    }
	  }
	  return false;
	};

	Router.prototype.insert = function(method, path, route, parent) {
	  var methodType, parentType, isArray, nested, part;
	  path = path.filter(function(p) {
	    return p && p.length > 0;
	  });
	  parent = parent || this.routes;
	  part = path.shift();
	  if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
	    part = regifyString(part, this.params);
	  }
	  if (path.length > 0) {
	    parent[part] = parent[part] || {};
	    return this.insert(method, path, route, parent[part]);
	  }
	  if (!part && !path.length && parent === this.routes) {
	    methodType = typeof parent[method];
	    switch (methodType) {
	     case "function":
	      parent[method] = [ parent[method], route ];
	      return;
	     case "object":
	      parent[method].push(route);
	      return;
	     case "undefined":
	      parent[method] = route;
	      return;
	    }
	    return;
	  }
	  parentType = typeof parent[part];
	  isArray = Array.isArray(parent[part]);
	  if (parent[part] && !isArray && parentType == "object") {
	    methodType = typeof parent[part][method];
	    switch (methodType) {
	     case "function":
	      parent[part][method] = [ parent[part][method], route ];
	      return;
	     case "object":
	      parent[part][method].push(route);
	      return;
	     case "undefined":
	      parent[part][method] = route;
	      return;
	    }
	  } else if (parentType == "undefined") {
	    nested = {};
	    nested[method] = route;
	    parent[part] = nested;
	    return;
	  }
	  throw new Error("Invalid route context: " + parentType);
	};



	Router.prototype.extend = function(methods) {
	  var self = this, len = methods.length, i;
	  function extend(method) {
	    self._methods[method] = true;
	    self[method] = function() {
	      var extra = arguments.length === 1 ? [ method, "" ] : [ method ];
	      self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
	    };
	  }
	  for (i = 0; i < len; i++) {
	    extend(methods[i]);
	  }
	};

	Router.prototype.runlist = function(fns) {
	  var runlist = this.every && this.every.before ? [ this.every.before ].concat(_flatten(fns)) : _flatten(fns);
	  if (this.every && this.every.on) {
	    runlist.push(this.every.on);
	  }
	  runlist.captures = fns.captures;
	  runlist.source = fns.source;
	  return runlist;
	};

	Router.prototype.mount = function(routes, path) {
	  if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
	    return;
	  }
	  var self = this;
	  path = path || [];
	  if (!Array.isArray(path)) {
	    path = path.split(self.delimiter);
	  }
	  function insertOrMount(route, local) {
	    var rename = route, parts = route.split(self.delimiter), routeType = typeof routes[route], isRoute = parts[0] === "" || !self._methods[parts[0]], event = isRoute ? "on" : rename;
	    if (isRoute) {
	      rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [ "" ])[0].length);
	      parts.shift();
	    }
	    if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
	      local = local.concat(parts);
	      self.mount(routes[route], local);
	      return;
	    }
	    if (isRoute) {
	      local = local.concat(rename.split(self.delimiter));
	      local = terminator(local, self.delimiter);
	    }
	    self.insert(event, local, routes[route]);
	  }
	  for (var route in routes) {
	    if (routes.hasOwnProperty(route)) {
	      insertOrMount(route, path.slice(0));
	    }
	  }
	};



	}( true ? exports : window));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(22);

	var _docsDrawerHtml = __webpack_require__(24);

	var _docsDrawerHtml2 = _interopRequireDefault(_docsDrawerHtml);

	// import external dependencies

	var _search = __webpack_require__(11);

	var _search2 = _interopRequireDefault(_search);

	// export component object
	exports['default'] = {
	    template: _docsDrawerHtml2['default'],
	    replace: true,
	    data: function data() {
	        return {
	            currentView: ''
	        };
	    },
	    props: {
	        routes: {
	            type: Array,
	            required: true
	        },
	        pkg: {
	            type: Object,
	            required: true
	        }
	    },
	    components: {
	        docsSearch: _search2['default']
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./docs-drawer.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./docs-drawer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/* offcanvas menu */\n.offcanvas-drawer .close {\n  padding-top: 0.35em; }\n\n.navbar a.list-group-item {\n  width: 100%;\n  color: #C5C5C5;\n  text-align: inherit;\n  background-color: rgba(255, 255, 255, 0);\n  border: 1px solid rgba(221, 221, 221, 0.04);\n  border-right: 0;\n  border-left: 0; }\n", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div class=\"navbar navbar-collapse navbar-dark navbar-primary bg-inverse navbar-static-top navbar-full navbar-offcanvas-drawer\">\r\n\t<a href=\"{{pkg.homepage}}\" class=\"btn btn-success pull-xs-left\" target=\"_blank\" v-on:click=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">\r\n  \t&#9733; Github\r\n  </a>\r\n  <!-- close button -->\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" v-on:click=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">\r\n    <span aria-hidden=\"true\">×</span>\r\n    <span class=\"sr-only\">Close</span>\r\n  </button>\r\n  <div class=\"m-b clearfix\"></div>\r\n  <div class=\"list-group list-group-flush\">\r\n\t  <a href=\"#{{item.url}}\" \r\n\t    v-bind:class=\"{\r\n\t      'list-group-item': true, \r\n\t    }\" \r\n\t    v-for=\"item in routes\"\r\n\t    v-on:click=\"$root.$broadcast('toggle::offcanvas-drawer', 'main')\">\r\n\t    {{item.title}}\r\n\t  </a>\r\n\t</div>\r\n</div>";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// import styling
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(26);

	// import template

	var _offcanvasDrawerHtml = __webpack_require__(28);

	var _offcanvasDrawerHtml2 = _interopRequireDefault(_offcanvasDrawerHtml);

	var offcanvasWrapper = {
	  template: _offcanvasDrawerHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  props: {
	    id: {
	      type: String,
	      required: true,
	      'default': ''
	    },
	    animation: {
	      type: String,
	      'default': 'ease'
	    },
	    align: {
	      type: String,
	      'default': 'left'
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	      if (this.show) {
	        this.$dispatch('shown::offcanvas-drawer', this.id);
	      } else {
	        this.$dispatch('hiden::offcanvas-drawer', this.id);
	      }
	    }
	  },
	  events: {
	    'toggle::offcanvas-drawer': function toggleOffcanvasDrawer(id) {
	      if (id === this.id) {
	        this.toggle();
	      }
	    }
	  }
	};

	exports.offcanvasWrapper = offcanvasWrapper;
	var offcanvasDrawer = {
	  template: '<div class="offcanvas-drawer"><slot></slot></div>',
	  replace: true
	};
	exports.offcanvasDrawer = offcanvasDrawer;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./offcanvas-drawer.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./offcanvas-drawer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*\r\n * Off Canvas drawer\r\n * based on https://scotch.io/tutorials/off-canvas-drawers-with-css3-transitions-and-transforms\r\n * --------------------------------------------------\r\n */\n.gritcode-offcanvas-drawer {\n  width: 100%;\n  height: auto;\n  min-height: 100%;\n  position: relative;\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n          transform: translate(0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -ms-transform: translate(0, 0);\n  -webkit-transition: 300ms ease transform;\n  transition: 300ms ease transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n  .gritcode-offcanvas-drawer .offcanvas-drawer {\n    width: 100%;\n    left: -100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    z-index: 9999; }\n    .gritcode-offcanvas-drawer .offcanvas-drawer .close {\n      color: #fff; }\n    .gritcode-offcanvas-drawer .offcanvas-drawer .navbar {\n      height: 100%; }\n    @media (min-width: 360px) {\n      .gritcode-offcanvas-drawer .offcanvas-drawer {\n        width: 300px;\n        left: -300px; } }\n  .gritcode-offcanvas-drawer.active {\n    -webkit-transform: translate(100%, 0);\n        -ms-transform: translate(100%, 0);\n            transform: translate(100%, 0);\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n    -ms-transform: translate(100%, 0); }\n    @media (min-width: 360px) {\n      .gritcode-offcanvas-drawer.active {\n        -webkit-transform: translate(300px, 0);\n            -ms-transform: translate(300px, 0);\n                transform: translate(300px, 0);\n        -webkit-transform: translate3d(300px, 0, 0);\n                transform: translate3d(300px, 0, 0);\n        -ms-transform: translate(300px, 0); } }\n\n.gritcode-offcanvas-drawer.right .offcanvas-drawer {\n  left: auto;\n  right: -100%; }\n  @media (min-width: 360px) {\n    .gritcode-offcanvas-drawer.right .offcanvas-drawer {\n      left: auto;\n      right: -300px; } }\n\n.gritcode-offcanvas-drawer.right.active {\n  -webkit-transform: translate(-100%, 0);\n      -ms-transform: translate(-100%, 0);\n          transform: translate(-100%, 0);\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n  -ms-transform: translate(-100%, 0); }\n  @media (min-width: 360px) {\n    .gritcode-offcanvas-drawer.right.active {\n      -webkit-transform: translate(-300px, 0);\n          -ms-transform: translate(-300px, 0);\n              transform: translate(-300px, 0);\n      -webkit-transform: translate3d(-300px, 0, 0);\n              transform: translate3d(-300px, 0, 0);\n      -ms-transform: translate(-300px, 0); } }\n\n.gritcode-offcanvas-drawer.ease {\n  -webkit-transition: 300ms ease transform;\n  transition: 300ms ease transform; }\n\n.gritcode-offcanvas-drawer.linear {\n  -webkit-transition: 300ms linear transform;\n  transition: 300ms linear transform; }\n\n.gritcode-offcanvas-drawer.ease-in {\n  -webkit-transition: 300ms ease-in transform;\n  transition: 300ms ease-in transform; }\n\n.gritcode-offcanvas-drawer.ease-out {\n  -webkit-transition: 300ms ease-out transform;\n  transition: 300ms ease-out transform; }\n\n.gritcode-offcanvas-drawer.ease-in-out {\n  -webkit-transition: 300ms ease-out transform;\n  transition: 300ms ease-out transform; }\n\n.gritcode-offcanvas-drawer.bounce {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15);\n  transition: transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15), -webkit-transform 300ms cubic-bezier(0.32, 1.25, 0.375, 1.15); }\n\n.gritcode-offcanvas-drawer.snappy {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1);\n  transition: transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1), -webkit-transform 300ms cubic-bezier(0.694, 0.0482, 0.335, 1); }\n\n.gritcode-offcanvas-drawer.out-of-orbit {\n  -webkit-transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: transform 300ms cubic-bezier(1, 0, 0.61, 0.15);\n  transition: transform 300ms cubic-bezier(1, 0, 0.61, 0.15), -webkit-transform 300ms cubic-bezier(1, 0, 0.61, 0.15); }\n\n.gritcode-offcanvas-drawer.none {\n  -webkit-transition: none;\n  transition: none; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active .offcanvas-drawer, .ie9 .gritcode-offcanvas-drawer.active .offcanvas-drawer, .oldie .gritcode-offcanvas-drawer.active .offcanvas-drawer, .no-csstransitions .gritcode-offcanvas-drawer.active .offcanvas-drawer {\n  left: 0; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active .navbar-fixed-top, .lt-ie10 .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .ie9 .gritcode-offcanvas-drawer.active .navbar-fixed-top, .ie9 .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .oldie .gritcode-offcanvas-drawer.active .navbar-fixed-top, .oldie .gritcode-offcanvas-drawer.active .navbar-fixed-bottom, .no-csstransitions .gritcode-offcanvas-drawer.active .navbar-fixed-top, .no-csstransitions .gritcode-offcanvas-drawer.active .navbar-fixed-bottom {\n  left: 300px;\n  right: auto;\n  width: 100%; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .ie9 .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .oldie .gritcode-offcanvas-drawer.active.right .offcanvas-drawer, .no-csstransitions .gritcode-offcanvas-drawer.active.right .offcanvas-drawer {\n  left: auto;\n  right: 0; }\n\n.lt-ie10 .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .lt-ie10 .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .ie9 .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .ie9 .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .oldie .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .oldie .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom, .no-csstransitions .gritcode-offcanvas-drawer.active.right .navbar-fixed-top, .no-csstransitions .gritcode-offcanvas-drawer.active.right .navbar-fixed-bottom {\n  left: -300px;\n  right: auto;\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{id}}\" class=\"gritcode-offcanvas-drawer {{animation}} {{align}} {{show ? 'active' : ''}}\">\r\n  <slot></slot>\r\n</div>\r\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT GLOBAL STYLING
	 */
	// import normalize, grid, utilities and
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(1);

	// impoprt styling required for docs

	__webpack_require__(30);

	__webpack_require__(35);

	__webpack_require__(38);

	__webpack_require__(41);

	__webpack_require__(42);

	__webpack_require__(49);

	__webpack_require__(52);

	__webpack_require__(57);

	__webpack_require__(60);

	__webpack_require__(61);

	__webpack_require__(62);

	__webpack_require__(65);

	__webpack_require__(68);

	__webpack_require__(69);

	__webpack_require__(72);

	__webpack_require__(75);

	__webpack_require__(75);

	__webpack_require__(78);

	__webpack_require__(81);

	__webpack_require__(84);

	__webpack_require__(87);

	__webpack_require__(90);

	__webpack_require__(93);

	__webpack_require__(75);

	__webpack_require__(96);

	// import modules and pages

	var _srcDocsIntroduction = __webpack_require__(99);

	var _srcDocsIntroduction2 = _interopRequireDefault(_srcDocsIntroduction);

	var _srcDocsAccordion = __webpack_require__(101);

	var _srcDocsAccordion2 = _interopRequireDefault(_srcDocsAccordion);

	var _srcDocsAlert = __webpack_require__(109);

	var _srcDocsAlert2 = _interopRequireDefault(_srcDocsAlert);

	var _srcDocsBreadcrumb = __webpack_require__(115);

	var _srcDocsBreadcrumb2 = _interopRequireDefault(_srcDocsBreadcrumb);

	var _srcDocsButtonGroup = __webpack_require__(121);

	var _srcDocsButtonGroup2 = _interopRequireDefault(_srcDocsButtonGroup);

	var _srcDocsButtonCheckbox = __webpack_require__(131);

	var _srcDocsButtonCheckbox2 = _interopRequireDefault(_srcDocsButtonCheckbox);

	var _srcDocsButtonRadio = __webpack_require__(138);

	var _srcDocsButtonRadio2 = _interopRequireDefault(_srcDocsButtonRadio);

	var _srcDocsButtons = __webpack_require__(144);

	var _srcDocsButtons2 = _interopRequireDefault(_srcDocsButtons);

	var _srcDocsCard = __webpack_require__(148);

	var _srcDocsCard2 = _interopRequireDefault(_srcDocsCard);

	var _srcDocsCarousel = __webpack_require__(154);

	var _srcDocsCarousel2 = _interopRequireDefault(_srcDocsCarousel);

	var _srcDocsCollapse = __webpack_require__(160);

	var _srcDocsCollapse2 = _interopRequireDefault(_srcDocsCollapse);

	var _srcDocsDropdown = __webpack_require__(164);

	var _srcDocsDropdown2 = _interopRequireDefault(_srcDocsDropdown);

	var _srcDocsDropdownSelect = __webpack_require__(172);

	var _srcDocsDropdownSelect2 = _interopRequireDefault(_srcDocsDropdownSelect);

	var _srcDocsFormCheckbox = __webpack_require__(178);

	var _srcDocsFormCheckbox2 = _interopRequireDefault(_srcDocsFormCheckbox);

	var _srcDocsFormRadio = __webpack_require__(187);

	var _srcDocsFormRadio2 = _interopRequireDefault(_srcDocsFormRadio);

	var _srcDocsFormInput = __webpack_require__(193);

	var _srcDocsFormInput2 = _interopRequireDefault(_srcDocsFormInput);

	var _srcDocsFormSelect = __webpack_require__(199);

	var _srcDocsFormSelect2 = _interopRequireDefault(_srcDocsFormSelect);

	var _srcDocsFormTextarea = __webpack_require__(205);

	var _srcDocsFormTextarea2 = _interopRequireDefault(_srcDocsFormTextarea);

	var _srcDocsImages = __webpack_require__(211);

	var _srcDocsImages2 = _interopRequireDefault(_srcDocsImages);

	var _srcDocsJumbotron = __webpack_require__(216);

	var _srcDocsJumbotron2 = _interopRequireDefault(_srcDocsJumbotron);

	var _srcDocsLabels = __webpack_require__(222);

	var _srcDocsLabels2 = _interopRequireDefault(_srcDocsLabels);

	var _srcDocsListGroup = __webpack_require__(229);

	var _srcDocsListGroup2 = _interopRequireDefault(_srcDocsListGroup);

	var _srcDocsMedia = __webpack_require__(237);

	var _srcDocsMedia2 = _interopRequireDefault(_srcDocsMedia);

	var _srcDocsModal = __webpack_require__(243);

	var _srcDocsModal2 = _interopRequireDefault(_srcDocsModal);

	var _srcDocsNav = __webpack_require__(249);

	var _srcDocsNav2 = _interopRequireDefault(_srcDocsNav);

	var _srcDocsNavbar = __webpack_require__(257);

	var _srcDocsNavbar2 = _interopRequireDefault(_srcDocsNavbar);

	var _srcDocsPager = __webpack_require__(263);

	var _srcDocsPager2 = _interopRequireDefault(_srcDocsPager);

	var _srcDocsPagination = __webpack_require__(269);

	var _srcDocsPagination2 = _interopRequireDefault(_srcDocsPagination);

	var _srcDocsPopover = __webpack_require__(275);

	var _srcDocsPopover2 = _interopRequireDefault(_srcDocsPopover);

	var _srcDocsProgress = __webpack_require__(284);

	var _srcDocsProgress2 = _interopRequireDefault(_srcDocsProgress);

	var _srcDocsTables = __webpack_require__(290);

	var _srcDocsTables2 = _interopRequireDefault(_srcDocsTables);

	var _srcDocsTabs = __webpack_require__(296);

	var _srcDocsTabs2 = _interopRequireDefault(_srcDocsTabs);

	var _srcDocsTooltip = __webpack_require__(302);

	var _srcDocsTooltip2 = _interopRequireDefault(_srcDocsTooltip);

	exports['default'] = {
		pages: [_srcDocsIntroduction2['default'], _srcDocsAccordion2['default'], _srcDocsAlert2['default'], _srcDocsBreadcrumb2['default'], _srcDocsButtonGroup2['default'], _srcDocsButtonCheckbox2['default'], _srcDocsButtonRadio2['default'], _srcDocsButtons2['default'], _srcDocsCard2['default'], _srcDocsCarousel2['default'], _srcDocsCollapse2['default'], _srcDocsDropdown2['default'], _srcDocsDropdownSelect2['default'], _srcDocsFormCheckbox2['default'], _srcDocsFormRadio2['default'], _srcDocsFormInput2['default'], _srcDocsFormSelect2['default'], _srcDocsFormTextarea2['default'], _srcDocsImages2['default'], _srcDocsJumbotron2['default'], _srcDocsLabels2['default'], _srcDocsListGroup2['default'], _srcDocsMedia2['default'], _srcDocsModal2['default'], _srcDocsNav2['default'], _srcDocsNavbar2['default'], _srcDocsPager2['default'], _srcDocsPagination2['default'], _srcDocsPopover2['default'], _srcDocsProgress2['default'], _srcDocsTables2['default'], _srcDocsTabs2['default'], _srcDocsTooltip2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(31);

	__webpack_require__(33);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_alert.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_alert.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".alert {\n  padding: 15px;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: bold; }\n\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d0e9c6;\n  color: #3c763d; }\n  .alert-success hr {\n    border-top-color: #c1e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bcdff1;\n  color: #31708f; }\n  .alert-info hr {\n    border-top-color: #a6d5ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faf2cc;\n  color: #8a6d3b; }\n  .alert-warning hr {\n    border-top-color: #f7ecb5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebcccc;\n  color: #a94442; }\n  .alert-danger hr {\n    border-top-color: #e4b9b9; }\n  .alert-danger .alert-link {\n    color: #843534; }\n", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_buttons.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_buttons.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".btn {\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:focus, .btn:hover {\n    text-decoration: none; }\n  .btn.focus {\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    background-image: none;\n    outline: 0; }\n  .btn.disabled, .btn:disabled {\n    cursor: not-allowed;\n    opacity: .65; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #3e2c5a;\n    border-color: #3a2953; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #3e2c5a;\n    border-color: #3a2953; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #3e2c5a;\n    border-color: #3a2953;\n    background-image: none; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #2e2042;\n      border-color: #1b1327; }\n  .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary:disabled:focus, .btn-primary:disabled.focus {\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .btn-primary.disabled:hover, .btn-primary:disabled:hover {\n    background-color: #563d7c;\n    border-color: #563d7c; }\n\n.btn-secondary {\n  color: #373a3c;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-secondary:hover {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-secondary:active, .btn-secondary.active,\n  .open > .btn-secondary.dropdown-toggle {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad;\n    background-image: none; }\n    .btn-secondary:active:hover, .btn-secondary:active:focus, .btn-secondary:active.focus, .btn-secondary.active:hover, .btn-secondary.active:focus, .btn-secondary.active.focus,\n    .open > .btn-secondary.dropdown-toggle:hover,\n    .open > .btn-secondary.dropdown-toggle:focus,\n    .open > .btn-secondary.dropdown-toggle.focus {\n      color: #373a3c;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-secondary.disabled:focus, .btn-secondary.disabled.focus, .btn-secondary:disabled:focus, .btn-secondary:disabled.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-secondary.disabled:hover, .btn-secondary:disabled:hover {\n    background-color: #fff;\n    border-color: #ccc; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2;\n    background-image: none; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1f7e9a; }\n  .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info:disabled:focus, .btn-info:disabled.focus {\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info.disabled:hover, .btn-info:disabled:hover {\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n\n.btn-success {\n  color: #fff;\n  background-color: #42b983;\n  border-color: #42b983; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #359368;\n    border-color: #328c63; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #359368;\n    border-color: #328c63; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #359368;\n    border-color: #328c63;\n    background-image: none; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #2b7956;\n      border-color: #205b40; }\n  .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success:disabled:focus, .btn-success:disabled.focus {\n    background-color: #42b983;\n    border-color: #42b983; }\n  .btn-success.disabled:hover, .btn-success:disabled:hover {\n    background-color: #42b983;\n    border-color: #42b983; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316;\n    background-image: none; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #b06d0f; }\n  .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning:disabled:focus, .btn-warning:disabled.focus {\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning.disabled:hover, .btn-warning:disabled:hover {\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a;\n    background-image: none; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #8b211e; }\n  .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger:disabled:focus, .btn-danger:disabled.focus {\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger.disabled:hover, .btn-danger:disabled:hover {\n    background-color: #d9534f;\n    border-color: #d9534f; }\n\n.btn-primary-outline {\n  color: #563d7c;\n  background-image: none;\n  background-color: transparent;\n  border-color: #563d7c; }\n  .btn-primary-outline:focus, .btn-primary-outline.focus, .btn-primary-outline:active, .btn-primary-outline.active,\n  .open > .btn-primary-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .btn-primary-outline:hover {\n    color: #fff;\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .btn-primary-outline.disabled:focus, .btn-primary-outline.disabled.focus, .btn-primary-outline:disabled:focus, .btn-primary-outline:disabled.focus {\n    border-color: #886ab5; }\n  .btn-primary-outline.disabled:hover, .btn-primary-outline:disabled:hover {\n    border-color: #886ab5; }\n\n.btn-secondary-outline {\n  color: #ccc;\n  background-image: none;\n  background-color: transparent;\n  border-color: #ccc; }\n  .btn-secondary-outline:focus, .btn-secondary-outline.focus, .btn-secondary-outline:active, .btn-secondary-outline.active,\n  .open > .btn-secondary-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-secondary-outline:hover {\n    color: #fff;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-secondary-outline.disabled:focus, .btn-secondary-outline.disabled.focus, .btn-secondary-outline:disabled:focus, .btn-secondary-outline:disabled.focus {\n    border-color: white; }\n  .btn-secondary-outline.disabled:hover, .btn-secondary-outline:disabled:hover {\n    border-color: white; }\n\n.btn-info-outline {\n  color: #5bc0de;\n  background-image: none;\n  background-color: transparent;\n  border-color: #5bc0de; }\n  .btn-info-outline:focus, .btn-info-outline.focus, .btn-info-outline:active, .btn-info-outline.active,\n  .open > .btn-info-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info-outline:hover {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info-outline.disabled:focus, .btn-info-outline.disabled.focus, .btn-info-outline:disabled:focus, .btn-info-outline:disabled.focus {\n    border-color: #b0e1ef; }\n  .btn-info-outline.disabled:hover, .btn-info-outline:disabled:hover {\n    border-color: #b0e1ef; }\n\n.btn-success-outline {\n  color: #42b983;\n  background-image: none;\n  background-color: transparent;\n  border-color: #42b983; }\n  .btn-success-outline:focus, .btn-success-outline.focus, .btn-success-outline:active, .btn-success-outline.active,\n  .open > .btn-success-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #42b983;\n    border-color: #42b983; }\n  .btn-success-outline:hover {\n    color: #fff;\n    background-color: #42b983;\n    border-color: #42b983; }\n  .btn-success-outline.disabled:focus, .btn-success-outline.disabled.focus, .btn-success-outline:disabled:focus, .btn-success-outline:disabled.focus {\n    border-color: #8bd6b4; }\n  .btn-success-outline.disabled:hover, .btn-success-outline:disabled:hover {\n    border-color: #8bd6b4; }\n\n.btn-warning-outline {\n  color: #f0ad4e;\n  background-image: none;\n  background-color: transparent;\n  border-color: #f0ad4e; }\n  .btn-warning-outline:focus, .btn-warning-outline.focus, .btn-warning-outline:active, .btn-warning-outline.active,\n  .open > .btn-warning-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning-outline:hover {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning-outline.disabled:focus, .btn-warning-outline.disabled.focus, .btn-warning-outline:disabled:focus, .btn-warning-outline:disabled.focus {\n    border-color: #f8d9ac; }\n  .btn-warning-outline.disabled:hover, .btn-warning-outline:disabled:hover {\n    border-color: #f8d9ac; }\n\n.btn-danger-outline {\n  color: #d9534f;\n  background-image: none;\n  background-color: transparent;\n  border-color: #d9534f; }\n  .btn-danger-outline:focus, .btn-danger-outline.focus, .btn-danger-outline:active, .btn-danger-outline.active,\n  .open > .btn-danger-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger-outline:hover {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger-outline.disabled:focus, .btn-danger-outline.disabled.focus, .btn-danger-outline:disabled:focus, .btn-danger-outline:disabled.focus {\n    border-color: #eba5a3; }\n  .btn-danger-outline.disabled:hover, .btn-danger-outline:disabled:hover {\n    border-color: #eba5a3; }\n\n.btn-link {\n  font-weight: normal;\n  color: #563d7c;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {\n    background-color: transparent; }\n  .btn-link, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover {\n    border-color: transparent; }\n  .btn-link:focus, .btn-link:hover {\n    color: #322449;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link:disabled:focus, .btn-link:disabled:hover {\n    color: #818a91;\n    text-decoration: none; }\n\n.btn-lg {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem; }\n\n.btn-sm {\n  padding: 0.25rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(36);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_breadcrumb.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_breadcrumb.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".breadcrumb {\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #eceeef;\n  border-radius: 0.25rem; }\n  .breadcrumb::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .breadcrumb > li {\n    float: left; }\n    .breadcrumb > li + li::before {\n      padding-right: .5rem;\n      padding-left: .5rem;\n      color: #818a91;\n      content: \"/\"; }\n  .breadcrumb > .active {\n    color: #818a91; }\n", ""]);

	// exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(39);

	__webpack_require__(33);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_button-group.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_button-group.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n    .btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 0.3em 0.3em 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 0.3em 0.3em; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n", ""]);

	// exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(33);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(43);

	__webpack_require__(33);

	__webpack_require__(45);

	__webpack_require__(47);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_card.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_card.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".card {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem;\n  background-color: #fff;\n  border: 1px solid #e5e5e5;\n  border-radius: 0.25rem; }\n\n.card-block {\n  padding: 1.25rem; }\n\n.card-title {\n  margin-bottom: 0.75rem; }\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-radius: 0.25rem 0.25rem 0 0; }\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-radius: 0 0 0.25rem 0.25rem; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #e5e5e5; }\n  .card-header:first-child {\n    border-radius: 0.25rem 0.25rem 0 0; }\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: #f5f5f5;\n  border-top: 1px solid #e5e5e5; }\n  .card-footer:last-child {\n    border-radius: 0 0 0.25rem 0.25rem; }\n\n.card-primary {\n  background-color: #563d7c;\n  border-color: #563d7c; }\n\n.card-success {\n  background-color: #42b983;\n  border-color: #42b983; }\n\n.card-info {\n  background-color: #5bc0de;\n  border-color: #5bc0de; }\n\n.card-warning {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e; }\n\n.card-danger {\n  background-color: #d9534f;\n  border-color: #d9534f; }\n\n.card-primary-outline {\n  background-color: transparent;\n  border-color: #563d7c; }\n\n.card-secondary-outline {\n  background-color: transparent;\n  border-color: #ccc; }\n\n.card-info-outline {\n  background-color: transparent;\n  border-color: #5bc0de; }\n\n.card-success-outline {\n  background-color: transparent;\n  border-color: #42b983; }\n\n.card-warning-outline {\n  background-color: transparent;\n  border-color: #f0ad4e; }\n\n.card-danger-outline {\n  background-color: transparent;\n  border-color: #d9534f; }\n\n.card-inverse .card-header,\n.card-inverse .card-footer {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n\n.card-inverse .card-header,\n.card-inverse .card-footer,\n.card-inverse .card-title,\n.card-inverse .card-blockquote {\n  color: #fff; }\n\n.card-inverse .card-link,\n.card-inverse .card-text,\n.card-inverse .card-blockquote > footer {\n  color: rgba(255, 255, 255, 0.65); }\n\n.card-inverse .card-link:focus, .card-inverse .card-link:hover {\n  color: #fff; }\n\n.card-blockquote {\n  padding: 0;\n  margin-bottom: 0;\n  border-left: 0; }\n\n.card-img {\n  border-radius: 0.25rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img-top {\n  border-radius: 0.25rem 0.25rem 0 0; }\n\n.card-img-bottom {\n  border-radius: 0 0 0.25rem 0.25rem; }\n\n@media (min-width: 544px) {\n  .card-deck {\n    display: table;\n    table-layout: fixed;\n    border-spacing: 1.25rem 0; }\n    .card-deck .card {\n      display: table-cell;\n      width: 1%;\n      vertical-align: top; }\n  .card-deck-wrapper {\n    margin-right: -1.25rem;\n    margin-left: -1.25rem; } }\n\n@media (min-width: 544px) {\n  .card-group {\n    display: table;\n    width: 100%;\n    table-layout: fixed; }\n    .card-group .card {\n      display: table-cell;\n      vertical-align: top; }\n      .card-group .card + .card {\n        margin-left: 0;\n        border-left: 0; }\n      .card-group .card:first-child {\n        border-bottom-right-radius: 0;\n        border-top-right-radius: 0; }\n        .card-group .card:first-child .card-img-top {\n          border-top-right-radius: 0; }\n        .card-group .card:first-child .card-img-bottom {\n          border-bottom-right-radius: 0; }\n      .card-group .card:last-child {\n        border-bottom-left-radius: 0;\n        border-top-left-radius: 0; }\n        .card-group .card:last-child .card-img-top {\n          border-top-left-radius: 0; }\n        .card-group .card:last-child .card-img-bottom {\n          border-bottom-left-radius: 0; }\n      .card-group .card:not(:first-child):not(:last-child) {\n        border-radius: 0; }\n        .card-group .card:not(:first-child):not(:last-child) .card-img-top,\n        .card-group .card:not(:first-child):not(:last-child) .card-img-bottom {\n          border-radius: 0; } }\n\n@media (min-width: 544px) {\n  .card-columns {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 1.25rem;\n       -moz-column-gap: 1.25rem;\n            column-gap: 1.25rem; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n", ""]);

	// exports


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_images.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_images.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".img-fluid {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 0.3rem; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  line-height: 1.5;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #818a91; }\n", ""]);

	// exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_list-group.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_list-group.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".list-group {\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: .75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 0.25rem;\n    border-top-left-radius: 0.25rem; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.list-group-flush .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0; }\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0; }\n\na.list-group-item,\nbutton.list-group-item {\n  width: 100%;\n  color: #555;\n  text-align: inherit; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:focus, a.list-group-item:hover,\n  button.list-group-item:focus,\n  button.list-group-item:hover {\n    color: #555;\n    text-decoration: none;\n    background-color: #f5f5f5; }\n\n.list-group-item.disabled, .list-group-item.disabled:focus, .list-group-item.disabled:hover {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: #eceeef; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text {\n    color: #818a91; }\n\n.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:focus .list-group-item-text, .list-group-item.active:hover .list-group-item-text {\n    color: #beaed7; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:focus, a.list-group-item-success:hover,\n  button.list-group-item-success:focus,\n  button.list-group-item-success:hover {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active, a.list-group-item-success.active:focus, a.list-group-item-success.active:hover,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:focus,\n  button.list-group-item-success.active:hover {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:focus, a.list-group-item-info:hover,\n  button.list-group-item-info:focus,\n  button.list-group-item-info:hover {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active, a.list-group-item-info.active:focus, a.list-group-item-info.active:hover,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:focus,\n  button.list-group-item-info.active:hover {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:focus, a.list-group-item-warning:hover,\n  button.list-group-item-warning:focus,\n  button.list-group-item-warning:hover {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:focus, a.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active:hover {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:focus, a.list-group-item-danger:hover,\n  button.list-group-item-danger:focus,\n  button.list-group-item-danger:hover {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:focus, a.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active:hover {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n", ""]);

	// exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(45);

	__webpack_require__(50);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(51);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_carousel.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_carousel.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n  .carousel-inner > .carousel-item {\n    position: relative;\n    display: none;\n    -webkit-transition: .6s ease-in-out left;\n    transition: .6s ease-in-out left; }\n    .carousel-inner > .carousel-item > img,\n    .carousel-inner > .carousel-item > a > img {\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .carousel-item {\n        -webkit-transition: -webkit-transform .6s ease-in-out;\n        transition: -webkit-transform .6s ease-in-out;\n        transition: transform .6s ease-in-out;\n        transition: transform .6s ease-in-out, -webkit-transform .6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n                perspective: 1000px; }\n        .carousel-inner > .carousel-item.next, .carousel-inner > .carousel-item.active.right {\n          left: 0;\n          -webkit-transform: translate3d(100%, 0, 0);\n                  transform: translate3d(100%, 0, 0); }\n        .carousel-inner > .carousel-item.prev, .carousel-inner > .carousel-item.active.left {\n          left: 0;\n          -webkit-transform: translate3d(-100%, 0, 0);\n                  transform: translate3d(-100%, 0, 0); }\n        .carousel-inner > .carousel-item.next.left, .carousel-inner > .carousel-item.prev.right, .carousel-inner > .carousel-item.active {\n          left: 0;\n          -webkit-transform: translate3d(0, 0, 0);\n                  transform: translate3d(0, 0, 0); } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  opacity: 0.5; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n  .carousel-control.right {\n    right: 0;\n    left: auto;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n  .carousel-control:focus, .carousel-control:hover {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    position: absolute;\n    top: 50%;\n    z-index: 5;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    margin-top: -10px;\n    font-family: serif;\n    line-height: 1; }\n  .carousel-control .icon-prev {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev::before {\n    content: \"\\2039\"; }\n  .carousel-control .icon-next::before {\n    content: \"\\203A\"; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: transparent;\n    border: 1px solid #fff;\n    border-radius: 10px; }\n  .carousel-indicators .active {\n    width: 12px;\n    height: 12px;\n    margin: 0;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn {\n    text-shadow: none; }\n\n@media (min-width: 544px) {\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px; }\n  .carousel-control .icon-prev {\n    margin-left: -15px; }\n  .carousel-control .icon-next {\n    margin-right: -15px; }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n", ""]);

	// exports


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(53);

	__webpack_require__(55);

	__webpack_require__(33);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_forms.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_forms.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #55595c;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem; }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: none; }\n  .form-control::-webkit-input-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control::placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #eceeef;\n    opacity: 1; }\n  .form-control:disabled {\n    cursor: not-allowed; }\n\n.form-control-file,\n.form-control-range {\n  display: block; }\n\n.form-control-label {\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 2.25rem; }\n  input[type=\"date\"].input-sm,\n  .input-group-sm input[type=\"date\"].form-control,\n  input[type=\"time\"].input-sm,\n  .input-group-sm\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-sm,\n  .input-group-sm\n  input[type=\"month\"].form-control {\n    line-height: 1.8625rem; }\n  input[type=\"date\"].input-lg,\n  .input-group-lg input[type=\"date\"].form-control,\n  input[type=\"time\"].input-lg,\n  .input-group-lg\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-lg,\n  .input-group-lg\n  input[type=\"month\"].form-control {\n    line-height: 3.16667rem; } }\n\n.form-control-static {\n  min-height: 2.25rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0; }\n  .form-control-static.form-control-sm, .form-control-static.form-control-lg {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.form-control-lg {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem; }\n  .radio label,\n  .checkbox label {\n    padding-left: 1.25rem;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n    .radio label input:only-child,\n    .checkbox label input:only-child {\n      position: static; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: .25rem;\n  margin-left: -1.25rem; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -.25rem; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: .75rem; }\n\ninput[type=\"radio\"]:disabled, input[type=\"radio\"].disabled,\ninput[type=\"checkbox\"]:disabled,\ninput[type=\"checkbox\"].disabled {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\n.checkbox-inline.disabled {\n  cursor: not-allowed; }\n\n.radio.disabled label,\n.checkbox.disabled label {\n  cursor: not-allowed; }\n\n.form-control-success,\n.form-control-warning,\n.form-control-danger {\n  padding-right: 2.25rem;\n  background-repeat: no-repeat;\n  background-position: center right 0.5625rem;\n  background-size: 1.4625rem 1.4625rem; }\n\n.has-success .text-help,\n.has-success .form-control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #42b983; }\n\n.has-success .form-control {\n  border-color: #42b983; }\n\n.has-success .input-group-addon {\n  color: #42b983;\n  border-color: #42b983;\n  background-color: #d6f1e5; }\n\n.has-success .form-control-feedback {\n  color: #42b983; }\n\n.has-success .form-control-success {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjNWNiODVjIiBkPSJNMjMzLjggNjEwYy0xMy4zIDAtMjYtNi0zNC0xNi44TDkwLjUgNDQ4LjhDNzYuMyA0MzAgODAgNDAzLjMgOTguOCAzODljMTguOC0xNC4yIDQ1LjUtMTAuNCA1OS44IDguNGw3MiA5NUw0NTEuMyAyNDJjMTIuNS0yMCAzOC44LTI2LjIgNTguOC0xMy43IDIwIDEyLjQgMjYgMzguNyAxMy43IDU4LjhMMjcwIDU5MGMtNy40IDEyLTIwLjIgMTkuNC0zNC4zIDIwaC0yeiIvPjwvc3ZnPg==\"); }\n\n.has-warning .text-help,\n.has-warning .form-control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #f0ad4e; }\n\n.has-warning .form-control {\n  border-color: #f0ad4e; }\n\n.has-warning .input-group-addon {\n  color: #f0ad4e;\n  border-color: #f0ad4e;\n  background-color: white; }\n\n.has-warning .form-control-feedback {\n  color: #f0ad4e; }\n\n.has-warning .form-control-warning {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZjBhZDRlIiBkPSJNNjAzIDY0MC4ybC0yNzguNS01MDljLTMuOC02LjYtMTAuOC0xMC42LTE4LjUtMTAuNnMtMTQuNyA0LTE4LjUgMTAuNkw5IDY0MC4yYy0zLjcgNi41LTMuNiAxNC40LjIgMjAuOCAzLjggNi41IDEwLjggMTAuNCAxOC4zIDEwLjRoNTU3YzcuNiAwIDE0LjYtNCAxOC40LTEwLjQgMy41LTYuNCAzLjYtMTQuNCAwLTIwLjh6bS0yNjYuNC0zMGgtNjEuMlY1NDloNjEuMnY2MS4yem0wLTEwN2gtNjEuMlYzMDRoNjEuMnYxOTl6Ii8+PC9zdmc+\"); }\n\n.has-danger .text-help,\n.has-danger .form-control-label,\n.has-danger .radio,\n.has-danger .checkbox,\n.has-danger .radio-inline,\n.has-danger .checkbox-inline,\n.has-danger.radio label,\n.has-danger.checkbox label,\n.has-danger.radio-inline label,\n.has-danger.checkbox-inline label {\n  color: #d9534f; }\n\n.has-danger .form-control {\n  border-color: #d9534f; }\n\n.has-danger .input-group-addon {\n  color: #d9534f;\n  border-color: #d9534f;\n  background-color: #fdf7f7; }\n\n.has-danger .form-control-feedback {\n  color: #d9534f; }\n\n.has-danger .form-control-danger {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZDk1MzRmIiBkPSJNNDQ3IDU0NC40Yy0xNC40IDE0LjQtMzcuNiAxNC40LTUyIDBsLTg5LTkyLjctODkgOTIuN2MtMTQuNSAxNC40LTM3LjcgMTQuNC01MiAwLTE0LjQtMTQuNC0xNC40LTM3LjYgMC01Mmw5Mi40LTk2LjMtOTIuNC05Ni4zYy0xNC40LTE0LjQtMTQuNC0zNy42IDAtNTJzMzcuNi0xNC4zIDUyIDBsODkgOTIuOCA4OS4yLTkyLjdjMTQuNC0xNC40IDM3LjYtMTQuNCA1MiAwIDE0LjMgMTQuNCAxNC4zIDM3LjYgMCA1MkwzNTQuNiAzOTZsOTIuNCA5Ni40YzE0LjQgMTQuNCAxNC40IDM3LjYgMCA1MnoiLz48L3N2Zz4=\"); }\n\n@media (min-width: 544px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .form-control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n", ""]);

	// exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_custom-forms.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_custom-forms.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".c-input {\n  position: relative;\n  display: inline;\n  padding-left: 1.5rem;\n  color: #555;\n  cursor: pointer; }\n  .c-input > input {\n    position: absolute;\n    z-index: -1;\n    opacity: 0; }\n    .c-input > input:checked ~ .c-indicator {\n      color: #fff;\n      background-color: #0074d9; }\n    .c-input > input:focus ~ .c-indicator {\n      box-shadow: 0 0 0 .075rem #fff, 0 0 0 .2rem #0074d9; }\n    .c-input > input:active ~ .c-indicator {\n      color: #fff;\n      background-color: #84c6ff; }\n  .c-input + .c-input {\n    margin-left: 1rem; }\n\n.c-indicator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  font-size: 65%;\n  line-height: 1rem;\n  color: #eee;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #eee;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%; }\n\n.c-checkbox .c-indicator {\n  border-radius: .25rem; }\n\n.c-checkbox input:checked ~ .c-indicator {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=); }\n\n.c-checkbox input:indeterminate ~ .c-indicator {\n  background-color: #0074d9;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOCA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDN2Mmg4VjNIMHoiLz4NCjwvc3ZnPg0K); }\n\n.c-radio .c-indicator {\n  border-radius: 50%; }\n\n.c-radio input:checked ~ .c-indicator {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQsMUMyLjMsMSwxLDIuMywxLDRzMS4zLDMsMywzczMtMS4zLDMtM1M1LjcsMSw0LDF6Ii8+DQo8L3N2Zz4NCg==); }\n\n.c-inputs-stacked .c-input {\n  display: inline; }\n  .c-inputs-stacked .c-input::after {\n    display: block;\n    margin-bottom: .25rem;\n    content: \"\"; }\n  .c-inputs-stacked .c-input + .c-input {\n    margin-left: 0; }\n\n.c-select {\n  display: inline-block;\n  max-width: 100%;\n  padding: .375rem 1.75rem .375rem .75rem;\n  padding-right: .75rem \\9;\n  color: #55595c;\n  vertical-align: middle;\n  background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC) no-repeat right 0.75rem center;\n  background-image: none \\9;\n  background-size: 8px 10px;\n  border: 1px solid #ccc;\n  -moz-appearance: none;\n  -webkit-appearance: none; }\n  .c-select:focus {\n    border-color: #51a7e8;\n    outline: none; }\n  .c-select::-ms-expand {\n    opacity: 0; }\n\n.c-select-sm {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  font-size: 12px; }\n  .c-select-sm:not([multiple]) {\n    height: 26px;\n    min-height: 26px; }\n\n.file {\n  position: relative;\n  display: inline-block;\n  height: 2.5rem;\n  cursor: pointer; }\n\n.file input {\n  min-width: 14rem;\n  margin: 0;\n  filter: alpha(opacity=0);\n  opacity: 0; }\n\n.file-custom {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: .25rem; }\n\n.file-custom::after {\n  content: \"Choose file...\"; }\n\n.file-custom::before {\n  position: absolute;\n  top: -.075rem;\n  right: -.075rem;\n  bottom: -.075rem;\n  z-index: 6;\n  display: block;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  content: \"Browse\";\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 0 .25rem .25rem 0; }\n", ""]);

	// exports


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(58);

	__webpack_require__(33);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_dropdown.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_dropdown.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: .25rem;\n  margin-left: .25rem;\n  vertical-align: middle;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-left: 0.3em solid transparent; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropup .dropdown-toggle::after {\n  border-top: 0;\n  border-bottom: 0.3em solid; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 1rem;\n  color: #373a3c;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n\n.dropdown-divider {\n  height: 1px;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  background-color: #e5e5e5; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #373a3c;\n  text-align: inherit;\n  white-space: nowrap;\n  background: none;\n  border: 0; }\n  .dropdown-item:focus, .dropdown-item:hover {\n    color: #2b2d2f;\n    text-decoration: none;\n    background-color: #f5f5f5; }\n  .dropdown-item.active, .dropdown-item.active:focus, .dropdown-item.active:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #563d7c;\n    outline: 0; }\n  .dropdown-item.disabled, .dropdown-item.disabled:focus, .dropdown-item.disabled:hover {\n    color: #818a91; }\n  .dropdown-item.disabled:focus, .dropdown-item.disabled:hover {\n    text-decoration: none;\n    cursor: not-allowed;\n    background-color: transparent;\n    background-image: none;\n    filter: \"progid:DXImageTransform.Microsoft.gradient(enabled = false)\"; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto; }\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #818a91;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 0.3em solid; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n", ""]);

	// exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(33);

	__webpack_require__(53);

	__webpack_require__(55);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(45);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(63);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_jumbotron.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_jumbotron.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #eceeef;\n  border-radius: 0.3rem; }\n  @media (min-width: 544px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n\n.jumbotron-hr {\n  border-top-color: #d0d5d8; }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n", ""]);

	// exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(66);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_labels.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_labels.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".label {\n  display: inline-block;\n  padding: .25em .4em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n  .label:empty {\n    display: none; }\n\n.btn .label {\n  position: relative;\n  top: -1px; }\n\na.label:focus, a.label:hover {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-pill {\n  padding-right: .6em;\n  padding-left: .6em;\n  border-radius: 10rem; }\n\n.label-default {\n  background-color: #818a91; }\n  .label-default[href]:focus, .label-default[href]:hover {\n    background-color: #687077; }\n\n.label-primary {\n  background-color: #563d7c; }\n  .label-primary[href]:focus, .label-primary[href]:hover {\n    background-color: #3e2c5a; }\n\n.label-success {\n  background-color: #42b983; }\n  .label-success[href]:focus, .label-success[href]:hover {\n    background-color: #359368; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:focus, .label-info[href]:hover {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:focus, .label-warning[href]:hover {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:focus, .label-danger[href]:hover {\n    background-color: #c9302c; }\n", ""]);

	// exports


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(47);

	__webpack_require__(66);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(70);

	__webpack_require__(45);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_media.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_media.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1; }\n\n.media-body {\n  width: 10000px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right {\n  padding-left: 10px; }\n\n.media-left {\n  padding-right: 10px; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n", ""]);

	// exports


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(73);

	__webpack_require__(33);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_modal.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_modal.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".modal-open {\n  overflow: hidden; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n  -webkit-overflow-scrolling: touch; }\n  .modal.fade .modal-dialog {\n    -webkit-transition: -webkit-transform .3s ease-out;\n    transition: -webkit-transform .3s ease-out;\n    transition: transform .3s ease-out;\n    transition: transform .3s ease-out, -webkit-transform .3s ease-out;\n    -webkit-transform: translate(0, -25%);\n        -ms-transform: translate(0, -25%);\n            transform: translate(0, -25%); }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n        -ms-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.in {\n    opacity: 0.5; }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .modal-footer .btn + .btn {\n    margin-bottom: 0;\n    margin-left: 5px; }\n  .modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 544px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 768px) {\n  .modal-lg {\n    width: 900px; } }\n", ""]);

	// exports


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(76);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(77);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_nav.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_nav.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: inline-block; }\n  .nav-link:focus, .nav-link:hover {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #818a91; }\n    .nav-link.disabled, .nav-link.disabled:focus, .nav-link.disabled:hover {\n      color: #818a91;\n      cursor: not-allowed;\n      background-color: transparent; }\n\n.nav-inline .nav-item {\n  display: inline-block; }\n\n.nav-inline .nav-item + .nav-item,\n.nav-inline .nav-link + .nav-link {\n  margin-left: 1rem; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .nav-tabs .nav-item {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs .nav-item + .nav-item {\n      margin-left: .2rem; }\n  .nav-tabs .nav-link {\n    display: block;\n    padding: 0.5em 1em;\n    border: 1px solid transparent;\n    border-radius: 0.25rem 0.25rem 0 0; }\n    .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #eceeef #eceeef #ddd; }\n    .nav-tabs .nav-link.disabled, .nav-tabs .nav-link.disabled:focus, .nav-tabs .nav-link.disabled:hover {\n      color: #818a91;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active, .nav-tabs .nav-link.active:focus, .nav-tabs .nav-link.active:hover,\n  .nav-tabs .nav-item.open .nav-link,\n  .nav-tabs .nav-item.open .nav-link:focus,\n  .nav-tabs .nav-item.open .nav-link:hover {\n    color: #55595c;\n    background-color: #fff;\n    border-color: #ddd #ddd transparent; }\n\n.nav-pills::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.nav-pills .nav-item {\n  float: left; }\n  .nav-pills .nav-item + .nav-item {\n    margin-left: .2rem; }\n\n.nav-pills .nav-link {\n  display: block;\n  padding: 0.5em 1em;\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active, .nav-pills .nav-link.active:focus, .nav-pills .nav-link.active:hover,\n.nav-pills .nav-item.open .nav-link,\n.nav-pills .nav-item.open .nav-link:focus,\n.nav-pills .nav-item.open .nav-link:hover {\n  color: #fff;\n  cursor: default;\n  background-color: #563d7c; }\n\n.nav-stacked .nav-item {\n  display: block;\n  float: none; }\n  .nav-stacked .nav-item + .nav-item {\n    margin-top: .2rem;\n    margin-left: 0; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n", ""]);

	// exports


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(79);

	__webpack_require__(33);

	__webpack_require__(76);

	__webpack_require__(53);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_navbar.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_navbar.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".navbar {\n  position: relative;\n  padding: 0.5rem 1rem; }\n  .navbar::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  @media (min-width: 544px) {\n    .navbar {\n      border-radius: 0.25rem; } }\n\n.navbar-full {\n  z-index: 1000; }\n  @media (min-width: 544px) {\n    .navbar-full {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 544px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0; }\n\n.navbar-fixed-bottom {\n  bottom: 0; }\n\n.navbar-sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1030;\n  width: 100%; }\n  @media (min-width: 544px) {\n    .navbar-sticky-top {\n      border-radius: 0; } }\n\n.navbar-brand {\n  float: left;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  margin-right: 1rem;\n  font-size: 1.25rem; }\n  .navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n\n.navbar-divider {\n  float: left;\n  width: 1px;\n  padding-top: .425rem;\n  padding-bottom: .425rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  overflow: hidden; }\n  .navbar-divider::before {\n    content: \"\\A0\"; }\n\n.navbar-toggler {\n  padding: .5rem .75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n@media (min-width: 544px) {\n  .navbar-toggleable-xs {\n    display: block !important; } }\n\n@media (min-width: 768px) {\n  .navbar-toggleable-sm {\n    display: block !important; } }\n\n@media (min-width: 992px) {\n  .navbar-toggleable-md {\n    display: block !important; } }\n\n.navbar-nav .nav-item {\n  float: left; }\n\n.navbar-nav .nav-link {\n  display: block;\n  padding-top: .425rem;\n  padding-bottom: .425rem; }\n  .navbar-nav .nav-link + .nav-link {\n    margin-left: 1rem; }\n\n.navbar-nav .nav-item + .nav-item {\n  margin-left: 1rem; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.8); }\n  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.8); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.3); }\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.6); }\n\n.navbar-light .navbar-nav .open > .nav-link, .navbar-light .navbar-nav .open > .nav-link:focus, .navbar-light .navbar-nav .open > .nav-link:hover,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link:focus,\n.navbar-light .navbar-nav .active > .nav-link:hover,\n.navbar-light .navbar-nav .nav-link.open,\n.navbar-light .navbar-nav .nav-link.open:focus,\n.navbar-light .navbar-nav .nav-link.open:hover,\n.navbar-light .navbar-nav .nav-link.active,\n.navbar-light .navbar-nav .nav-link.active:focus,\n.navbar-light .navbar-nav .nav-link.active:hover {\n  color: rgba(0, 0, 0, 0.8); }\n\n.navbar-light .navbar-divider {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.navbar-dark .navbar-brand {\n  color: white; }\n  .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n    color: white; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n\n.navbar-dark .navbar-nav .open > .nav-link, .navbar-dark .navbar-nav .open > .nav-link:focus, .navbar-dark .navbar-nav .open > .nav-link:hover,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link:focus,\n.navbar-dark .navbar-nav .active > .nav-link:hover,\n.navbar-dark .navbar-nav .nav-link.open,\n.navbar-dark .navbar-nav .nav-link.open:focus,\n.navbar-dark .navbar-nav .nav-link.open:hover,\n.navbar-dark .navbar-nav .nav-link.active,\n.navbar-dark .navbar-nav .nav-link.active:focus,\n.navbar-dark .navbar-nav .nav-link.active:hover {\n  color: white; }\n\n.navbar-dark .navbar-divider {\n  background-color: rgba(255, 255, 255, 0.075); }\n", ""]);

	// exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(82);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(83);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_pager.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_pager.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".pager {\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  list-style: none; }\n  .pager::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 15px; }\n    .pager li > a:focus, .pager li > a:hover {\n      text-decoration: none;\n      background-color: #eceeef; }\n  .pager .disabled > a, .pager .disabled > a:focus, .pager .disabled > a:hover {\n    color: #818a91;\n    cursor: not-allowed;\n    background-color: #fff; }\n  .pager .disabled > span {\n    color: #818a91;\n    cursor: not-allowed;\n    background-color: #fff; }\n\n.pager-next > a,\n.pager-next > span {\n  float: right; }\n\n.pager-prev > a,\n.pager-prev > span {\n  float: left; }\n", ""]);

	// exports


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(85);

	__webpack_require__(33);

	__webpack_require__(39);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_pagination.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_pagination.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.25rem; }\n\n.page-item {\n  display: inline; }\n  .page-item:first-child .page-link {\n    margin-left: 0;\n    border-bottom-left-radius: 0.25rem;\n    border-top-left-radius: 0.25rem; }\n  .page-item:last-child .page-link {\n    border-bottom-right-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .page-item.active .page-link, .page-item.active .page-link:focus, .page-item.active .page-link:hover {\n    z-index: 2;\n    color: #fff;\n    cursor: default;\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .page-item.disabled .page-link, .page-item.disabled .page-link:focus, .page-item.disabled .page-link:hover {\n    color: #818a91;\n    cursor: not-allowed;\n    background-color: #fff;\n    border-color: #ddd; }\n\n.page-link {\n  position: relative;\n  float: left;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.5;\n  color: #563d7c;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .page-link:focus, .page-link:hover {\n    color: #322449;\n    background-color: #eceeef;\n    border-color: #ddd; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.33333; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-bottom-left-radius: 0.3rem;\n  border-top-left-radius: 0.3rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-bottom-right-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n\n.pagination-sm .page-link {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-bottom-left-radius: 0.2rem;\n  border-top-left-radius: 0.2rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-bottom-right-radius: 0.2rem;\n  border-top-right-radius: 0.2rem; }\n", ""]);

	// exports


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(88);

	__webpack_require__(33);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(89);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_popover.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_popover.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 0.875rem;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n  .popover.popover-top, .popover.bs-tether-element-attached-bottom {\n    margin-top: -10px; }\n    .popover.popover-top .popover-arrow, .popover.bs-tether-element-attached-bottom .popover-arrow {\n      bottom: -11px;\n      left: 50%;\n      margin-left: -11px;\n      border-top-color: rgba(0, 0, 0, 0.25);\n      border-bottom-width: 0; }\n      .popover.popover-top .popover-arrow::after, .popover.bs-tether-element-attached-bottom .popover-arrow::after {\n        bottom: 1px;\n        margin-left: -10px;\n        content: \"\";\n        border-top-color: #fff;\n        border-bottom-width: 0; }\n  .popover.popover-right, .popover.bs-tether-element-attached-left {\n    margin-left: 10px; }\n    .popover.popover-right .popover-arrow, .popover.bs-tether-element-attached-left .popover-arrow {\n      top: 50%;\n      left: -11px;\n      margin-top: -11px;\n      border-right-color: rgba(0, 0, 0, 0.25);\n      border-left-width: 0; }\n      .popover.popover-right .popover-arrow::after, .popover.bs-tether-element-attached-left .popover-arrow::after {\n        bottom: -10px;\n        left: 1px;\n        content: \"\";\n        border-right-color: #fff;\n        border-left-width: 0; }\n  .popover.popover-bottom, .popover.bs-tether-element-attached-top {\n    margin-top: 10px; }\n    .popover.popover-bottom .popover-arrow, .popover.bs-tether-element-attached-top .popover-arrow {\n      top: -11px;\n      left: 50%;\n      margin-left: -11px;\n      border-top-width: 0;\n      border-bottom-color: rgba(0, 0, 0, 0.25); }\n      .popover.popover-bottom .popover-arrow::after, .popover.bs-tether-element-attached-top .popover-arrow::after {\n        top: 1px;\n        margin-left: -10px;\n        content: \"\";\n        border-top-width: 0;\n        border-bottom-color: #fff; }\n  .popover.popover-left, .popover.bs-tether-element-attached-right {\n    margin-left: -10px; }\n    .popover.popover-left .popover-arrow, .popover.bs-tether-element-attached-right .popover-arrow {\n      top: 50%;\n      right: -11px;\n      margin-top: -11px;\n      border-right-width: 0;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n      .popover.popover-left .popover-arrow::after, .popover.bs-tether-element-attached-right .popover-arrow::after {\n        right: 1px;\n        bottom: -10px;\n        content: \"\";\n        border-right-width: 0;\n        border-left-color: #fff; }\n\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: -0.7rem -0.7rem 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover-arrow, .popover-arrow::after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover-arrow {\n  border-width: 11px; }\n\n.popover-arrow::after {\n  content: \"\";\n  border-width: 10px; }\n", ""]);

	// exports


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(91);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_progress.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_progress.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: block;\n  width: 100%;\n  height: 1rem;\n  margin-bottom: 1rem; }\n\n.progress[value] {\n  color: #0074d9;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n\n.progress[value]::-webkit-progress-bar {\n  background-color: #eee;\n  border-radius: 0.25rem; }\n\n.progress[value]::-webkit-progress-value::before {\n  content: attr(value); }\n\n.progress[value]::-webkit-progress-value {\n  background-color: #0074d9;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.progress[value=\"100\"]::-webkit-progress-value {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n@media screen and (min-width: 0\\0) {\n  .progress {\n    background-color: #eee;\n    border-radius: 0.25rem; }\n  .progress-bar {\n    display: inline-block;\n    height: 1rem;\n    text-indent: -999rem;\n    background-color: #0074d9;\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n  .progress[width^=\"0\"] {\n    min-width: 2rem;\n    color: #818a91;\n    background-color: transparent;\n    background-image: none; }\n  .progress[width=\"100%\"] {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem; } }\n\n.progress-striped[value]::-webkit-progress-value {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-striped[value]::-moz-progress-bar {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-bar-striped {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-size: 1rem 1rem; } }\n\n.progress-animated[value]::-webkit-progress-value {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-animated[value]::-moz-progress-bar {\n  animation: progress-bar-stripes 2s linear infinite; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-animated .progress-bar-striped {\n    -webkit-animation: progress-bar-stripes 2s linear infinite;\n            animation: progress-bar-stripes 2s linear infinite; } }\n\n.progress-success[value]::-webkit-progress-value {\n  background-color: #42b983; }\n\n.progress-success[value]::-moz-progress-bar {\n  background-color: #42b983; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-success .progress-bar {\n    background-color: #42b983; } }\n\n.progress-info[value]::-webkit-progress-value {\n  background-color: #5bc0de; }\n\n.progress-info[value]::-moz-progress-bar {\n  background-color: #5bc0de; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-info .progress-bar {\n    background-color: #5bc0de; } }\n\n.progress-warning[value]::-webkit-progress-value {\n  background-color: #f0ad4e; }\n\n.progress-warning[value]::-moz-progress-bar {\n  background-color: #f0ad4e; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-warning .progress-bar {\n    background-color: #f0ad4e; } }\n\n.progress-danger[value]::-webkit-progress-value {\n  background-color: #d9534f; }\n\n.progress-danger[value]::-moz-progress-bar {\n  background-color: #d9534f; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-danger .progress-bar {\n    background-color: #d9534f; } }\n", ""]);

	// exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(94);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_tables.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_tables.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    line-height: 1.5;\n    vertical-align: top;\n    border-top: 1px solid #eceeef; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #eceeef; }\n  .table tbody + tbody {\n    border-top: 2px solid #eceeef; }\n  .table .table {\n    background-color: #fff; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #eceeef; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #eceeef; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover tbody tr:hover {\n  background-color: #f5f5f5; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: #f5f5f5; }\n\n.table-hover .table-active:hover {\n  background-color: #e8e8e8; }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: #e8e8e8; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #dff0d8; }\n\n.table-hover .table-success:hover {\n  background-color: #d0e9c6; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #d0e9c6; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #d9edf7; }\n\n.table-hover .table-info:hover {\n  background-color: #c4e3f3; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #c4e3f3; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #fcf8e3; }\n\n.table-hover .table-warning:hover {\n  background-color: #faf2cc; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #faf2cc; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f2dede; }\n\n.table-hover .table-danger:hover {\n  background-color: #ebcccc; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #ebcccc; }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  min-height: 0.01%;\n  overflow-x: auto; }\n\n.thead-inverse th {\n  color: #fff;\n  background-color: #373a3c; }\n\n.thead-default th {\n  color: #55595c;\n  background-color: #eceeef; }\n\n.table-inverse {\n  color: #eceeef;\n  background-color: #373a3c; }\n  .table-inverse.table-bordered {\n    border: 0; }\n  .table-inverse th,\n  .table-inverse td,\n  .table-inverse thead th {\n    border-color: #55595c; }\n\n.table-reflow thead {\n  float: left; }\n\n.table-reflow tbody {\n  display: block;\n  white-space: nowrap; }\n\n.table-reflow th,\n.table-reflow td {\n  border-top: 1px solid #eceeef;\n  border-left: 1px solid #eceeef; }\n  .table-reflow th:last-child,\n  .table-reflow td:last-child {\n    border-right: 1px solid #eceeef; }\n\n.table-reflow thead:last-child tr:last-child th,\n.table-reflow thead:last-child tr:last-child td,\n.table-reflow tbody:last-child tr:last-child th,\n.table-reflow tbody:last-child tr:last-child td,\n.table-reflow tfoot:last-child tr:last-child th,\n.table-reflow tfoot:last-child tr:last-child td {\n  border-bottom: 1px solid #eceeef; }\n\n.table-reflow tr {\n  float: left; }\n  .table-reflow tr th,\n  .table-reflow tr td {\n    display: block !important;\n    border: 1px solid #eceeef; }\n", ""]);

	// exports


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(97);

	__webpack_require__(33);

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_tooltip.scss", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../autoprefixer-loader/index.js!./../../sass-loader/index.js!./../../vuestrap-theme-loader/index.js!./_tooltip.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 0.875rem;\n  opacity: 0; }\n  .tooltip.in {\n    opacity: 0.9; }\n  .tooltip.tooltip-top, .tooltip.bs-tether-element-attached-bottom {\n    padding: 5px 0;\n    margin-top: -3px; }\n    .tooltip.tooltip-top .tooltip-arrow, .tooltip.bs-tether-element-attached-bottom .tooltip-arrow {\n      bottom: 0;\n      left: 50%;\n      margin-left: -5px;\n      border-width: 5px 5px 0;\n      border-top-color: #000; }\n  .tooltip.tooltip-right, .tooltip.bs-tether-element-attached-left {\n    padding: 0 5px;\n    margin-left: 3px; }\n    .tooltip.tooltip-right .tooltip-arrow, .tooltip.bs-tether-element-attached-left .tooltip-arrow {\n      top: 50%;\n      left: 0;\n      margin-top: -5px;\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000; }\n  .tooltip.tooltip-bottom, .tooltip.bs-tether-element-attached-top {\n    padding: 5px 0;\n    margin-top: 3px; }\n    .tooltip.tooltip-bottom .tooltip-arrow, .tooltip.bs-tether-element-attached-top .tooltip-arrow {\n      top: 0;\n      left: 50%;\n      margin-left: -5px;\n      border-width: 0 5px 5px;\n      border-bottom-color: #000; }\n  .tooltip.tooltip-left, .tooltip.bs-tether-element-attached-right {\n    padding: 0 5px;\n    margin-left: -3px; }\n    .tooltip.tooltip-left .tooltip-arrow, .tooltip.bs-tether-element-attached-right .tooltip-arrow {\n      top: 50%;\n      right: 0;\n      margin-top: -5px;\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n", ""]);

	// exports


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _introductionHtml = __webpack_require__(100);

	var _introductionHtml2 = _interopRequireDefault(_introductionHtml);

	__webpack_require__(62);

	exports['default'] = {
		route: {
			url: '/',
			name: 'introduction',
			title: 'Intoduction'
		},
		data: function data() {
			return {
				pkg: this.$parent.pkg,
				componentName: 'alert',
				componentNameSurfixed: 'vs-alert',
				componentNameCamelCase: 'vsAlert'
			};
		},
		template: _introductionHtml2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron\">\r\n  <h1>{{pkg.name}} <span class=\"label label-success\">{{pkg.version}}</span></h1>\r\n  <p>{{pkg.description}}</p>\r\n</div>\r\n<h2>Installation</h2>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-6\">\r\n    <h3>Compiled</h3>\r\n    <p>Minified CSS and JavaScript with no  documentation or original source files.</p>\r\n    <code>bower install {{pkg.name}} --save-dev</code>\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-6\">\r\n    <h3>Source</h3>\r\n    <p>Source Sass, JavaScript, and documentation files.</p>\r\n    <code>npm install {{pkg.name}} --save-dev</code>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"m-b-lg\"></div>\r\n<h2>Usage</h2>\r\n<p>For compiled components, use it within your Vue instance like this:</p>\r\n<p><code>new Vue({ components: { '{{componentNameSurfixed}}': {{pkg.library}}.{{componentName}} }})</code></p>\r\n\r\n<div class=\"m-b\"></div>\r\n<strong>OR</strong>\r\n<div class=\"m-b\"></div>\r\n\r\n<p>If you chosen to work with source components, just import* desired component like so:</p>\r\n<p><code>import { {{componentNameCamelCase}} } from '{{pkg.name}}/src/components'</code></p>\r\n<p>and then load it in your Vue instance:</p>\r\n<p><code>new Vue({ components: { {{componentNameCamelCase}} }})</code></p>\r\n<p>*Note: You will need <a href=\"https://github.com/babel/babel-loader\">Babel Loader</a> in your Webpack config file to support ES6 syntax.</p>\r\n\r\n<div class=\"m-b-lg\"></div>\r\n<h2>Examples</h2>\r\n<ul>\r\n  <li><a href=\"examples/basic.html\" target=\"_blank\">Basic example of a landing page with selected components.</a></li>\r\n  <li><a href=\"http://kzima.github.io/vuestrap-starter/\" target=\"_blank\">Advanced example</a> with webpack config and theme implementation - (<a href=\"https://github.com/kzima/vuestrap-starter\" target=\"_blank\">source on github</a>)</li>\r\n</ul>\r\n\r\n<div class=\"m-b-lg\"></div>\r\n<h2>Theming</h2>\r\n<p>To be able to use your app theme with component's scss variables, you will need to use <a href=\"https://github.com/kzima/vueastrap-theme-loader\">vuestrap-theme-loader</a> in your webpack config file. </p>\r\n\r\n<p><code>npm install vuestrap-theme-loader --save-dev</code></p>\r\n\r\n<p>See <a href=\"https://github.com/kzima/vuestrap-starter\">vuestrap-starter</a> for a webpack config example with theme loader.</p>";

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _accordionJson = __webpack_require__(102);

	var _accordionJson2 = _interopRequireDefault(_accordionJson);

	var _accordionHtml = __webpack_require__(103);

	var _accordionHtml2 = _interopRequireDefault(_accordionHtml);

	var _snippetHtml = __webpack_require__(104);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsCollapse = __webpack_require__(105);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/accordion',
	    name: 'accordion',
	    title: 'Accordion'
	  },
	  template: _accordionHtml2['default'],
	  data: function data() {
	    return {
	      meta: _accordionJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    vsCollapse: _srcComponentsCollapse.collapse,
	    vsCollapseToggle: _srcComponentsCollapse.collapseToggle,
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {
		"name": "accordion",
		"title": "Accordion",
		"description": "Extend the default collapse behavior to create an accordion. It requires both <code>target</code> and <code>target-group</code> attributes for this to work.",
		"dependencies": [
			"vuestrap/collapse",
			"vuestrap/collapseToggle"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "id",
				"type": "String",
				"default": "",
				"required": true,
				"description": "An <code>id</code> attribute  needs to be set on <code>&lt;vs-collapse></code> tag and referenced in <code>&lt;vs-collapsetoggle></code> using <code>target</code> attribute."
			},
			{
				"name": "group",
				"type": "String",
				"default": "",
				"required": true,
				"description": "A <code>group</code> attribute needs to be set on <code>&lt;vs-collapse></code> tag and referenced in <code>&lt;vs-collapsetoggle></code> using <code>target-group</code> attribute."
			}
		]
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-collapse-toggle target=\"item-1\" target-group=\"accordion-1\">\r\n\t\t\t<div><a href=\"#\">Collapsible Group Item #1</a></div>\r\n\t\t</vs-collapse-toggle>\r\n\t\t<vs-collapse id=\"item-1\" group=\"accordion-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>First</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</vs-collapse>\r\n\t\t<vs-collapse-toggle target=\"item-2\" target-group=\"accordion-1\">\r\n\t\t\t<div><a href=\"#\">Collapsible Group Item #2</a></div>\r\n\t\t</vs-collapse-toggle>\r\n\t\t<vs-collapse id=\"item-2\" group=\"accordion-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>Second</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</vs-collapse>\r\n\t\t<vs-collapse-toggle target=\"item-3\" target-group=\"accordion-1\">\r\n\t\t\t<div><a href=\"#\">Collapsible Group Item #3</a></div>\r\n\t\t</vs-collapse-toggle>\r\n\t\t<vs-collapse id=\"item-3\" group=\"accordion-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>Third</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</vs-collapse>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- item 1 --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse-toggle</span> <span class=\"hljs-attribute\">target</span>=<span class=\"hljs-value\">\"item-1\"</span> <span class=\"hljs-attribute\">target-group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Collapsible Group Item #1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-1\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>First<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- item 2 --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse-toggle</span> <span class=\"hljs-attribute\">target</span>=<span class=\"hljs-value\">\"item-2\"</span> <span class=\"hljs-attribute\">target-group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Collapsible Group Item #2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-2\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>Second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- item 3--&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse-toggle</span> <span class=\"hljs-attribute\">target</span>=<span class=\"hljs-value\">\"item-3\"</span> <span class=\"hljs-attribute\">target-group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Collapsible Group Item #3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-3\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>Third<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse</span>&gt;</span>\r\n";

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _collapseHtml = __webpack_require__(106);

	var _collapseHtml2 = _interopRequireDefault(_collapseHtml);

	var _utilsHelpersJs = __webpack_require__(107);

	// import polyfill for IE9

	__webpack_require__(108);

	// for browsers that do not support transitions like IE9 just change immediately
	var TRANSITION_DURATION = (0, _utilsHelpersJs.csstransitions)() ? 350 : 0;

	// export component object
	var collapse = {
	  template: _collapseHtml2['default'],
	  replace: true,
	  props: {
	    id: {
	      type: String,
	      'default': ''
	    },
	    group: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {
	    show: function show() {
	      var _this = this;

	      this.$el.classList.remove('collapse');
	      var height = this.$el.scrollHeight;
	      this.$el.classList.add('collapsing');
	      this.$el.offsetWidth;
	      this.$el.style.height = height + 'px';
	      this._collapseAnimation = setTimeout(function () {
	        _this.$el.classList.remove('collapsing');
	        _this.$el.classList.add('collapse', 'in');
	      }, TRANSITION_DURATION);
	    },
	    hide: function hide() {
	      var _this2 = this;

	      this.$el.classList.remove('collapse');
	      this.$el.classList.remove('in');
	      this.$el.classList.add('collapsing');
	      this.$el.offsetWidth;
	      this.$el.style.height = '0px';
	      this._collapseAnimation = setTimeout(function () {
	        _this2.$el.classList.remove('collapsing');
	        _this2.$el.classList.add('collapse');
	      }, TRANSITION_DURATION);
	    }
	  },
	  events: {
	    'toggled::collapse': function toggledCollapse(data) {
	      if (data.id && data.id === this.id && !data.group || data.group && data.group === this.group && !data.id) {
	        if ((this.$el.className + ' ').indexOf(' in ') > -1) {
	          this.hide();
	        } else {
	          this.show();
	        }
	      }
	    },
	    'toggled::accordion': function toggledAccordion(data) {
	      // if id and group id is provided it means it is an accordion and takes priority over all
	      if (data.id && data.group && data.group === this.group) {
	        // for current element
	        if (data.id === this.id) {
	          // collapse if selected item is already opened
	          if ((this.$el.className + ' ').indexOf(' in ') > -1) {
	            this.hide();
	          } else {
	            this.show();
	          }
	        } else {
	          // ignore if non-selected item is already closed
	          if ((this.$el.className + ' ').indexOf(' in ') === -1) return;

	          // close all items in the group, and open the one selected
	          this.hide();
	        }
	      }
	    }
	  },
	  destroyed: function destroyed() {
	    clearTimeout(this._collapseAnimation);
	  }
	};

	exports.collapse = collapse;
	// export component object
	var collapseToggle = {
	  template: '<span v-on:click.stop.prevent="toggle($event)"><slot></slot></span>',
	  replace: true,
	  computed: {},
	  props: {
	    target: {
	      type: String,
	      'default': ''
	    },
	    targetGroup: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      // if both attributes missing, ignore
	      if (!this.target && !this.targetGroup) return;

	      // broadcast accordion toggle if both id and group are set otherwise broadcast collapse
	      // we also use dispatch to tell other components about the change
	      if (this.target && this.targetGroup) {
	        this.$root.$broadcast('toggled::accordion', { id: this.target, group: this.targetGroup });
	        this.$root.$dispatch('toggled::accordion', { id: this.target, group: this.targetGroup });
	      } else {
	        this.$root.$broadcast('toggled::collapse', { id: this.target, group: this.targetGroup });
	        this.$root.$dispatch('toggled::collapse', { id: this.target, group: this.targetGroup });
	      }
	    }
	  }
	};
	exports.collapseToggle = collapseToggle;

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{id}}\" class=\"collapse\">\r\n  <slot></slot>\r\n</div>";

/***/ },
/* 107 */
/***/ function(module, exports) {

	/**
	 * Other utilities for demo pages
	 *
	 */

	// pulled from http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.makeid = makeid;
	exports.csstransitions = csstransitions;

	function makeid() {
	  var text = '';
	  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	  for (var i = 0; i < 5; i++) {
	    text += possible.charAt(Math.floor(Math.random() * possible.length));
	  }
	  return text;
	}

	// check if browser support css3 transitions

	function csstransitions() {
	  var style = document.documentElement.style;
	  return style.webkitTransition !== undefined || style.MozTransition !== undefined || style.OTransition !== undefined || style.MsTransition !== undefined || style.transition !== undefined;
	}

	/**
	 * change location utility supports v-link like paths or hrefs
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Object} [args]
	 */
	var changeLocation = function changeLocation(router, link) {
	  if (!link) return;
	  if (router) {
	    router.go(link);
	  } else {
	    window.location.href = link;
	  }
	};
	exports.changeLocation = changeLocation;

/***/ },
/* 108 */
/***/ function(module, exports) {

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
	"use strict";

	;if ("document" in self && !("classList" in document.createElement("_"))) {
	  (function (j) {
	    "use strict";if (!("Element" in j)) {
	      return;
	    }var a = "classList",
	        f = "prototype",
	        m = j.Element[f],
	        b = Object,
	        k = String[f].trim || function () {
	      return this.replace(/^\s+|\s+$/g, "");
	    },
	        c = Array[f].indexOf || function (q) {
	      var p = 0,
	          o = this.length;for (; p < o; p++) {
	        if (p in this && this[p] === q) {
	          return p;
	        }
	      }return -1;
	    },
	        n = function n(o, p) {
	      this.name = o;this.code = DOMException[o];this.message = p;
	    },
	        g = function g(p, o) {
	      if (o === "") {
	        throw new n("SYNTAX_ERR", "An invalid or illegal string was specified");
	      }if (/\s/.test(o)) {
	        throw new n("INVALID_CHARACTER_ERR", "String contains an invalid character");
	      }return c.call(p, o);
	    },
	        d = function d(s) {
	      var r = k.call(s.getAttribute("class") || ""),
	          q = r ? r.split(/\s+/) : [],
	          p = 0,
	          o = q.length;for (; p < o; p++) {
	        this.push(q[p]);
	      }this._updateClassName = function () {
	        s.setAttribute("class", this.toString());
	      };
	    },
	        e = d[f] = [],
	        i = function i() {
	      return new d(this);
	    };n[f] = Error[f];e.item = function (o) {
	      return this[o] || null;
	    };e.contains = function (o) {
	      o += "";return g(this, o) !== -1;
	    };e.add = function () {
	      var s = arguments,
	          r = 0,
	          p = s.length,
	          q,
	          o = false;do {
	        q = s[r] + "";if (g(this, q) === -1) {
	          this.push(q);o = true;
	        }
	      } while (++r < p);if (o) {
	        this._updateClassName();
	      }
	    };e.remove = function () {
	      var t = arguments,
	          s = 0,
	          p = t.length,
	          r,
	          o = false;do {
	        r = t[s] + "";var q = g(this, r);if (q !== -1) {
	          this.splice(q, 1);o = true;
	        }
	      } while (++s < p);if (o) {
	        this._updateClassName();
	      }
	    };e.toggle = function (p, q) {
	      p += "";var o = this.contains(p),
	          r = o ? q !== true && "remove" : q !== false && "add";if (r) {
	        this[r](p);
	      }return !o;
	    };e.toString = function () {
	      return this.join(" ");
	    };if (b.defineProperty) {
	      var l = { get: i, enumerable: true, configurable: true };try {
	        b.defineProperty(m, a, l);
	      } catch (h) {
	        if (h.number === -2146823252) {
	          l.enumerable = false;b.defineProperty(m, a, l);
	        }
	      }
	    } else {
	      if (b[f].__defineGetter__) {
	        m.__defineGetter__(a, i);
	      }
	    }
	  })(self);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _alertJson = __webpack_require__(110);

	var _alertJson2 = _interopRequireDefault(_alertJson);

	var _alertHtml = __webpack_require__(111);

	var _alertHtml2 = _interopRequireDefault(_alertHtml);

	var _snippetHtml = __webpack_require__(112);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsAlert = __webpack_require__(113);

	var _srcComponentsAlert2 = _interopRequireDefault(_srcComponentsAlert);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/alert',
	    name: 'alert',
	    title: 'Alert'
	  },
	  template: _alertHtml2['default'],
	  data: function data() {
	    return {
	      meta: _alertJson2['default'],
	      snippet: _snippetHtml2['default'],
	      show: true,
	      dismissible: true,
	      message: '<strong>Note</strong> This is an html message',
	      state: 'success',
	      states: [{ text: 'default', value: 'default' }, { text: 'success', value: 'success' }, { text: 'danger', value: 'danger' }, { text: 'warning', value: 'warning' }, { text: 'info', value: 'info' }]
	    };
	  },
	  components: {
	    vsAlert: _srcComponentsAlert2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = {
		"name": "alert",
		"title": "Alert",
		"description": "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "show",
				"type": "Boolean",
				"default": "false",
				"required": true,
				"description": "Show/hides the alert."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "Type of the alert."
			},
			{
				"name": "dismissible",
				"type": "Boolean",
				"default": "false",
				"description": "Show/hide close button."
			}
		]
	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>show <input type=\"checkbox\" v-model=\"show\"></label>\r\n\t\t<label>dismissible <input type=\"checkbox\" v-model=\"dismissible\"></label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-alert\r\n\t\t    :show.sync=\"show\"\r\n\t\t    :state=\"state\"\r\n\t\t    :message=\"message\"\r\n\t\t    :dismissible=\"dismissible\">\r\n\t\t    This is an alert\r\n\t\t</vs-alert>\r\n\t\t<template v-if=\"!show\">\r\n\t\t\t<button href='#' v-on:click=\"show = true\">Show alert again</button>\r\n\t\t</template>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-alert</span> \r\n  <span class=\"hljs-attribute\">show.sync</span>=<span class=\"hljs-value\">\"showVariable\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"state\"</span>\r\n  <span class=\"hljs-attribute\">dismissible</span>&gt;</span>\r\n  This is an alert\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-alert</span>&gt;</span>\r\n";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _alertHtml = __webpack_require__(114);

	var _alertHtml2 = _interopRequireDefault(_alertHtml);

	// export component object
	exports['default'] = {
	  template: _alertHtml2['default'],
	  replace: true,
	  computed: {
	    alertState: function alertState() {
	      return !this.state || this.state === 'default' ? 'alert-success' : 'alert-' + this.state;
	    }
	  },
	  props: {
	    show: {
	      type: Boolean,
	      'default': false,
	      required: true
	    },
	    state: {
	      type: String,
	      'default': 'success'
	    },
	    dismissible: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  methods: {
	    dismiss: function dismiss() {
	      // hide an alert
	      this.show = false;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      this.$dispatch('dismissed::alert');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<div class=\"alert {{alertState}} {{ dismissible ? 'alert-dismissible' : '' }} fade in\" role=\"alert\" v-show=\"show\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" v-if=\"dismissible\" v-on:click.stop.prevent=\"dismiss\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        <span class=\"sr-only\">Close</span>\r\n    </button>\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _breadcrumbJson = __webpack_require__(116);

	var _breadcrumbJson2 = _interopRequireDefault(_breadcrumbJson);

	var _breadcrumbHtml = __webpack_require__(117);

	var _breadcrumbHtml2 = _interopRequireDefault(_breadcrumbHtml);

	var _snippetHtml = __webpack_require__(118);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsBreadcrumb = __webpack_require__(119);

	var _srcComponentsBreadcrumb2 = _interopRequireDefault(_srcComponentsBreadcrumb);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/breadcrumb',
	    name: 'breadcrumb',
	    title: 'Breadcrumb'
	  },
	  template: _breadcrumbHtml2['default'],
	  data: function data() {
	    return {
	      meta: _breadcrumbJson2['default'],
	      snippet: _snippetHtml2['default'],
	      list: [{ text: 'Home', link: '#', active: true }, { text: 'Library', active: false }]
	    };
	  },
	  components: {
	    vsBreadcrumb: _srcComponentsBreadcrumb2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = {
		"name": "breadcrumb",
		"title": "Breadcrumb",
		"description": "Indicate the current page’s location within a navigational hierarchy.",
		"dependencies": [],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of links."
			}
		]
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<vs-breadcrumb\r\n    \t\t:list=\"list\">\r\n\t\t\t</vs-breadcrumb>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\t\r\n</docs-demo>\t\r\n";

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-breadcrumb</span> \r\n  <span class=\"hljs-attribute\">:list:</span> \"[{<span class=\"hljs-attribute\">text:</span> '<span class=\"hljs-attribute\">Home</span>', <span class=\"hljs-attribute\">link:</span> '#', <span class=\"hljs-attribute\">active:</span> <span class=\"hljs-attribute\">true</span>}, {<span class=\"hljs-attribute\">text:</span> '<span class=\"hljs-attribute\">Library</span>', <span class=\"hljs-attribute\">active:</span> <span class=\"hljs-attribute\">false</span>}]\"&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-breadcrumb</span>&gt;</span>\r\n";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _breadcrumbHtml = __webpack_require__(120);

	var _breadcrumbHtml2 = _interopRequireDefault(_breadcrumbHtml);

	var _utilsHelpersJs = __webpack_require__(107);

	// export component object
	exports['default'] = {
	  template: _breadcrumbHtml2['default'],
	  replace: true,
	  props: {
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    }
	  },
	  methods: {
	    changeLocation: _utilsHelpersJs.changeLocation
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = "<ol class=\"breadcrumb\">\r\n    <li v-for=\"item in list\" v-bind:class=\"{ active: item.active }\">\r\n        <a href=\"#\" v-on:click.stop.prevent=\"changeLocation($router, item.link)\" v-if=\"item.active\">{{item.text}}</a>\r\n        <span v-if=\"!item.active\">{{item.text}}</span>\r\n    </li>\r\n</ol>";

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonGroupJson = __webpack_require__(122);

	var _buttonGroupJson2 = _interopRequireDefault(_buttonGroupJson);

	var _buttonGroupHtml = __webpack_require__(123);

	var _buttonGroupHtml2 = _interopRequireDefault(_buttonGroupHtml);

	var _snippetHtml = __webpack_require__(124);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsButtonGroup = __webpack_require__(125);

	var _srcComponentsButtonGroup2 = _interopRequireDefault(_srcComponentsButtonGroup);

	var _srcComponentsButtons = __webpack_require__(127);

	var _srcComponentsButtons2 = _interopRequireDefault(_srcComponentsButtons);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/button-group',
	    name: 'button-group',
	    title: 'Button Group'
	  },
	  template: _buttonGroupHtml2['default'],
	  data: function data() {
	    return {
	      meta: _buttonGroupJson2['default'],
	      snippet: _snippetHtml2['default'],
	      vertical: false
	    };
	  },
	  components: {
	    vsButton: _srcComponentsButtons2['default'],
	    vsButtonGroup: _srcComponentsButtonGroup2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = {
		"name": "button-group",
		"title": "Button Group",
		"description": "Group a series of buttons together on a single line with the button group.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "vertical",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "Stacks buttons in vertical position."
			}
		]
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<vs-button-group :vertical=\"vertical\">\r\n\t\t\t  <vs-button>Left</vs-button>\r\n\t\t\t  <vs-button>Middle</vs-button>\r\n\t\t\t  <vs-button>Right</vs-button>\r\n\t\t\t</vs-button-group>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n</docs-demo>\t\r\n";

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-button-group</span> <span class=\"hljs-attribute\">vertical</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-button</span>&gt;</span>Left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-button</span>&gt;</span>Middle<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-button</span>&gt;</span>Right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-button-group</span>&gt;</span>\r\n";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonGroupHtml = __webpack_require__(126);

	var _buttonGroupHtml2 = _interopRequireDefault(_buttonGroupHtml);

	// export component object
	exports['default'] = {
	    template: _buttonGroupHtml2['default'],
	    replace: true,
	    props: {
	        vertical: {
	            type: Boolean,
	            'default': false
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<div role=\"group\" aria-label=\"Basic example\" v-bind:class=\"{ 'btn-group': true, 'btn-group-vertical': vertical }\">\r\n\t<slot></slot>\r\n</div>\r\n";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonsHtml = __webpack_require__(128);

	var _buttonsHtml2 = _interopRequireDefault(_buttonsHtml);

	__webpack_require__(129);

	var _utilsHelpersJs = __webpack_require__(107);

	// export component object
	exports['default'] = {
	  template: _buttonsHtml2['default'],
	  replace: true,
	  computed: {
	    btnBlock: function btnBlock() {
	      return this.block ? 'btn-block' : '';
	    },
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    btnDisabled: function btnDisabled() {
	      return this.disabled ? 'disabled' : '';
	    }
	  },
	  props: {
	    block: {
	      type: Boolean,
	      'default': false
	    },
	    disabled: {
	      type: Boolean,
	      'default': false
	    },
	    inactive: {
	      type: Boolean,
	      'default': false
	    },
	    link: {
	      type: String,
	      'default': ''
	    },
	    role: {
	      type: String,
	      'default': ''
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  methods: {
	    changeLocation: _utilsHelpersJs.changeLocation
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "<span class=\"btn {{btnVariant}} {{btnSize}} {{btnBlock}} {{inactive ? 'btn-inactive' : ''}} {{btnDisabled}}\" v-on:click.stop.prevent=\"changeLocation($router, link)\">\r\n\t<slot></slot>\r\n</span>";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(130);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./buttons-override.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./buttons-override.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".btn.btn-inactive {\n  opacity: 0.8; }\n", ""]);

	// exports


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonCheckboxJson = __webpack_require__(132);

	var _buttonCheckboxJson2 = _interopRequireDefault(_buttonCheckboxJson);

	var _buttonCheckboxHtml = __webpack_require__(133);

	var _buttonCheckboxHtml2 = _interopRequireDefault(_buttonCheckboxHtml);

	var _snippetHtml = __webpack_require__(134);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsButtonCheckbox = __webpack_require__(135);

	var _srcComponentsButtonCheckbox2 = _interopRequireDefault(_srcComponentsButtonCheckbox);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/button-checkbox',
	    name: 'button-checkbox',
	    title: 'Button Checkbox'
	  },
	  template: _buttonCheckboxHtml2['default'],
	  data: function data() {
	    return {
	      meta: _buttonCheckboxJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: [{ text: 'Second', value: 'second' }],
	      list: [{
	        text: 'First',
	        checked: false,
	        value: 'first'
	      }, {
	        text: 'Second',
	        checked: false,
	        value: 'second'
	      }, {
	        text: 'Third',
	        checked: false,
	        value: 'third'
	      }],
	      size: 'md',
	      sizes: _srcUtils.sizes,
	      variant: 'primary',
	      variants: _srcUtils.variants
	    };
	  },
	  components: {
	    vsButtonCheckbox: _srcComponentsButtonCheckbox2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = {
		"name": "button-checkbox",
		"title": "Button Checkbox",
		"description": "Allows to elect one or more items in the nested group of buttons.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "An array of <code>String</code> or <code>Object</code> values, (see <code>return-object</code> attribute)."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of checkbox items."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			},
			{
				"name": "return-object",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "If set to true, a full object will be returned in the model. By default only <code>value</code> is returned."
			}
		]
	};

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-button-checkbox\r\n\t\t  :list.sync=\"list\"\r\n\t\t  :model.sync=\"model\"\r\n\t\t  :size=\"size\"\r\n\t\t  :variant=\"variant\"\r\n\t\t  return-object>\r\n\t\t</vs-button-checkbox>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-button-checkbox</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">:list.sync</span>=<span class=\"hljs-value\">\" [{\r\n      text: 'First',\r\n      value: 'first',\r\n    }, {\r\n      text: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      text: 'Third',\r\n      value: 'third',\r\n    }]\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">return-object</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-button-checkbox</span>&gt;</span>\r\n";

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonCheckboxHtml = __webpack_require__(136);

	var _buttonCheckboxHtml2 = _interopRequireDefault(_buttonCheckboxHtml);

	// export component object
	exports['default'] = {
	  template: _buttonCheckboxHtml2['default'],
	  replace: true,
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    }
	  },
	  props: {
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    model: {
	      type: Array,
	      twoWay: true,
	      'default': []
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    returnObject: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  methods: {
	    checked: function checked(index) {
	      if (!this.list) return false;
	      var result = false;
	      if (this.returnObject) {
	        for (var i = 0; i < this.model.length; i++) {
	          if (this.model[i].value === this.list[index].value) {
	            result = true;
	          }
	        }
	      } else {
	        result = this.model.indexOf(this.list[index].value) !== -1;
	      }
	      return result;
	    }
	  },
	  watch: {
	    list: {
	      handler: function handler(val) {
	        var _this = this;

	        this.model = [];
	        this.list.forEach(function (item) {
	          if (item.checked) {
	            if (_this.returnObject) {
	              _this.model.push(item);
	            } else {
	              _this.model.push(item.value);
	            }
	          }
	        });
	        // dispatch an event
	        this.$dispatch('changed::button-checkbox', this.model);
	      },
	      deep: true
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;

	    // handle initial selection
	    this.list.forEach(function (item) {
	      if (_this2.returnObject) {
	        _this2.model.forEach(function (modelItem) {
	          if (modelItem.value === item.value) {
	            item.checked = true;
	          }
	        });
	      } else {
	        if (_this2.model.indexOf(item.value) !== -1) {
	          item.checked = true;
	        }
	      }
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\r\n  <label class=\"btn {{btnVariant}} {{btnSize}} {{ checked($index) ? 'active' : '' }}\" v-for=\"item in list\">\r\n  <input \r\n  \ttype=\"checkbox\" \r\n  \tvalue=\"{{item.value}}\" \r\n  \tautocomplete=\"off\" \r\n  \tv-model=\"item.checked\" \r\n  \t:disabled=\"item.disabled\">\r\n  \t{{item.text}}\r\n  </label>\r\n</div>\r\n";

/***/ },
/* 137 */
/***/ function(module, exports) {

	/**
	 * Some common stuff used in demo pages
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var positions = [{ text: 'left', value: 'left' }, { text: 'right', value: 'right' }];
	exports.positions = positions;
	var states = [{ text: 'default', value: 'default' }, { text: 'success', value: 'success' }, { text: 'danger', value: 'danger' }, { text: 'warning', value: 'warning' }];
	exports.states = states;
	var variants = [{
	  text: 'default',
	  value: 'default'
	}, {
	  text: 'primary',
	  value: 'primary'
	}, {
	  text: 'success',
	  value: 'success'
	}, {
	  text: 'info',
	  value: 'info'
	}, {
	  text: 'warning',
	  value: 'warning'
	}, {
	  text: 'danger',
	  value: 'danger'
	}];
	exports.variants = variants;
	var sizes = [{
	  text: 'sm',
	  value: 'sm'
	}, {
	  text: 'md',
	  value: 'md'
	}, {
	  text: 'lg',
	  value: 'lg'
	}];
	exports.sizes = sizes;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonRadioJson = __webpack_require__(139);

	var _buttonRadioJson2 = _interopRequireDefault(_buttonRadioJson);

	var _buttonRadioHtml = __webpack_require__(140);

	var _buttonRadioHtml2 = _interopRequireDefault(_buttonRadioHtml);

	var _snippetHtml = __webpack_require__(141);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsButtonRadio = __webpack_require__(142);

	var _srcComponentsButtonRadio2 = _interopRequireDefault(_srcComponentsButtonRadio);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/button-radio',
	    name: 'button-radio',
	    title: 'Button Radio'
	  },
	  template: _buttonRadioHtml2['default'],
	  data: function data() {
	    return {
	      meta: _buttonRadioJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: {
	        text: 'Second',
	        value: 'second'
	      },
	      list: [{
	        text: 'First',
	        value: 'first'
	      }, {
	        text: 'Second',
	        value: 'second'
	      }, {
	        text: 'Third',
	        value: 'third'
	      }],
	      size: 'md',
	      sizes: _srcUtils.sizes,
	      variant: 'primary',
	      variants: _srcUtils.variants
	    };
	  },
	  components: {
	    vsButtonRadio: _srcComponentsButtonRadio2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = {
		"name": "button-radio",
		"title": "Button Radio",
		"description": "Alllows to select only one item out of a group of buttons.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "String/Object",
				"default": "''",
				"required": true,
				"description": "A result of the selection. Can return String or Object (see <code>return-object</code> attribute)."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of checkbox items."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			},
			{
				"name": "return-object",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "If set to true, a full object will be returned in the model. By default only String <code>value</code> is returned."
			}
		]
	};

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t\t<label>\r\n\t\t\t\tsize\r\n\t\t\t\t<select v-model=\"size\">\r\n\t\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\r\n\t\t\t<label>\r\n\t\t\t\tvariant\r\n\t\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-button-radio\r\n\t\t\t:model.sync=\"model\"\r\n\t    :list=\"list\"\r\n\t    :size=\"size\"\r\n\t    :variant=\"variant\"\r\n\t    return-object>\r\n\t\t</vs-button-radio>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\t\r\n</docs-demo>\t\r\n";

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-button-radio</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"[{\r\n      text: 'First',\r\n      value: 'first',\r\n    }, {\r\n      text: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      text: 'Third',\r\n      value: 'third',\r\n    }]\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">return-boject</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-button-radio</span>&gt;</span>\r\n";

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonRadioHtml = __webpack_require__(143);

	var _buttonRadioHtml2 = _interopRequireDefault(_buttonRadioHtml);

	// export component object
	exports['default'] = {
	  template: _buttonRadioHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      selection: ''
	    };
	  },
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    btnActive: function btnActive() {
	      return item.value;
	    }
	  },
	  props: {
	    model: {
	      required: true
	    },
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    returnObject: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  watch: {
	    selection: {
	      handler: function handler() {
	        var _this = this;

	        // set the model based on selection
	        if (this.returnObject) {
	          this.list.forEach(function (item) {
	            if (item.value === _this.selection) {
	              _this.model = item;
	            }
	          });
	        } else {
	          this.model = this.selection;
	        }
	        // dispatch an event
	        this.$dispatch('changed::button-radio', this.model);
	      },
	      deep: true
	    }
	  },
	  ready: function ready() {
	    // handle initial selection
	    this.selection = this.model.value;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\r\n    <label\r\n    \tclass=\"btn {{btnVariant}} {{btnSize}} {{ item.disabled ? 'disabled' : '' }} {{ selection == item.value ? 'active' : '' }}\"\r\n    \tv-for=\"item in list\">\r\n      <input\r\n      \ttype=\"radio\"\r\n      \tname=\"options\"\r\n      \tvalue=\"{{item.value}}\"\r\n      \tautocomplete=\"off\"\r\n      \tv-model=\"selection\"\r\n        :disabled=\"item.disabled\"> {{item.text}}\r\n    </label>\r\n</div>\r\n";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonsJson = __webpack_require__(145);

	var _buttonsJson2 = _interopRequireDefault(_buttonsJson);

	var _buttonsHtml = __webpack_require__(146);

	var _buttonsHtml2 = _interopRequireDefault(_buttonsHtml);

	var _snippetHtml = __webpack_require__(147);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsButtons = __webpack_require__(127);

	var _srcComponentsButtons2 = _interopRequireDefault(_srcComponentsButtons);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/buttons',
	    name: 'buttons',
	    title: 'Buttons'
	  },
	  template: _buttonsHtml2['default'],
	  data: function data() {
	    return {
	      meta: _buttonsJson2['default'],
	      snippet: _snippetHtml2['default'],
	      size: 'md',
	      sizes: _srcUtils.sizes,
	      variant: 'primary',
	      variants: _srcUtils.variants
	    };
	  },
	  components: {
	    vsBtn: _srcComponentsButtons2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = {
		"name": "buttons",
		"title": "Buttons",
		"description": "Use Bootstrap’s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "block",
				"type": "Boolean",
				"default": "false",
				"description": "Button spans over full width of a parent."
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"default": "false",
				"description": "Make buttons look inactive by adding the disabled boolean attribute to any <code>&lt;vs-btn></code> element."
			},
			{
				"name": "inactive",
				"type": "Boolean",
				"default": "false",
				"description": "Similar to disabled state, but it's clickable."
			},
			{
				"name": "link",
				"type": "String",
				"default": "",
				"description": "Buttons support vue-router style links or regular href values."
			},
			{
				"name": "role",
				"type": "String",
				"default": "",
				"description": "if <code>&lt;a></code> elements are used to trigger in-page functionality (like collapsing content), than these links should be given a <code>role='button'</code>"
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link",
					"secondary-outline",
					"primary-outline",
					"success-outline",
					"info-outline",
					"warning-outline",
					"danger-outline"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-btn :size=\"size\" variant=\"primary\">Primary</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"secondary\">Secondary</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"success\">Success</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"warning\">Warning</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"danger\">Danger</vs-btn>\r\n\t\t<hr>\r\n\t\t<vs-btn :size=\"size\" variant=\"primary-outline\">Primary</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"secondary-outline\">Secondary</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"success-outline\">Success</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"warning-outline\">Warning</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"danger-outline\">Danger</vs-btn>\r\n\t\t<hr>\r\n\t\t<vs-btn :size=\"size\" variant=\"link\" link=\"#\">Button Link</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"primary\" disabled>Disabled</vs-btn>\r\n\t\t<hr>\r\n\t\t<vs-btn :size=\"size\" variant=\"primary\" block>Block</vs-btn>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- colour variants --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>&gt;</span>Primary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"secondary\"</span>&gt;</span>Secondary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"success\"</span>&gt;</span>Success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"warning\"</span>&gt;</span>Warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"danger\"</span>&gt;</span>Danger<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- outlined variants --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary-outline\"</span>&gt;</span>Primary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"secondary-outline\"</span>&gt;</span>Secondary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"success-outline\"</span>&gt;</span>Success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"warning-outline\"</span>&gt;</span>Warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"danger-outline\"</span>&gt;</span>Danger<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- button types --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"link\"</span> <span class=\"hljs-attribute\">link</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Button Link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>Disabled<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span> <span class=\"hljs-attribute\">block</span>&gt;</span>Block<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n";

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _cardJson = __webpack_require__(149);

	var _cardJson2 = _interopRequireDefault(_cardJson);

	var _cardHtml = __webpack_require__(150);

	var _cardHtml2 = _interopRequireDefault(_cardHtml);

	var _snippetHtml = __webpack_require__(151);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsCard = __webpack_require__(152);

	var _srcComponentsCard2 = _interopRequireDefault(_srcComponentsCard);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/card',
	    name: 'card',
	    title: 'Card'
	  },
	  template: _cardHtml2['default'],
	  data: function data() {
	    return {
	      meta: _cardJson2['default'],
	      snippet: _snippetHtml2['default'],
	      align: 'left',
	      aligns: [{ text: 'left', value: 'left' }, { text: 'center', value: 'center' }, { text: 'right', value: 'right' }],
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'inverse', value: 'inverse' }, { text: 'image-overlay', value: 'image-overlay' }],
	      variant: 'default',
	      variants: _srcUtils.variants
	    };
	  },
	  components: {
	    vsCard: _srcComponentsCard2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = {
		"name": "card",
		"title": "Card",
		"description": "A card is a flexible and extensible content container.",
		"dependencies": [
			"vuestrap/buttons",
			"vuestrap/images",
			"vuestrap/list-group"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "align",
				"type": "String",
				"values": [
					"left",
					"right",
					"center"
				],
				"default": "'left'",
				"required": false,
				"description": "Position text inside the box."
			},
			{
				"name": "type",
				"type": "String",
				"values": [
					"image-overlay",
					"inverse"
				],
				"default": "''",
				"required": false,
				"description": "When inverse is set it will change font text in div content block to bright. If 'image-overlay' is set,  it will also set the position aboslute of the block to overlay image."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"primary",
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tvariant\r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\r\n\t\t<label>\r\n\t\t\ttype\r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\r\n\t\t<label>\r\n\t\t\talign\r\n\t\t\t<select v-model=\"align\">\r\n\t\t\t\t<option v-for=\"option in aligns\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<vs-card style=\"max-width: 350px;\" \r\n\t\t\t\t:variant=\"variant\"\r\n\t\t\t\t:type=\"type\"\r\n\t\t\t\t:align=\"align\">\r\n\t\t\t\t<img class=\"card-img img-fluid\" v-bind:src=\"'assets/card-350x150.png'\" alt=\"Card image cap\">\r\n\t\t\t  <div class=\"card-block\">\r\n\t\t\t    <h4 class=\"card-title\">Card title</h4>\r\n\t\t\t    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n\t\t\t  </div>\r\n\t\t  </vs-card>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-card</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"default\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"default\"</span> <span class=\"hljs-attribute\">align</span>=<span class=\"hljs-value\">\"left\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-img img-fluid\"</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"https://placehold.it/350x150\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"Card image cap\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-title\"</span>&gt;</span>Card title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-text\"</span>&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-card</span>&gt;</span>\r\n";

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _cardHtml = __webpack_require__(153);

	var _cardHtml2 = _interopRequireDefault(_cardHtml);

	// import polyfill for IE9

	__webpack_require__(108);

	// export component object
	exports['default'] = {
	  template: _cardHtml2['default'],
	  replace: true,
	  computed: {
	    cardVariant: function cardVariant() {
	      return !this.variant || this.variant === 'default' ? 'card-default' : 'card-' + this.variant;
	    },
	    cardInverse: function cardInverse() {
	      return this.type === 'image-overlay' || this.type === 'inverse' ? 'card-inverse' : '';
	    },
	    cardAlign: function cardAlign() {
	      return 'text-' + this.align;
	    }
	  },
	  props: {
	    align: {
	      type: String,
	      'default': 'left'
	    },
	    type: {
	      type: String,
	      'default': 'default'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  watch: {
	    'type': function type(val) {
	      // get first card-block or div and apply a card-image-overlay class if image-overlay slected
	      var div = this.$el.getElementsByClassName('card-block')[0] || this.$el.getElementsByTagName('div')[0];
	      if (val === 'image-overlay') {
	        div.classList.add('card-img-overlay');
	      } else {
	        div.classList.remove('card-img-overlay');
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card {{cardVariant}} {{cardAlign}} {{cardInverse}}\">\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _carouselJson = __webpack_require__(155);

	var _carouselJson2 = _interopRequireDefault(_carouselJson);

	var _carouselHtml = __webpack_require__(156);

	var _carouselHtml2 = _interopRequireDefault(_carouselHtml);

	var _snippetHtml = __webpack_require__(157);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsCarousel = __webpack_require__(158);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/carousel',
	    name: 'carousel',
	    title: 'Carousel'
	  },
	  template: _carouselHtml2['default'],
	  data: function data() {
	    return {
	      meta: _carouselJson2['default'],
	      snippet: _snippetHtml2['default'],
	      controls: true,
	      indicators: true
	    };
	  },
	  components: {
	    vsSlide: _srcComponentsCarousel.slide,
	    vsCarousel: _srcComponentsCarousel.carousel,
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = {
		"name": "carousel",
		"title": "Carousel",
		"description": "",
		"dependencies": [
			"vuestrap/{dependency}"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "interval",
				"type": "Number",
				"default": "5000",
				"required": "false",
				"description": "Slides will be auto rotated every 5000ms (5s). To stop auto-rotation set interval to 0."
			},
			{
				"name": "indicators",
				"type": "Boolean",
				"default": "true",
				"required": "false",
				"description": "Show/hide indicators."
			},
			{
				"name": "controls",
				"type": "Boolean",
				"default": "true",
				"required": "false",
				"description": "Show/hide controls."
			}
		]
	};

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>controls <input type=\"checkbox\" v-model=\"controls\"></label>\r\n\t\t<label>indicators <input type=\"checkbox\" v-model=\"indicators\"></label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-carousel\r\n\t\t\t\t:interval=\"5000\",\r\n\t\t\t\t:controls=\"controls\"\r\n\t\t\t\t:indicators=\"indicators\">\r\n\t\t\t  <vs-slide>\r\n\t\t\t    <img v-bind:src=\"'assets/carousel-one.png'\" class=\"img-fluid\">\r\n\t\t\t  </vs-slide>\r\n\t\t\t  <vs-slide>\r\n\t\t\t    <img v-bind:src=\"'assets/carousel-two.png'\" class=\"img-fluid\">\r\n\t\t\t  </vs-slide>\r\n\t\t\t  <vs-slide>\r\n\t\t\t    <img v-bind:src=\"'assets/carousel-three.png'\" class=\"img-fluid\">\r\n\t\t\t  </vs-slide>\r\n\t\t\t</vs-carousel>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-carousel</span> <span class=\"hljs-attribute\">:interval</span>=<span class=\"hljs-value\">\"5000\"</span> <span class=\"hljs-attribute\">:controls</span>=<span class=\"hljs-value\">\"false\"</span> <span class=\"hljs-attribute\">:indicators</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/1200x400?text=one\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-slide</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/1200x400?text=two\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-slide</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/1200x400?text=three\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-slide</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-carousel</span>&gt;</span>\r\n";

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Carousel Notes
	 * - Ie9 does not support transitions and might require javascript fallbacks. B4 deliberately dropped support for this.
	 * - It is not accessible.
	 *
	 * How it works:
	 * - active element applies the transition to the slide but not triggers it
	 * - we need to use 'right' and 'left' classes to trigger animation
	 * - 'next' and 'prev' class makes the incoming slide positioned absolute, so it can follow outgoing slide
	 *
	 * To slide right to left we have to:
	 * - add class 'active', 'next', and right to the next slide
	 * - add class 'left' on the current slide same time as remove the 'right' class on the incoming one
	 * - remove all classes and only leave 'active' on the incoming slide
	 *
	 */

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _carouselHtml = __webpack_require__(159);

	var _carouselHtml2 = _interopRequireDefault(_carouselHtml);

	var _utilsHelpersJs = __webpack_require__(107);

	// import polyfill for IE9

	__webpack_require__(108);

	// this is directly linked to the bootstrap animation timing in _carousel.scss
	// for browsers that do not support transitions like IE9 just change slide immediately
	var TRANSITION_DURATION = (0, _utilsHelpersJs.csstransitions)() ? 600 : 0;

	// when next is set, we want to move from right to left
	// when previous is set, we want to move from left to right
	var DIRECTION = {
	  rtl: {
	    outgoing: 'left',
	    incoming: 'right',
	    overlay: 'next'
	  },
	  ltr: {
	    outgoing: 'right',
	    incoming: 'left',
	    overlay: 'prev'
	  }
	};

	// export carosuel object
	var carousel = {
	  template: _carouselHtml2['default'],
	  replace: true,
	  computed: {},
	  data: function data() {
	    return {
	      index: 0,
	      slidesCount: 0,
	      animating: false,
	      slides: [],
	      direction: DIRECTION.rtl
	    };
	  },
	  props: {
	    interval: {
	      type: Number,
	      'default': 5000
	    },
	    indicators: {
	      type: Boolean,
	      'default': true
	    },
	    controls: {
	      type: Boolean,
	      'default': true
	    }
	  },
	  methods: {
	    // previous slide
	    prev: function prev() {
	      if (this.animating) return;
	      this.index--;
	      if (this.index < 0) {
	        this.index = this.slidesCount;
	      }
	    },
	    // next slide
	    next: function next() {
	      if (this.animating) return;
	      this.index++;
	      if (this.index > this.slidesCount) {
	        this.index = 0;
	      }
	    },
	    // on slide change
	    changeSlide: function changeSlide(index) {
	      this.index = index;
	    },
	    // pause auto rotation
	    pause: function pause() {
	      if (this.interval === 0 || typeof this.interval === 'undefined') return;
	      clearInterval(this._intervalId);
	    },
	    // start auto rotate slides
	    start: function start() {
	      var _this = this;

	      if (this.interval === 0 || typeof this.interval === 'undefined') return;
	      this._intervalId = setInterval(function () {
	        _this.next();
	      }, this.interval);
	    }
	  },
	  ready: function ready() {
	    // get all slides
	    this._items = this.$el.querySelectorAll('.carousel-item');
	    this.slidesCount = this._items.length - 1;
	    this.slides = Array.apply(null, { length: this._items.length }).map(Number.call, Number);

	    // set first slide as active
	    this._items[0].classList.add('active');

	    // auto rotate slides
	    this.start();
	  },
	  watch: {
	    index: function index(val, oldVal) {
	      var _this2 = this;

	      this.animating = true;
	      this.direction = DIRECTION.rtl;

	      // when previous is pressed we want to move from left to right
	      if (val < oldVal) {
	        this.direction = DIRECTION.ltr;
	      }

	      // lets animate
	      // prepare next slide to animate (position it on the opposite side of the direction as a starting point)
	      this._items[val].classList.add(this.direction.incoming, this.direction.overlay);
	      // reflow
	      this._items[val].offsetWidth;
	      // add class active
	      this._items[val].classList.add('active');
	      // trigger animation on outgoing and incoming slide
	      this._items[oldVal].classList.add(this.direction.outgoing);
	      this._items[val].classList.remove(this.direction.incoming);
	      // wait for animation to finish and cleanup classes
	      this._carouselAnimation = setTimeout(function () {
	        _this2._items[oldVal].classList.remove(_this2.direction.outgoing, 'active');
	        _this2._items[val].classList.remove(_this2.direction.overlay);
	        _this2.animating = false;
	        // trigger an event
	        _this2.$dispatch('slid::carousel', val);
	      }, TRANSITION_DURATION);
	    }
	  },
	  destroyed: function destroyed() {
	    clearTimeout(this._carouselAnimation);
	    clearInterval(this._intervalId);
	  }
	};

	exports.carousel = carousel;
	// export slide object
	var slide = {
	  template: '<div class="carousel-item"><slot></slot></div>',
	  replace: true
	};
	exports.slide = slide;

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\" v-on:mouseenter=\"pause()\" v-on:mouseleave=\"start()\">\r\n\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\" v-show=\"indicators\">\r\n        <li v-for=\"item in slides\" v-bind:class=\"{'active': item == index}\" v-on:click=\"changeSlide($index)\"></li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n        <slot></slot>\r\n    </div>\r\n\r\n    <!-- Controls -->\r\n    <a class=\"left carousel-control\" href=\"#\" role=\"button\" v-on:click.stop.prevent=\"prev\" v-show=\"controls\">\r\n        <span class=\"icon-prev\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#\" role=\"button\" v-on:click.stop.prevent=\"next\" v-show=\"controls\">\r\n        <span class=\"icon-next\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n\r\n</div>";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _collapseJson = __webpack_require__(161);

	var _collapseJson2 = _interopRequireDefault(_collapseJson);

	var _collapseHtml = __webpack_require__(162);

	var _collapseHtml2 = _interopRequireDefault(_collapseHtml);

	var _snippetHtml = __webpack_require__(163);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsCollapse = __webpack_require__(105);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/collapse',
	    name: 'collapse',
	    title: 'Collapse'
	  },
	  template: _collapseHtml2['default'],
	  data: function data() {
	    return {
	      meta: _collapseJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    vsCollapse: _srcComponentsCollapse.collapse,
	    vsCollapseToggle: _srcComponentsCollapse.collapseToggle,
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = {
		"name": "collapse",
		"title": "Collapse",
		"description": "Click the buttons below to show and hide another element. It requires either <code>target</code> or <code>target-group</code> attribute for this to work.",
		"dependencies": [
			"vuestrap/collapseToggle"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "id",
				"type": "String",
				"default": "",
				"required": true,
				"description": "An <code>id</code> attribute  needs to be set on <code>&lt;vs-collapse></code> tag and referenced in <code>&lt;vs-collapsetoggle></code> using <code>target</code> attribute."
			},
			{
				"name": "group",
				"type": "String",
				"default": "",
				"required": true,
				"description": "A <code>group</code> attribute needs to be set on <code>&lt;vs-collapse></code> tag and referenced in <code>&lt;vs-collapsetoggle></code> using <code>target-group</code> attribute."
			}
		]
	};

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-collapse-toggle target=\"collapse-1\">\r\n\t\t\t<button class=\"btn btn-default\">Toogle first</button>\r\n\t\t</vs-collapse-toggle>\r\n\t\t<vs-collapse-toggle target=\"collapse-2\">\r\n\t\t\t<button class=\"btn btn-default\">Toogle second</button>\r\n\t\t</vs-collapse-toggle>\r\n\t\t<vs-collapse-toggle target-group=\"group-1\">\r\n\t\t\t<button class=\"btn btn-default\">Toogle all</button>\r\n\t\t</vs-collapse-toggle>\r\n\t\t\r\n\t\t<div class=\"m-b\"></div>\r\n\r\n\t\t<vs-collapse id=\"collapse-1\" group=\"group-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>First</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</vs-collapse>\r\n\t\t<vs-collapse id=\"collapse-2\" group=\"group-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>Second</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</vs-collapse>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- triggers --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse-toggle</span> <span class=\"hljs-attribute\">target</span>=<span class=\"hljs-value\">\"collapse-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-default\"</span>&gt;</span>Toogle first<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse-toggle</span> <span class=\"hljs-attribute\">target</span>=<span class=\"hljs-value\">\"collapse-2\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-default\"</span>&gt;</span>Toogle second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse-toggle</span> <span class=\"hljs-attribute\">target-group</span>=<span class=\"hljs-value\">\"group-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-default\"</span>&gt;</span>Toogle all<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse-toggle</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- item 1 --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"collapse-1\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"group-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>First<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- item 2 --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"collapse-2\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"group-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>Second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse</span>&gt;</span>\r\n";

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dropdownJson = __webpack_require__(165);

	var _dropdownJson2 = _interopRequireDefault(_dropdownJson);

	var _dropdownHtml = __webpack_require__(166);

	var _dropdownHtml2 = _interopRequireDefault(_dropdownHtml);

	var _snippetHtml = __webpack_require__(167);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsDropdown = __webpack_require__(168);

	var _srcComponentsDropdown2 = _interopRequireDefault(_srcComponentsDropdown);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/dropdown',
	    name: 'dropdown',
	    title: 'Dropdown'
	  },
	  template: _dropdownHtml2['default'],
	  data: function data() {
	    return {
	      meta: _dropdownJson2['default'],
	      snippet: _snippetHtml2['default'],
	      arrow: true,
	      caret: true,
	      dropup: false,
	      size: 'md',
	      sizes: _srcUtils.sizes,
	      variant: 'primary',
	      variants: _srcUtils.variants
	    };
	  },
	  components: {
	    vsDropdown: _srcComponentsDropdown2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = {
		"name": "dropdown",
		"title": "Dropdown",
		"description": "Dropdowns are toggleable, contextual overlays for displaying lists of links.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "arrow",
				"type": "Boolean",
				"default": "true",
				"required": false,
				"description": "Show/hide down menu with arrow.."
			},
			{
				"name": "caret",
				"type": "Boolean",
				"default": "true",
				"required": false,
				"description": "Show/hide down caret.."
			},
			{
				"name": "text",
				"type": "String",
				"default": "",
				"required": false,
				"description": "Button text.."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button.."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			},
			{
				"name": "dropup",
				"type": "Boolean",
				"default": "false",
				"description": "Allow for dropdowns to go bottom up (aka, dropup-menu)"
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"default": "false",
				"description": "Make button look inactive by adding the disabled boolean attribute."
			}
		]
	};

/***/ },
/* 166 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>arrow <input type=\"checkbox\" v-model=\"arrow\"></label>\r\n\t\t<label>caret <input type=\"checkbox\" v-model=\"caret\"></label>\r\n\t\t<label>dropup <input type=\"checkbox\" v-model=\"dropup\"></label>\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-dropdown\r\n\t\t\t  :text=\"'Action'\"\r\n\t\t\t  :variant=\"variant\"\r\n\t\t\t  :size=\"size\"\r\n\t\t\t  :caret=\"caret\"\r\n\t\t\t  :arrow=\"arrow\"\r\n\t\t\t  :dropup=\"dropup\">\r\n\t\t\t  <ul class=\"dropdown-menu dropdown-menu-left\">\r\n\t\t\t      <li><a class=\"dropdown-item\" href=\"#\" v-on:click.prevent=\"\">Completed</a></li>\r\n\t\t\t      <li><a class=\"dropdown-item\" href=\"#\" v-on:click.prevent=\"\">Pending</a></li>\r\n\t\t\t  </ul>\r\n\t\t\t</vs-dropdown>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-dropdown</span> \r\n  <span class=\"hljs-attribute\">text</span>=<span class=\"hljs-value\">\"Action\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">:arrow</span>=<span class=\"hljs-value\">\"arrow\"</span>\r\n  <span class=\"hljs-attribute\">:caret</span>=<span class=\"hljs-value\">\"false\"</span>\r\n  <span class=\"hljs-attribute\">dropup</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-menu dropdown-menu-left\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-item\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Completed<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-item\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Pending<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-dropdown</span>&gt;</span>\r\n";

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dropdownHtml = __webpack_require__(169);

	var _dropdownHtml2 = _interopRequireDefault(_dropdownHtml);

	__webpack_require__(170);

	// export component object
	exports['default'] = {
	  template: _dropdownHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    dropdownToggle: function dropdownToggle() {
	      return this.caret ? 'dropdown-toggle' : '';
	    }
	  },
	  props: {
	    caret: {
	      type: Boolean,
	      'default': true
	    },
	    arrow: {
	      type: Boolean,
	      'default': false
	    },
	    text: {
	      type: String,
	      'default': ''
	    },
	    size: {
	      type: String,
	      'default': 'default'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    dropup: {
	      type: Boolean,
	      'default': false
	    },
	    disabled: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  methods: {
	    toggle: function toggle(e) {
	      // hide an alert
	      this.show = !this.show;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      if (this.show) {
	        this.$dispatch('shown::dropdown');
	        e.stopPropagation();
	      } else {
	        this.$dispatch('hidden::dropdown');
	      }
	    }
	  },
	  events: {
	    'hide::dropdown': function hideDropdown() {
	      this.show = false;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{ open: show, dropdown: !dropup, dropup: dropup, 'dropdown-arrow': arrow}\" v-on:click=\"toggle($event)\">\r\n    <span class=\"btn-action\">\r\n        <button\r\n            id=\"dLabel\"\r\n            class=\"btn {{dropdownToggle}} {{btnVariant}} {{btnSize}}\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"{{show}}\"\r\n            :disabled=\"disabled\"\r\n            v-if=\"text\">\r\n            <span v-html=\"text\"></span>\r\n            <span class=\"caret\"></span>\r\n        </button>\r\n        <slot name=\"button\" v-if=\"!text\"></slot>\r\n    </span role=\"button\">\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(171);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./dropdown-override.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./dropdown-override.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".dropup {\n  display: inline-block; }\n\n.dropdown.dropdown-arrow .dropdown-menu {\n  margin-top: 10px; }\n  .dropdown.dropdown-arrow .dropdown-menu:before {\n    padding: 0;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid rgba(0, 0, 0, 0.15);\n    content: ' ';\n    position: absolute;\n    top: -10px;\n    left: 10px; }\n  .dropdown.dropdown-arrow .dropdown-menu.dropdown-menu-right:before {\n    left: auto;\n    right: 10px; }\n\n.dropdown .btn-action [slot=\"button\"], .dropup .btn-action [slot=\"button\"] {\n  display: none; }\n", ""]);

	// exports


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dropdownSelectJson = __webpack_require__(173);

	var _dropdownSelectJson2 = _interopRequireDefault(_dropdownSelectJson);

	var _dropdownSelectHtml = __webpack_require__(174);

	var _dropdownSelectHtml2 = _interopRequireDefault(_dropdownSelectHtml);

	var _snippetHtml = __webpack_require__(175);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsDropdownSelect = __webpack_require__(176);

	var _srcComponentsDropdownSelect2 = _interopRequireDefault(_srcComponentsDropdownSelect);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/dropdown-select',
	    name: 'dropdown-select',
	    title: 'Dropdown Select'
	  },
	  template: _dropdownSelectHtml2['default'],
	  data: function data() {
	    return {
	      meta: _dropdownSelectJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: {
	        text: 'First',
	        value: 'first'
	      },
	      list: [{
	        text: 'First',
	        value: 'first'
	      }, {
	        text: 'Second',
	        value: 'second'
	      }, {
	        text: 'Third',
	        value: 'third'
	      }],
	      caret: true,
	      dropup: false,
	      forceDefault: false,
	      position: 'left',
	      positions: _srcUtils.positions,
	      size: 'md',
	      sizes: _srcUtils.sizes,
	      variant: 'primary',
	      variants: _srcUtils.variants
	    };
	  },
	  components: {
	    vsDropdownSelect: _srcComponentsDropdownSelect2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = {
		"name": "dropdown-select",
		"title": "Dropdown Select",
		"description": "Dropdown select allows to select an item from the list and update the model.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "String/Object",
				"default": "",
				"required": false,
				"description": "A result of the selection. Can return object (see <code>return-object</code> attribute)."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of selectable items."
			},
			{
				"name": "position",
				"type": "String",
				"values": [
					"left",
					"right"
				],
				"default": "left",
				"required": false,
				"description": "Vertical position of the dropdown list against the dropdown button. It becomes handy when dropdown floats to the right."
			},
			{
				"name": "caret",
				"type": "Boolean",
				"default": "true",
				"required": false,
				"description": "Show/hide down caret."
			},
			{
				"name": "default-text",
				"type": "String",
				"default": "Plase select one",
				"required": false,
				"description": "Default text shown before selection is made."
			},
			{
				"name": "force-default",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "Force default text to be always shown, if set to true."
			},
			{
				"name": "return-object",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "If set to true, a full object will be returned in the model. By default only <code>value</code> is returned."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"default": "false",
				"description": "Make button look inactive by adding the disabled boolean attribute."
			}
		]
	};

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>caret <input type=\"checkbox\" v-model=\"caret\"></label>\r\n\t\t<label>dropup <input type=\"checkbox\" v-model=\"dropup\"></label>\r\n\t\t<label>force default <input type=\"checkbox\" v-model=\"forceDefault\"></label>\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tposition \r\n\t\t\t<select v-model=\"position\">\r\n\t\t\t\t<option v-for=\"option in positions\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\" class=\"clearfix\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<div class=\"div\" v-bind:class=\"{'pull-xs-right': position == 'right'}\">\r\n\t\t\t\t<vs-dropdown-select\r\n\t\t\t    :list=\"list\"\r\n\t\t\t    :model.sync=\"model\"\r\n\t\t\t    :position=\"position\"\r\n\t\t\t    :size=\"size\"\r\n\t\t\t    :variant=\"variant\"\r\n\t\t\t    default-text=\"Action\"\r\n\t\t\t    :force-default=\"forceDefault\"\r\n\t\t\t    :arrow=\"arrow\"\r\n\t\t\t    :caret=\"caret\"\r\n\t\t\t    :dropup=\"dropup\"\r\n\t\t\t    return-object>\r\n\t\t\t\t</vs-dropdown-select>\r\n\t\t\t</div>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-dropdown-select</span> \r\n  <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"[\r\n    {\r\n      text: 'First',\r\n      value: 'first',\r\n    }, {\r\n      text: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      text: 'Third',\r\n      value: 'third',\r\n    }]\"</span>\r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"left\"</span>\r\n  <span class=\"hljs-attribute\">default-text</span>=<span class=\"hljs-value\">\"Action\"</span>\r\n  <span class=\"hljs-attribute\">:force-default</span>=<span class=\"hljs-value\">\"false\"</span>\r\n  <span class=\"hljs-attribute\">:caret</span>=<span class=\"hljs-value\">\"false\"</span>\r\n  <span class=\"hljs-attribute\">dropup</span>\r\n  <span class=\"hljs-attribute\">return-object</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-dropdown-select</span>&gt;</span>\r\n";

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dropdownSelectHtml = __webpack_require__(177);

	var _dropdownSelectHtml2 = _interopRequireDefault(_dropdownSelectHtml);

	__webpack_require__(170);

	// export component object
	exports['default'] = {
	  template: _dropdownSelectHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false,
	      selected: false
	    };
	  },
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    dropdownToggle: function dropdownToggle() {
	      return this.caret ? 'dropdown-toggle' : '';
	    },
	    displayItem: function displayItem() {
	      var _this = this;

	      // if zero show default message
	      if (this.returnObject && this.model && !this.model.text || !this.returnObject && this.model && this.model.length === 0 || this.forceDefault) {
	        return this.defaultText;
	      }

	      // show selected item
	      if (this.returnObject && this.model && this.model.text) {
	        return this.model.text;
	      }

	      // show text that coresponds to the model value
	      if (!this.returnObject && this.model) {
	        var result = this.model || '';
	        this.list.forEach(function (item) {
	          if (item.value === _this.model) {
	            result = item.text;
	          }
	        });
	        return result;
	      }

	      return '';
	    }
	  },
	  props: {
	    id: {
	      type: String
	    },
	    model: {
	      required: false
	    },
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    caret: {
	      type: Boolean,
	      'default': true
	    },
	    position: {
	      type: String,
	      'default': 'left'
	    },
	    size: {
	      type: String,
	      'default': ''
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    defaultText: {
	      type: String,
	      'default': 'Plase select one'
	    },
	    forceDefault: {
	      type: Boolean,
	      'default': false
	    },
	    returnObject: {
	      type: Boolean,
	      'default': false
	    },
	    dropup: {
	      type: Boolean,
	      'default': false
	    },
	    disabled: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  methods: {
	    toggle: function toggle(e) {
	      // hide an alert
	      this.show = !this.show;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      if (this.show) {
	        this.$dispatch('shown:dropdown', this.id);
	        e.stopPropagation();
	      } else {
	        this.$dispatch('hidden::dropdown', this.id);
	      }
	    },
	    select: function select(item) {
	      // we need to set empty model to make model watchers react to it
	      if (this.returnObject) {
	        this.model = item;
	      } else {
	        this.model = item.value;
	      }
	      this.show = false;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      this.$dispatch('selected::dropdown', this.id, this.model);
	    }
	  },
	  events: {
	    'hide::dropdown': function hideDropdown() {
	      this.show = false;
	    }
	  },
	  ready: function ready() {}
	};
	module.exports = exports['default'];

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dropdown-select\" v-bind:class=\"{open: show, dropdown: !dropup, dropup: dropup}\">\r\n    <button\r\n        id=\"{{id}}\"\r\n        class=\"btn dropdown {{dropdownToggle}} {{btnVariant}} {{btnSize}}\"\r\n        role=\"button\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"show\"\r\n        v-on:click.prevent=\"toggle($event)\"\r\n        :disabled=\"disabled\">\r\n        <span class=\"checked-items\" v-html=\"displayItem\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" v-bind:class=\"{'dropdown-menu-right' : position == 'right'}\" aria-labelledby=\"dLabel\">\r\n        <li v-for=\"item in list\">\r\n            <button class=\"dropdown-item\" v-on:click.stop.prevent=\"select(item)\">{{item.text}}</button>\r\n        </li>\r\n    </ul>\r\n</div>\r\n";

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formCheckboxJson = __webpack_require__(179);

	var _formCheckboxJson2 = _interopRequireDefault(_formCheckboxJson);

	var _formCheckboxHtml = __webpack_require__(180);

	var _formCheckboxHtml2 = _interopRequireDefault(_formCheckboxHtml);

	var _snippetHtml = __webpack_require__(181);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsFormCheckbox = __webpack_require__(182);

	var _srcComponentsFormCheckbox2 = _interopRequireDefault(_srcComponentsFormCheckbox);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/form-checkbox',
	    name: 'form-checkbox',
	    title: 'Form checkbox'
	  },
	  template: _formCheckboxHtml2['default'],
	  data: function data() {
	    return {
	      meta: _formCheckboxJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: [{
	        text: 'Second',
	        value: 'second'
	      }],
	      list: [{
	        text: 'First',
	        checked: false,
	        value: 'first'
	      }, {
	        text: 'Second',
	        checked: false,
	        value: 'second'
	      }, {
	        text: 'Third',
	        checked: false,
	        value: 'third',
	        disabled: true
	      }],
	      custom: true,
	      vertical: true,
	      state: 'default',
	      states: _srcUtils.states
	    };
	  },
	  components: {
	    vsFormCheckbox: _srcComponentsFormCheckbox2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = {
		"name": "form-checkbox",
		"title": "Form Checkbox",
		"description": "A Checkbox input for selection of one or more items.",
		"dependencies": [
			"vuestrap/forms",
			"vuestrap/custom-forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "An array of <code>String</code> or <code>Object</code> values, (see <code>return-object</code> attribute)."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of checkbox items."
			},
			{
				"name": "custom",
				"type": "Boolean",
				"default": "true",
				"required": false,
				"description": "A custom styling overlying the default radio button."
			},
			{
				"name": "vertical",
				"type": "Boolean",
				"default": "true",
				"required": false,
				"description": "Stacks inputs vertically."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			},
			{
				"name": "return-object",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "If set to true, a full object will be returned in the model. By default only <code>value</code> is returned."
			}
		]
	};

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t\t<label>custom <input type=\"checkbox\" v-model=\"custom\"></label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-form-checkbox\r\n\t\t    :list.sync=\"list\"\r\n\t\t    :model.sync=\"model\"\r\n\t\t    :custom=\"custom\"\r\n\t\t    :vertical=\"vertical\"\r\n\t\t    :state=\"state\"\r\n\t\t    return-object>\r\n\t\t\t</vs-form-checkbox>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 181 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-form-checkbox</span> \r\n  <span class=\"hljs-attribute\">:list.sync</span>=<span class=\"hljs-value\">\"[{\r\n    text: 'First',\r\n    value: 'first',\r\n  }, {\r\n    text: 'Second',\r\n    value: 'second',\r\n  }, {\r\n    text: 'Third',\r\n    value: 'third',\r\n    disabled: true\r\n  }]\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'default'\"</span>\r\n  <span class=\"hljs-attribute\">:custom</span>=<span class=\"hljs-value\">\"false\"</span>\r\n  <span class=\"hljs-attribute\">vertical</span>\r\n  <span class=\"hljs-attribute\">return-object</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-form-checkbox</span>&gt;</span>\r\n";

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(183);

	var _formCheckboxHtml = __webpack_require__(186);

	var _formCheckboxHtml2 = _interopRequireDefault(_formCheckboxHtml);

	// export component object
	exports['default'] = {
	  template: _formCheckboxHtml2['default'],
	  replace: true,
	  computed: {
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    }
	  },
	  props: {
	    list: {
	      type: Array,
	      twoWay: true,
	      'default': [],
	      required: true
	    },
	    model: {
	      type: Array,
	      twoWay: true,
	      'default': []
	    },
	    custom: {
	      type: Boolean,
	      'default': true
	    },
	    vertical: {
	      type: Boolean,
	      'default': false
	    },
	    state: {
	      type: String,
	      'default': 'default'
	    },
	    returnObject: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  watch: {
	    list: {
	      handler: function handler() {
	        var _this = this;

	        this.model = [];
	        this.list.forEach(function (item) {
	          if (item.checked) {
	            if (_this.returnObject) {
	              _this.model.push(item);
	            } else {
	              _this.model.push(item.value);
	            }
	          }
	        });
	        // dispatch an event
	        this.$dispatch('changed::button-checkbox', this.model);
	      },
	      deep: true
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;

	    // handle initial selection
	    this.list.forEach(function (item) {
	      if (_this2.returnObject) {
	        _this2.model.forEach(function (modelItem) {
	          if (modelItem.value === item.value) {
	            item.checked = true;
	          }
	        });
	      } else {
	        if (_this2.model.indexOf(item.value) !== -1) {
	          item.checked = true;
	        }
	      }
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(184);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./custom-override.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./custom-override.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".c-input {\n  color: inherit; }\n", ""]);

	// exports


/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n\t<div class=\"checkbox\" v-for=\"item in list\" v-bind:class=\"{ 'checkbox-inline': !vertical, disabled: item.disabled }\">\r\n\t\t<label v-bind:class=\"{ 'c-input': custom, 'c-checkbox': custom }\">\r\n\t\t\t<input \r\n\t\t\t\tid=\"{{item.id}}\" \r\n\t\t\t\ttype=\"checkbox\" \r\n\t\t\t\tvalue=\"{{item.value}}\" \r\n\t\t\t\tautocomplete=\"off\" \r\n\t\t\t\tv-model=\"item.checked\" \r\n\t\t\t\tv-bind:disabled=\"item.disabled\">\r\n\t\t\t\t<span class=\"c-indicator\" v-if=\"custom\"></span> {{item.text}}\r\n\t\t</label>\r\n\t</div>\r\n</fieldset>\r\n";

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formRadioJson = __webpack_require__(188);

	var _formRadioJson2 = _interopRequireDefault(_formRadioJson);

	var _formRadioHtml = __webpack_require__(189);

	var _formRadioHtml2 = _interopRequireDefault(_formRadioHtml);

	var _snippetHtml = __webpack_require__(190);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsFormRadio = __webpack_require__(191);

	var _srcComponentsFormRadio2 = _interopRequireDefault(_srcComponentsFormRadio);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/form-radio',
	    name: 'form-radio',
	    title: 'Form radio'
	  },
	  template: _formRadioHtml2['default'],
	  data: function data() {
	    return {
	      meta: _formRadioJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: {
	        name: 'Second',
	        value: 'second'
	      },
	      list: [{
	        name: 'First',
	        value: 'first'
	      }, {
	        name: 'Second',
	        value: 'second'
	      }, {
	        name: 'Third (disabled)',
	        value: 'third',
	        disabled: true
	      }],
	      vertical: true,
	      custom: true,
	      state: 'default',
	      states: _srcUtils.states
	    };
	  },
	  components: {
	    vsFormRadio: _srcComponentsFormRadio2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = {
		"name": "form-radio",
		"title": "Form Radio",
		"description": "A radio input for selection of only one item.",
		"dependencies": [
			"vuestrap/forms",
			"vuestrap/custom-forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "String/Object",
				"default": "''",
				"required": true,
				"description": "A result of the selection. Can return object (see <code>return-object</code> attribute)."
			},
			{
				"name": "name",
				"type": "String",
				"default": "options",
				"description": "A name used to group radio buttons. Please make sure it is unique for each group."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of radio inputs."
			},
			{
				"name": "custom",
				"type": "Boolean",
				"default": "true",
				"required": false,
				"description": "A custom styling overlying the default radio button."
			},
			{
				"name": "vertical",
				"type": "Boolean",
				"default": "true",
				"required": false,
				"description": "Stacks inputs vertically."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			},
			{
				"name": "return-object",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "If set to true, a full object will be returned in the model. By default only <code>value</code> is returned."
			}
		]
	};

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t\t<label>custom <input type=\"checkbox\" v-model=\"custom\"></label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-form-radio\r\n\t\t    :model.sync=\"model\"\r\n\t\t    :list=\"list\"\r\n\t\t    :custom=\"custom\"\r\n\t\t    :vertical=\"vertical\"\r\n\t\t    :state=\"state\"\r\n\t\t    return-object>\r\n\t\t\t</vs-form-radio>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-form-radio</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"[\r\n    {\r\n      name: 'First',\r\n      value: 'first',\r\n    }, {\r\n      name: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      name: 'Third (disabled)',\r\n      value: 'third',\r\n      disabled: true,\r\n    }]\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'success'\"</span>\r\n  <span class=\"hljs-attribute\">:custom</span>=<span class=\"hljs-value\">\"false\"</span>\r\n  <span class=\"hljs-attribute\">vertical</span>\r\n  <span class=\"hljs-attribute\">return-object</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-form-radio</span>&gt;</span>\r\n";

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(183);

	var _formRadioHtml = __webpack_require__(192);

	var _formRadioHtml2 = _interopRequireDefault(_formRadioHtml);

	// export component object
	exports['default'] = {
	  template: _formRadioHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      selection: ''
	    };
	  },
	  computed: {
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    }
	  },
	  props: {
	    model: {
	      twoWay: true,
	      required: true
	    },
	    name: {
	      type: String,
	      'default': 'options'
	    },
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    custom: {
	      type: Boolean,
	      'default': true
	    },
	    vertical: {
	      type: Boolean,
	      'default': false
	    },
	    state: {
	      type: String,
	      'default': 'default'
	    },
	    returnObject: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  watch: {
	    selection: {
	      handler: function handler() {
	        var _this = this;

	        // set the model based on selection
	        if (this.returnObject) {
	          this.list.forEach(function (item) {
	            if (item.value === _this.selection) {
	              _this.model = item;
	            }
	          });
	        } else {
	          this.model = this.selection;
	        }
	        // dispatch an event
	        this.$dispatch('changed::button-radio', this.model);
	      },
	      deep: true
	    }
	  },
	  ready: function ready() {
	    // handle initial selection
	    this.selection = this.model.value;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 192 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n\t<div class=\"radio\" v-for=\"item in list\" v-bind:class=\"{ 'radio-inline': !vertical, disabled: item.disabled }\">\r\n\t\t<label v-bind:class=\"{ 'c-input': custom, 'c-radio': custom }\">\r\n\t\t\t<input \r\n\t\t\t\tid=\"{{item.id}}\" \r\n\t\t\t\ttype=\"radio\" \r\n\t\t\t\tname=\"{{name}}\"\r\n\t\t\t\tvalue=\"{{item.value}}\" \r\n\t\t\t\tautocomplete=\"off\" \r\n\t\t\t\tv-model=\"selection\" \r\n\t\t\t\tdisabled=\"{{item.disabled}}\">\r\n\t\t \t<span class=\"c-indicator\" v-if=\"custom\"></span> {{item.name}}\r\n\t\t</label>\r\n\t</div>\r\n</fieldset>\r\n";

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formInputJson = __webpack_require__(194);

	var _formInputJson2 = _interopRequireDefault(_formInputJson);

	var _formInputHtml = __webpack_require__(195);

	var _formInputHtml2 = _interopRequireDefault(_formInputHtml);

	var _snippetHtml = __webpack_require__(196);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsFormInput = __webpack_require__(197);

	var _srcComponentsFormInput2 = _interopRequireDefault(_srcComponentsFormInput);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/form-input',
	    name: 'form-input',
	    title: 'Form input'
	  },
	  template: _formInputHtml2['default'],
	  data: function data() {
	    return {
	      meta: _formInputJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: '',
	      custom: true,
	      vertical: true,
	      size: 'md',
	      sizes: _srcUtils.sizes,
	      state: 'success',
	      states: _srcUtils.states,
	      stateIcon: true
	    };
	  },
	  components: {
	    vsFormInput: _srcComponentsFormInput2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = {
		"name": "form-input",
		"title": "Form Input",
		"description": "A textual input.",
		"dependencies": [
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "Any text entered will be two way bound with your model variable."
			},
			{
				"name": "type",
				"type": "String",
				"default": "'text'",
				"values": [
					"text",
					"password",
					"datetime",
					"datetime-local",
					"date",
					"month",
					"time",
					"week",
					"number",
					"email",
					"url",
					"search",
					"tel",
					"color"
				],
				"required": false,
				"description": "A type of input"
			},
			{
				"name": "id",
				"type": "String",
				"default": "unqueId",
				"description": "Id used for input and corresponding label. If not set it will be auto-generated."
			},
			{
				"name": "label",
				"type": "String",
				"values": "",
				"default": "''",
				"required": false,
				"description": "A label text above the input."
			},
			{
				"name": "placeholder",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "Show Html5 placeholder."
			},
			{
				"name": "description",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A text muted text under neath of the input."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			},
			{
				"name": "state-icon",
				"type": "Boolean",
				"default": "true",
				"required": false,
				"description": "Show/hide icon within input. Icon is only shown when state is set."
			}
		]
	};

/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>state icon <input type=\"checkbox\" v-model=\"stateIcon\"></label>\r\n\t\t<label>size\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-form-input\r\n\t\t    :model.sync=\"model\"\r\n\t\t    type=\"text\"\r\n\t\t    label=\"Example Label\"\r\n\t\t    placeholder=\"Placeholder\"\r\n\t\t    description=\"We'll never share your email with anyone else.\"\r\n\t\t    :size=\"size\"\r\n\t\t    :state-icon=\"stateIcon\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</vs-form-input>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-form-input</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span>\r\n  <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"Example Label\"</span>\r\n  <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"Placeholder\"</span>\r\n  <span class=\"hljs-attribute\">description</span>=<span class=\"hljs-value\">\"We'll never share your email with anyone else.\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'success'\"</span>\r\n  <span class=\"hljs-attribute\">state-icon</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-form-input</span>&gt;</span>\r\n";

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsHelpersJs = __webpack_require__(107);

	var _formInputHtml = __webpack_require__(198);

	var _formInputHtml2 = _interopRequireDefault(_formInputHtml);

	// export component object
	exports['default'] = {
	  template: _formInputHtml2['default'],
	  replace: true,
	  computed: {
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    },
	    stateIconType: function stateIconType() {
	      return !this.stateIcon || this.stateIcon === 'default' ? '' : 'form-control-' + this.state;
	    },
	    inputSize: function inputSize() {
	      return !this.size || this.size === 'default' ? '' : 'form-control-' + this.size;
	    },
	    row: function row() {
	      return labelClass && inputClass;
	    }
	  },
	  props: {
	    model: {
	      twoWay: true,
	      required: true,
	      type: String
	    },
	    type: {
	      type: String,
	      'default': 'text',
	      required: true
	    },
	    id: {
	      type: String,
	      'default': _utilsHelpersJs.uniqueId
	    },
	    label: {
	      type: String,
	      'default': ''
	    },
	    placeholder: {
	      type: String,
	      'default': ''
	    },
	    description: {
	      type: String,
	      'default': ''
	    },
	    size: {
	      type: String,
	      'default': ''
	    },
	    state: {
	      type: String,
	      'default': ''
	    },
	    stateIcon: {
	      type: Boolean,
	      'default': true
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n    <label for=\"{{id}}\" v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <div class=\"inputClass\">\r\n        <input \r\n        \ttype=\"{{type}}\" \r\n        \tclass=\"form-control {{stateIconType}} {{inputSize}}\" \r\n        \tid=\"{{id}}\" \r\n        \tplaceholder=\"{{placeholder}}\" \r\n        \tv-model=\"model\">\r\n    </div>\r\n    <small class=\"text-muted\" v-if=\"description\" v-html=\"description\"></small>\r\n</fieldset>\r\n";

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formSelectJson = __webpack_require__(200);

	var _formSelectJson2 = _interopRequireDefault(_formSelectJson);

	var _formSelectHtml = __webpack_require__(201);

	var _formSelectHtml2 = _interopRequireDefault(_formSelectHtml);

	var _snippetHtml = __webpack_require__(202);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsFormSelect = __webpack_require__(203);

	var _srcComponentsFormSelect2 = _interopRequireDefault(_srcComponentsFormSelect);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/form-select',
	    name: 'form-select',
	    title: 'Form select'
	  },
	  template: _formSelectHtml2['default'],
	  data: function data() {
	    return {
	      meta: _formSelectJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: 'male',
	      options: [{
	        text: 'Male',
	        value: 'male'
	      }, {
	        text: 'Female',
	        value: 'female'
	      }],
	      size: 'md',
	      sizes: _srcUtils.sizes,
	      state: 'default',
	      states: _srcUtils.states
	    };
	  },
	  components: {
	    vsFormSelect: _srcComponentsFormSelect2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports) {

	module.exports = {
		"name": "form-select",
		"title": "Form Select",
		"description": "A textual input.",
		"dependencies": [
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "A result of the selection."
			},
			{
				"name": "options",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of options"
			},
			{
				"name": "id",
				"type": "String",
				"default": "unqueId",
				"description": "Id used for input and corresponding label. If not set it will be auto-generated."
			},
			{
				"name": "label",
				"type": "String",
				"values": "",
				"default": "''",
				"required": false,
				"description": "A label text above the input."
			},
			{
				"name": "default-option",
				"type": "Object",
				"default": "''",
				"required": false,
				"description": "Show default option, i.e. <code>{text: 'Please select one',value: 'default'}</code>."
			},
			{
				"name": "description",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A text muted text under neath of the input."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			}
		]
	};

/***/ },
/* 201 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>size\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-form-select\r\n\t\t    :model.sync=\"model\"\r\n\t\t    :options=\"options\"\r\n\t\t    :default-option=\"{text: 'Please select one',value: 'default'}\"\r\n\t\t    type=\"text\"\r\n\t\t    label=\"Example Label\"\r\n\t\t    description=\"We'll never share your gender with anyone else.\"\r\n\t\t    :size=\"size\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</vs-form-select>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-form-select</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">:options</span>=<span class=\"hljs-value\">\"options\"</span>\r\n  <span class=\"hljs-attribute\">:default-option</span>=<span class=\"hljs-value\">\"{text: 'Please select one',value: 'default'}\"</span>\r\n  <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span>\r\n  <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"Example Label\"</span>\r\n  <span class=\"hljs-attribute\">description</span>=<span class=\"hljs-value\">\"We'll never share your gender with anyone else.\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'success'\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-form-select</span>&gt;</span>\r\n";

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsHelpersJs = __webpack_require__(107);

	var _formSelectHtml = __webpack_require__(204);

	var _formSelectHtml2 = _interopRequireDefault(_formSelectHtml);

	// export component object
	exports['default'] = {
	  template: _formSelectHtml2['default'],
	  replace: true,
	  computed: {
	    allOptions: function allOptions() {
	      if (this.defaultOption.text && this.defaultOption.value) {
	        return [this.defaultOption].concat(this.options);
	      }
	      return this.options;
	    },
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    },
	    inputSize: function inputSize() {
	      return !this.size || this.size === 'default' ? '' : 'form-control-' + this.size;
	    }
	  },
	  props: {
	    model: {
	      twoWay: true,
	      required: true
	    },
	    options: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    id: {
	      type: String,
	      'default': _utilsHelpersJs.uniqueId
	    },
	    label: {
	      type: String,
	      'default': false
	    },
	    defaultOption: {
	      type: Object,
	      'default': function _default() {
	        return {};
	      }
	    },
	    description: {
	      type: String,
	      'default': false
	    },
	    size: {
	      type: String,
	      'default': ''
	    },
	    state: {
	      type: String,
	      'default': ''
	    }
	  },
	  watch: {
	    model: function model(val, oldVal) {
	      if (val === oldVal) return;
	      // Dispatch an event from the current vm that propagates all the way up to it's $root
	      this.$dispatch('selected::option', val);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n    <label for=\"{{id}}\" v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <!-- single select -->\r\n    <select class=\"form-control {{inputSize}}\" id=\"{{id}}\" v-model=\"model\" options=\"allOptions\" v-if=\"!multiple\">\r\n    \t<option v-for=\"option in allOptions\" v-bind:value=\"option.value\">{{option.text}}</option>\r\n    </select>\r\n    <small class=\"text-muted\" v-if=\"description\" v-html=\"description\"></small>\r\n</fieldset>\r\n";

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formTextareaJson = __webpack_require__(206);

	var _formTextareaJson2 = _interopRequireDefault(_formTextareaJson);

	var _formTextareaHtml = __webpack_require__(207);

	var _formTextareaHtml2 = _interopRequireDefault(_formTextareaHtml);

	var _snippetHtml = __webpack_require__(208);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsFormTextarea = __webpack_require__(209);

	var _srcComponentsFormTextarea2 = _interopRequireDefault(_srcComponentsFormTextarea);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/form-textarea',
	    name: 'form-textarea',
	    title: 'Form textarea'
	  },
	  template: _formTextareaHtml2['default'],
	  data: function data() {
	    return {
	      meta: _formTextareaJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: '',
	      state: 'default',
	      states: _srcUtils.states
	    };
	  },
	  components: {
	    vsFormTextarea: _srcComponentsFormTextarea2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = {
		"name": "form-textarea",
		"title": "Form textarea",
		"description": "A textarea input.",
		"dependencies": [
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "Any text entered will be two way bound with your model variable."
			},
			{
				"name": "id",
				"type": "String",
				"default": "unqueId",
				"description": "Id used for input and corresponding label. If not set it will be auto-generated."
			},
			{
				"name": "label",
				"type": "String",
				"values": "",
				"default": "''",
				"required": false,
				"description": "A label text above the input."
			},
			{
				"name": "description",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A text muted text under neath of the input."
			},
			{
				"name": "rows",
				"type": "Number",
				"default": "3",
				"description": "Size of textearea (Html5 rows attribute)."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			}
		]
	};

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-form-textarea\r\n\t\t    :model.sync=\"model\"\r\n\t\t    type=\"text\"\r\n\t\t    label=\"Example Label\"\r\n\t\t    description=\"Extra textarea description.\"\r\n\t\t    :rows=\"2\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</vs-form-textarea>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-form-textarea</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span>\r\n  <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"Example Label\"</span>\r\n  <span class=\"hljs-attribute\">description</span>=<span class=\"hljs-value\">\"Extra textarea description.\"</span>\r\n  <span class=\"hljs-attribute\">rows</span>=<span class=\"hljs-value\">\"2\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'success'\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-form-textarea</span>&gt;</span>\r\n";

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsHelpersJs = __webpack_require__(107);

	var _formTextareaHtml = __webpack_require__(210);

	var _formTextareaHtml2 = _interopRequireDefault(_formTextareaHtml);

	// export component object
	exports['default'] = {
	  template: _formTextareaHtml2['default'],
	  replace: true,
	  computed: {
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    }
	  },
	  props: {
	    model: {
	      twoWay: true,
	      required: true
	    },
	    id: {
	      type: String,
	      'default': _utilsHelpersJs.uniqueId
	    },
	    label: {
	      type: String,
	      'default': false
	    },
	    description: {
	      type: String,
	      'default': false
	    },
	    state: {
	      type: String,
	      'default': ''
	    },
	    rows: {
	      type: Number,
	      'default': 3
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 210 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n    <label for=\"{{id}}\" v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <textarea class=\"form-control\" id=\"{{id}}\" rows=\"{{rows}}\" v-model=\"model\"></textarea>\r\n    <small class=\"text-muted\" v-if=\"description\" v-html=\"description\"></small>\r\n</fieldset>";

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(212);

	var _imagesJson = __webpack_require__(213);

	var _imagesJson2 = _interopRequireDefault(_imagesJson);

	var _imagesHtml = __webpack_require__(214);

	var _imagesHtml2 = _interopRequireDefault(_imagesHtml);

	var _snippetHtml = __webpack_require__(215);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/images',
	    name: 'images',
	    title: 'Images'
	  },
	  template: _imagesHtml2['default'],
	  data: function data() {
	    return {
	      meta: _imagesJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 212 */
/***/ function(module, exports) {

	"use strict";

	// import dependencies

/***/ },
/* 213 */
/***/ function(module, exports) {

	module.exports = {
		"name": "images",
		"title": "Images",
		"description": "Opt your images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.",
		"dependencies": [
			"vuestrap/images"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": []
	};

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\" v-if=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<img v-bind:src=\"'assets/150x150.png'\" alt=\"...\" class=\"img-rounded\">\r\n\t\t\t<img v-bind:src=\"'assets/150x150.png'\" alt=\"...\" class=\"img-circle\">\r\n\t\t\t<img v-bind:src=\"'assets/150x150.png'\" alt=\"...\" class=\"img-thumbnail\">\r\n\t\t\t<div class=\"m-b\"></div>\r\n\t\t\t<img v-bind:src=\"'assets/responsive.png'\" alt=\"...\" class=\"img-fluid\" >\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/150x150?text=150x150\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"...\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"img-rounded\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/150x150?text=150x150\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"...\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"img-circle\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/150x150?text=150x150\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"...\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"img-thumbnail\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/1000x150?text=1000x150 - responsive\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"...\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"img-fluid\"</span> &gt;</span>\r\n";

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jumbotronJson = __webpack_require__(217);

	var _jumbotronJson2 = _interopRequireDefault(_jumbotronJson);

	var _jumbotronHtml = __webpack_require__(218);

	var _jumbotronHtml2 = _interopRequireDefault(_jumbotronHtml);

	var _snippetHtml = __webpack_require__(219);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsJumbotron = __webpack_require__(220);

	var _srcComponentsJumbotron2 = _interopRequireDefault(_srcComponentsJumbotron);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/jumbotron',
	    name: 'jumbotron',
	    title: 'Jumbotron'
	  },
	  template: _jumbotronHtml2['default'],
	  data: function data() {
	    return {
	      meta: _jumbotronJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    vsJumbotron: _srcComponentsJumbotron2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = {
		"name": "jumbotron",
		"title": "Jumbotron",
		"description": "A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.",
		"dependencies": [],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "fluid",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "To make the jumbotron full width, and without rounded corners."
			}
		]
	};

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>fluid <input type=\"checkbox\" v-model=\"fluid\"></label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-jumbotron :fluid=\"fluid\">\r\n\t\t\t\t<h1 class=\"display-3\">Hello, world!</h1>\r\n\t\t\t  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\r\n\t\t\t  <hr class=\"m-y-md\">\r\n\t\t\t  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n\t\t\t  <p class=\"lead\">\r\n\t\t\t    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n\t\t\t  </p>\r\n\t\t\t</vs-jumbotron>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 219 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-jumbotron</span> <span class=\"hljs-attribute\">fluid</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h1</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"display-3\"</span>&gt;</span>Hello, world!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h1</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lead\"</span>&gt;</span>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">hr</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"m-y-md\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>It uses utility classes for typography and spacing to space content out within the larger container.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lead\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary btn-lg\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"button\"</span>&gt;</span>Learn more<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-jumbotron</span>&gt;</span>\r\n";

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jumbotronHtml = __webpack_require__(221);

	var _jumbotronHtml2 = _interopRequireDefault(_jumbotronHtml);

	// export component object
	exports['default'] = {
	  template: _jumbotronHtml2['default'],
	  replace: true,
	  props: {
	    fluid: {
	      type: Boolean,
	      'default': false
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron\" v-bind:class=\"{ 'jumbotron-fluid': fluid }\">\r\n  <div class=\"container\">\r\n    <slot></slot>\r\n  </div>\r\n</div>";

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _labelsJson = __webpack_require__(223);

	var _labelsJson2 = _interopRequireDefault(_labelsJson);

	var _labelsHtml = __webpack_require__(224);

	var _labelsHtml2 = _interopRequireDefault(_labelsHtml);

	var _snippetHtml = __webpack_require__(225);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsBadge = __webpack_require__(226);

	var _srcComponentsBadge2 = _interopRequireDefault(_srcComponentsBadge);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/labels',
	    name: 'labels',
	    title: 'Labels'
	  },
	  template: _labelsHtml2['default'],
	  data: function data() {
	    return {
	      meta: _labelsJson2['default'],
	      snippet: _snippetHtml2['default'],
	      variant: 'primary',
	      variants: _srcUtils.variants,
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'pill', value: 'pill' }]
	    };
	  },
	  components: {
	    vsBadge: _srcComponentsBadge2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = {
		"name": "labels",
		"title": "Labels/Badges",
		"description": "Small and adaptive tag for adding context to just about any content.",
		"note": "Labels scale to match the size of the immediate parent element by using relative font sizing and em units.",
		"dependencies": [],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "variant",
				"type": "String",
				"default": "primary",
				"values": [
					"default",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"required": false,
				"description": "A color background."
			},
			{
				"name": "type",
				"type": "String",
				"values": [
					"pills"
				],
				"default": "''",
				"required": false,
				"description": "Switch to pill styling with rounded corners."
			}
		]
	};

/***/ },
/* 224 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\ttype \r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-badge :variant=\"variant\" :type=\"type\">open</vs-badge>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-badge</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"default\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"pill\"</span>&gt;</span>open<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-badge</span>&gt;</span>\r\n";

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _labels = __webpack_require__(227);

	var _labels2 = _interopRequireDefault(_labels);

	exports['default'] = _labels2['default'];
	module.exports = exports['default'];

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _labelsHtml = __webpack_require__(228);

	var _labelsHtml2 = _interopRequireDefault(_labelsHtml);

	// export component object
	exports['default'] = {
	  template: _labelsHtml2['default'],
	  replace: true,
	  computed: {
	    labelVariant: function labelVariant() {
	      return !this.variant || this.variant === 'default' ? 'label-default' : 'label-' + this.variant;
	    },
	    labelType: function labelType() {
	      return !this.type ? '' : 'label-' + this.type;
	    }
	  },
	  props: {
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    type: {
	      type: String,
	      'default': ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "<span class=\"label {{labelVariant}} {{labelType}}\">\r\n\t<slot></slot>\r\n</span>\r\n";

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _listGroupJson = __webpack_require__(230);

	var _listGroupJson2 = _interopRequireDefault(_listGroupJson);

	var _listGroupHtml = __webpack_require__(231);

	var _listGroupHtml2 = _interopRequireDefault(_listGroupHtml);

	var _snippetHtml = __webpack_require__(232);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsListGroup = __webpack_require__(233);

	var _srcComponentsLabels = __webpack_require__(227);

	var _srcComponentsLabels2 = _interopRequireDefault(_srcComponentsLabels);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/list-group',
	    name: 'list-group',
	    title: 'List group'
	  },
	  template: _listGroupHtml2['default'],
	  data: function data() {
	    return {
	      meta: _listGroupJson2['default'],
	      snippet: _snippetHtml2['default'],
	      state: 'success',
	      flush: false,
	      states: _srcUtils.states.concat([{ text: 'info', value: 'info' }]),
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'pill', value: 'pill' }]
	    };
	  },
	  components: {
	    vsListGroup: _srcComponentsListGroup.listGroup,
	    vsListGroupItem: _srcComponentsListGroup.listGroupItem,
	    vsBadge: _srcComponentsLabels2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = {
		"name": "list-group",
		"title": "List Group",
		"description": "List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.",
		"dependencies": [
			"vuestrap/labels"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "state",
				"type": "String",
				"default": "default",
				"values": [
					"default",
					"success",
					"info",
					"warning",
					"danger"
				],
				"required": false,
				"description": "A color context on the individual <code>&lt;vs-list-group-item></code>."
			},
			{
				"name": "active",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "An active state on the individual <code>&lt;vs-list-group-item></code>."
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "A disabled state on the individual <code>&lt;vs-list-group-item></code>."
			},
			{
				"name": "flush",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "Removes borders if set to true."
			}
		]
	};

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>flush <input type=\"checkbox\" v-model=\"flush\"></label>\r\n\t\t<label>\r\n\t\t\tstate \r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-list-group style=\"width: 350px\" :flush=\"flush\">\r\n\t\t\t\t<vs-list-group-item :state=\"state\">\r\n\t\t\t    <vs-badge type=\"pill\" class=\"pull-xs-right\">14</vs-badge>\r\n\t\t\t    Cras justo odio\r\n\t\t\t  </vs-list-group-item>\r\n\t\t\t  <vs-list-group-item>\r\n\t\t\t    <vs-badge type=\"pill\" class=\"pull-xs-right\">2</vs-badge>\r\n\t\t\t    Dapibus ac facilisis in\r\n\t\t\t  </vs-list-group-item>\r\n\t\t\t  <vs-list-group-item>\r\n\t\t\t    <vs-badge type=\"pill\" class=\"pull-xs-right\">1</vs-badge>\r\n\t\t\t    Morbi leo risus\r\n\t\t\t  </vs-list-group-item>\r\n\t\t\t</vs-list-group>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-list-group</span> <span class=\"hljs-attribute\">flush</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-list-group-item</span> <span class=\"hljs-attribute\">state</span>=<span class=\"hljs-value\">\"success\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-badge</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"pill\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pull-xs-right\"</span>&gt;</span>14<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-badge</span>&gt;</span>\r\n    Cras justo odio\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-list-group-item</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-list-group-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-badge</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"pill\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pull-xs-right\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-badge</span>&gt;</span>\r\n    Dapibus ac facilisis in\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-list-group-item</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-list-group-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-badge</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"pill\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pull-xs-right\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-badge</span>&gt;</span>\r\n    Morbi leo risus\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-list-group-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-list-group</span>&gt;</span>";

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _listGroupHtml = __webpack_require__(234);

	var _listGroupHtml2 = _interopRequireDefault(_listGroupHtml);

	__webpack_require__(235);

	// export component object
	var listGroup = {
	  template: _listGroupHtml2['default'],
	  replace: true,
	  props: {
	    flush: {
	      type: Boolean,
	      'default': false
	    }
	  }
	};

	exports.listGroup = listGroup;
	var listGroupItem = {
	  template: '<li class="list-group-item {{listState}} {{active ? \'active\' : \'\'}} {{disabled ? \'disabled\' : \'\'}}"><slot></slot></li>',
	  computed: {
	    listState: function listState() {
	      return !this.state || this.state === 'default' ? '' : 'list-group-item-' + this.state;
	    }
	  },
	  replace: true,
	  props: {
	    active: {
	      type: Boolean,
	      'default': false
	    },
	    disabled: {
	      type: Boolean,
	      'default': false
	    },
	    state: {
	      type: String,
	      'default': 'default'
	    }
	  }
	};
	exports.listGroupItem = listGroupItem;

/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = "<ul v-bind:class=\"{'list-group': true, 'list-group-flush': flush}\">\r\n  <slot></slot>\r\n</ul>";

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(236);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./list-group-override.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./list-group-override.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".list-group li.list-group-item:focus, .list-group li.list-group-item:hover {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5; }\n", ""]);

	// exports


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mediaJson = __webpack_require__(238);

	var _mediaJson2 = _interopRequireDefault(_mediaJson);

	var _mediaHtml = __webpack_require__(239);

	var _mediaHtml2 = _interopRequireDefault(_mediaHtml);

	var _snippetHtml = __webpack_require__(240);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsMedia = __webpack_require__(241);

	var _srcComponentsMedia2 = _interopRequireDefault(_srcComponentsMedia);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/media',
	    name: 'media',
	    title: 'Media'
	  },
	  template: _mediaHtml2['default'],
	  data: function data() {
	    return {
	      meta: _mediaJson2['default'],
	      snippet: _snippetHtml2['default'],
	      position: 'top left',
	      positions: [{ text: 'top left', value: 'top left' }, { text: 'top right', value: 'top right' }, { text: 'middle left', value: 'middle left' }, { text: 'middle right', value: 'middle right' }, { text: 'bottom left', value: 'bottom left' }, { text: 'bottom right', value: 'bottom right' }]
	    };
	  },
	  components: {
	    vsMedia: _srcComponentsMedia2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = {
		"name": "media",
		"title": "Media",
		"description": "The media object is an abstract element used as the basis for building more complex and repetitive components (like blog comments, Tweets, etc).",
		"dependencies": [
			"vuestrap/images"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "align",
				"type": "String",
				"default": "top left",
				"required": false,
				"description": "To align media object versus body content."
			}
		]
	};

/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n    <div slot=\"controls\">\r\n        <!-- Html controls start-->\r\n        <label>\r\n\t\t\tposition\r\n\t\t\t<select v-model=\"position\">\r\n\t\t\t\t<option v-for=\"option in positions\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n        <!-- Html controls end-->\r\n    </div>\r\n    <div slot=\"markup\">\r\n        <!-- Html markup start-->\r\n        <vs-media :position=\"position\">\r\n            <div slot=\"aside\">\r\n                <a href=\"#\">\r\n                \t<img class=\"media-object\" v-bind:src=\"'assets/media.png'\">\r\n                </a>\r\n            </div>\r\n            <div slot=\"body\">\r\n            \t<h4 class=\"media-heading\">Media heading</h4>\r\n                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n            </div>\r\n        </vs-media>\r\n        <!-- Html markup end-->\r\n    </div>\r\n</docs-demo>\r\n";

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-media</span> <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"top left\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"aside\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"media-object\"</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/50x50?text=media\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"media-heading\"</span>&gt;</span>Media heading<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span> \r\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-media</span>&gt;</span>\r\n";

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mediaHtml = __webpack_require__(242);

	var _mediaHtml2 = _interopRequireDefault(_mediaHtml);

	// export component object
	exports['default'] = {
	  template: _mediaHtml2['default'],
	  replace: true,
	  computed: {
	    align: function align() {
	      return this.position.split(' ');
	    },
	    mediaVerticalAlign: function mediaVerticalAlign() {
	      var verticalAlign = this.align[0];
	      return 'media-' + verticalAlign;
	    },
	    mediaHorizontalAlign: function mediaHorizontalAlign() {
	      var horizontalAlign = this.align[1];
	      return 'media-' + horizontalAlign;
	    }
	  },
	  props: {
	    position: {
	      type: String,
	      'default': 'top left'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 242 */
/***/ function(module, exports) {

	module.exports = "<div class=\"media\">\r\n  <div class=\"{{mediaHorizontalAlign}} {{mediaVerticalAlign}}\" v-if=\"mediaHorizontalAlign == 'media-left'\">\r\n  \t<slot name=\"aside\">\r\n  </div>\r\n  <div class=\"media-body\">\r\n  \t<slot name=\"body\">\r\n  </div>\r\n  <div class=\"{{mediaHorizontalAlign}} {{mediaVerticalAlign}}\" v-if=\"mediaHorizontalAlign == 'media-right'\">\r\n  \t<slot name=\"aside\">\r\n  </div>\r\n</div>";

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _modalJson = __webpack_require__(244);

	var _modalJson2 = _interopRequireDefault(_modalJson);

	var _modalHtml = __webpack_require__(245);

	var _modalHtml2 = _interopRequireDefault(_modalHtml);

	var _snippetHtml = __webpack_require__(246);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsModal = __webpack_require__(247);

	var _srcComponentsModal2 = _interopRequireDefault(_srcComponentsModal);

	var _srcComponentsButtons = __webpack_require__(127);

	var _srcComponentsButtons2 = _interopRequireDefault(_srcComponentsButtons);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/modal',
	    name: 'modal',
	    title: 'Modal'
	  },
	  template: _modalHtml2['default'],
	  data: function data() {
	    return {
	      meta: _modalJson2['default'],
	      snippet: _snippetHtml2['default'],
	      size: 'md',
	      sizes: _srcUtils.sizes,
	      fade: true
	    };
	  },
	  components: {
	    vsButton: _srcComponentsButtons2['default'],
	    vsModal: _srcComponentsModal2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = {
		"name": "modal",
		"title": "Modal",
		"description": "Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "id",
				"type": "String",
				"default": "default",
				"description": "Id used for the modal. If not set it will be auto-generated. To show modal from anywhere in the application use <code>$broadcast('show-modal', 'id')</code> event.<br><code>$broadcast('hide-modal', 'id')</code> hides it.<br>Thanks to event system you can have multiple modal instances on the same page."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "fade",
				"type": "Boolean",
				"default": "true",
				"required": false,
				"description": "If set to true modal will fade in on open and fade out on close."
			},
			{
				"name": "close-on-backdrop",
				"type": "Boolean",
				"default": "true",
				"required": false,
				"description": "To disable/enable closing of the modal when clicking on the backdrop."
			}
		]
	};

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n    <div slot=\"controls\">\r\n        <!-- Html controls start-->\r\n        <label>fade <input type=\"checkbox\" v-model=\"fade\"></label>\r\n        <label>\r\n\t\t\tsize\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n        <!-- Html controls end-->\r\n    </div>\r\n    <div slot=\"markup\">\r\n        <!-- Html markup start-->\r\n\r\n        <!-- trigger -->\r\n        <vs-button variant=\"primary\" v-on:click=\"$broadcast('show::modal', 'modal1')\">\r\n        \tShow Modal\r\n        </vs-button>\r\n\r\n        <!-- modal -->\r\n        <vs-modal id=\"modal1\" :size=\"size\" :fade=\"fade\">\r\n            <div slot=\"modal-header\">\r\n                <h3>header</h3>\r\n            </div>\r\n            <div slot=\"modal-body\">\r\n                body\r\n            </div>\r\n            <div slot=\"modal-footer\">\r\n                <button class=\"btn btn-primary\" v-on:click=\"$broadcast('hide::modal', 'modal1')\">\r\n                    OK\r\n                </button>\r\n            </div>\r\n        </vs-modal>\r\n        <!-- Html markup end-->\r\n    </div>\r\n</docs-demo>\r\n";

/***/ },
/* 246 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- trigger --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-button</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span> <span class=\"hljs-attribute\">v-on:click</span>=<span class=\"hljs-value\">\"$broadcast('show::modal', 'modal1')\"</span>&gt;</span>\r\n  Show Modal\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-button</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- modal --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-modal</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"modal1\"</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">:fade</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"modal-header\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>header<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"modal-body\"</span>&gt;</span>\r\n    body\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"modal-footer\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span> <span class=\"hljs-attribute\">v-on:click</span>=<span class=\"hljs-value\">\"$broadcast('hide::modal', 'modal1')\"</span>&gt;</span>\r\n      OK\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-modal</span>&gt;</span>\r\n";

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsHelpersJs = __webpack_require__(107);

	var _modalHtml = __webpack_require__(248);

	var _modalHtml2 = _interopRequireDefault(_modalHtml);

	// import polyfill for IE9

	__webpack_require__(108);

	// this is directly linked to the bootstrap animation timing in _modal.scss
	// // for browsers that do not support transitions like IE9 just change slide immediately
	var TRANSITION_DURATION = (0, _utilsHelpersJs.csstransitions)() ? 300 : 0;

	// export component object
	exports['default'] = {
	  template: _modalHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      animateBackdrop: false,
	      animateModal: false
	    };
	  },
	  props: {
	    id: {
	      type: String,
	      'default': 'default'
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    fade: {
	      type: Boolean,
	      'default': true
	    },
	    closeOnBackdrop: {
	      type: Boolean,
	      'default': true
	    }
	  },
	  methods: {
	    show: function show() {
	      var _this2 = this;

	      this.$el.style.display = 'block';
	      this._body = document.querySelector('body');
	      var _this = this;
	      // wait for the display block, and then add class "in" class on the modal
	      this._modalAnimation = setTimeout(function () {
	        _this.animateBackdrop = true;
	        _this2._modalAnimation = setTimeout(function () {
	          _this._body.classList.add('modal-open');
	          _this.animateModal = true;
	          _this.$dispatch('shown::modal');
	        }, _this.fade ? TRANSITION_DURATION : 0);
	      }, 0);
	    },
	    hide: function hide() {
	      var _this3 = this;

	      var _this = this;
	      // first animate modal out
	      this.animateModal = false;
	      this._modalAnimation = setTimeout(function () {
	        // wait for animation to complete and then hide the backdrop
	        _this.animateBackdrop = false;
	        _this3._modalAnimation = setTimeout(function () {
	          _this._body.classList.remove('modal-open');
	          // no hide the modal wrapper
	          _this.$el.style.display = 'none';
	          _this.$dispatch('hidden::modal');
	        }, _this.fade ? TRANSITION_DURATION : 0);
	      }, _this.fade ? TRANSITION_DURATION : 0);
	    },
	    onClickOut: function onClickOut(e) {
	      // if backdrop clicked, hide modal
	      if (this.closeOnBackdrop && e.target.id && e.target.id === this.id) {
	        this.hide();
	      }
	    }
	  },
	  events: {
	    // control modal from outside via events
	    'show::modal': function showModal(id) {
	      if (id === this.id) {
	        this.show();
	      }
	    },
	    'hide::modal': function hideModal(id) {
	      if (id === this.id) {
	        this.hide();
	      }
	    }
	  },
	  ready: function ready() {
	    var _this4 = this;

	    // support for esc key press
	    document.addEventListener('keydown', function (e) {
	      var key = e.which || e.keyCode;
	      if (key === 27) {
	        // 27 is esc
	        _this4.hide();
	      }
	    });
	  },
	  destroyed: function destroyed() {
	    clearTimeout(this._modalAnimation);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "<div style=\"display: none\">\r\n\t<div id=\"{{id}}\" class=\"modal\" v-bind:class=\"{ fade: fade, in: animateModal || !fade }\" style=\"display: block\" v-on:click=\"onClickOut($event)\">\r\n\t  \t<div class=\"modal-dialog  modal-{{size}}\" role=\"document\" style=\"z-index: 9999\">\r\n\t\t    <div class=\"modal-content\">\r\n\t\t        <div class=\"modal-header\">\r\n\t\t        \t<slot name=\"modal-header\"></slot>\r\n\t\t        </div>\r\n\t\t        <div class=\"modal-body\">\r\n\t\t        \t<slot name=\"modal-body\"></slot>\r\n\t\t        </div>\r\n\t\t        <div class=\"modal-footer\">\r\n\t\t        \t<slot name=\"modal-footer\"></slot>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"modal-backdrop\" v-bind:class=\"{ fade: fade, in: animateBackdrop || !fade }\"></div>\r\n</div>";

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _navJson = __webpack_require__(250);

	var _navJson2 = _interopRequireDefault(_navJson);

	var _navHtml = __webpack_require__(251);

	var _navHtml2 = _interopRequireDefault(_navHtml);

	var _snippetHtml = __webpack_require__(252);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsNav = __webpack_require__(253);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/navigation',
	    name: 'navigation',
	    title: 'Nav'
	  },
	  template: _navHtml2['default'],
	  data: function data() {
	    return {
	      meta: _navJson2['default'],
	      snippet: _snippetHtml2['default'],
	      vertical: false,
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'pills', value: 'pills' }, { text: 'navbar', value: 'navbar' }]
	    };
	  },
	  components: {
	    vsNav: _srcComponentsNav.nav,
	    vsNavItem: _srcComponentsNav.navItem,
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  },
	  watch: {
	    type: function type(val) {
	      if (val === 'navbar') {
	        this.vertical = false;
	      }
	    },
	    vertical: function vertical(val) {
	      if (val) {
	        this.type = 'default';
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 250 */
/***/ function(module, exports) {

	module.exports = {
		"name": "nav",
		"title": "Nav",
		"description": "Roll your own navigation style by extending the base .nav component.",
		"dependencies": [],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "type",
				"type": "String",
				"values": [
					"default",
					"pills",
					"navbar"
				],
				"default": "default",
				"description": "Type of the navigation. Use <code>navbar</code> type in conjuction with <code>&lt;vs-navbar></code> element."
			},
			{
				"name": "vertical",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "Stack items in vertical position."
			},
			{
				"name": "active",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "An active state on the individual <code>&lt;vs-nav-item></code>."
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "A disabled state on the individual <code>&lt;vs-nav-item></code>."
			},
			{
				"name": "link",
				"type": "String",
				"default": "false",
				"required": false,
				"description": "Nav items support vue-router style links or regular href values."
			}
		]
	};

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\ttype\r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-nav :type=\"type\" :vertical=\"vertical\">\r\n\t\t\t \t<vs-nav-item link=\"#\" v-on:click.prevent=\"\" active>Active</vs-nav-item>\r\n\t\t\t \t<vs-nav-item link=\"#\" v-on:click.prevent=\"\">Link</vs-nav-item>\r\n\t\t\t \t<vs-nav-item link=\"#\" v-on:click.prevent=\"\">Another Link</vs-nav-item>\r\n\t\t\t \t<vs-nav-item link=\"#\" v-on:click.prevent=\"\" disabled>Disabled</vs-nav-item>\r\n\t\t\t</vs-nav>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"default\"</span> <span class=\"hljs-attribute\">:vertical</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav-item</span> <span class=\"hljs-attribute\">link</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">active</span>&gt;</span>Active<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav-item</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav-item</span> <span class=\"hljs-attribute\">link</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav-item</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav-item</span> <span class=\"hljs-attribute\">link</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Another Link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav-item</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav-item</span> <span class=\"hljs-attribute\">link</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>Disabled<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav</span>&gt;</span>";

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(254);

	var _navHtml = __webpack_require__(256);

	var _navHtml2 = _interopRequireDefault(_navHtml);

	var _utilsHelpersJs = __webpack_require__(107);

	// export component object
	var nav = {
	  template: _navHtml2['default'],
	  replace: true,
	  props: {
	    vertical: {
	      type: Boolean,
	      'default': false
	    },
	    type: {
	      type: String,
	      'default': ''
	    }
	  }
	};

	exports.nav = nav;
	// export slide object
	var navItem = {
	  template: '<li class="nav-item"><a href="#" v-on:click.stop.prevent="changeLocation($router, link)" class="nav-link {{active ? \'active\' : \'\'}} {{disabled ? \'disabled\' : \'\'}}"><slot></slot></a></li>',
	  replace: true,
	  props: {
	    link: {
	      type: String,
	      'default': ''
	    },
	    active: {
	      type: Boolean,
	      'default': false
	    },
	    disabled: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  methods: {
	    changeLocation: _utilsHelpersJs.changeLocation
	  }
	};
	exports.navItem = navItem;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(255);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./_nav-override.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./_nav-override.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".nav::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.nav li {\n  float: left;\n  margin-right: 0.5em; }\n  .nav li:last-child {\n    margin-right: 0; }\n", ""]);

	// exports


/***/ },
/* 256 */
/***/ function(module, exports) {

	module.exports = "<ul v-bind:class=\"{'nav': true, 'nav-stacked': vertical, 'nav-pills': type == 'pills', 'navbar-nav': type == 'navbar' }\">\r\n  <slot></slot> \r\n</ul>";

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _navbarJson = __webpack_require__(258);

	var _navbarJson2 = _interopRequireDefault(_navbarJson);

	var _navbarHtml = __webpack_require__(259);

	var _navbarHtml2 = _interopRequireDefault(_navbarHtml);

	var _snippetHtml = __webpack_require__(260);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsNav = __webpack_require__(253);

	var _srcComponentsNavbar = __webpack_require__(261);

	var _srcComponentsNavbar2 = _interopRequireDefault(_srcComponentsNavbar);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/navbar',
	    name: 'navbar',
	    title: 'Navbar'
	  },
	  template: _navbarHtml2['default'],
	  data: function data() {
	    return {
	      meta: _navbarJson2['default'],
	      snippet: _snippetHtml2['default'],
	      fixed: '',
	      fixeds: [{ text: 'default', value: '' }, { text: 'top', value: 'top' }, { text: 'bottom', value: 'bottom' }],
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'dark', value: 'dark' }],
	      variant: 'default',
	      variants: _srcUtils.variants.concat([{ text: 'inverse', value: 'inverse' }])
	    };
	  },
	  components: {
	    vsNav: _srcComponentsNav.nav,
	    vsNavItem: _srcComponentsNav.navItem,
	    vsNavbar: _srcComponentsNavbar2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  },
	  watch: {
	    type: function type(val) {
	      if (val === 'dark' && this.variant !== 'primary' && this.variant !== 'inverse') {
	        this.variant = 'inverse';
	      }
	    },
	    variant: function variant(val) {
	      if (val === 'primary' || val === 'inverse') {
	        this.type = 'dark';
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = {
		"name": "navbar",
		"title": "Navbar",
		"description": "The navbar is a simple wrapper for positioning branding, navigation, and other elements into a concise navigation header.",
		"dependencies": [
			"vuestrap/nav",
			"vuestrap/buttons",
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "fixed",
				"type": "String",
				"default": "''",
				"description": "Removes rounded corners and sticks the navbar to the top/bottom."
			},
			{
				"name": "type",
				"type": "String",
				"values": [
					"light",
					"dark"
				],
				"default": "success",
				"description": "When type is set to dark, light font color will be applied."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"inverse",
					"primary",
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "Background color of the navbar."
			},
			{
				"name": "full",
				"type": "Boolean",
				"default": "false",
				"description": "Removes rounded corners if set to true."
			}
		]
	};

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\tfixed\r\n\t\t\t<select v-model=\"fixed\">\r\n\t\t\t\t<option v-for=\"option in fixeds\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\ttype\r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant\r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-navbar :fixed=\"fixed\" :type=\"type\" :variant=\"variant\">\r\n\t\t\t  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n\t\t\t  <vs-nav type=\"navbar\" class=\"pull-xs-left\">\r\n\t\t\t    <vs-nav-item link=\"#\" active>Home <span class=\"sr-only\">(current)</span></vs-nav-item>\r\n\t\t\t    <vs-nav-item link=\"#\">Features</vs-nav-item>\r\n\t\t\t    <vs-nav-item link=\"#\">Pricing</vs-nav-item>\r\n\t\t\t    <vs-nav-item link=\"#\">About</vs-nav-item>\r\n\t\t\t  </vs-nav>\r\n\t\t\t  <form class=\"form-inline navbar-form pull-xs-right\">\r\n\t\t\t    <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\r\n\t\t\t    <button class=\"btn btn-success-outline\" type=\"submit\">Search</button>\r\n\t\t\t  </form>\r\n\t\t\t</vs-navbar>\r\n\t\t\t<div v-if=\"fixed\">Look for navbar at the {{fixed}} :)</div>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 260 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-navbar</span> <span class=\"hljs-attribute\">fixed</span>=<span class=\"hljs-value\">\"top\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"light\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"default\"</span> <span class=\"hljs-attribute\">full</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"navbar-brand\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Navbar<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"navbar\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pull-xs-left\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav-item</span> <span class=\"hljs-attribute\">link</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">active</span>&gt;</span>Home <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"sr-only\"</span>&gt;</span>(current)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav-item</span> <span class=\"hljs-attribute\">link</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Features<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav-item</span> <span class=\"hljs-attribute\">link</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Pricing<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav-item</span> <span class=\"hljs-attribute\">link</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>About<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav-item</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">form</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"form-inline navbar-form pull-xs-right\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"form-control\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span> <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"Search\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-success-outline\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"submit\"</span>&gt;</span>Search<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">form</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-navbar</span>&gt;</span>\r\n";

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _navbarHtml = __webpack_require__(262);

	var _navbarHtml2 = _interopRequireDefault(_navbarHtml);

	// export component object
	exports['default'] = {
	  template: _navbarHtml2['default'],
	  replace: true,
	  computed: {
	    navbarType: function navbarType() {
	      return !this.type || this.type === 'default' || this.type === 'light' ? 'navbar-light' : 'navbar-dark';
	    },
	    navbarVariant: function navbarVariant() {
	      return !this.variant || this.variant === 'default' ? 'bg-faded' : 'bg-' + this.variant;
	    },
	    navbarfixed: function navbarfixed() {
	      return !this.fixed ? '' : 'navbar-fixed-' + this.fixed;
	    }
	  },
	  props: {
	    type: {
	      type: String,
	      'default': 'default'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    fixed: {
	      type: String,
	      'default': ''
	    },
	    full: {
	      type: Boolean,
	      'default': false
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 262 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar {{navbarType}} {{navbarVariant}} {{navbarfixed}} {{full ? 'navbar-full' : ''}}\">\r\n\t<slot></slot>\r\n</nav>";

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _pagerJson = __webpack_require__(264);

	var _pagerJson2 = _interopRequireDefault(_pagerJson);

	var _pagerHtml = __webpack_require__(265);

	var _pagerHtml2 = _interopRequireDefault(_pagerHtml);

	var _snippetHtml = __webpack_require__(266);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsPager = __webpack_require__(267);

	var _srcComponentsPager2 = _interopRequireDefault(_srcComponentsPager);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/pager',
	    name: 'pager',
	    title: 'Pager'
	  },
	  template: _pagerHtml2['default'],
	  data: function data() {
	    return {
	      meta: _pagerJson2['default'],
	      snippet: _snippetHtml2['default'],
	      vertical: false,
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'pills', value: 'pills' }]
	    };
	  },
	  components: {
	    vsPager: _srcComponentsPager2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 264 */
/***/ function(module, exports) {

	module.exports = {
		"name": "pager",
		"title": "Pager",
		"description": "Quick previous and next links for simple pagination implementations with light markup and styles. It’s great for simple sites like blogs or magazines.",
		"dependencies": [],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": []
	};

/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-pager>\r\n\t\t\t\t<li><a href=\"#\">Previous</a></li>\r\n    \t\t<li><a href=\"#\">Next</a></li>\r\n    \t</vs-pager>\r\n    \t<hr>\r\n    \t<vs-pager>\r\n\t\t\t\t<li class=\"pager-prev\"><a href=\"#\">Older</a></li>\r\n    \t\t<li class=\"pager-next\"><a href=\"#\">Newer</a></li>\r\n    \t</vs-pager>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 266 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-pager</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Previous<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Next<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-pager</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">hr</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-pager</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pager-prev\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Older<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pager-next\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Newer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-pager</span>&gt;</span>\r\n";

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _pagerHtml = __webpack_require__(268);

	var _pagerHtml2 = _interopRequireDefault(_pagerHtml);

	// export component object
	exports['default'] = {
	  template: _pagerHtml2['default'],
	  replace: true
	};
	module.exports = exports['default'];

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = "<nav>\r\n  <ul class=\"pager\">\r\n  \t<slot></slot>\r\n  </ul>\r\n</nav>";

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _paginationJson = __webpack_require__(270);

	var _paginationJson2 = _interopRequireDefault(_paginationJson);

	var _paginationHtml = __webpack_require__(271);

	var _paginationHtml2 = _interopRequireDefault(_paginationHtml);

	var _snippetHtml = __webpack_require__(272);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsPagination = __webpack_require__(273);

	var _srcComponentsPagination2 = _interopRequireDefault(_srcComponentsPagination);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/pagination',
	    name: 'pagination',
	    title: 'Pagination'
	  },
	  template: _paginationHtml2['default'],
	  data: function data() {
	    return {
	      meta: _paginationJson2['default'],
	      snippet: _snippetHtml2['default'],
	      vertical: false,
	      size: 'md',
	      sizes: _srcUtils.sizes,
	      variant: 'primary',
	      variants: _srcUtils.variants,
	      totalRows: 100,
	      currentPage: 1,
	      perPage: 10
	    };
	  },
	  components: {
	    vsPagination: _srcComponentsPagination2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = {
		"name": "pagination",
		"title": "Pagination",
		"description": "Provide pagination links for your site or app with the multi-page pagination component.",
		"dependencies": [
			"vuestrap/buttons",
			"vuestrap/button-group"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "current-page",
				"type": "Number",
				"default": "1",
				"description": "Sets the initial active page number."
			},
			{
				"name": "limit",
				"type": "Number",
				"default": "7",
				"description": "Number of visible links"
			},
			{
				"name": "per-page",
				"type": "Number",
				"default": "20",
				"description": "Number of visible links including left and right arrows."
			},
			{
				"name": "total-rows",
				"type": "Number",
				"default": "20",
				"description": "Number of all results, so the pagination can calculate page links."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 271 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\t\tsize\r\n\t\t\t\t<select v-model=\"size\">\r\n\t\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\r\n\t\t\t<label>\r\n\t\t\t\tvariant\r\n\t\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-pagination\r\n\t\t\t    :size=\"size\"\r\n\t\t\t    :variant=\"variant\"\r\n\t\t\t    :total-rows=\"totalRows\"\r\n\t\t\t    :current-page.sync=\"currentPage\"\r\n\t\t\t    :per-page=\"perPage\">\r\n\t\t\t</vs-pagination>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-pagination</span> \r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">:total-rows</span>=<span class=\"hljs-value\">\"100\"</span>\r\n  <span class=\"hljs-attribute\">:current-page</span>=<span class=\"hljs-value\">\"currentPageVariable\"</span>\r\n  <span class=\"hljs-attribute\">:per-page</span>=<span class=\"hljs-value\">\"10\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-pagination</span>&gt;</span>\r\n";

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _paginationHtml = __webpack_require__(274);

	var _paginationHtml2 = _interopRequireDefault(_paginationHtml);

	// export component object
	exports['default'] = {
	  template: _paginationHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      diff: 1,
	      showPrev: false,
	      showNext: false
	    };
	  },
	  computed: {
	    numberOfPages: function numberOfPages() {
	      var result = Math.ceil(this.totalRows / this.perPage);
	      return result < 1 ? 1 : result;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    pageLinks: function pageLinks() {
	      var result = this.limit;
	      if (this.currentPage > this.numberOfPages) {
	        this.currentPage = 1;
	      }
	      this.diff = 1;
	      this.showPrev = false;
	      this.showNext = false;
	      // if less pages than limit just show this pages
	      if (this.numberOfPages <= this.limit) {
	        return this.numberOfPages;
	      }
	      // if at the beggining of the list or at the end show full number of pages within limit - 2
	      // -2 is reserves space for two buttons: "..." and "first/last button"
	      if (this.currentPage <= this.limit - 2) {
	        this.diff = 1;
	        this.showNext = true;
	        result = this.limit - 2;
	      }
	      // at the end of the range
	      if (this.currentPage > this.numberOfPages - this.limit + 2) {
	        this.diff = this.numberOfPages - this.limit + 3;
	        this.showPrev = true;
	        result = this.limit - 2;
	      }
	      // if somehere in the middle show just limit - 4 links in the middle and one button on the left with "..." and on button on the right preceeded with "..."
	      if (this.currentPage >= this.limit - 2 && this.currentPage <= this.numberOfPages - this.limit + 2) {
	        this.diff = this.currentPage - 1;
	        this.showPrev = true;
	        this.showNext = true;
	        result = this.limit - 4;
	      }
	      return result;
	    }
	  },
	  methods: {
	    btnVariant: function btnVariant(index) {
	      return index + this.diff === this.currentPage ? 'btn-' + this.variant : 'btn-secondary';
	    }
	  },
	  props: {
	    currentPage: {
	      type: Number,
	      'default': 1
	    },
	    limit: {
	      type: Number,
	      'default': 7
	    },
	    perPage: {
	      type: Number,
	      'default': 20
	    },
	    totalRows: {
	      type: Number,
	      'default': 20
	    },
	    size: {
	      type: String,
	      'default': 'secondary'
	    },
	    variant: {
	      type: String,
	      'default': ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group pagination\" role=\"group\" aria-label=\"Pagination\">\r\n    <button type=\"button\" class=\"btn btn-secondary {{btnSize}}\" v-bind:disabled=\"currentPage == 1 \" v-on:click.prevent=\"(currentPage == 1) ? return : currentPage--\"><span aria-hidden=\"true\">&laquo;</span></button>\r\n    <button type=\"button\" class=\"btn  btn-secondary {{btnSize}} {{ currentPage == 1 ?  'active' : '' }}\" v-on:click.prevent=\"currentPage = 1\" v-show=\"showPrev\">1</button>\r\n    <span class=\"btn btn-secondary {{btnSize}}\" v-show=\"showPrev\">...</span>\r\n    <button type=\"button\"\r\n    \tclass=\"btn {{btnSize}} {{btnVariant($index)}} {{ $index + diff == currentPage ? 'active' : '' }} {{ $index + diff != currentPage ? 'hidden-xs-down' : '' }}\"\r\n    \tv-for=\"item in pageLinks\"\r\n        v-on:click.prevent=\"currentPage = $index + diff\">{{$index + diff}}\r\n    </button>\r\n    <span class=\"btn btn-secondary {{btnSize}}\" v-show=\"showNext\">...</span>\r\n    <button type=\"button\" class=\"btn btn-secondary {{btnSize}} {{ numberOfPages == currentPage ? 'active' : '' }}\" v-show=\"showNext\" v-on:click.prevent=\"currentPage = numberOfPages\">{{numberOfPages}}</button>\r\n    <button type=\"button\" class=\"btn btn-secondary {{btnSize}}\" v-bind:disabled=\"currentPage == numberOfPages\" v-on:click.prevent=\"(currentPage == numberOfPages) ? return : currentPage++\"><span aria-hidden=\"true\">&raquo;</span></button>\r\n</div>\r\n";

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _popoverJson = __webpack_require__(276);

	var _popoverJson2 = _interopRequireDefault(_popoverJson);

	var _popoverHtml = __webpack_require__(277);

	var _popoverHtml2 = _interopRequireDefault(_popoverHtml);

	var _snippetHtml = __webpack_require__(278);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsPopover = __webpack_require__(279);

	var _srcComponentsPopover2 = _interopRequireDefault(_srcComponentsPopover);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/popover',
	    name: 'popover',
	    title: 'Popover'
	  },
	  template: _popoverHtml2['default'],
	  data: function data() {
	    return {
	      meta: _popoverJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    vsPopover: _srcComponentsPopover2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 276 */
/***/ function(module, exports) {

	module.exports = {
		"name": "popover",
		"title": "Popover",
		"description": "Add small overlay content to any element for housing secondary information. Popover rely on on the 3rd party library <a href='http://github.hubspot.com/tether/'>tether</a> for positioning.",
		"dependenices": [
			"vuestrap-tether",
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "position",
				"type": "String",
				"values": [
					"top",
					"bottom",
					"left",
					"right"
				],
				"default": "top",
				"required": false,
				"description": "Position of the popover."
			},
			{
				"name": "title",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "Title."
			},
			{
				"name": "text",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A textual content in the popover. This can be Html."
			},
			{
				"name": "triggers",
				"type": "Array",
				"values": [
					"click",
					"focus",
					"hover"
				],
				"default": "['click']",
				"description": "Opens popover based on spcified triggers. If you consider supporting mobile devices than you might need to specify both click and hover trigger, (on desktops click will take priority)."
			}
		]
	};

/***/ },
/* 277 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t<vs-popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"top\">\r\n\t\t\t<button class=\"btn\">popover top</button>\r\n\t\t</vs-popover>\r\n\t\t<vs-popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"bottom\">\r\n\t\t\t<button class=\"btn\">popover bottom</button>\r\n\t\t</vs-popover>\r\n\t\t<vs-popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"left\">\r\n\t\t\t<button class=\"btn\">popover left</button>\r\n\t\t</vs-popover>\r\n\t\t<vs-popover title=\"title\" position=\"right\">\r\n\t\t\t<button class=\"btn\">popover right (html)</button>\r\n\t\t\t<em slot=\"content\">Lorem ipsum dolor.</em>\r\n\t\t</vs-popover>\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- tooltip with a text --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-popover</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"title\"</span> <span class=\"hljs-attribute\">text</span>=<span class=\"hljs-value\">\"Lorem ipsum dolor.\"</span> <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"top\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn\"</span>&gt;</span>popover top<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-popover</span>&gt;</span>\r\n\r\n\r\n<span class=\"hljs-comment\">&lt;!-- tooltip with an html content --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-popover</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"title\"</span> <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"right\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn\"</span>&gt;</span>popover right (html)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">em</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"content\"</span>&gt;</span>Lorem ipsum dolor.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">em</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-popover</span>&gt;</span>";

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tether = __webpack_require__(280);

	var _tether2 = _interopRequireDefault(_tether);

	__webpack_require__(281);

	var _popoverHtml = __webpack_require__(283);

	var _popoverHtml2 = _interopRequireDefault(_popoverHtml);

	// export component object
	exports['default'] = {
	  template: _popoverHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  computed: {
	    popoverAlignment: function popoverAlignment() {
	      return !this.position || this.position === 'default' ? 'popover-top' : 'popover-' + this.position;
	    }
	  },
	  props: {
	    position: {
	      type: String,
	      'default': 'top'
	    },
	    triggers: {
	      type: Array,
	      'default': function _default() {
	        return ['click', 'focus'];
	      }
	    },
	    title: {
	      type: String,
	      'default': ''
	    },
	    text: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {

	    /**
	     * Toggle 'show' state
	     * @param  {Object} e
	     * @param  {Boolean} newState (if set use it's value)
	     */
	    toggle: function toggle(e, newState) {
	      // change state
	      this.show = typeof newState !== 'undefined' ? newState : !this.show;

	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      // element is shown
	      if (this.show) {
	        var position = {
	          attachment: 'bottom center',
	          targetAttachment: 'top center'
	        };
	        if (this.position === 'bottom') {
	          position = {
	            attachment: 'top center',
	            targetAttachment: 'bottom center'
	          };
	        }
	        if (this.position === 'left') {
	          position = {
	            attachment: 'middle right',
	            targetAttachment: 'middle left'
	          };
	        }
	        if (this.position === 'right') {
	          position = {
	            attachment: 'middle left',
	            targetAttachment: 'middle right'
	          };
	        }

	        // let tether do the magic, after element is shown
	        this._popover.style.display = 'block';
	        this._tether = new _tether2['default']({
	          element: this._popover,
	          target: this._trigger,
	          attachment: position.attachment,
	          targetAttachment: position.targetAttachment
	        });
	        this.$dispatch('shown::popover');

	        // element gets hidden
	      } else {
	          if (this._tether) {
	            this._popover.style.display = 'none';
	            this._tether.destroy();
	          }
	          this.$dispatch('hidden::popover');
	        }
	    },

	    /**
	     * Handle multiple event triggers
	     * @param  {Object} e
	     */
	    _eventHandler: function _eventHandler(e) {
	      // if both click and hover are set, on desktop devices click will take precedence
	      if ((e.type === 'mouseenter' || e.type === 'mouseleave') && this.triggers.indexOf('click') !== -1) {
	        return;
	      }
	      // TODO
	      // if both click and focus are set, focus will take precedence
	      // if (e.type === 'click' && this.triggers.indexOf('focus') !== -1) {
	      //   return
	      // }

	      // stop propagation to avoid accidental closing on ide::popover event
	      e.stopPropagation();

	      // hide popover
	      if (e.type === 'click') {
	        this.toggle(e);
	      } else {
	        if (e.type === 'mouseenter' || e.type === 'focus') {
	          this.toggle(e, true);
	        } else {
	          this.toggle(e, false);
	        }
	      }
	    }
	  },
	  events: {
	    'hide::popover': function hidePopover() {
	      this.toggle(null, false);
	    }
	  },
	  ready: function ready() {
	    // TODO animations

	    // configure tether
	    this._trigger = this.$els.trigger.children[0];
	    this._popover = this.$els.popover;
	    this._popover.style.display = 'none';
	    var _this = this;

	    // add listeners for specified triggers anb complementary click event
	    this._trigger.addEventListener('click', function (e) {
	      return _this._eventHandler(e);
	    });

	    if (this.triggers.indexOf('hover') !== -1) {
	      this._trigger.addEventListener('mouseenter', function (e) {
	        return _this._eventHandler(e);
	      });
	      this._trigger.addEventListener('mouseleave', function (e) {
	        return _this._eventHandler(e);
	      });
	    }
	    if (this.triggers.indexOf('focus') !== -1 && this._trigger.tagName.toLowerCase() === 'input') {
	      this._trigger.addEventListener('focus', function (e) {
	        return _this._eventHandler(e);
	      });
	      this._trigger.addEventListener('blur', function (e) {
	        return _this._eventHandler(e);
	      });
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    // clean up listeners
	    this._trigger.removeEventListener('click', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('mouseenter', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('mouseleave', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('focus', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('blur', function () {
	      return _this._eventHandler();
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.1.0 */

	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory(require, exports, module);
	  } else {
	    root.Tether = factory();
	  }
	}(this, function(require, exports, module) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var TetherBase = undefined;
	if (typeof TetherBase === 'undefined') {
	  TetherBase = { modules: [] };
	}

	function getScrollParent(el) {
	  var _getComputedStyle = getComputedStyle(el);

	  var position = _getComputedStyle.position;

	  if (position === 'fixed') {
	    return el;
	  }

	  var parent = el;
	  while (parent = parent.parentNode) {
	    var style = undefined;
	    try {
	      style = getComputedStyle(parent);
	    } catch (err) {}

	    if (typeof style === 'undefined' || style === null) {
	      return parent;
	    }

	    var _style = style;
	    var overflow = _style.overflow;
	    var overflowX = _style.overflowX;
	    var overflowY = _style.overflowY;

	    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
	      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
	        return parent;
	      }
	    }
	  }

	  return document.body;
	}

	var uniqueId = (function () {
	  var id = 0;
	  return function () {
	    return ++id;
	  };
	})();

	var zeroPosCache = {};
	var getOrigin = function getOrigin(doc) {
	  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
	  // jitter as the user scrolls that messes with our ability to detect if two positions
	  // are equivilant or not.  We place an element at the top left of the page that will
	  // get the same jitter, so we can cancel the two out.
	  var node = doc._tetherZeroElement;
	  if (typeof node === 'undefined') {
	    node = doc.createElement('div');
	    node.setAttribute('data-tether-id', uniqueId());
	    extend(node.style, {
	      top: 0,
	      left: 0,
	      position: 'absolute'
	    });

	    doc.body.appendChild(node);

	    doc._tetherZeroElement = node;
	  }

	  var id = node.getAttribute('data-tether-id');
	  if (typeof zeroPosCache[id] === 'undefined') {
	    zeroPosCache[id] = {};

	    var rect = node.getBoundingClientRect();
	    for (var k in rect) {
	      // Can't use extend, as on IE9, elements don't resolve to be hasOwnProperty
	      zeroPosCache[id][k] = rect[k];
	    }

	    // Clear the cache when this position call is done
	    defer(function () {
	      delete zeroPosCache[id];
	    });
	  }

	  return zeroPosCache[id];
	};

	function getBounds(el) {
	  var doc = undefined;
	  if (el === document) {
	    doc = document;
	    el = document.documentElement;
	  } else {
	    doc = el.ownerDocument;
	  }

	  var docEl = doc.documentElement;

	  var box = {};
	  // The original object returned by getBoundingClientRect is immutable, so we clone it
	  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
	  var rect = el.getBoundingClientRect();
	  for (var k in rect) {
	    box[k] = rect[k];
	  }

	  var origin = getOrigin(doc);

	  box.top -= origin.top;
	  box.left -= origin.left;

	  if (typeof box.width === 'undefined') {
	    box.width = document.body.scrollWidth - box.left - box.right;
	  }
	  if (typeof box.height === 'undefined') {
	    box.height = document.body.scrollHeight - box.top - box.bottom;
	  }

	  box.top = box.top - docEl.clientTop;
	  box.left = box.left - docEl.clientLeft;
	  box.right = doc.body.clientWidth - box.width - box.left;
	  box.bottom = doc.body.clientHeight - box.height - box.top;

	  return box;
	}

	function getOffsetParent(el) {
	  return el.offsetParent || document.documentElement;
	}

	function getScrollBarSize() {
	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  inner.style.height = '200px';

	  var outer = document.createElement('div');
	  extend(outer.style, {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    pointerEvents: 'none',
	    visibility: 'hidden',
	    width: '200px',
	    height: '150px',
	    overflow: 'hidden'
	  });

	  outer.appendChild(inner);

	  document.body.appendChild(outer);

	  var widthContained = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var widthScroll = inner.offsetWidth;

	  if (widthContained === widthScroll) {
	    widthScroll = outer.clientWidth;
	  }

	  document.body.removeChild(outer);

	  var width = widthContained - widthScroll;

	  return { width: width, height: width };
	}

	function extend() {
	  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var args = [];

	  Array.prototype.push.apply(args, arguments);

	  args.slice(1).forEach(function (obj) {
	    if (obj) {
	      for (var key in obj) {
	        if (({}).hasOwnProperty.call(obj, key)) {
	          out[key] = obj[key];
	        }
	      }
	    }
	  });

	  return out;
	}

	function removeClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.remove(cls);
	      }
	    });
	  } else {
	    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
	    var className = getClassName(el).replace(regex, ' ');
	    setClassName(el, className);
	  }
	}

	function addClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.add(cls);
	      }
	    });
	  } else {
	    removeClass(el, name);
	    var cls = getClassName(el) + (' ' + name);
	    setClassName(el, cls);
	  }
	}

	function hasClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    return el.classList.contains(name);
	  }
	  var className = getClassName(el);
	  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
	}

	function getClassName(el) {
	  if (el.className instanceof SVGAnimatedString) {
	    return el.className.baseVal;
	  }
	  return el.className;
	}

	function setClassName(el, className) {
	  el.setAttribute('class', className);
	}

	function updateClasses(el, add, all) {
	  // Of the set of 'all' classes, we need the 'add' classes, and only the
	  // 'add' classes to be set.
	  all.forEach(function (cls) {
	    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
	      removeClass(el, cls);
	    }
	  });

	  add.forEach(function (cls) {
	    if (!hasClass(el, cls)) {
	      addClass(el, cls);
	    }
	  });
	}

	var deferred = [];

	var defer = function defer(fn) {
	  deferred.push(fn);
	};

	var flush = function flush() {
	  var fn = undefined;
	  while (fn = deferred.pop()) {
	    fn();
	  }
	};

	var Evented = (function () {
	  function Evented() {
	    _classCallCheck(this, Evented);
	  }

	  _createClass(Evented, [{
	    key: 'on',
	    value: function on(event, handler, ctx) {
	      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	      if (typeof this.bindings === 'undefined') {
	        this.bindings = {};
	      }
	      if (typeof this.bindings[event] === 'undefined') {
	        this.bindings[event] = [];
	      }
	      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
	    }
	  }, {
	    key: 'once',
	    value: function once(event, handler, ctx) {
	      this.on(event, handler, ctx, true);
	    }
	  }, {
	    key: 'off',
	    value: function off(event, handler) {
	      if (typeof this.bindings !== 'undefined' && typeof this.bindings[event] !== 'undefined') {
	        return;
	      }

	      if (typeof handler === 'undefined') {
	        delete this.bindings[event];
	      } else {
	        var i = 0;
	        while (i < this.bindings[event].length) {
	          if (this.bindings[event][i].handler === handler) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'trigger',
	    value: function trigger(event) {
	      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
	        var i = 0;

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        while (i < this.bindings[event].length) {
	          var _bindings$event$i = this.bindings[event][i];
	          var handler = _bindings$event$i.handler;
	          var ctx = _bindings$event$i.ctx;
	          var once = _bindings$event$i.once;

	          var context = ctx;
	          if (typeof context === 'undefined') {
	            context = this;
	          }

	          handler.apply(context, args);

	          if (once) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }]);

	  return Evented;
	})();

	TetherBase.Utils = {
	  getScrollParent: getScrollParent,
	  getBounds: getBounds,
	  getOffsetParent: getOffsetParent,
	  extend: extend,
	  addClass: addClass,
	  removeClass: removeClass,
	  hasClass: hasClass,
	  updateClasses: updateClasses,
	  defer: defer,
	  flush: flush,
	  uniqueId: uniqueId,
	  Evented: Evented,
	  getScrollBarSize: getScrollBarSize
	};
	/* globals TetherBase, performance */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	if (typeof TetherBase === 'undefined') {
	  throw new Error('You must include the utils.js file before tether.js');
	}

	var _TetherBase$Utils = TetherBase.Utils;
	var getScrollParent = _TetherBase$Utils.getScrollParent;
	var getBounds = _TetherBase$Utils.getBounds;
	var getOffsetParent = _TetherBase$Utils.getOffsetParent;
	var extend = _TetherBase$Utils.extend;
	var addClass = _TetherBase$Utils.addClass;
	var removeClass = _TetherBase$Utils.removeClass;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	var flush = _TetherBase$Utils.flush;
	var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;

	function within(a, b) {
	  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

	  return a + diff >= b && b >= a - diff;
	}

	var transformKey = (function () {
	  if (typeof document === 'undefined') {
	    return '';
	  }
	  var el = document.createElement('div');

	  var transforms = ['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
	  for (var i = 0; i < transforms.length; ++i) {
	    var key = transforms[i];
	    if (el.style[key] !== undefined) {
	      return key;
	    }
	  }
	})();

	var tethers = [];

	var position = function position() {
	  tethers.forEach(function (tether) {
	    tether.position(false);
	  });
	  flush();
	};

	function now() {
	  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
	    return performance.now();
	  }
	  return +new Date();
	}

	(function () {
	  var lastCall = null;
	  var lastDuration = null;
	  var pendingTimeout = null;

	  var tick = function tick() {
	    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
	      // We voluntarily throttle ourselves if we can't manage 60fps
	      lastDuration = Math.min(lastDuration - 16, 250);

	      // Just in case this is the last event, remember to position just once more
	      pendingTimeout = setTimeout(tick, 250);
	      return;
	    }

	    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
	      // Some browsers call events a little too frequently, refuse to run more than is reasonable
	      return;
	    }

	    if (typeof pendingTimeout !== 'undefined') {
	      clearTimeout(pendingTimeout);
	      pendingTimeout = null;
	    }

	    lastCall = now();
	    position();
	    lastDuration = now() - lastCall;
	  };

	  if (typeof window !== 'undefined') {
	    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
	      window.addEventListener(event, tick);
	    });
	  }
	})();

	var MIRROR_LR = {
	  center: 'center',
	  left: 'right',
	  right: 'left'
	};

	var MIRROR_TB = {
	  middle: 'middle',
	  top: 'bottom',
	  bottom: 'top'
	};

	var OFFSET_MAP = {
	  top: 0,
	  left: 0,
	  middle: '50%',
	  center: '50%',
	  bottom: '100%',
	  right: '100%'
	};

	var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
	  var left = attachment.left;
	  var top = attachment.top;

	  if (left === 'auto') {
	    left = MIRROR_LR[relativeToAttachment.left];
	  }

	  if (top === 'auto') {
	    top = MIRROR_TB[relativeToAttachment.top];
	  }

	  return { left: left, top: top };
	};

	var attachmentToOffset = function attachmentToOffset(attachment) {
	  var left = attachment.left;
	  var top = attachment.top;

	  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
	    left = OFFSET_MAP[attachment.left];
	  }

	  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
	    top = OFFSET_MAP[attachment.top];
	  }

	  return { left: left, top: top };
	};

	function addOffset() {
	  var out = { top: 0, left: 0 };

	  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
	    offsets[_key] = arguments[_key];
	  }

	  offsets.forEach(function (_ref) {
	    var top = _ref.top;
	    var left = _ref.left;

	    if (typeof top === 'string') {
	      top = parseFloat(top, 10);
	    }
	    if (typeof left === 'string') {
	      left = parseFloat(left, 10);
	    }

	    out.top += top;
	    out.left += left;
	  });

	  return out;
	}

	function offsetToPx(offset, size) {
	  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
	    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
	  }
	  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
	    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
	  }

	  return offset;
	}

	var parseOffset = function parseOffset(value) {
	  var _value$split = value.split(' ');

	  var _value$split2 = _slicedToArray(_value$split, 2);

	  var top = _value$split2[0];
	  var left = _value$split2[1];

	  return { top: top, left: left };
	};
	var parseAttachment = parseOffset;

	var TetherClass = (function () {
	  function TetherClass(options) {
	    var _this = this;

	    _classCallCheck(this, TetherClass);

	    this.position = this.position.bind(this);

	    tethers.push(this);

	    this.history = [];

	    this.setOptions(options, false);

	    TetherBase.modules.forEach(function (module) {
	      if (typeof module.initialize !== 'undefined') {
	        module.initialize.call(_this);
	      }
	    });

	    this.position();
	  }

	  _createClass(TetherClass, [{
	    key: 'getClass',
	    value: function getClass() {
	      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var classes = this.options.classes;

	      if (typeof classes !== 'undefined' && classes[key]) {
	        return this.options.classes[key];
	      } else if (this.options.classPrefix) {
	        return this.options.classPrefix + '-' + key;
	      } else {
	        return key;
	      }
	    }
	  }, {
	    key: 'setOptions',
	    value: function setOptions(options) {
	      var _this2 = this;

	      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	      var defaults = {
	        offset: '0 0',
	        targetOffset: '0 0',
	        targetAttachment: 'auto auto',
	        classPrefix: 'tether'
	      };

	      this.options = extend(defaults, options);

	      var _options = this.options;
	      var element = _options.element;
	      var target = _options.target;
	      var targetModifier = _options.targetModifier;

	      this.element = element;
	      this.target = target;
	      this.targetModifier = targetModifier;

	      if (this.target === 'viewport') {
	        this.target = document.body;
	        this.targetModifier = 'visible';
	      } else if (this.target === 'scroll-handle') {
	        this.target = document.body;
	        this.targetModifier = 'scroll-handle';
	      }

	      ['element', 'target'].forEach(function (key) {
	        if (typeof _this2[key] === 'undefined') {
	          throw new Error('Tether Error: Both element and target must be defined');
	        }

	        if (typeof _this2[key].jquery !== 'undefined') {
	          _this2[key] = _this2[key][0];
	        } else if (typeof _this2[key] === 'string') {
	          _this2[key] = document.querySelector(_this2[key]);
	        }
	      });

	      addClass(this.element, this.getClass('element'));
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('target'));
	      }

	      if (!this.options.attachment) {
	        throw new Error('Tether Error: You must provide an attachment');
	      }

	      this.targetAttachment = parseAttachment(this.options.targetAttachment);
	      this.attachment = parseAttachment(this.options.attachment);
	      this.offset = parseOffset(this.options.offset);
	      this.targetOffset = parseOffset(this.options.targetOffset);

	      if (typeof this.scrollParent !== 'undefined') {
	        this.disable();
	      }

	      if (this.targetModifier === 'scroll-handle') {
	        this.scrollParent = this.target;
	      } else {
	        this.scrollParent = getScrollParent(this.target);
	      }

	      if (!(this.options.enabled === false)) {
	        this.enable(pos);
	      }
	    }
	  }, {
	    key: 'getTargetBounds',
	    value: function getTargetBounds() {
	      if (typeof this.targetModifier !== 'undefined') {
	        if (this.targetModifier === 'visible') {
	          if (this.target === document.body) {
	            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
	          } else {
	            var bounds = getBounds(this.target);

	            var out = {
	              height: bounds.height,
	              width: bounds.width,
	              top: bounds.top,
	              left: bounds.left
	            };

	            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
	            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
	            out.height = Math.min(innerHeight, out.height);
	            out.height -= 2;

	            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
	            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
	            out.width = Math.min(innerWidth, out.width);
	            out.width -= 2;

	            if (out.top < pageYOffset) {
	              out.top = pageYOffset;
	            }
	            if (out.left < pageXOffset) {
	              out.left = pageXOffset;
	            }

	            return out;
	          }
	        } else if (this.targetModifier === 'scroll-handle') {
	          var bounds = undefined;
	          var target = this.target;
	          if (target === document.body) {
	            target = document.documentElement;

	            bounds = {
	              left: pageXOffset,
	              top: pageYOffset,
	              height: innerHeight,
	              width: innerWidth
	            };
	          } else {
	            bounds = getBounds(target);
	          }

	          var style = getComputedStyle(target);

	          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

	          var scrollBottom = 0;
	          if (hasBottomScroll) {
	            scrollBottom = 15;
	          }

	          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

	          var out = {
	            width: 15,
	            height: height * 0.975 * (height / target.scrollHeight),
	            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
	          };

	          var fitAdj = 0;
	          if (height < 408 && this.target === document.body) {
	            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
	          }

	          if (this.target !== document.body) {
	            out.height = Math.max(out.height, 24);
	          }

	          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
	          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

	          if (this.target === document.body) {
	            out.height = Math.max(out.height, 24);
	          }

	          return out;
	        }
	      } else {
	        return getBounds(this.target);
	      }
	    }
	  }, {
	    key: 'clearCache',
	    value: function clearCache() {
	      this._cache = {};
	    }
	  }, {
	    key: 'cache',
	    value: function cache(k, getter) {
	      // More than one module will often need the same DOM info, so
	      // we keep a cache which is cleared on each position call
	      if (typeof this._cache === 'undefined') {
	        this._cache = {};
	      }

	      if (typeof this._cache[k] === 'undefined') {
	        this._cache[k] = getter.call(this);
	      }

	      return this._cache[k];
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('enabled'));
	      }
	      addClass(this.element, this.getClass('enabled'));
	      this.enabled = true;

	      if (this.scrollParent !== document) {
	        this.scrollParent.addEventListener('scroll', this.position);
	      }

	      if (pos) {
	        this.position();
	      }
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      removeClass(this.target, this.getClass('enabled'));
	      removeClass(this.element, this.getClass('enabled'));
	      this.enabled = false;

	      if (typeof this.scrollParent !== 'undefined') {
	        this.scrollParent.removeEventListener('scroll', this.position);
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this3 = this;

	      this.disable();

	      tethers.forEach(function (tether, i) {
	        if (tether === _this3) {
	          tethers.splice(i, 1);
	          return;
	        }
	      });
	    }
	  }, {
	    key: 'updateAttachClasses',
	    value: function updateAttachClasses(elementAttach, targetAttach) {
	      var _this4 = this;

	      elementAttach = elementAttach || this.attachment;
	      targetAttach = targetAttach || this.targetAttachment;
	      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

	      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
	        // updateAttachClasses can be called more than once in a position call, so
	        // we need to clean up after ourselves such that when the last defer gets
	        // ran it doesn't add any extra classes from previous calls.
	        this._addAttachClasses.splice(0, this._addAttachClasses.length);
	      }

	      if (typeof this._addAttachClasses === 'undefined') {
	        this._addAttachClasses = [];
	      }
	      var add = this._addAttachClasses;

	      if (elementAttach.top) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
	      }
	      if (elementAttach.left) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
	      }
	      if (targetAttach.top) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
	      }
	      if (targetAttach.left) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
	      }

	      var all = [];
	      sides.forEach(function (side) {
	        all.push(_this4.getClass('element-attached') + '-' + side);
	        all.push(_this4.getClass('target-attached') + '-' + side);
	      });

	      defer(function () {
	        if (!(typeof _this4._addAttachClasses !== 'undefined')) {
	          return;
	        }

	        updateClasses(_this4.element, _this4._addAttachClasses, all);
	        if (!(_this4.options.addTargetClasses === false)) {
	          updateClasses(_this4.target, _this4._addAttachClasses, all);
	        }

	        delete _this4._addAttachClasses;
	      });
	    }
	  }, {
	    key: 'position',
	    value: function position() {
	      var _this5 = this;

	      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
	      // tethers (in which case call Tether.Utils.flush yourself when you're done)

	      if (!this.enabled) {
	        return;
	      }

	      this.clearCache();

	      // Turn 'auto' attachments into the appropriate corner or edge
	      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

	      this.updateAttachClasses(this.attachment, targetAttachment);

	      var elementPos = this.cache('element-bounds', function () {
	        return getBounds(_this5.element);
	      });

	      var width = elementPos.width;
	      var height = elementPos.height;

	      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	        var _lastSize = this.lastSize;

	        // We cache the height and width to make it possible to position elements that are
	        // getting hidden.
	        width = _lastSize.width;
	        height = _lastSize.height;
	      } else {
	        this.lastSize = { width: width, height: height };
	      }

	      var targetPos = this.cache('target-bounds', function () {
	        return _this5.getTargetBounds();
	      });
	      var targetSize = targetPos;

	      // Get an actual px offset from the attachment
	      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
	      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

	      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
	      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

	      // Add the manually provided offset
	      offset = addOffset(offset, manualOffset);
	      targetOffset = addOffset(targetOffset, manualTargetOffset);

	      // It's now our goal to make (element position + offset) == (target position + target offset)
	      var left = targetPos.left + targetOffset.left - offset.left;
	      var top = targetPos.top + targetOffset.top - offset.top;

	      for (var i = 0; i < TetherBase.modules.length; ++i) {
	        var _module2 = TetherBase.modules[i];
	        var ret = _module2.position.call(this, {
	          left: left,
	          top: top,
	          targetAttachment: targetAttachment,
	          targetPos: targetPos,
	          elementPos: elementPos,
	          offset: offset,
	          targetOffset: targetOffset,
	          manualOffset: manualOffset,
	          manualTargetOffset: manualTargetOffset,
	          scrollbarSize: scrollbarSize,
	          attachment: this.attachment
	        });

	        if (ret === false) {
	          return false;
	        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
	          continue;
	        } else {
	          top = ret.top;
	          left = ret.left;
	        }
	      }

	      // We describe the position three different ways to give the optimizer
	      // a chance to decide the best possible way to position the element
	      // with the fewest repaints.
	      var next = {
	        // It's position relative to the page (absolute positioning when
	        // the element is a child of the body)
	        page: {
	          top: top,
	          left: left
	        },

	        // It's position relative to the viewport (fixed positioning)
	        viewport: {
	          top: top - pageYOffset,
	          bottom: pageYOffset - top - height + innerHeight,
	          left: left - pageXOffset,
	          right: pageXOffset - left - width + innerWidth
	        }
	      };

	      var scrollbarSize = undefined;
	      if (document.body.scrollWidth > window.innerWidth) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.bottom -= scrollbarSize.height;
	      }

	      if (document.body.scrollHeight > window.innerHeight) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.right -= scrollbarSize.width;
	      }

	      if (['', 'static'].indexOf(document.body.style.position) === -1 || ['', 'static'].indexOf(document.body.parentElement.style.position) === -1) {
	        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
	        next.page.bottom = document.body.scrollHeight - top - height;
	        next.page.right = document.body.scrollWidth - left - width;
	      }

	      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
	        (function () {
	          var offsetParent = _this5.cache('target-offsetparent', function () {
	            return getOffsetParent(_this5.target);
	          });
	          var offsetPosition = _this5.cache('target-offsetparent-bounds', function () {
	            return getBounds(offsetParent);
	          });
	          var offsetParentStyle = getComputedStyle(offsetParent);
	          var offsetParentSize = offsetPosition;

	          var offsetBorder = {};
	          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
	            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
	          });

	          offsetPosition.right = document.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	          offsetPosition.bottom = document.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

	          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
	            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
	              // We're within the visible part of the target's scroll parent
	              var scrollTop = offsetParent.scrollTop;
	              var scrollLeft = offsetParent.scrollLeft;

	              // It's position relative to the target's offset parent (absolute positioning when
	              // the element is moved to be a child of the target's offset parent).
	              next.offset = {
	                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
	                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
	              };
	            }
	          }
	        })();
	      }

	      // We could also travel up the DOM and try each containing context, rather than only
	      // looking at the body, but we're gonna get diminishing returns.

	      this.move(next);

	      this.history.unshift(next);

	      if (this.history.length > 3) {
	        this.history.pop();
	      }

	      if (flushChanges) {
	        flush();
	      }

	      return true;
	    }

	    // THE ISSUE
	  }, {
	    key: 'move',
	    value: function move(pos) {
	      var _this6 = this;

	      if (!(typeof this.element.parentNode !== 'undefined')) {
	        return;
	      }

	      var same = {};

	      for (var type in pos) {
	        same[type] = {};

	        for (var key in pos[type]) {
	          var found = false;

	          for (var i = 0; i < this.history.length; ++i) {
	            var point = this.history[i];
	            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
	              found = true;
	              break;
	            }
	          }

	          if (!found) {
	            same[type][key] = true;
	          }
	        }
	      }

	      var css = { top: '', left: '', right: '', bottom: '' };

	      var transcribe = function transcribe(_same, _pos) {
	        var hasOptimizations = typeof _this6.options.optimizations !== 'undefined';
	        var gpu = hasOptimizations ? _this6.options.optimizations.gpu : null;
	        if (gpu !== false) {
	          var yPos = undefined,
	              xPos = undefined;
	          if (_same.top) {
	            css.top = 0;
	            yPos = _pos.top;
	          } else {
	            css.bottom = 0;
	            yPos = -_pos.bottom;
	          }

	          if (_same.left) {
	            css.left = 0;
	            xPos = _pos.left;
	          } else {
	            css.right = 0;
	            xPos = -_pos.right;
	          }

	          css[transformKey] = 'translateX(' + Math.round(xPos) + 'px) translateY(' + Math.round(yPos) + 'px)';

	          if (transformKey !== 'msTransform') {
	            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
	            // but IE9 doesn't support 3d transforms and will choke.
	            css[transformKey] += " translateZ(0)";
	          }
	        } else {
	          if (_same.top) {
	            css.top = _pos.top + 'px';
	          } else {
	            css.bottom = _pos.bottom + 'px';
	          }

	          if (_same.left) {
	            css.left = _pos.left + 'px';
	          } else {
	            css.right = _pos.right + 'px';
	          }
	        }
	      };

	      var moved = false;
	      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
	        css.position = 'absolute';
	        transcribe(same.page, pos.page);
	      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
	        css.position = 'fixed';
	        transcribe(same.viewport, pos.viewport);
	      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
	        (function () {
	          css.position = 'absolute';
	          var offsetParent = _this6.cache('target-offsetparent', function () {
	            return getOffsetParent(_this6.target);
	          });

	          if (getOffsetParent(_this6.element) !== offsetParent) {
	            defer(function () {
	              _this6.element.parentNode.removeChild(_this6.element);
	              offsetParent.appendChild(_this6.element);
	            });
	          }

	          transcribe(same.offset, pos.offset);
	          moved = true;
	        })();
	      } else {
	        css.position = 'absolute';
	        transcribe({ top: true, left: true }, pos.page);
	      }

	      if (!moved) {
	        var offsetParentIsBody = true;
	        var currentNode = this.element.parentNode;
	        while (currentNode && currentNode.tagName !== 'BODY') {
	          if (getComputedStyle(currentNode).position !== 'static') {
	            offsetParentIsBody = false;
	            break;
	          }

	          currentNode = currentNode.parentNode;
	        }

	        if (!offsetParentIsBody) {
	          this.element.parentNode.removeChild(this.element);
	          document.body.appendChild(this.element);
	        }
	      }

	      // Any css change will trigger a repaint, so let's avoid one if nothing changed
	      var writeCSS = {};
	      var write = false;
	      for (var key in css) {
	        var val = css[key];
	        var elVal = this.element.style[key];

	        if (elVal !== '' && val !== '' && ['top', 'left', 'bottom', 'right'].indexOf(key) >= 0) {
	          elVal = parseFloat(elVal);
	          val = parseFloat(val);
	        }

	        if (elVal !== val) {
	          write = true;
	          writeCSS[key] = val;
	        }
	      }

	      if (write) {
	        defer(function () {
	          extend(_this6.element.style, writeCSS);
	        });
	      }
	    }
	  }]);

	  return TetherClass;
	})();

	TetherClass.modules = [];

	TetherBase.position = position;

	var Tether = extend(TetherClass, TetherBase);
	/* globals TetherBase */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var extend = _TetherBase$Utils.extend;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;

	var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

	function getBoundingRect(tether, to) {
	  if (to === 'scrollParent') {
	    to = tether.scrollParent;
	  } else if (to === 'window') {
	    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	  }

	  if (to === document) {
	    to = to.documentElement;
	  }

	  if (typeof to.nodeType !== 'undefined') {
	    (function () {
	      var size = getBounds(to);
	      var pos = size;
	      var style = getComputedStyle(to);

	      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

	      BOUNDS_FORMAT.forEach(function (side, i) {
	        side = side[0].toUpperCase() + side.substr(1);
	        if (side === 'Top' || side === 'Left') {
	          to[i] += parseFloat(style['border' + side + 'Width']);
	        } else {
	          to[i] -= parseFloat(style['border' + side + 'Width']);
	        }
	      });
	    })();
	  }

	  return to;
	}

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;

	    var top = _ref.top;
	    var left = _ref.left;
	    var targetAttachment = _ref.targetAttachment;

	    if (!this.options.constraints) {
	      return true;
	    }

	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });

	    var height = _cache.height;
	    var width = _cache.width;

	    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	      var _lastSize = this.lastSize;

	      // Handle the item getting hidden as a result of our positioning without glitching
	      // the classes in and out
	      width = _lastSize.width;
	      height = _lastSize.height;
	    }

	    var targetSize = this.cache('target-bounds', function () {
	      return _this.getTargetBounds();
	    });

	    var targetHeight = targetSize.height;
	    var targetWidth = targetSize.width;

	    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

	    this.options.constraints.forEach(function (constraint) {
	      var outOfBoundsClass = constraint.outOfBoundsClass;
	      var pinnedClass = constraint.pinnedClass;

	      if (outOfBoundsClass) {
	        allClasses.push(outOfBoundsClass);
	      }
	      if (pinnedClass) {
	        allClasses.push(pinnedClass);
	      }
	    });

	    allClasses.forEach(function (cls) {
	      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
	        allClasses.push(cls + '-' + side);
	      });
	    });

	    var addClasses = [];

	    var tAttachment = extend({}, targetAttachment);
	    var eAttachment = extend({}, this.attachment);

	    this.options.constraints.forEach(function (constraint) {
	      var to = constraint.to;
	      var attachment = constraint.attachment;
	      var pin = constraint.pin;

	      if (typeof attachment === 'undefined') {
	        attachment = '';
	      }

	      var changeAttachX = undefined,
	          changeAttachY = undefined;
	      if (attachment.indexOf(' ') >= 0) {
	        var _attachment$split = attachment.split(' ');

	        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

	        changeAttachY = _attachment$split2[0];
	        changeAttachX = _attachment$split2[1];
	      } else {
	        changeAttachX = changeAttachY = attachment;
	      }

	      var bounds = getBoundingRect(_this, to);

	      if (changeAttachY === 'target' || changeAttachY === 'both') {
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          top += targetHeight;
	          tAttachment.top = 'bottom';
	        }

	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          top -= targetHeight;
	          tAttachment.top = 'top';
	        }
	      }

	      if (changeAttachY === 'together') {
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          if (eAttachment.top === 'bottom') {
	            top += targetHeight;
	            tAttachment.top = 'bottom';

	            top += height;
	            eAttachment.top = 'top';
	          } else if (eAttachment.top === 'top') {
	            top += targetHeight;
	            tAttachment.top = 'bottom';

	            top -= height;
	            eAttachment.top = 'bottom';
	          }
	        }

	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          if (eAttachment.top === 'top') {
	            top -= targetHeight;
	            tAttachment.top = 'top';

	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (eAttachment.top === 'bottom') {
	            top -= targetHeight;
	            tAttachment.top = 'top';

	            top += height;
	            eAttachment.top = 'top';
	          }
	        }

	        if (tAttachment.top === 'middle') {
	          if (top + height > bounds[3] && eAttachment.top === 'top') {
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
	            top += height;
	            eAttachment.top = 'top';
	          }
	        }
	      }

	      if (changeAttachX === 'target' || changeAttachX === 'both') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          left += targetWidth;
	          tAttachment.left = 'right';
	        }

	        if (left + width > bounds[2] && tAttachment.left === 'right') {
	          left -= targetWidth;
	          tAttachment.left = 'left';
	        }
	      }

	      if (changeAttachX === 'together') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          if (eAttachment.left === 'right') {
	            left += targetWidth;
	            tAttachment.left = 'right';

	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'left') {
	            left += targetWidth;
	            tAttachment.left = 'right';

	            left -= width;
	            eAttachment.left = 'right';
	          }
	        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
	          if (eAttachment.left === 'left') {
	            left -= targetWidth;
	            tAttachment.left = 'left';

	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'right') {
	            left -= targetWidth;
	            tAttachment.left = 'left';

	            left += width;
	            eAttachment.left = 'left';
	          }
	        } else if (tAttachment.left === 'center') {
	          if (left + width > bounds[2] && eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (left < bounds[0] && eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          }
	        }
	      }

	      if (changeAttachY === 'element' || changeAttachY === 'both') {
	        if (top < bounds[1] && eAttachment.top === 'bottom') {
	          top += height;
	          eAttachment.top = 'top';
	        }

	        if (top + height > bounds[3] && eAttachment.top === 'top') {
	          top -= height;
	          eAttachment.top = 'bottom';
	        }
	      }

	      if (changeAttachX === 'element' || changeAttachX === 'both') {
	        if (left < bounds[0] && eAttachment.left === 'right') {
	          left += width;
	          eAttachment.left = 'left';
	        }

	        if (left + width > bounds[2] && eAttachment.left === 'left') {
	          left -= width;
	          eAttachment.left = 'right';
	        }
	      }

	      if (typeof pin === 'string') {
	        pin = pin.split(',').map(function (p) {
	          return p.trim();
	        });
	      } else if (pin === true) {
	        pin = ['top', 'left', 'right', 'bottom'];
	      }

	      pin = pin || [];

	      var pinned = [];
	      var oob = [];

	      if (top < bounds[1]) {
	        if (pin.indexOf('top') >= 0) {
	          top = bounds[1];
	          pinned.push('top');
	        } else {
	          oob.push('top');
	        }
	      }

	      if (top + height > bounds[3]) {
	        if (pin.indexOf('bottom') >= 0) {
	          top = bounds[3] - height;
	          pinned.push('bottom');
	        } else {
	          oob.push('bottom');
	        }
	      }

	      if (left < bounds[0]) {
	        if (pin.indexOf('left') >= 0) {
	          left = bounds[0];
	          pinned.push('left');
	        } else {
	          oob.push('left');
	        }
	      }

	      if (left + width > bounds[2]) {
	        if (pin.indexOf('right') >= 0) {
	          left = bounds[2] - width;
	          pinned.push('right');
	        } else {
	          oob.push('right');
	        }
	      }

	      if (pinned.length) {
	        (function () {
	          var pinnedClass = undefined;
	          if (typeof _this.options.pinnedClass !== 'undefined') {
	            pinnedClass = _this.options.pinnedClass;
	          } else {
	            pinnedClass = _this.getClass('pinned');
	          }

	          addClasses.push(pinnedClass);
	          pinned.forEach(function (side) {
	            addClasses.push(pinnedClass + '-' + side);
	          });
	        })();
	      }

	      if (oob.length) {
	        (function () {
	          var oobClass = undefined;
	          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
	            oobClass = _this.options.outOfBoundsClass;
	          } else {
	            oobClass = _this.getClass('out-of-bounds');
	          }

	          addClasses.push(oobClass);
	          oob.forEach(function (side) {
	            addClasses.push(oobClass + '-' + side);
	          });
	        })();
	      }

	      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
	        eAttachment.left = tAttachment.left = false;
	      }
	      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
	        eAttachment.top = tAttachment.top = false;
	      }

	      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
	        _this.updateAttachClasses(eAttachment, tAttachment);
	      }
	    });

	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });

	    return { top: top, left: left };
	  }
	});
	/* globals TetherBase */

	'use strict';

	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;

	    var top = _ref.top;
	    var left = _ref.left;

	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });

	    var height = _cache.height;
	    var width = _cache.width;

	    var targetPos = this.getTargetBounds();

	    var bottom = top + height;
	    var right = left + width;

	    var abutted = [];
	    if (top <= targetPos.bottom && bottom >= targetPos.top) {
	      ['left', 'right'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === left || targetPosSide === right) {
	          abutted.push(side);
	        }
	      });
	    }

	    if (left <= targetPos.right && right >= targetPos.left) {
	      ['top', 'bottom'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === top || targetPosSide === bottom) {
	          abutted.push(side);
	        }
	      });
	    }

	    var allClasses = [];
	    var addClasses = [];

	    var sides = ['left', 'top', 'right', 'bottom'];
	    allClasses.push(this.getClass('abutted'));
	    sides.forEach(function (side) {
	      allClasses.push(_this.getClass('abutted') + '-' + side);
	    });

	    if (abutted.length) {
	      addClasses.push(this.getClass('abutted'));
	    }

	    abutted.forEach(function (side) {
	      addClasses.push(_this.getClass('abutted') + '-' + side);
	    });

	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });

	    return true;
	  }
	});
	/* globals TetherBase */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var top = _ref.top;
	    var left = _ref.left;

	    if (!this.options.shift) {
	      return;
	    }

	    var shift = this.options.shift;
	    if (typeof this.options.shift === 'function') {
	      shift = this.options.shift.call(this, { top: top, left: left });
	    }

	    var shiftTop = undefined,
	        shiftLeft = undefined;
	    if (typeof shift === 'string') {
	      shift = shift.split(' ');
	      shift[1] = shift[1] || shift[0];

	      var _shift = shift;

	      var _shift2 = _slicedToArray(_shift, 2);

	      shiftTop = _shift2[0];
	      shiftLeft = _shift2[1];

	      shiftTop = parseFloat(shiftTop, 10);
	      shiftLeft = parseFloat(shiftLeft, 10);
	    } else {
	      shiftTop = shift.top;
	      shiftLeft = shift.left;
	    }

	    top += shiftTop;
	    left += shiftLeft;

	    return { top: top, left: left };
	  }
	});
	return Tether;

	}));


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(282);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./popover.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./popover.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".popover-trigger [slot=\"content\"] {\n  display: none; }\n", ""]);

	// exports


/***/ },
/* 283 */
/***/ function(module, exports) {

	module.exports = "<span class=\"popover-trigger\" v-el:trigger>\r\n\t<slot></slot>\r\n</span> \r\n<div class=\"popover {{popoverAlignment}}\" v-el:popover>\r\n  <div class=\"popover-arrow\"></div>\r\n  <h3 class=\"popover-title\" v-if=\"title\">{{title}}</h3>\r\n  <div class=\"popover-content\">\r\n    <span v-html=\"text\" v-if=\"text\"></span>\r\n    <slot name=\"content\" v-if=\"!text\"></slot>\r\n  </div>\r\n</div>";

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _progressJson = __webpack_require__(285);

	var _progressJson2 = _interopRequireDefault(_progressJson);

	var _progressHtml = __webpack_require__(286);

	var _progressHtml2 = _interopRequireDefault(_progressHtml);

	var _snippetHtml = __webpack_require__(287);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsProgress = __webpack_require__(288);

	var _srcComponentsProgress2 = _interopRequireDefault(_srcComponentsProgress);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/progress',
	    name: 'progress',
	    title: 'Progress'
	  },
	  template: _progressHtml2['default'],
	  data: function data() {
	    return {
	      meta: _progressJson2['default'],
	      snippet: _snippetHtml2['default'],
	      value: 25,
	      animated: true,
	      striped: true,
	      variant: 'primary',
	      variants: _srcUtils.variants
	    };
	  },
	  components: {
	    vsProgress: _srcComponentsProgress2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 285 */
/***/ function(module, exports) {

	module.exports = {
		"name": "progress",
		"title": "Progress",
		"description": "Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.",
		"dependenices": [],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "animated",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "Makes stripes to animate right to left."
			},
			{
				"name": "max",
				"type": "Number",
				"default": "100",
				"required": false,
				"description": "Maximum value."
			},
			{
				"name": "striped",
				"type": "Boolean",
				"default": "false",
				"required": false,
				"description": "Uses a gradient to create a striped effect."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Background color context."
			}
		]
	};

/***/ },
/* 286 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>striped <input type=\"checkbox\" v-model=\"striped\"></label>\r\n\t\t<!-- <label>animated <input type=\"checkbox\" v-model=\"animated\"></label> -->\r\n\t\t<label>\r\n\t\t\tvariant\r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label class=\"form-control-label\">value</label> <input type=\"range\" v-model=\"value\"> {{value}}%\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-progress :variant=\"variant\" :value=\"value\" :striped=\"striped\" :animated=\"animated\">25%</vs-progress>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 287 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-progress</span> \r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"25\"</span> \r\n  <span class=\"hljs-attribute\">striped</span>&gt;</span>\r\n  25%\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-progress</span>&gt;</span>";

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _progressHtml = __webpack_require__(289);

	var _progressHtml2 = _interopRequireDefault(_progressHtml);

	// export component object
	exports['default'] = {
	  template: _progressHtml2['default'],
	  replace: true,
	  computed: {
	    progressVariant: function progressVariant() {
	      return !this.variant || this.variant === 'default' ? 'progress-primary' : 'progress-' + this.variant;
	    }
	  },
	  props: {
	    animated: {
	      type: Boolean,
	      'default': false
	    },
	    max: {
	      type: Number,
	      'default': 100
	    },
	    striped: {
	      type: Boolean,
	      'default': false
	    },
	    value: {
	      type: Number,
	      'default': 0
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  ready: function ready() {
	    this._progress = this.$els.progress;
	    this._progressBar = this.$els.progressbar;
	    this._progressBar.style.width = this.value + '%';
	    this._progress.setAttribute('value', this.value);
	  },
	  watch: {
	    value: function value(val) {
	      this._progress.setAttribute('value', val);
	      this._progressBar.style.width = this.value + '%';
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 289 */
/***/ function(module, exports) {

	module.exports = "<progress \r\n\tclass=\"progress {{progressVariant}} {{striped ? 'progress-striped' : ''}} {{animated ? 'progres-animated' : ''}}\" \r\n\tvalue=\"{{value}}\" \r\n\tmax=\"{{max}}\" \r\n\taria-valuenow=\"{{value}}\" \r\n\taria-valuemin=\"0\" \r\n\taria-valuemax=\"{{max}}\"\r\n\tv-el:progress>\r\n  <div class=\"progress\">\r\n    <span class=\"progress-bar\" v-bind:style=\"{width: value + '%'}\" v-el:progressbar></span>\r\n  </div>\r\n</progress>";

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tablesJson = __webpack_require__(291);

	var _tablesJson2 = _interopRequireDefault(_tablesJson);

	var _tablesHtml = __webpack_require__(292);

	var _tablesHtml2 = _interopRequireDefault(_tablesHtml);

	var _snippetHtml = __webpack_require__(293);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsTables = __webpack_require__(294);

	var _srcComponentsTables2 = _interopRequireDefault(_srcComponentsTables);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/tables',
	    name: 'tables',
	    title: 'Tables'
	  },
	  template: _tablesHtml2['default'],
	  data: function data() {
	    return {
	      meta: _tablesJson2['default'],
	      snippet: _snippetHtml2['default'],
	      hover: false
	    };
	  },
	  components: {
	    vsTable: _srcComponentsTables2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 291 */
/***/ function(module, exports) {

	module.exports = {
		"name": "tables",
		"title": "Tables",
		"description": "For tabular data.",
		"dependenices": [
			"vuestrap/tables"
		],
		"note": "This is a standard html <code>&lt;table></code> markup wrapped in a <code>vs-table</code> custom tag.",
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "id",
				"type": "String",
				"default": "",
				"required": false,
				"description": "Table ID."
			},
			{
				"name": "styled",
				"type": "Boolean",
				"default": "",
				"required": true,
				"description": "Adds styling to the table. It's <code>true</code> by default."
			},
			{
				"name": "border",
				"type": "Boolean",
				"default": "",
				"required": false,
				"description": "Adds borders on all sides of the table and cells."
			},
			{
				"name": "inverse",
				"type": "Boolean",
				"default": "",
				"required": false,
				"description": "<code>&lt;table></code> appear dark gray."
			},
			{
				"name": "hover",
				"type": "Boolean",
				"default": "",
				"required": false,
				"description": "To enable a hover state on table rows within a <code>&lt;tbody></code>."
			},
			{
				"name": "small",
				"type": "Boolean",
				"default": "",
				"required": false,
				"description": "To make tables more compact by cutting cell padding in half."
			},
			{
				"name": "responsive",
				"type": "Boolean",
				"default": "",
				"required": false,
				"description": "Makes table scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables."
			},
			{
				"name": "striped",
				"type": "Boolean",
				"default": "",
				"required": false,
				"description": "Adds zebra-striping to any table row within the <code>&lt;tbody></code>."
			},
			{
				"name": "head",
				"type": "String",
				"default": "",
				"required": false,
				"values": [
					"default",
					"inverse"
				],
				"description": "Sets background color on thead."
			}
		]
	};

/***/ },
/* 292 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-table hover responsive>\r\n\t\t\t\t<table>\r\n\t\t\t\t  <thead>\r\n\t\t\t\t    <tr>\r\n\t\t\t\t      <th>#</th>\r\n\t\t\t\t      <th>First Name</th>\r\n\t\t\t\t      <th>Last Name</th>\r\n\t\t\t\t      <th>Username</th>\r\n\t\t\t\t    </tr>\r\n\t\t\t\t  </thead>\r\n\t\t\t\t  <tbody>\r\n\t\t\t\t    <tr>\r\n\t\t\t\t      <th scope=\"row\">1</th>\r\n\t\t\t\t      <td>Mark</td>\r\n\t\t\t\t      <td>Otto</td>\r\n\t\t\t\t      <td>@mdo</td>\r\n\t\t\t\t    </tr>\r\n\t\t\t\t    <tr>\r\n\t\t\t\t      <th scope=\"row\">2</th>\r\n\t\t\t\t      <td>Jacob</td>\r\n\t\t\t\t      <td>Thornton</td>\r\n\t\t\t\t      <td>@fat</td>\r\n\t\t\t\t    </tr>\r\n\t\t\t\t    <tr>\r\n\t\t\t\t      <th scope=\"row\">3</th>\r\n\t\t\t\t      <td colspan=\"2\">Larry the Bird</td>\r\n\t\t\t\t      <td>@twitter</td>\r\n\t\t\t\t    </tr>\r\n\t\t\t\t  </tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</vs-table>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 293 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-table</span> <span class=\"hljs-attribute\">hover</span> <span class=\"hljs-attribute\">responsive</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">table</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">thead</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span>&gt;</span>#<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span>&gt;</span>First Name<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span>&gt;</span>Last Name<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span>&gt;</span>Username<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">thead</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tbody</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span> <span class=\"hljs-attribute\">scope</span>=<span class=\"hljs-value\">\"row\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>Mark<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>Otto<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>@mdo<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span> <span class=\"hljs-attribute\">scope</span>=<span class=\"hljs-value\">\"row\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>Jacob<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>Thornton<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>@fat<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span> <span class=\"hljs-attribute\">scope</span>=<span class=\"hljs-value\">\"row\"</span>&gt;</span>3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span> <span class=\"hljs-attribute\">colspan</span>=<span class=\"hljs-value\">\"2\"</span>&gt;</span>Larry the Bird<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>@twitter<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tbody</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">table</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-table</span>&gt;</span>";

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tablesHtml = __webpack_require__(295);

	var _tablesHtml2 = _interopRequireDefault(_tablesHtml);

	// import ie9 polyfill

	__webpack_require__(108);

	exports['default'] = {
	  template: _tablesHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  props: {
	    id: {
	      type: String,
	      'default': ''
	    },
	    styled: {
	      type: Boolean,
	      'default': true
	    },
	    border: {
	      type: Boolean,
	      'default': false
	    },
	    inverse: {
	      type: Boolean,
	      'default': false
	    },
	    hover: {
	      type: Boolean,
	      'default': false
	    },
	    small: {
	      type: Boolean,
	      'default': false
	    },
	    responsive: {
	      type: Boolean,
	      'default': false
	    },
	    striped: {
	      type: Boolean,
	      'default': false
	    },
	    head: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {},
	  events: {},
	  ready: function ready() {
	    this._table = this.$el.querySelectorAll('table')[0];
	    this._theads = this._table.querySelectorAll('thead');

	    // lets add some attributes and classes to the table based on props
	    // id
	    this._table.setAttribute('id', this.id);
	    // add .table -> true by default
	    if (this.styled) {
	      this._table.classList.add('table');
	    }
	    // add .table-border -> false by default
	    if (this.border) {
	      this._table.classList.add('table-bordered');
	    }
	    // add .table-inverse -> false by default
	    if (this.inverse) {
	      this._table.classList.add('table-inverse');
	    }
	    // add .table-hover -> false by default
	    if (this.hover) {
	      this._table.classList.add('table-hover');
	    }
	    // add .table-sm -> false by default
	    if (this.small) {
	      this._table.classList.add('table-sm');
	    }
	    // add .table-striped -> false by default
	    if (this.striped) {
	      this._table.classList.add('table-striped');
	    }
	    // add .thead-inverse/.thead-default -> '' by default
	    if (this.head) {
	      for (var key in this._theads) {
	        if (this._theads.hasOwnProperty(key)) {
	          this._theads[key].classList.add('thead-' + this.head);
	        }
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 295 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{repsonsive: responsive}\">\r\n\t<slot></slot>\r\n</div>";

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tabsJson = __webpack_require__(297);

	var _tabsJson2 = _interopRequireDefault(_tabsJson);

	var _tabsHtml = __webpack_require__(298);

	var _tabsHtml2 = _interopRequireDefault(_tabsHtml);

	var _snippetHtml = __webpack_require__(299);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsTabs = __webpack_require__(300);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _srcUtils = __webpack_require__(137);

	exports['default'] = {
	  route: {
	    url: '/tabs',
	    name: 'tabs',
	    title: 'Tabs'
	  },
	  template: _tabsHtml2['default'],
	  data: function data() {
	    return {
	      meta: _tabsJson2['default'],
	      snippet: _snippetHtml2['default'],
	      fade: true,
	      size: 'md',
	      sizes: _srcUtils.sizes
	    };
	  },
	  components: {
	    vsTab: _srcComponentsTabs.tab,
	    vsTabs: _srcComponentsTabs.tabs,
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = {
		"name": "tabs",
		"title": "Tabs",
		"description": "",
		"dependenices": [
			"vuestrap/tabs"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "fade",
				"type": "Boolean",
				"default": "true",
				"required": false,
				"description": "If set to true, tab panels will animate during tab change."
			},
			{
				"name": "size",
				"type": "String",
				"default": "md",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"required": false,
				"description": "Size of the tab buttons."
			},
			{
				"name": "active",
				"type": "String",
				"default": "false",
				"required": false,
				"description": "Set this prop on the <code>&lt;tab></code> element to programmatically change the active tab."
			},
			{
				"name": "disabled",
				"type": "String",
				"default": "false",
				"required": false,
				"description": "Set this prop on the <code>&lt;tab></code> element to disbale the tab."
			},
			{
				"name": "title",
				"type": "String",
				"default": "false",
				"required": false,
				"description": "A title on the <code>&lt;tab></code> element."
			}
		]
	};

/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>fade <input type=\"checkbox\" v-model=\"fade\"></label>\r\n\t\t<label>\r\n\t\t\t\tsize\r\n\t\t\t\t<select v-model=\"size\">\r\n\t\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-tabs :fade=\"fade\" :size=\"size\">\r\n\t\t\t\t<vs-tab id=\"tab-1\" title=\"Tab 1\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quidem!</vs-tab>\r\n\t\t\t\t<vs-tab id=\"tab-2\" title=\"Tab 2\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, corporis?</vs-tab>\r\n\t\t\t\t<vs-tab id=\"tab-2\" title=\"Tab 3\" disabled>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, architecto, maiores.</vs-tab>\r\n\t\t\t</vs-tabs>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-tabs</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">:fade</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-tab</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"tab-1\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Tab 1\"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quidem!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-tab</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-tab</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"tab-2\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Tab 2\"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, corporis?<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-tab</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-tab</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"tab-2\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Tab 3\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, architecto, maiores.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-tab</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-tabs</span>&gt;</span>\r\n";

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tabsHtml = __webpack_require__(301);

	var _tabsHtml2 = _interopRequireDefault(_tabsHtml);

	var _utilsHelpersJs = __webpack_require__(107);

	// this is directly linked to the bootstrap animation timing in _tabs.scss
	// for browsers that do not support transitions like IE9 just change slide immediately
	var TRANSITION_DURATION = (0, _utilsHelpersJs.csstransitions)() ? 150 : 0;

	// export component object
	var tabs = {
	  template: _tabsHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      items: []
	    };
	  },
	  computed: {
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    }
	  },
	  props: {
	    fade: {
	      type: Boolean,
	      'default': true
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    }
	  },
	  methods: {

	    /**
	     * get an index of an active tab
	     * @return {Number}
	     */
	    getActive: function getActive() {
	      var active = -1;
	      this.items.forEach(function (item, index) {
	        if (item.active) {
	          active = index;
	        }
	      });
	      return active;
	    },

	    /**
	     * set active tab on the items collection and the child 'tab' component
	     */
	    setActive: function setActive(index) {
	      var _this = this;

	      // ignore disabled
	      if (this.items[index].disabled) return;

	      // deactivate previous active tab
	      var activeTab = this.getActive();
	      if (activeTab !== -1) {
	        // setting animate to false will trigger fade out effect
	        this.items[activeTab].active = false;
	        this.$children[activeTab].$set('animate', false);
	        this.$children[activeTab].$set('active', false);
	      }

	      // set new active tab and animate (if fade flag is set to true)
	      this.$children[index].$set('active', true);
	      this._tabAnimation = setTimeout(function () {
	        // setting animate to true will trigger fade in effect
	        _this.items[index].active = true;
	        _this.$children[index].$set('animate', true);
	        _this.$dispatch('changed::tab', _this.items[index].id);
	      }, this.fade ? TRANSITION_DURATION : 0);
	    }
	  },
	  ready: function ready() {
	    // if no active tab, set the first one by default
	    if (this.getActive() === -1) {
	      this.setActive(0);
	    }
	  },
	  destroyed: function destroyed() {
	    clearTimeout(this._tabAnimation);
	  }
	};

	exports.tabs = tabs;
	// export tab object
	var tab = {
	  template: '<div role="tabpanel" class="tab-pane" v-bind:class="{active: active, disabled: disabled, fade: fade, in: animate}"><slot></slot></div>',
	  replace: true,
	  data: function data() {
	    return {
	      fade: this.$parent.fade,
	      animate: false
	    };
	  },
	  props: {
	    id: {
	      type: String,
	      'default': ''
	    },
	    title: {
	      type: String,
	      'default': ''
	    },
	    active: {
	      type: Boolean,
	      'default': false
	    },
	    disabled: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  ready: function ready() {
	    var items = this.$parent.$get('items');
	    items.push({ id: this.id, title: this.title, active: this.active, disabled: this.disabled });
	  }
	};
	exports.tab = tab;

/***/ },
/* 301 */
/***/ function(module, exports) {

	module.exports = "<div class=\"tabs\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\" v-for=\"item in items\" v-on:click=\"setActive($index)\">\n      <span class=\"nav-link btn {{btnSize}} {{item.active ? 'active' : ''}} {{ item.disabled ? 'disabled' : '' }}\">{{item.title}}</span>\n    </li>\n  </ul>\n  <div class=\"tab-content\">\n    <slot></slot>\n  </div>\n</div>";

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tooltipJson = __webpack_require__(303);

	var _tooltipJson2 = _interopRequireDefault(_tooltipJson);

	var _tooltipHtml = __webpack_require__(304);

	var _tooltipHtml2 = _interopRequireDefault(_tooltipHtml);

	var _snippetHtml = __webpack_require__(305);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsTooltip = __webpack_require__(306);

	var _srcComponentsTooltip2 = _interopRequireDefault(_srcComponentsTooltip);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(7);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/tooltip',
	    name: 'tooltip',
	    title: 'Tooltip'
	  },
	  template: _tooltipHtml2['default'],
	  data: function data() {
	    return {
	      meta: _tooltipJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    vsTooltip: _srcComponentsTooltip2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 303 */
/***/ function(module, exports) {

	module.exports = {
		"name": "tooltip",
		"title": "Tooltip",
		"description": "Add small overlay content to any element for housing secondary information. Tooltips rely on on the 3rd party library <a href='http://github.hubspot.com/tether/'>tether</a> for positioning.",
		"dependenices": [
			"vuestrap-tether",
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "position",
				"type": "String",
				"values": [
					"top",
					"bottom",
					"left",
					"right"
				],
				"default": "top",
				"required": false,
				"description": "Position of the popover."
			},
			{
				"name": "text",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A textual content in the tooltip. This can be also a simple Html. If you need more stuff in the popver, consider using <code>slot=\"content\"</code>. See code snippet for example."
			},
			{
				"name": "triggers",
				"type": "Array",
				"values": [
					"click",
					"focus",
					"hover"
				],
				"default": "['click']",
				"description": "Opens popover based on specified triggers. If you consider supporting mobile devices than you might need to specify both click and hover trigger (on desktops click will take priority)."
			}
		]
	};

/***/ },
/* 304 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t\t<vs-tooltip text=\"tooltip top\" position=\"top\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip top</button>\r\n\t\t\t\t</vs-tooltip>\r\n\t\t\t\t<vs-tooltip text=\"tooltip bottom\" position=\"bottom\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip bottom</button>\r\n\t\t\t\t</vs-tooltip>\r\n\t\t\t\t<vs-tooltip text=\"tooltip left\" position=\"left\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip left</button>\r\n\t\t\t\t</vs-tooltip>\r\n\t\t\t\t<vs-tooltip position=\"right\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip right (html)</button>\r\n\t\t\t\t\t<em slot=\"content\">tooltip right (italic)</em>\r\n\t\t\t\t</vs-tooltip>\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 305 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- tooltip with a text --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-tooltip</span> \r\n  <span class=\"hljs-attribute\">text</span>=<span class=\"hljs-value\">\"tooltip top\"</span> \r\n  <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"top\"</span>\r\n  <span class=\"hljs-attribute\">:triggers</span>=<span class=\"hljs-value\">\"['hover']\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn\"</span>&gt;</span>tooltip top<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-tooltip</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- tooltip with an html content --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-tooltip</span> <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"right\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn\"</span>&gt;</span>tooltip right (html)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">em</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"content\"</span>&gt;</span>tooltip right (italic)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">em</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-tooltip</span>&gt;</span>";

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tether = __webpack_require__(280);

	var _tether2 = _interopRequireDefault(_tether);

	__webpack_require__(307);

	var _tooltipHtml = __webpack_require__(309);

	var _tooltipHtml2 = _interopRequireDefault(_tooltipHtml);

	// export component object
	exports['default'] = {
	  template: _tooltipHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  computed: {
	    tooltipAlignment: function tooltipAlignment() {
	      return !this.position || this.position === 'default' ? 'tooltip-top' : 'tooltip-' + this.position;
	    }
	  },
	  props: {
	    position: {
	      type: String,
	      'default': 'top'
	    },
	    triggers: {
	      type: Array,
	      'default': function _default() {
	        return ['hover'];
	      }
	    },
	    text: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {

	    /**
	     * Toggle 'show' state
	     * @param  {Object} e
	     * @param  {Boolean} newState (if set use it's value)
	     */
	    toggle: function toggle(e, newState) {
	      // change state
	      this.show = typeof newState !== 'undefined' ? newState : !this.show;

	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      // element is shown
	      if (this.show) {
	        var position = {
	          attachment: 'bottom center',
	          targetAttachment: 'top center'
	        };
	        if (this.position === 'bottom') {
	          position = {
	            attachment: 'top center',
	            targetAttachment: 'bottom center'
	          };
	        }
	        if (this.position === 'left') {
	          position = {
	            attachment: 'middle right',
	            targetAttachment: 'middle left'
	          };
	        }
	        if (this.position === 'right') {
	          position = {
	            attachment: 'middle left',
	            targetAttachment: 'middle right'
	          };
	        }

	        // let tether do the magic, after element is shown
	        this._tooltip.style.display = 'block';
	        this._tether = new _tether2['default']({
	          element: this._tooltip,
	          target: this._trigger,
	          attachment: position.attachment,
	          targetAttachment: position.targetAttachment
	        });
	        this.$dispatch('shown::tooltip');

	        // element gets hidden
	      } else {
	          // remove the tether reference from the element
	          if (this._tether) {
	            this._tooltip.style.display = 'none';
	            this._tether.destroy();
	          }
	          this.$dispatch('hidden::tooltip');
	        }
	    },

	    /**
	     * Handle multiple event triggers
	     * @param  {Object} e
	     */
	    _eventHandler: function _eventHandler(e) {
	      // stop propagation to avoid accidental closing on hide::popover event
	      e.stopPropagation();

	      // if both click and hover are set, on desktop devices click will take precedence
	      if ((e.type === 'mouseenter' || e.type === 'mouseleave') && this.triggers.indexOf('click') !== -1) {
	        return;
	      }

	      // TODO
	      // if both click and focus are set, focus will take precedence
	      // if (e.type === 'click' && this.triggers.indexOf('focus') !== -1) {
	      //   return
	      // }

	      // hide popover
	      if (e.type === 'click') {
	        this.toggle(e);
	      } else {
	        if (e.type === 'mouseenter' || e.type === 'focus') {
	          this.toggle(e, true);
	        } else {
	          this.toggle(e, false);
	        }
	      }
	    }
	  },
	  events: {
	    'hide::tooltip': function hideTooltip() {
	      this.toggle(null, false);
	    }
	  },
	  ready: function ready() {
	    // TODO
	    // animations
	    // configure tether
	    this._trigger = this.$els.trigger.children[0];
	    this._tooltip = this.$els.tooltip;
	    this._tooltip.style.display = 'none';
	    var _this = this;

	    // add listeners for specified triggers anb complementary click event
	    this._trigger.addEventListener('click', function (e) {
	      return _this._eventHandler(e);
	    });

	    if (this.triggers.indexOf('hover') !== -1) {
	      this._trigger.addEventListener('mouseenter', function (e) {
	        return _this._eventHandler(e);
	      });
	      this._trigger.addEventListener('mouseleave', function (e) {
	        return _this._eventHandler(e);
	      });
	    }
	    if (this.triggers.indexOf('focus') !== -1 && this._trigger.tagName.toLowerCase() === 'input') {
	      this._trigger.addEventListener('focus', function (e) {
	        return _this._eventHandler(e);
	      });
	      this._trigger.addEventListener('blur', function (e) {
	        return _this._eventHandler(e);
	      });
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    // clean up listeners
	    this._trigger.removeEventListener('click', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('mouseenter', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('mouseleave', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('focus', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('blur', function () {
	      return _this._eventHandler();
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(308);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./tooltip.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vuestrap-theme-loader/index.js!./tooltip.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".tooltip-trigger [slot=\"content\"] {\n  display: none; }\n", ""]);

	// exports


/***/ },
/* 309 */
/***/ function(module, exports) {

	module.exports = "<span class=\"tooltip-trigger\" v-el:trigger>\r\n\t<slot></slot>\r\n</span> \r\n<div class=\"tooltip fade in {{tooltipAlignment}}\" v-el:tooltip>\r\n\t<div class=\"tooltip-inner\">\r\n\t\t<div class=\"tooltip-arrow\"></div>\r\n\t  <div class=\"tooltip-content\">\r\n\t    <span v-html=\"text\" v-if=\"text\"></span>\r\n\t    <slot name=\"content\" v-if=\"!text\"></slot>\r\n\t  </div>\r\n\t</div>\r\n</div>";

/***/ },
/* 310 */
/***/ function(module, exports) {

	module.exports = {
		"name": "vuestrap-base-components",
		"version": "0.8.10",
		"description": "Web components that extend Bootstrap 4.",
		"library": "vuestrapBase",
		"repository": {
			"type": "git",
			"url": "git+https://github.com/kzima/vuestrap-base-components.git"
		},
		"main": "dist/vuestrapBase-bundle.js",
		"scripts": {
			"build": "npm run docs && npm run dev && npm run dev-bundle && npm run dist && npm run dist-bundle",
			"dist": "webpack --colors --progress --config webpack.build.js --env production",
			"dist-bundle": "webpack --colors --progress --config webpack.build.js --env production --bundle true",
			"dev": "webpack --colors --progress --config webpack.build.js --env development",
			"dev-bundle": "webpack --colors --progress --config webpack.build.js --env development --bundle true",
			"docs": "webpack --colors --progress --config  webpack.build.js --env docs",
			"serve-docs": "webpack-dev-server --port 8081 --inline --hot --quiet --config webpack.build.js --env docs",
			"release": "bash build/release.sh && bash build/gh-pages.sh"
		},
		"keywords": [
			"Bootstrap4",
			"Web",
			"Components",
			"Polymer"
		],
		"author": {
			"name": "Kris Zima",
			"email": "kris@mosquito.ie",
			"url": "https://github.com/kzima"
		},
		"license": "MIT",
		"bugs": {
			"url": "https://github.com/kzima/vuestrap-base-components/issues"
		},
		"dependencies": {
			"vue": "^1.0.16"
		},
		"devDependencies": {
			"autoprefixer-loader": "^3.1.0",
			"babel-core": "^5.8.33",
			"babel-eslint": "^4.1.3",
			"babel-loader": "^5.3.3",
			"css-loader": "^0.21.0",
			"director": "^1.2.8",
			"extract-text-webpack-plugin": "^0.8.2",
			"gritcode-components": "^0.4.6",
			"highlightjs-loader": "^0.2.3",
			"html-loader": "^0.3.0",
			"json-loader": "^0.5.4",
			"node-sass": "^3.4.1",
			"optimist": "^0.6.1",
			"sass-loader": "^3.1.1",
			"style-loader": "^0.13.0",
			"tether": "^1.1.1",
			"vuestrap": "^1.0.3",
			"vuestrap-docs": "^0.5.1",
			"vuestrap-theme-loader": "^0.1.2",
			"webpack": "^1.12.9",
			"webpack-dev-server": "^1.12.1"
		},
		"homepage": "https://github.com/kzima/vuestrap-base-components#readme"
	};

/***/ }
/******/ ]);