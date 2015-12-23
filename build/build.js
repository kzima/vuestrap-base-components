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
/******/ 	__webpack_require__.p = "/build/";

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

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	__webpack_require__(3);

	// import external dependencies
	// docs component handles routing and demo pages

	var _vuestrapDocsSrcComponentsDocs = __webpack_require__(8);

	var _vuestrapDocsSrcComponentsDocs2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDocs);

	// import utils

	var _vuestrapDocsUtils = __webpack_require__(35);

	// import demo pages compatibile with docs component

	var _srcDocs = __webpack_require__(38);

	var _srcDocs2 = _interopRequireDefault(_srcDocs);

	// get list of the route objects
	var routes = (0, _vuestrapDocsUtils.getRoutes)(_srcDocs2['default']);

	// create components from routes and attach it to the docs.components object
	routes.forEach(function (route) {
		_vuestrapDocsSrcComponentsDocs2['default'].components[route.id] = route.component;
	});

	// start docs instance
	window.docs = new _vue2['default']({
		el: '#docs',
		data: {
			routes: routes,
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
			docsPages: _vuestrapDocsSrcComponentsDocs2['default']
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.10
	 * (c) 2015 Evan You
	 * Released under the MIT License.
	 */'use strict';function set(obj,key,val){if(hasOwn(obj,key)){obj[key] = val;return;}if(obj._isVue){set(obj._data,key,val);return;}var ob=obj.__ob__;if(!ob){obj[key] = val;return;}ob.convert(key,val);ob.dep.notify();if(ob.vms){var i=ob.vms.length;while(i--) {var vm=ob.vms[i];vm._proxy(key);vm._digest();}}} /**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */function del(obj,key){if(!hasOwn(obj,key)){return;}delete obj[key];var ob=obj.__ob__;if(!ob){return;}ob.dep.notify();if(ob.vms){var i=ob.vms.length;while(i--) {var vm=ob.vms[i];vm._unproxy(key);vm._digest();}}}var hasOwnProperty=Object.prototype.hasOwnProperty; /**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */function hasOwn(obj,key){return hasOwnProperty.call(obj,key);} /**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */var literalValueRE=/^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/;function isLiteral(exp){return literalValueRE.test(exp);} /**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */function isReserved(str){var c=(str + '').charCodeAt(0);return c === 0x24 || c === 0x5F;} /**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */function _toString(value){return value == null?'':value.toString();} /**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */function toNumber(value){if(typeof value !== 'string'){return value;}else {var parsed=Number(value);return isNaN(parsed)?value:parsed;}} /**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */function toBoolean(value){return value === 'true'?true:value === 'false'?false:value;} /**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */function stripQuotes(str){var a=str.charCodeAt(0);var b=str.charCodeAt(str.length - 1);return a === b && (a === 0x22 || a === 0x27)?str.slice(1,-1):str;} /**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */var camelizeRE=/-(\w)/g;function camelize(str){return str.replace(camelizeRE,toUpper);}function toUpper(_,c){return c?c.toUpperCase():'';} /**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */var hyphenateRE=/([a-z\d])([A-Z])/g;function hyphenate(str){return str.replace(hyphenateRE,'$1-$2').toLowerCase();} /**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */var classifyRE=/(?:^|[-_\/])(\w)/g;function classify(str){return str.replace(classifyRE,toUpper);} /**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */function bind$1(fn,ctx){return function(a){var l=arguments.length;return l?l > 1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);};} /**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */function toArray(list,start){start = start || 0;var i=list.length - start;var ret=new Array(i);while(i--) {ret[i] = list[i + start];}return ret;} /**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */function extend(to,from){var keys=Object.keys(from);var i=keys.length;while(i--) {to[keys[i]] = from[keys[i]];}return to;} /**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */function isObject(obj){return obj !== null && typeof obj === 'object';} /**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */var toString=Object.prototype.toString;var OBJECT_STRING='[object Object]';function isPlainObject(obj){return toString.call(obj) === OBJECT_STRING;} /**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */var isArray=Array.isArray; /**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});} /**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */function _debounce(func,wait){var timeout,args,context,timestamp,result;var later=function later(){var last=Date.now() - timestamp;if(last < wait && last >= 0){timeout = setTimeout(later,wait - last);}else {timeout = null;result = func.apply(context,args);if(!timeout)context = args = null;}};return function(){context = this;args = arguments;timestamp = Date.now();if(!timeout){timeout = setTimeout(later,wait);}return result;};} /**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */function indexOf(arr,obj){var i=arr.length;while(i--) {if(arr[i] === obj)return i;}return -1;} /**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */function cancellable(fn){var cb=function cb(){if(!cb.cancelled){return fn.apply(this,arguments);}};cb.cancel = function(){cb.cancelled = true;};return cb;} /**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */function looseEqual(a,b){ /* eslint-disable eqeqeq */return a == b || (isObject(a) && isObject(b)?JSON.stringify(a) === JSON.stringify(b):false); /* eslint-enable eqeqeq */}var hasProto=('__proto__' in {}); // Browser environment sniffing
	var inBrowser=typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';var isIE9=inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;var isAndroid=inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;var transitionProp=undefined;var transitionEndEvent=undefined;var animationProp=undefined;var animationEndEvent=undefined; // Transition property/event sniffing
	if(inBrowser && !isIE9){var isWebkitTrans=window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;var isWebkitAnim=window.onanimationend === undefined && window.onwebkitanimationend !== undefined;transitionProp = isWebkitTrans?'WebkitTransition':'transition';transitionEndEvent = isWebkitTrans?'webkitTransitionEnd':'transitionend';animationProp = isWebkitAnim?'WebkitAnimation':'animation';animationEndEvent = isWebkitAnim?'webkitAnimationEnd':'animationend';} /**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */var nextTick=(function(){var callbacks=[];var pending=false;var timerFunc;function nextTickHandler(){pending = false;var copies=callbacks.slice(0);callbacks = [];for(var i=0;i < copies.length;i++) {copies[i]();}} /* istanbul ignore if */if(typeof MutationObserver !== 'undefined'){var counter=1;var observer=new MutationObserver(nextTickHandler);var textNode=document.createTextNode(counter);observer.observe(textNode,{characterData:true});timerFunc = function(){counter = (counter + 1) % 2;textNode.data = counter;};}else {timerFunc = setTimeout;}return function(cb,ctx){var func=ctx?function(){cb.call(ctx);}:cb;callbacks.push(func);if(pending)return;pending = true;timerFunc(nextTickHandler,0);};})();function Cache(limit){this.size = 0;this.limit = limit;this.head = this.tail = undefined;this._keymap = Object.create(null);}var p=Cache.prototype; /**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */p.put = function(key,value){var entry={key:key,value:value};this._keymap[key] = entry;if(this.tail){this.tail.newer = entry;entry.older = this.tail;}else {this.head = entry;}this.tail = entry;if(this.size === this.limit){return this.shift();}else {this.size++;}}; /**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */p.shift = function(){var entry=this.head;if(entry){this.head = this.head.newer;this.head.older = undefined;entry.newer = entry.older = undefined;this._keymap[entry.key] = undefined;}return entry;}; /**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */p.get = function(key,returnEntry){var entry=this._keymap[key];if(entry === undefined)return;if(entry === this.tail){return returnEntry?entry:entry.value;} // HEAD--------------TAIL
	//   <.older   .newer>
	//  <--- add direction --
	//   A  B  C  <D>  E
	if(entry.newer){if(entry === this.head){this.head = entry.newer;}entry.newer.older = entry.older; // C <-- E.
	}if(entry.older){entry.older.newer = entry.newer; // C. --> E
	}entry.newer = undefined; // D --x
	entry.older = this.tail; // D. --> E
	if(this.tail){this.tail.newer = entry; // E. <-- D
	}this.tail = entry;return returnEntry?entry:entry.value;};var cache$1=new Cache(1000);var filterTokenRE=/[^\s'"]+|'[^']*'|"[^"]*"/g;var reservedArgRE=/^in$|^-?\d+/; /**
	 * Parser state
	 */var str;var dir;var c;var i;var l;var lastFilterIndex;var inSingle;var inDouble;var curly;var square;var paren; /**
	 * Push a filter to the current directive object
	 */function pushFilter(){var exp=str.slice(lastFilterIndex,i).trim();var filter;if(exp){filter = {};var tokens=exp.match(filterTokenRE);filter.name = tokens[0];if(tokens.length > 1){filter.args = tokens.slice(1).map(processFilterArg);}}if(filter){(dir.filters = dir.filters || []).push(filter);}lastFilterIndex = i + 1;} /**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */function processFilterArg(arg){if(reservedArgRE.test(arg)){return {value:toNumber(arg),dynamic:false};}else {var stripped=stripQuotes(arg);var dynamic=stripped === arg;return {value:dynamic?arg:stripped,dynamic:dynamic};}} /**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */function parseDirective(s){var hit=cache$1.get(s);if(hit){return hit;} // reset parser state
	str = s;inSingle = inDouble = false;curly = square = paren = 0;lastFilterIndex = 0;dir = {};for(i = 0,l = str.length;i < l;i++) {c = str.charCodeAt(i);if(inSingle){ // check single quote
	if(c === 0x27)inSingle = !inSingle;}else if(inDouble){ // check double quote
	if(c === 0x22)inDouble = !inDouble;}else if(c === 0x7C &&  // pipe
	str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C){if(dir.expression == null){ // first filter, end of expression
	lastFilterIndex = i + 1;dir.expression = str.slice(0,i).trim();}else { // already has filter
	pushFilter();}}else {switch(c){case 0x22:inDouble = true;break; // "
	case 0x27:inSingle = true;break; // '
	case 0x28:paren++;break; // (
	case 0x29:paren--;break; // )
	case 0x5B:square++;break; // [
	case 0x5D:square--;break; // ]
	case 0x7B:curly++;break; // {
	case 0x7D:curly--;break; // }
	}}}if(dir.expression == null){dir.expression = str.slice(0,i).trim();}else if(lastFilterIndex !== 0){pushFilter();}cache$1.put(s,dir);return dir;}var directive=Object.freeze({parseDirective:parseDirective});var regexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g;var cache=undefined;var tagRE=undefined;var htmlRE=undefined; /**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */function escapeRegex(str){return str.replace(regexEscapeRE,'\\$&');}function compileRegex(){var open=escapeRegex(config.delimiters[0]);var close=escapeRegex(config.delimiters[1]);var unsafeOpen=escapeRegex(config.unsafeDelimiters[0]);var unsafeClose=escapeRegex(config.unsafeDelimiters[1]);tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close,'g');htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$'); // reset cache
	cache = new Cache(1000);} /**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */function parseText(text){if(!cache){compileRegex();}var hit=cache.get(text);if(hit){return hit;}text = text.replace(/\n/g,'');if(!tagRE.test(text)){return null;}var tokens=[];var lastIndex=tagRE.lastIndex = 0;var match,index,html,value,first,oneTime; /* eslint-disable no-cond-assign */while(match = tagRE.exec(text)) { /* eslint-enable no-cond-assign */index = match.index; // push text token
	if(index > lastIndex){tokens.push({value:text.slice(lastIndex,index)});} // tag token
	html = htmlRE.test(match[0]);value = html?match[1]:match[2];first = value.charCodeAt(0);oneTime = first === 42; // *
	value = oneTime?value.slice(1):value;tokens.push({tag:true,value:value.trim(),html:html,oneTime:oneTime});lastIndex = index + match[0].length;}if(lastIndex < text.length){tokens.push({value:text.slice(lastIndex)});}cache.put(text,tokens);return tokens;} /**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @return {String}
	 */function tokensToExp(tokens){if(tokens.length > 1){return tokens.map(function(token){return formatToken(token);}).join('+');}else {return formatToken(tokens[0],true);}} /**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Boolean} single
	 * @return {String}
	 */function formatToken(token,single){return token.tag?inlineFilters(token.value,single):'"' + token.value + '"';} /**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */var filterRE$1=/[^|]\|[^|]/;function inlineFilters(exp,single){if(!filterRE$1.test(exp)){return single?exp:'(' + exp + ')';}else {var dir=parseDirective(exp);if(!dir.filters){return '(' + exp + ')';}else {return 'this._applyFilters(' + dir.expression +  // value
	',null,' +  // oldValue (null for read)
	JSON.stringify(dir.filters) +  // filter descriptors
	',false)'; // write?
	}}}var text$1=Object.freeze({compileRegex:compileRegex,parseText:parseText,tokensToExp:tokensToExp});var delimiters=['{{','}}'];var unsafeDelimiters=['{{{','}}}'];var config=Object.defineProperties({ /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */debug:false, /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */silent:false, /**
	   * Whether to use async rendering.
	   */async:true, /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */warnExpressionErrors:true, /**
	   * Whether or not to handle fully object properties which
	   * are already backed by getters and seters. Depending on
	   * use case and environment, this might introduce non-neglible
	   * performance penalties.
	   */convertAllProperties:false, /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */_delimitersChanged:true, /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */_assetTypes:['component','directive','elementDirective','filter','transition','partial'], /**
	   * prop binding modes
	   */_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2}, /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */_maxUpdateCount:100},{delimiters:{ /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */get:function get(){return delimiters;},set:function set(val){delimiters = val;compileRegex();},configurable:true,enumerable:true},unsafeDelimiters:{get:function get(){return unsafeDelimiters;},set:function set(val){unsafeDelimiters = val;compileRegex();},configurable:true,enumerable:true}});var warn=undefined;if(process.env.NODE_ENV !== 'production'){(function(){var hasConsole=typeof console !== 'undefined';warn = function(msg,e){if(hasConsole && (!config.silent || config.debug)){console.warn('[Vue warn]: ' + msg); /* istanbul ignore if */if(config.debug){if(e){throw e;}else {console.warn(new Error('Warning Stack Trace').stack);}}}};})();} /**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function appendWithTransition(el,target,vm,cb){applyTransition(el,1,function(){target.appendChild(el);},vm,cb);} /**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function beforeWithTransition(el,target,vm,cb){applyTransition(el,1,function(){before(el,target);},vm,cb);} /**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function removeWithTransition(el,vm,cb){applyTransition(el,-1,function(){remove(el);},vm,cb);} /**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function applyTransition(el,direction,op,vm,cb){var transition=el.__v_trans;if(!transition ||  // skip if there are no js hooks and CSS transition is
	// not supported
	!transition.hooks && !transitionEndEvent ||  // skip transitions for initial compile
	!vm._isCompiled ||  // if the vm is being manipulated by a parent directive
	// during the parent's compilation phase, skip the
	// animation.
	vm.$parent && !vm.$parent._isCompiled){op();if(cb)cb();return;}var action=direction > 0?'enter':'leave';transition[action](op,cb);} /**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */function query(el){if(typeof el === 'string'){var selector=el;el = document.querySelector(el);if(!el){process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);}}return el;} /**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function inDoc(node){var doc=document.documentElement;var parent=node && node.parentNode;return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));} /**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */function getAttr(node,_attr){var val=node.getAttribute(_attr);if(val !== null){node.removeAttribute(_attr);}return val;} /**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */function getBindAttr(node,name){var val=getAttr(node,':' + name);if(val === null){val = getAttr(node,'v-bind:' + name);}return val;} /**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function before(el,target){target.parentNode.insertBefore(el,target);} /**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function after(el,target){if(target.nextSibling){before(el,target.nextSibling);}else {target.parentNode.appendChild(el);}} /**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */function remove(el){el.parentNode.removeChild(el);} /**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function prepend(el,target){if(target.firstChild){before(el,target.firstChild);}else {target.appendChild(el);}} /**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */function replace(target,el){var parent=target.parentNode;if(parent){parent.replaceChild(el,target);}} /**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */function on$1(el,event,cb){el.addEventListener(event,cb);} /**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */function off(el,event,cb){el.removeEventListener(event,cb);} /**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */function addClass(el,cls){if(el.classList){el.classList.add(cls);}else {var cur=' ' + (el.getAttribute('class') || '') + ' ';if(cur.indexOf(' ' + cls + ' ') < 0){el.setAttribute('class',(cur + cls).trim());}}} /**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */function removeClass(el,cls){if(el.classList){el.classList.remove(cls);}else {var cur=' ' + (el.getAttribute('class') || '') + ' ';var tar=' ' + cls + ' ';while(cur.indexOf(tar) >= 0) {cur = cur.replace(tar,' ');}el.setAttribute('class',cur.trim());}if(!el.className){el.removeAttribute('class');}} /**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */function extractContent(el,asFragment){var child;var rawContent; /* istanbul ignore if */if(isTemplate(el) && el.content instanceof DocumentFragment){el = el.content;}if(el.hasChildNodes()){trimNode(el);rawContent = asFragment?document.createDocumentFragment():document.createElement('div'); /* eslint-disable no-cond-assign */while(child = el.firstChild) { /* eslint-enable no-cond-assign */rawContent.appendChild(child);}}return rawContent;} /**
	 * Trim possible empty head/tail textNodes inside a parent.
	 *
	 * @param {Node} node
	 */function trimNode(node){trim(node,node.firstChild);trim(node,node.lastChild);}function trim(parent,node){if(node && node.nodeType === 3 && !node.data.trim()){parent.removeChild(node);}} /**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */function isTemplate(el){return el.tagName && el.tagName.toLowerCase() === 'template';} /**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */function createAnchor(content,persist){var anchor=config.debug?document.createComment(content):document.createTextNode(persist?' ':'');anchor.__vue_anchor = true;return anchor;} /**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */var refRE=/^v-ref:/;function findRef(node){if(node.hasAttributes()){var attrs=node.attributes;for(var i=0,l=attrs.length;i < l;i++) {var name=attrs[i].name;if(refRE.test(name)){return camelize(name.replace(refRE,''));}}}} /**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */function mapNodeRange(node,end,op){var next;while(node !== end) {next = node.nextSibling;op(node);node = next;}op(end);} /**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */function removeNodeRange(start,end,vm,frag,cb){var done=false;var removed=0;var nodes=[];mapNodeRange(start,end,function(node){if(node === end)done = true;nodes.push(node);removeWithTransition(node,vm,onRemoved);});function onRemoved(){removed++;if(done && removed >= nodes.length){for(var i=0;i < nodes.length;i++) {frag.appendChild(nodes[i]);}cb && cb();}}}var commonTagRE=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/; /**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */function checkComponentAttr(el,options){var tag=el.tagName.toLowerCase();var hasAttrs=el.hasAttributes();if(!commonTagRE.test(tag) && tag !== 'component'){if(resolveAsset(options,'components',tag)){return {id:tag};}else {var is=hasAttrs && getIsBinding(el);if(is){return is;}else if(process.env.NODE_ENV !== 'production'){if(tag.indexOf('-') > -1 || /HTMLUnknownElement/.test(el.toString()) &&  // Chrome returns unknown for several HTML5 elements.
	// https://code.google.com/p/chromium/issues/detail?id=540526
	!/^(data|time|rtc|rb)$/.test(tag)){warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly?');}}}}else if(hasAttrs){return getIsBinding(el);}} /**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */function getIsBinding(el){ // dynamic syntax
	var exp=getAttr(el,'is');if(exp != null){return {id:exp};}else {exp = getBindAttr(el,'is');if(exp != null){return {id:exp,dynamic:true};}}} /**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */function initProp(vm,prop,value){var key=prop.path;vm[key] = vm._data[key] = assertProp(prop,value)?value:undefined;} /**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */function assertProp(prop,value){ // if a prop is not provided and is not required,
	// skip the check.
	if(prop.raw === null && !prop.required){return true;}var options=prop.options;var type=options.type;var valid=true;var expectedType;if(type){if(type === String){expectedType = 'string';valid = typeof value === expectedType;}else if(type === Number){expectedType = 'number';valid = typeof value === 'number';}else if(type === Boolean){expectedType = 'boolean';valid = typeof value === 'boolean';}else if(type === Function){expectedType = 'function';valid = typeof value === 'function';}else if(type === Object){expectedType = 'object';valid = isPlainObject(value);}else if(type === Array){expectedType = 'array';valid = isArray(value);}else {valid = value instanceof type;}}if(!valid){process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');return false;}var validator=options.validator;if(validator){if(!validator.call(null,value)){process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');return false;}}return true;}function formatType(val){return val?val.charAt(0).toUpperCase() + val.slice(1):'custom type';}function formatValue(val){return Object.prototype.toString.call(val).slice(8,-1);} /**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */var strats=config.optionMergeStrategies = Object.create(null); /**
	 * Helper that recursively merges two data objects together.
	 */function mergeData(to,from){var key,toVal,fromVal;for(key in from) {toVal = to[key];fromVal = from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(isObject(toVal) && isObject(fromVal)){mergeData(toVal,fromVal);}}return to;} /**
	 * Data
	 */strats.data = function(parentVal,childVal,vm){if(!vm){ // in a Vue.extend merge, both should be functions
	if(!childVal){return parentVal;}if(typeof childVal !== 'function'){process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');return parentVal;}if(!parentVal){return childVal;} // when parentVal & childVal are both present,
	// we need to return a function that returns the
	// merged result of both functions... no need to
	// check if parentVal is a function here because
	// it has to be a function to pass previous merges.
	return function mergedDataFn(){return mergeData(childVal.call(this),parentVal.call(this));};}else if(parentVal || childVal){return function mergedInstanceDataFn(){ // instance merge
	var instanceData=typeof childVal === 'function'?childVal.call(vm):childVal;var defaultData=typeof parentVal === 'function'?parentVal.call(vm):undefined;if(instanceData){return mergeData(instanceData,defaultData);}else {return defaultData;}};}}; /**
	 * El
	 */strats.el = function(parentVal,childVal,vm){if(!vm && childVal && typeof childVal !== 'function'){process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');return;}var ret=childVal || parentVal; // invoke the element factory if this is instance merge
	return vm && typeof ret === 'function'?ret.call(vm):ret;}; /**
	 * Hooks and param attributes are merged as arrays.
	 */strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = function(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):isArray(childVal)?childVal:[childVal]:parentVal;}; /**
	 * 0.11 deprecation warning
	 */strats.paramAttributes = function(){ /* istanbul ignore next */process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');}; /**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */function mergeAssets(parentVal,childVal){var res=Object.create(parentVal);return childVal?extend(res,guardArrayAssets(childVal)):res;}config._assetTypes.forEach(function(type){strats[type + 's'] = mergeAssets;}); /**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */strats.watch = strats.events = function(parentVal,childVal){if(!childVal)return parentVal;if(!parentVal)return childVal;var ret={};extend(ret,parentVal);for(var key in childVal) {var parent=ret[key];var child=childVal[key];if(parent && !isArray(parent)){parent = [parent];}ret[key] = parent?parent.concat(child):[child];}return ret;}; /**
	 * Other object hashes.
	 */strats.props = strats.methods = strats.computed = function(parentVal,childVal){if(!childVal)return parentVal;if(!parentVal)return childVal;var ret=Object.create(null);extend(ret,parentVal);extend(ret,childVal);return ret;}; /**
	 * Default strategy.
	 */var defaultStrat=function defaultStrat(parentVal,childVal){return childVal === undefined?parentVal:childVal;}; /**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */function guardComponents(options){if(options.components){var components=options.components = guardArrayAssets(options.components);var def;var ids=Object.keys(components);for(var i=0,l=ids.length;i < l;i++) {var key=ids[i];if(commonTagRE.test(key)){process.env.NODE_ENV !== 'production' && warn('Do not use built-in HTML elements as component ' + 'id: ' + key);continue;}def = components[key];if(isPlainObject(def)){components[key] = Vue.extend(def);}}}} /**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */function guardProps(options){var props=options.props;var i,val;if(isArray(props)){options.props = {};i = props.length;while(i--) {val = props[i];if(typeof val === 'string'){options.props[val] = null;}else if(val.name){options.props[val.name] = val;}}}else if(isPlainObject(props)){var keys=Object.keys(props);i = keys.length;while(i--) {val = props[keys[i]];if(typeof val === 'function'){props[keys[i]] = {type:val};}}}} /**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */function guardArrayAssets(assets){if(isArray(assets)){var res={};var i=assets.length;var asset;while(i--) {asset = assets[i];var id=typeof asset === 'function'?asset.options && asset.options.name || asset.id:asset.name || asset.id;if(!id){process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');}else {res[id] = asset;}}return res;}return assets;} /**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */function mergeOptions(parent,child,vm){guardComponents(child);guardProps(child);var options={};var key;if(child.mixins){for(var i=0,l=child.mixins.length;i < l;i++) {parent = mergeOptions(parent,child.mixins[i],vm);}}for(key in parent) {mergeField(key);}for(key in child) {if(!hasOwn(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key] || defaultStrat;options[key] = strat(parent[key],child[key],vm,key);}return options;} /**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */function resolveAsset(options,type,id){var assets=options[type];var camelizedId;return assets[id] ||  // camelCase ID
	assets[camelizedId = camelize(id)] ||  // Pascal Case ID
	assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];} /**
	 * Assert asset exists
	 */function assertAsset(val,type,id){if(!val){process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);}}var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto) /**
	 * Intercept mutating methods and emit events
	 */;['push','pop','shift','unshift','splice','sort','reverse'].forEach(function(method){ // cache original method
	var original=arrayProto[method];def(arrayMethods,method,function mutator(){ // avoid leaking arguments:
	// http://jsperf.com/closure-with-arguments
	var i=arguments.length;var args=new Array(i);while(i--) {args[i] = arguments[i];}var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case 'push':inserted = args;break;case 'unshift':inserted = args;break;case 'splice':inserted = args.slice(2);break;}if(inserted)ob.observeArray(inserted); // notify change
	ob.dep.notify();return result;});}); /**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */def(arrayProto,'$set',function $set(index,val){if(index >= this.length){this.length = index + 1;}return this.splice(index,1,val)[0];}); /**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */def(arrayProto,'$remove',function $remove(item){ /* istanbul ignore if */if(!this.length)return;var index=indexOf(this,item);if(index > -1){return this.splice(index,1);}});var uid$3=0; /**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */function Dep(){this.id = uid$3++;this.subs = [];} // the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null; /**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */Dep.prototype.addSub = function(sub){this.subs.push(sub);}; /**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */Dep.prototype.removeSub = function(sub){this.subs.$remove(sub);}; /**
	 * Add self as a dependency to the target watcher.
	 */Dep.prototype.depend = function(){Dep.target.addDep(this);}; /**
	 * Notify all subscribers of a new value.
	 */Dep.prototype.notify = function(){ // stablize the subscriber list first
	var subs=toArray(this.subs);for(var i=0,l=subs.length;i < l;i++) {subs[i].update();}};var arrayKeys=Object.getOwnPropertyNames(arrayMethods); /**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */function Observer(value){this.value = value;this.dep = new Dep();def(value,'__ob__',this);if(isArray(value)){var augment=hasProto?protoAugment:copyAugment;augment(value,arrayMethods,arrayKeys);this.observeArray(value);}else {this.walk(value);}} // Instance methods
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */Observer.prototype.walk = function(obj){var keys=Object.keys(obj);var i=keys.length;while(i--) {this.convert(keys[i],obj[keys[i]]);}}; /**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */Observer.prototype.observeArray = function(items){var i=items.length;while(i--) {observe(items[i]);}}; /**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */Observer.prototype.convert = function(key,val){defineReactive(this.value,key,val);}; /**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */Observer.prototype.addVm = function(vm){(this.vms || (this.vms = [])).push(vm);}; /**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */Observer.prototype.removeVm = function(vm){this.vms.$remove(vm);}; // helpers
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */function protoAugment(target,src){target.__proto__ = src;} /**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */function copyAugment(target,src,keys){var i=keys.length;var key;while(i--) {key = keys[i];def(target,key,src[key]);}} /**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */function observe(value,vm){if(!value || typeof value !== 'object'){return;}var ob;if(hasOwn(value,'__ob__') && value.__ob__ instanceof Observer){ob = value.__ob__;}else if((isArray(value) || isPlainObject(value)) && !Object.isFrozen(value) && !value._isVue){ob = new Observer(value);}if(ob && vm){ob.addVm(vm);}return ob;} /**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */function defineReactive(obj,key,val){var dep=new Dep(); // cater for pre-defined getter/setters
	var getter,setter;if(config.convertAllProperties){var property=Object.getOwnPropertyDescriptor(obj,key);if(property && property.configurable === false){return;}getter = property && property.get;setter = property && property.set;}var childOb=observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();}if(isArray(value)){for(var e,i=0,l=value.length;i < l;i++) {e = value[i];e && e.__ob__ && e.__ob__.dep.depend();}}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;if(newVal === value){return;}if(setter){setter.call(obj,newVal);}else {val = newVal;}childOb = observe(newVal);dep.notify();}});}var util=Object.freeze(Object.defineProperties({defineReactive:defineReactive,set:set,del:del,hasOwn:hasOwn,isLiteral:isLiteral,isReserved:isReserved,_toString:_toString,toNumber:toNumber,toBoolean:toBoolean,stripQuotes:stripQuotes,camelize:camelize,hyphenate:hyphenate,classify:classify,bind:bind$1,toArray:toArray,extend:extend,isObject:isObject,isPlainObject:isPlainObject,def:def,debounce:_debounce,indexOf:indexOf,cancellable:cancellable,looseEqual:looseEqual,isArray:isArray,hasProto:hasProto,inBrowser:inBrowser,isIE9:isIE9,isAndroid:isAndroid,nextTick:nextTick,query:query,inDoc:inDoc,getAttr:getAttr,getBindAttr:getBindAttr,before:before,after:after,remove:remove,prepend:prepend,replace:replace,on:on$1,off:off,addClass:addClass,removeClass:removeClass,extractContent:extractContent,trimNode:trimNode,isTemplate:isTemplate,createAnchor:createAnchor,findRef:findRef,mapNodeRange:mapNodeRange,removeNodeRange:removeNodeRange,mergeOptions:mergeOptions,resolveAsset:resolveAsset,assertAsset:assertAsset,checkComponentAttr:checkComponentAttr,initProp:initProp,assertProp:assertProp,commonTagRE:commonTagRE},{transitionProp:{get:function get(){return transitionProp;},configurable:true,enumerable:true},transitionEndEvent:{get:function get(){return transitionEndEvent;},configurable:true,enumerable:true},animationProp:{get:function get(){return animationProp;},configurable:true,enumerable:true},animationEndEvent:{get:function get(){return animationEndEvent;},configurable:true,enumerable:true},warn:{get:function get(){return warn;},configurable:true,enumerable:true}}));var uid=0;function initMixin(Vue){ /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */Vue.prototype._init = function(options){options = options || {};this.$el = null;this.$parent = options.parent;this.$root = this.$parent?this.$parent.$root:this;this.$children = [];this.$refs = {}; // child vm references
	this.$els = {}; // element references
	this._watchers = []; // all watchers as an array
	this._directives = []; // all directives
	// a uid
	this._uid = uid++; // a flag to avoid this being observed
	this._isVue = true; // events bookkeeping
	this._events = {}; // registered callbacks
	this._eventsCount = {}; // for $broadcast optimization
	// fragment instance properties
	this._isFragment = false;this._fragment =  // @type {DocumentFragment}
	this._fragmentStart =  // @type {Text|Comment}
	this._fragmentEnd = null; // @type {Text|Comment}
	// lifecycle state
	this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = false;this._unlinkFn = null; // context:
	// if this is a transcluded component, context
	// will be the common parent vm of this instance
	// and its host.
	this._context = options._context || this.$parent; // scope:
	// if this is inside an inline v-for, the scope
	// will be the intermediate scope created for this
	// repeat fragment. this is used for linking props
	// and container directives.
	this._scope = options._scope; // fragment:
	// if this instance is compiled inside a Fragment, it
	// needs to reigster itself as a child of that fragment
	// for attach/detach to work properly.
	this._frag = options._frag;if(this._frag){this._frag.children.push(this);} // push self into parent / transclusion host
	if(this.$parent){this.$parent.$children.push(this);} // merge options.
	options = this.$options = mergeOptions(this.constructor.options,options,this); // set ref
	this._updateRef(); // initialize data as empty object.
	// it will be filled up in _initScope().
	this._data = {}; // call init hook
	this._callHook('init'); // initialize data observation and scope inheritance.
	this._initState(); // setup event system and option events.
	this._initEvents(); // call created hook
	this._callHook('created'); // if `el` option is passed, start compilation.
	if(options.el){this.$mount(options.el);}};}var pathCache=new Cache(1000); // actions
	var APPEND=0;var PUSH=1;var INC_SUB_PATH_DEPTH=2;var PUSH_SUB_PATH=3; // states
	var BEFORE_PATH=0;var IN_PATH=1;var BEFORE_IDENT=2;var IN_IDENT=3;var IN_SUB_PATH=4;var IN_SINGLE_QUOTE=5;var IN_DOUBLE_QUOTE=6;var AFTER_PATH=7;var ERROR=8;var pathStateMachine=[];pathStateMachine[BEFORE_PATH] = {'ws':[BEFORE_PATH],'ident':[IN_IDENT,APPEND],'[':[IN_SUB_PATH],'eof':[AFTER_PATH]};pathStateMachine[IN_PATH] = {'ws':[IN_PATH],'.':[BEFORE_IDENT],'[':[IN_SUB_PATH],'eof':[AFTER_PATH]};pathStateMachine[BEFORE_IDENT] = {'ws':[BEFORE_IDENT],'ident':[IN_IDENT,APPEND]};pathStateMachine[IN_IDENT] = {'ident':[IN_IDENT,APPEND],'0':[IN_IDENT,APPEND],'number':[IN_IDENT,APPEND],'ws':[IN_PATH,PUSH],'.':[BEFORE_IDENT,PUSH],'[':[IN_SUB_PATH,PUSH],'eof':[AFTER_PATH,PUSH]};pathStateMachine[IN_SUB_PATH] = {"'":[IN_SINGLE_QUOTE,APPEND],'"':[IN_DOUBLE_QUOTE,APPEND],'[':[IN_SUB_PATH,INC_SUB_PATH_DEPTH],']':[IN_PATH,PUSH_SUB_PATH],'eof':ERROR,'else':[IN_SUB_PATH,APPEND]};pathStateMachine[IN_SINGLE_QUOTE] = {"'":[IN_SUB_PATH,APPEND],'eof':ERROR,'else':[IN_SINGLE_QUOTE,APPEND]};pathStateMachine[IN_DOUBLE_QUOTE] = {'"':[IN_SUB_PATH,APPEND],'eof':ERROR,'else':[IN_DOUBLE_QUOTE,APPEND]}; /**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */function getPathCharType(ch){if(ch === undefined){return 'eof';}var code=ch.charCodeAt(0);switch(code){case 0x5B: // [
	case 0x5D: // ]
	case 0x2E: // .
	case 0x22: // "
	case 0x27: // '
	case 0x30: // 0
	return ch;case 0x5F: // _
	case 0x24: // $
	return 'ident';case 0x20: // Space
	case 0x09: // Tab
	case 0x0A: // Newline
	case 0x0D: // Return
	case 0xA0: // No-break space
	case 0xFEFF: // Byte Order Mark
	case 0x2028: // Line Separator
	case 0x2029: // Paragraph Separator
	return 'ws';} // a-z, A-Z
	if(code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A){return 'ident';} // 1-9
	if(code >= 0x31 && code <= 0x39){return 'number';}return 'else';} /**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */function formatSubPath(path){var trimmed=path.trim(); // invalid leading 0
	if(path.charAt(0) === '0' && isNaN(path)){return false;}return isLiteral(trimmed)?stripQuotes(trimmed):'*' + trimmed;} /**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */function parse(path){var keys=[];var index=-1;var mode=BEFORE_PATH;var subPathDepth=0;var c,newChar,key,type,transition,action,typeMap;var actions=[];actions[PUSH] = function(){if(key !== undefined){keys.push(key);key = undefined;}};actions[APPEND] = function(){if(key === undefined){key = newChar;}else {key += newChar;}};actions[INC_SUB_PATH_DEPTH] = function(){actions[APPEND]();subPathDepth++;};actions[PUSH_SUB_PATH] = function(){if(subPathDepth > 0){subPathDepth--;mode = IN_SUB_PATH;actions[APPEND]();}else {subPathDepth = 0;key = formatSubPath(key);if(key === false){return false;}else {actions[PUSH]();}}};function maybeUnescapeQuote(){var nextChar=path[index + 1];if(mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"'){index++;newChar = '\\' + nextChar;actions[APPEND]();return true;}}while(mode != null) {index++;c = path[index];if(c === '\\' && maybeUnescapeQuote()){continue;}type = getPathCharType(c);typeMap = pathStateMachine[mode];transition = typeMap[type] || typeMap['else'] || ERROR;if(transition === ERROR){return; // parse error
	}mode = transition[0];action = actions[transition[1]];if(action){newChar = transition[2];newChar = newChar === undefined?c:newChar;if(action() === false){return;}}if(mode === AFTER_PATH){keys.raw = path;return keys;}}} /**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */function parsePath(path){var hit=pathCache.get(path);if(!hit){hit = parse(path);if(hit){pathCache.put(path,hit);}}return hit;} /**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */function getPath(obj,path){return parseExpression(path).get(obj);} /**
	 * Warn against setting non-existent root path on a vm.
	 */var warnNonExistent;if(process.env.NODE_ENV !== 'production'){warnNonExistent = function(path){warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');};} /**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */function setPath(obj,path,val){var original=obj;if(typeof path === 'string'){path = parse(path);}if(!path || !isObject(obj)){return false;}var last,key;for(var i=0,l=path.length;i < l;i++) {last = obj;key = path[i];if(key.charAt(0) === '*'){key = parseExpression(key.slice(1)).get.call(original,original);}if(i < l - 1){obj = obj[key];if(!isObject(obj)){obj = {};if(process.env.NODE_ENV !== 'production' && last._isVue){warnNonExistent(path);}set(last,key,obj);}}else {if(isArray(obj)){obj.$set(key,val);}else if(key in obj){obj[key] = val;}else {if(process.env.NODE_ENV !== 'production' && obj._isVue){warnNonExistent(path);}set(obj,key,val);}}}return true;}var path=Object.freeze({parsePath:parsePath,getPath:getPath,setPath:setPath});var expressionCache=new Cache(1000);var allowedKeywords='Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';var allowedKeywordsRE=new RegExp('^(' + allowedKeywords.replace(/,/g,'\\b|') + '\\b)'); // keywords that don't make sense inside expressions
	var improperKeywords='break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';var improperKeywordsRE=new RegExp('^(' + improperKeywords.replace(/,/g,'\\b|') + '\\b)');var wsRE=/\s/g;var newlineRE=/\n/g;var saveRE=/[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g;var restoreRE=/"(\d+)"/g;var pathTestRE=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;var pathReplaceRE=/[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g;var booleanLiteralRE=/^(true|false)$/; /**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */var saved=[]; /**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */function save(str,isString){var i=saved.length;saved[i] = isString?str.replace(newlineRE,'\\n'):str;return '"' + i + '"';} /**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */function rewrite(raw){var c=raw.charAt(0);var path=raw.slice(1);if(allowedKeywordsRE.test(path)){return raw;}else {path = path.indexOf('"') > -1?path.replace(restoreRE,restore):path;return c + 'scope.' + path;}} /**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */function restore(str,i){return saved[i];} /**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */function compileGetter(exp){if(improperKeywordsRE.test(exp)){process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);} // reset state
	saved.length = 0; // save strings and object literal keys
	var body=exp.replace(saveRE,save).replace(wsRE,''); // rewrite all paths
	// pad 1 space here becaue the regex matches 1 extra char
	body = (' ' + body).replace(pathReplaceRE,rewrite).replace(restoreRE,restore);return makeGetterFn(body);} /**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */function makeGetterFn(body){try{return new Function('scope','return ' + body + ';');}catch(e) {process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);}} /**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */function compileSetter(exp){var path=parsePath(exp);if(path){return function(scope,val){setPath(scope,path,val);};}else {process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);}} /**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */function parseExpression(exp,needSet){exp = exp.trim(); // try cache
	var hit=expressionCache.get(exp);if(hit){if(needSet && !hit.set){hit.set = compileSetter(hit.exp);}return hit;}var res={exp:exp};res.get = isSimplePath(exp) && exp.indexOf('[') < 0 // optimized super simple getter
	?makeGetterFn('scope.' + exp) // dynamic getter
	:compileGetter(exp);if(needSet){res.set = compileSetter(exp);}expressionCache.put(exp,res);return res;} /**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */function isSimplePath(exp){return pathTestRE.test(exp) &&  // don't treat true/false as paths
	!booleanLiteralRE.test(exp) &&  // Math constants e.g. Math.PI, Math.E etc.
	exp.slice(0,5) !== 'Math.';}var expression=Object.freeze({parseExpression:parseExpression,isSimplePath:isSimplePath}); // we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue=[];var userQueue=[];var has={};var circular={};var waiting=false;var internalQueueDepleted=false; /**
	 * Reset the batcher's state.
	 */function resetBatcherState(){queue = [];userQueue = [];has = {};circular = {};waiting = internalQueueDepleted = false;} /**
	 * Flush both queues and run the watchers.
	 */function flushBatcherQueue(){runBatcherQueue(queue);internalQueueDepleted = true;runBatcherQueue(userQueue); // dev tool hook
	/* istanbul ignore if */if(process.env.NODE_ENV !== 'production'){if(inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__){window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush');}}resetBatcherState();} /**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */function runBatcherQueue(queue){ // do not cache length because more watchers might be pushed
	// as we run existing watchers
	for(var i=0;i < queue.length;i++) {var watcher=queue[i];var id=watcher.id;has[id] = null;watcher.run(); // in dev build, check and stop circular updates.
	if(process.env.NODE_ENV !== 'production' && has[id] != null){circular[id] = (circular[id] || 0) + 1;if(circular[id] > config._maxUpdateCount){queue.splice(has[id],1);warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);}}}} /**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */function pushWatcher(watcher){var id=watcher.id;if(has[id] == null){ // if an internal watcher is pushed, but the internal
	// queue is already depleted, we run it immediately.
	if(internalQueueDepleted && !watcher.user){watcher.run();return;} // push watcher into appropriate queue
	var q=watcher.user?userQueue:queue;has[id] = q.length;q.push(watcher); // queue the flush
	if(!waiting){waiting = true;nextTick(flushBatcherQueue);}}}var uid$2=0; /**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */function Watcher(vm,expOrFn,cb,options){ // mix in options
	if(options){extend(this,options);}var isFn=typeof expOrFn === 'function';this.vm = vm;vm._watchers.push(this);this.expression = isFn?expOrFn.toString():expOrFn;this.cb = cb;this.id = ++uid$2; // uid for batching
	this.active = true;this.dirty = this.lazy; // for lazy watchers
	this.deps = Object.create(null);this.newDeps = null;this.prevError = null; // for async error stacks
	// parse expression for getter/setter
	if(isFn){this.getter = expOrFn;this.setter = undefined;}else {var res=parseExpression(expOrFn,this.twoWay);this.getter = res.get;this.setter = res.set;}this.value = this.lazy?undefined:this.get(); // state for avoiding false triggers for deep and Array
	// watchers during vm._digest()
	this.queued = this.shallow = false;} /**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */Watcher.prototype.addDep = function(dep){var id=dep.id;if(!this.newDeps[id]){this.newDeps[id] = dep;if(!this.deps[id]){this.deps[id] = dep;dep.addSub(this);}}}; /**
	 * Evaluate the getter, and re-collect dependencies.
	 */Watcher.prototype.get = function(){this.beforeGet();var scope=this.scope || this.vm;var value;try{value = this.getter.call(scope,scope);}catch(e) {if(process.env.NODE_ENV !== 'production' && config.warnExpressionErrors){warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug?'':'Turn on debug mode to see stack trace.'),e);}} // "touch" every property so they are all tracked as
	// dependencies for deep watching
	if(this.deep){traverse(value);}if(this.preProcess){value = this.preProcess(value);}if(this.filters){value = scope._applyFilters(value,null,this.filters,false);}if(this.postProcess){value = this.postProcess(value);}this.afterGet();return value;}; /**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */Watcher.prototype.set = function(value){var scope=this.scope || this.vm;if(this.filters){value = scope._applyFilters(value,this.value,this.filters,true);}try{this.setter.call(scope,scope,value);}catch(e) {if(process.env.NODE_ENV !== 'production' && config.warnExpressionErrors){warn('Error when evaluating setter "' + this.expression + '"',e);}} // two-way sync for v-for alias
	var forContext=scope.$forContext;if(forContext && forContext.alias === this.expression){if(forContext.filters){process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');return;}forContext._withLock(function(){if(scope.$key){ // original is an object
	forContext.rawValue[scope.$key] = value;}else {forContext.rawValue.$set(scope.$index,value);}});}}; /**
	 * Prepare for dependency collection.
	 */Watcher.prototype.beforeGet = function(){Dep.target = this;this.newDeps = Object.create(null);}; /**
	 * Clean up for dependency collection.
	 */Watcher.prototype.afterGet = function(){Dep.target = null;var ids=Object.keys(this.deps);var i=ids.length;while(i--) {var id=ids[i];if(!this.newDeps[id]){this.deps[id].removeSub(this);}}this.deps = this.newDeps;}; /**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */Watcher.prototype.update = function(shallow){if(this.lazy){this.dirty = true;}else if(this.sync || !config.async){this.run();}else { // if queued, only overwrite shallow with non-shallow,
	// but not the other way around.
	this.shallow = this.queued?shallow?this.shallow:false:!!shallow;this.queued = true; // record before-push error stack in debug mode
	/* istanbul ignore if */if(process.env.NODE_ENV !== 'production' && config.debug){this.prevError = new Error('[vue] async stack trace');}pushWatcher(this);}}; /**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */Watcher.prototype.run = function(){if(this.active){var value=this.get();if(value !== this.value ||  // Deep watchers and Array watchers should fire even
	// when the value is the same, because the value may
	// have mutated; but only do so if this is a
	// non-shallow update (caused by a vm digest).
	(isArray(value) || this.deep) && !this.shallow){ // set new value
	var oldValue=this.value;this.value = value; // in debug + async mode, when a watcher callbacks
	// throws, we also throw the saved before-push error
	// so the full cross-tick stack trace is available.
	var prevError=this.prevError; /* istanbul ignore if */if(process.env.NODE_ENV !== 'production' && config.debug && prevError){this.prevError = null;try{this.cb.call(this.vm,value,oldValue);}catch(e) {nextTick(function(){throw prevError;},0);throw e;}}else {this.cb.call(this.vm,value,oldValue);}}this.queued = this.shallow = false;}}; /**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */Watcher.prototype.evaluate = function(){ // avoid overwriting another watcher that is being
	// collected.
	var current=Dep.target;this.value = this.get();this.dirty = false;Dep.target = current;}; /**
	 * Depend on all deps collected by this watcher.
	 */Watcher.prototype.depend = function(){var depIds=Object.keys(this.deps);var i=depIds.length;while(i--) {this.deps[depIds[i]].depend();}}; /**
	 * Remove self from all dependencies' subcriber list.
	 */Watcher.prototype.teardown = function(){if(this.active){ // remove self from vm's watcher list
	// we can skip this if the vm if being destroyed
	// which can improve teardown performance.
	if(!this.vm._isBeingDestroyed){this.vm._watchers.$remove(this);}var depIds=Object.keys(this.deps);var i=depIds.length;while(i--) {this.deps[depIds[i]].removeSub(this);}this.active = false;this.vm = this.cb = this.value = null;}}; /**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */function traverse(val){var i,keys;if(isArray(val)){i = val.length;while(i--) traverse(val[i]);}else if(isObject(val)){keys = Object.keys(val);i = keys.length;while(i--) traverse(val[keys[i]]);}}var cloak={bind:function bind(){var el=this.el;this.vm.$once('hook:compiled',function(){el.removeAttribute('v-cloak');});}};var ref={bind:function bind(){process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');}};var el={priority:1500,bind:function bind(){ /* istanbul ignore if */if(!this.arg){return;}var id=this.id = camelize(this.arg);var refs=(this._scope || this.vm).$els;if(hasOwn(refs,id)){refs[id] = this.el;}else {defineReactive(refs,id,this.el);}},unbind:function unbind(){var refs=(this._scope || this.vm).$els;if(refs[this.id] === this.el){refs[this.id] = null;}}};var prefixes=['-webkit-','-moz-','-ms-'];var camelPrefixes=['Webkit','Moz','ms'];var importantRE=/!important;?$/;var propCache=Object.create(null);var testEl=null;var style={deep:true,update:function update(value){if(typeof value === 'string'){this.el.style.cssText = value;}else if(isArray(value)){this.handleObject(value.reduce(extend,{}));}else {this.handleObject(value || {});}},handleObject:function handleObject(value){ // cache object styles so that only changed props
	// are actually updated.
	var cache=this.cache || (this.cache = {});var name,val;for(name in cache) {if(!(name in value)){this.handleSingle(name,null);delete cache[name];}}for(name in value) {val = value[name];if(val !== cache[name]){cache[name] = val;this.handleSingle(name,val);}}},handleSingle:function handleSingle(prop,value){prop = normalize(prop);if(!prop)return; // unsupported prop
	// cast possible numbers/booleans into strings
	if(value != null)value += '';if(value){var isImportant=importantRE.test(value)?'important':'';if(isImportant){value = value.replace(importantRE,'').trim();}this.el.style.setProperty(prop,value,isImportant);}else {this.el.style.removeProperty(prop);}}}; /**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */function normalize(prop){if(propCache[prop]){return propCache[prop];}var res=prefix(prop);propCache[prop] = propCache[res] = res;return res;} /**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */function prefix(prop){prop = hyphenate(prop);var camel=camelize(prop);var upper=camel.charAt(0).toUpperCase() + camel.slice(1);if(!testEl){testEl = document.createElement('div');}if(camel in testEl.style){return prop;}var i=prefixes.length;var prefixed;while(i--) {prefixed = camelPrefixes[i] + upper;if(prefixed in testEl.style){return prefixes[i] + prop;}}} // xlink
	var xlinkNS='http://www.w3.org/1999/xlink';var xlinkRE=/^xlink:/; // these input element attributes should also set their
	// corresponding properties
	var inputProps={value:1,checked:1,selected:1}; // these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps={value:'_value','true-value':'_trueValue','false-value':'_falseValue'}; // check for attributes that prohibit interpolations
	var disallowedInterpAttrRE=/^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;var bind={priority:850,bind:function bind(){var attr=this.arg;var tag=this.el.tagName; // should be deep watch on object mode
	if(!attr){this.deep = true;} // handle interpolation bindings
	if(this.descriptor.interp){ // only allow binding on native attributes
	if(disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')){process.env.NODE_ENV !== 'production' && warn(attr + '="' + this.descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');this.el.removeAttribute(attr);this.invalid = true;} /* istanbul ignore if */if(process.env.NODE_ENV !== 'production'){var raw=attr + '="' + this.descriptor.raw + '": '; // warn src
	if(attr === 'src'){warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');} // warn style
	if(attr === 'style'){warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');}}}},update:function update(value){if(this.invalid){return;}var attr=this.arg;if(this.arg){this.handleSingle(attr,value);}else {this.handleObject(value || {});}}, // share object handler with v-bind:class
	handleObject:style.handleObject,handleSingle:function handleSingle(attr,value){if(inputProps[attr] && attr in this.el){this.el[attr] = attr === 'value'?value || '': // IE9 will set input.value to "null" for null...
	value;} // set model props
	var modelProp=modelProps[attr];if(modelProp){this.el[modelProp] = value; // update v-model if present
	var model=this.el.__v_model;if(model){model.listener();}} // do not set value attribute for textarea
	if(attr === 'value' && this.el.tagName === 'TEXTAREA'){this.el.removeAttribute(attr);return;} // update attribute
	if(value != null && value !== false){if(xlinkRE.test(attr)){this.el.setAttributeNS(xlinkNS,attr,value);}else {this.el.setAttribute(attr,value);}}else {this.el.removeAttribute(attr);}}}; // keyCode aliases
	var keyCodes={esc:27,tab:9,enter:13,space:32,'delete':46,up:38,left:37,right:39,down:40};function keyFilter(handler,keys){var codes=keys.map(function(key){var charCode=key.charCodeAt(0);if(charCode > 47 && charCode < 58){return parseInt(key,10);}if(key.length === 1){charCode = key.toUpperCase().charCodeAt(0);if(charCode > 64 && charCode < 91){return charCode;}}return keyCodes[key];});return function keyHandler(e){if(codes.indexOf(e.keyCode) > -1){return handler.call(this,e);}};}function stopFilter(handler){return function stopHandler(e){e.stopPropagation();return handler.call(this,e);};}function preventFilter(handler){return function preventHandler(e){e.preventDefault();return handler.call(this,e);};}var on={acceptStatement:true,priority:700,bind:function bind(){ // deal with iframes
	if(this.el.tagName === 'IFRAME' && this.arg !== 'load'){var self=this;this.iframeBind = function(){on$1(self.el.contentWindow,self.arg,self.handler);};this.on('load',this.iframeBind);}},update:function update(handler){ // stub a noop for v-on with no value,
	// e.g. @mousedown.prevent
	if(!this.descriptor.raw){handler = function(){};}if(typeof handler !== 'function'){process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);return;} // apply modifiers
	if(this.modifiers.stop){handler = stopFilter(handler);}if(this.modifiers.prevent){handler = preventFilter(handler);} // key filter
	var keys=Object.keys(this.modifiers).filter(function(key){return key !== 'stop' && key !== 'prevent';});if(keys.length){handler = keyFilter(handler,keys);}this.reset();this.handler = handler;if(this.iframeBind){this.iframeBind();}else {on$1(this.el,this.arg,this.handler);}},reset:function reset(){var el=this.iframeBind?this.el.contentWindow:this.el;if(this.handler){off(el,this.arg,this.handler);}},unbind:function unbind(){this.reset();}};var checkbox={bind:function bind(){var self=this;var el=this.el;this.getValue = function(){return el.hasOwnProperty('_value')?el._value:self.params.number?toNumber(el.value):el.value;};function getBooleanValue(){var val=el.checked;if(val && el.hasOwnProperty('_trueValue')){return el._trueValue;}if(!val && el.hasOwnProperty('_falseValue')){return el._falseValue;}return val;}this.listener = function(){var model=self._watcher.value;if(isArray(model)){var val=self.getValue();if(el.checked){if(indexOf(model,val) < 0){model.push(val);}}else {model.$remove(val);}}else {self.set(getBooleanValue());}};this.on('change',this.listener);if(el.checked){this.afterBind = this.listener;}},update:function update(value){var el=this.el;if(isArray(value)){el.checked = indexOf(value,this.getValue()) > -1;}else {if(el.hasOwnProperty('_trueValue')){el.checked = looseEqual(value,el._trueValue);}else {el.checked = !!value;}}}};var select={bind:function bind(){var self=this;var el=this.el; // method to force update DOM using latest value.
	this.forceUpdate = function(){if(self._watcher){self.update(self._watcher.get());}}; // check if this is a multiple select
	var multiple=this.multiple = el.hasAttribute('multiple'); // attach listener
	this.listener = function(){var value=getValue(el,multiple);value = self.params.number?isArray(value)?value.map(toNumber):toNumber(value):value;self.set(value);};this.on('change',this.listener); // if has initial value, set afterBind
	var initValue=getValue(el,multiple,true);if(multiple && initValue.length || !multiple && initValue !== null){this.afterBind = this.listener;} // All major browsers except Firefox resets
	// selectedIndex with value -1 to 0 when the element
	// is appended to a new parent, therefore we have to
	// force a DOM update whenever that happens...
	this.vm.$on('hook:attached',this.forceUpdate);},update:function update(value){var el=this.el;el.selectedIndex = -1;var multi=this.multiple && isArray(value);var options=el.options;var i=options.length;var op,val;while(i--) {op = options[i];val = op.hasOwnProperty('_value')?op._value:op.value; /* eslint-disable eqeqeq */op.selected = multi?indexOf$1(value,val) > -1:looseEqual(value,val); /* eslint-enable eqeqeq */}},unbind:function unbind(){ /* istanbul ignore next */this.vm.$off('hook:attached',this.forceUpdate);}}; /**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */function getValue(el,multi,init){var res=multi?[]:null;var op,val,selected;for(var i=0,l=el.options.length;i < l;i++) {op = el.options[i];selected = init?op.hasAttribute('selected'):op.selected;if(selected){val = op.hasOwnProperty('_value')?op._value:op.value;if(multi){res.push(val);}else {return val;}}}return res;} /**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */function indexOf$1(arr,val){var i=arr.length;while(i--) {if(looseEqual(arr[i],val)){return i;}}return -1;}var radio={bind:function bind(){var self=this;var el=this.el;this.getValue = function(){ // value overwrite via v-bind:value
	if(el.hasOwnProperty('_value')){return el._value;}var val=el.value;if(self.params.number){val = toNumber(val);}return val;};this.listener = function(){self.set(self.getValue());};this.on('change',this.listener);if(el.checked){this.afterBind = this.listener;}},update:function update(value){this.el.checked = looseEqual(value,this.getValue());}};var text$2={bind:function bind(){var self=this;var el=this.el;var isRange=el.type === 'range';var lazy=this.params.lazy;var number=this.params.number;var debounce=this.params.debounce; // handle composition events.
	//   http://blog.evanyou.me/2014/01/03/composition-event/
	// skip this for Android because it handles composition
	// events quite differently. Android doesn't trigger
	// composition events for language input methods e.g.
	// Chinese, but instead triggers them for spelling
	// suggestions... (see Discussion/#162)
	var composing=false;if(!isAndroid && !isRange){this.on('compositionstart',function(){composing = true;});this.on('compositionend',function(){composing = false; // in IE11 the "compositionend" event fires AFTER
	// the "input" event, so the input handler is blocked
	// at the end... have to call it here.
	//
	// #1327: in lazy mode this is unecessary.
	if(!lazy){self.listener();}});} // prevent messing with the input when user is typing,
	// and force update on blur.
	this.focused = false;if(!isRange){this.on('focus',function(){self.focused = true;});this.on('blur',function(){self.focused = false;self.listener();});} // Now attach the main listener
	this.listener = function(){if(composing)return;var val=number || isRange?toNumber(el.value):el.value;self.set(val); // force update on next tick to avoid lock & same value
	// also only update when user is not typing
	nextTick(function(){if(self._bound && !self.focused){self.update(self._watcher.value);}});}; // apply debounce
	if(debounce){this.listener = _debounce(this.listener,debounce);} // Support jQuery events, since jQuery.trigger() doesn't
	// trigger native events in some cases and some plugins
	// rely on $.trigger()
	//
	// We want to make sure if a listener is attached using
	// jQuery, it is also removed with jQuery, that's why
	// we do the check for each directive instance and
	// store that check result on itself. This also allows
	// easier test coverage control by unsetting the global
	// jQuery variable in tests.
	this.hasjQuery = typeof jQuery === 'function';if(this.hasjQuery){jQuery(el).on('change',this.listener);if(!lazy){jQuery(el).on('input',this.listener);}}else {this.on('change',this.listener);if(!lazy){this.on('input',this.listener);}} // IE9 doesn't fire input event on backspace/del/cut
	if(!lazy && isIE9){this.on('cut',function(){nextTick(self.listener);});this.on('keyup',function(e){if(e.keyCode === 46 || e.keyCode === 8){self.listener();}});} // set initial value if present
	if(el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()){this.afterBind = this.listener;}},update:function update(value){this.el.value = _toString(value);},unbind:function unbind(){var el=this.el;if(this.hasjQuery){jQuery(el).off('change',this.listener);jQuery(el).off('input',this.listener);}}};var handlers={text:text$2,radio:radio,select:select,checkbox:checkbox};var model={priority:800,twoWay:true,handlers:handlers,params:['lazy','number','debounce'], /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */bind:function bind(){ // friendly warning...
	this.checkFilters();if(this.hasRead && !this.hasWrite){process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');}var el=this.el;var tag=el.tagName;var handler;if(tag === 'INPUT'){handler = handlers[el.type] || handlers.text;}else if(tag === 'SELECT'){handler = handlers.select;}else if(tag === 'TEXTAREA'){handler = handlers.text;}else {process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);return;}el.__v_model = this;handler.bind.call(this);this.update = handler.update;this._unbind = handler.unbind;}, /**
	   * Check read/write filter stats.
	   */checkFilters:function checkFilters(){var filters=this.filters;if(!filters)return;var i=filters.length;while(i--) {var filter=resolveAsset(this.vm.$options,'filters',filters[i].name);if(typeof filter === 'function' || filter.read){this.hasRead = true;}if(filter.write){this.hasWrite = true;}}},unbind:function unbind(){this.el.__v_model = null;this._unbind && this._unbind();}};var show={bind:function bind(){ // check else block
	var next=this.el.nextElementSibling;if(next && getAttr(next,'v-else') !== null){this.elseEl = next;}},update:function update(value){this.apply(this.el,value);if(this.elseEl){this.apply(this.elseEl,!value);}},apply:function apply(el,value){applyTransition(el,value?1:-1,function(){el.style.display = value?'':'none';},this.vm);}};var templateCache=new Cache(1000);var idSelectorCache=new Cache(1000);var map={efault:[0,'',''],legend:[1,'<fieldset>','</fieldset>'],tr:[2,'<table><tbody>','</tbody></table>'],col:[2,'<table><tbody></tbody><colgroup>','</colgroup></table>']};map.td = map.th = [3,'<table><tbody><tr>','</tr></tbody></table>'];map.option = map.optgroup = [1,'<select multiple="multiple">','</select>'];map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1,'<table>','</table>'];map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1,'<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">','</svg>']; /**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function isRealTemplate(node){return isTemplate(node) && node.content instanceof DocumentFragment;}var tagRE$1=/<([\w:]+)/;var entityRE=/&\w+;|&#\d+;|&#x[\dA-F]+;/; /**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */function stringToFragment(templateString,raw){ // try a cache hit first
	var hit=templateCache.get(templateString);if(hit){return hit;}var frag=document.createDocumentFragment();var tagMatch=templateString.match(tagRE$1);var entityMatch=entityRE.test(templateString);if(!tagMatch && !entityMatch){ // text only, return a single text node.
	frag.appendChild(document.createTextNode(templateString));}else {var tag=tagMatch && tagMatch[1];var wrap=map[tag] || map.efault;var depth=wrap[0];var prefix=wrap[1];var suffix=wrap[2];var node=document.createElement('div');if(!raw){templateString = templateString.trim();}node.innerHTML = prefix + templateString + suffix;while(depth--) {node = node.lastChild;}var child; /* eslint-disable no-cond-assign */while(child = node.firstChild) { /* eslint-enable no-cond-assign */frag.appendChild(child);}}templateCache.put(templateString,frag);return frag;} /**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */function nodeToFragment(node){ // if its a template tag and the browser supports it,
	// its content is already a document fragment.
	if(isRealTemplate(node)){trimNode(node.content);return node.content;} // script template
	if(node.tagName === 'SCRIPT'){return stringToFragment(node.textContent);} // normal node, clone it to avoid mutating the original
	var clonedNode=cloneNode(node);var frag=document.createDocumentFragment();var child; /* eslint-disable no-cond-assign */while(child = clonedNode.firstChild) { /* eslint-enable no-cond-assign */frag.appendChild(child);}trimNode(frag);return frag;} // Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate=(function(){ /* istanbul ignore else */if(inBrowser){var a=document.createElement('div');a.innerHTML = '<template>1</template>';return !a.cloneNode(true).firstChild.innerHTML;}else {return false;}})(); // Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug=(function(){ /* istanbul ignore else */if(inBrowser){var t=document.createElement('textarea');t.placeholder = 't';return t.cloneNode(true).value === 't';}else {return false;}})(); /**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */function cloneNode(node){if(!node.querySelectorAll){return node.cloneNode();}var res=node.cloneNode(true);var i,original,cloned; /* istanbul ignore if */if(hasBrokenTemplate){var tempClone=res;if(isRealTemplate(node)){node = node.content;tempClone = res.content;}original = node.querySelectorAll('template');if(original.length){cloned = tempClone.querySelectorAll('template');i = cloned.length;while(i--) {cloned[i].parentNode.replaceChild(cloneNode(original[i]),cloned[i]);}}} /* istanbul ignore if */if(hasTextareaCloneBug){if(node.tagName === 'TEXTAREA'){res.value = node.value;}else {original = node.querySelectorAll('textarea');if(original.length){cloned = res.querySelectorAll('textarea');i = cloned.length;while(i--) {cloned[i].value = original[i].value;}}}}return res;} /**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */function parseTemplate(template,shouldClone,raw){var node,frag; // if the template is already a document fragment,
	// do nothing
	if(template instanceof DocumentFragment){trimNode(template);return shouldClone?cloneNode(template):template;}if(typeof template === 'string'){ // id selector
	if(!raw && template.charAt(0) === '#'){ // id selector can be cached too
	frag = idSelectorCache.get(template);if(!frag){node = document.getElementById(template.slice(1));if(node){frag = nodeToFragment(node); // save selector to cache
	idSelectorCache.put(template,frag);}}}else { // normal string template
	frag = stringToFragment(template,raw);}}else if(template.nodeType){ // a direct node
	frag = nodeToFragment(template);}return frag && shouldClone?cloneNode(frag):frag;}var template=Object.freeze({cloneNode:cloneNode,parseTemplate:parseTemplate}); /**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */function Fragment(linker,vm,frag,host,scope,parentFrag){this.children = [];this.childFrags = [];this.vm = vm;this.scope = scope;this.inserted = false;this.parentFrag = parentFrag;if(parentFrag){parentFrag.childFrags.push(this);}this.unlink = linker(vm,frag,host,scope,this);var single=this.single = frag.childNodes.length === 1 &&  // do not go single mode if the only node is an anchor
	!frag.childNodes[0].__vue_anchor;if(single){this.node = frag.childNodes[0];this.before = singleBefore;this.remove = singleRemove;}else {this.node = createAnchor('fragment-start');this.end = createAnchor('fragment-end');this.frag = frag;prepend(this.node,frag);frag.appendChild(this.end);this.before = multiBefore;this.remove = multiRemove;}this.node.__vfrag__ = this;} /**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */Fragment.prototype.callHook = function(hook){var i,l;for(i = 0,l = this.children.length;i < l;i++) {hook(this.children[i]);}for(i = 0,l = this.childFrags.length;i < l;i++) {this.childFrags[i].callHook(hook);}}; /**
	 * Destroy the fragment.
	 */Fragment.prototype.destroy = function(){if(this.parentFrag){this.parentFrag.childFrags.$remove(this);}this.unlink();}; /**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */function singleBefore(target,withTransition){this.inserted = true;var method=withTransition !== false?beforeWithTransition:before;method(this.node,target,this.vm);if(inDoc(this.node)){this.callHook(attach);}} /**
	 * Remove fragment, single node version
	 */function singleRemove(){this.inserted = false;var shouldCallRemove=inDoc(this.node);var self=this;self.callHook(destroyChild);removeWithTransition(this.node,this.vm,function(){if(shouldCallRemove){self.callHook(detach);}self.destroy();});} /**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */function multiBefore(target,withTransition){this.inserted = true;var vm=this.vm;var method=withTransition !== false?beforeWithTransition:before;mapNodeRange(this.node,this.end,function(node){method(node,target,vm);});if(inDoc(this.node)){this.callHook(attach);}} /**
	 * Remove fragment, multi-nodes version
	 */function multiRemove(){this.inserted = false;var self=this;var shouldCallRemove=inDoc(this.node);self.callHook(destroyChild);removeNodeRange(this.node,this.end,this.vm,this.frag,function(){if(shouldCallRemove){self.callHook(detach);}self.destroy();});} /**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */function attach(child){if(!child._isAttached){child._callHook('attached');}} /**
	 * Call destroy for all contained instances,
	 * with remove:false and defer:true.
	 * Defer is necessary because we need to
	 * keep the children to call detach hooks
	 * on them.
	 *
	 * @param {Vue} child
	 */function destroyChild(child){child.$destroy(false,true);} /**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */function detach(child){if(child._isAttached){child._callHook('detached');}}var linkerCache=new Cache(5000); /**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */function FragmentFactory(vm,el){this.vm = vm;var template;var isString=typeof el === 'string';if(isString || isTemplate(el)){template = parseTemplate(el,true);}else {template = document.createDocumentFragment();template.appendChild(el);}this.template = template; // linker can be cached, but only for components
	var linker;var cid=vm.constructor.cid;if(cid > 0){var cacheId=cid + (isString?el:el.outerHTML);linker = linkerCache.get(cacheId);if(!linker){linker = compile(template,vm.$options,true);linkerCache.put(cacheId,linker);}}else {linker = compile(template,vm.$options,true);}this.linker = linker;} /**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */FragmentFactory.prototype.create = function(host,scope,parentFrag){var frag=cloneNode(this.template);return new Fragment(this.linker,this.vm,frag,host,scope,parentFrag);};var vIf={priority:2000,bind:function bind(){var el=this.el;if(!el.__vue__){ // check else block
	var next=el.nextElementSibling;if(next && getAttr(next,'v-else') !== null){remove(next);this.elseFactory = new FragmentFactory(this.vm,next);} // check main block
	this.anchor = createAnchor('v-if');replace(el,this.anchor);this.factory = new FragmentFactory(this.vm,el);}else {process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');this.invalid = true;}},update:function update(value){if(this.invalid)return;if(value){if(!this.frag){this.insert();}}else {this.remove();}},insert:function insert(){if(this.elseFrag){this.elseFrag.remove();this.elseFrag = null;}this.frag = this.factory.create(this._host,this._scope,this._frag);this.frag.before(this.anchor);},remove:function remove(){if(this.frag){this.frag.remove();this.frag = null;}if(this.elseFactory && !this.elseFrag){this.elseFrag = this.elseFactory.create(this._host,this._scope,this._frag);this.elseFrag.before(this.anchor);}},unbind:function unbind(){if(this.frag){this.frag.destroy();}}};var uid$1=0;var vFor={priority:2000,params:['track-by','stagger','enter-stagger','leave-stagger'],bind:function bind(){ // support "item in items" syntax
	var inMatch=this.expression.match(/(.*) in (.*)/);if(inMatch){var itMatch=inMatch[1].match(/\((.*),(.*)\)/);if(itMatch){this.iterator = itMatch[1].trim();this.alias = itMatch[2].trim();}else {this.alias = inMatch[1].trim();}this.expression = inMatch[2];}if(!this.alias){process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');return;} // uid as a cache identifier
	this.id = '__v-for__' + ++uid$1; // check if this is an option list,
	// so that we know if we need to update the <select>'s
	// v-model when the option list has changed.
	// because v-model has a lower priority than v-for,
	// the v-model is not bound here yet, so we have to
	// retrive it in the actual updateModel() function.
	var tag=this.el.tagName;this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT'; // setup anchor nodes
	this.start = createAnchor('v-for-start');this.end = createAnchor('v-for-end');replace(this.el,this.end);before(this.start,this.end); // cache
	this.cache = Object.create(null); // fragment factory
	this.factory = new FragmentFactory(this.vm,this.el);},update:function update(data){this.diff(data);this.updateRef();this.updateModel();}, /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */diff:function diff(data){ // check if the Array was converted from an Object
	var item=data[0];var convertedFromObject=this.fromObject = isObject(item) && hasOwn(item,'$key') && hasOwn(item,'$value');var trackByKey=this.params.trackBy;var oldFrags=this.frags;var frags=this.frags = new Array(data.length);var alias=this.alias;var iterator=this.iterator;var start=this.start;var end=this.end;var inDocument=inDoc(start);var init=!oldFrags;var i,l,frag,key,value,primitive; // First pass, go through the new Array and fill up
	// the new frags array. If a piece of data has a cached
	// instance for it, we reuse it. Otherwise build a new
	// instance.
	for(i = 0,l = data.length;i < l;i++) {item = data[i];key = convertedFromObject?item.$key:null;value = convertedFromObject?item.$value:item;primitive = !isObject(value);frag = !init && this.getCachedFrag(value,i,key);if(frag){ // reusable fragment
	frag.reused = true; // update $index
	frag.scope.$index = i; // update $key
	if(key){frag.scope.$key = key;} // update iterator
	if(iterator){frag.scope[iterator] = key !== null?key:i;} // update data for track-by, object repeat &
	// primitive values.
	if(trackByKey || convertedFromObject || primitive){frag.scope[alias] = value;}}else { // new isntance
	frag = this.create(value,alias,i,key);frag.fresh = !init;}frags[i] = frag;if(init){frag.before(end);}} // we're done for the initial render.
	if(init){return;} // Second pass, go through the old fragments and
	// destroy those who are not reused (and remove them
	// from cache)
	var removalIndex=0;var totalRemoved=oldFrags.length - frags.length;for(i = 0,l = oldFrags.length;i < l;i++) {frag = oldFrags[i];if(!frag.reused){this.deleteCachedFrag(frag);this.remove(frag,removalIndex++,totalRemoved,inDocument);}} // Final pass, move/insert new fragments into the
	// right place.
	var targetPrev,prevEl,currentPrev;var insertionIndex=0;for(i = 0,l = frags.length;i < l;i++) {frag = frags[i]; // this is the frag that we should be after
	targetPrev = frags[i - 1];prevEl = targetPrev?targetPrev.staggerCb?targetPrev.staggerAnchor:targetPrev.end || targetPrev.node:start;if(frag.reused && !frag.staggerCb){currentPrev = findPrevFrag(frag,start,this.id);if(currentPrev !== targetPrev && (!currentPrev ||  // optimization for moving a single item.
	// thanks to suggestions by @livoras in #1807
	findPrevFrag(currentPrev,start,this.id) !== targetPrev)){this.move(frag,prevEl);}}else { // new instance, or still in stagger.
	// insert with updated stagger index.
	this.insert(frag,insertionIndex++,prevEl,inDocument);}frag.reused = frag.fresh = false;}}, /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */create:function create(value,alias,index,key){var host=this._host; // create iteration scope
	var parentScope=this._scope || this.vm;var scope=Object.create(parentScope); // ref holder for the scope
	scope.$refs = Object.create(parentScope.$refs);scope.$els = Object.create(parentScope.$els); // make sure point $parent to parent scope
	scope.$parent = parentScope; // for two-way binding on alias
	scope.$forContext = this; // define scope properties
	defineReactive(scope,alias,value);defineReactive(scope,'$index',index);if(key){defineReactive(scope,'$key',key);}else if(scope.$key){ // avoid accidental fallback
	def(scope,'$key',null);}if(this.iterator){defineReactive(scope,this.iterator,key !== null?key:index);}var frag=this.factory.create(host,scope,this._frag);frag.forId = this.id;this.cacheFrag(value,frag,index,key);return frag;}, /**
	   * Update the v-ref on owner vm.
	   */updateRef:function updateRef(){var ref=this.descriptor.ref;if(!ref)return;var hash=(this._scope || this.vm).$refs;var refs;if(!this.fromObject){refs = this.frags.map(findVmFromFrag);}else {refs = {};this.frags.forEach(function(frag){refs[frag.scope.$key] = findVmFromFrag(frag);});}hash[ref] = refs;}, /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */updateModel:function updateModel(){if(this.isOption){var parent=this.start.parentNode;var model=parent && parent.__v_model;if(model){model.forceUpdate();}}}, /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */insert:function insert(frag,index,prevEl,inDocument){if(frag.staggerCb){frag.staggerCb.cancel();frag.staggerCb = null;}var staggerAmount=this.getStagger(frag,index,null,'enter');if(inDocument && staggerAmount){ // create an anchor and insert it synchronously,
	// so that we can resolve the correct order without
	// worrying about some elements not inserted yet
	var anchor=frag.staggerAnchor;if(!anchor){anchor = frag.staggerAnchor = createAnchor('stagger-anchor');anchor.__vfrag__ = frag;}after(anchor,prevEl);var op=frag.staggerCb = cancellable(function(){frag.staggerCb = null;frag.before(anchor);remove(anchor);});setTimeout(op,staggerAmount);}else {frag.before(prevEl.nextSibling);}}, /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */remove:function remove(frag,index,total,inDocument){if(frag.staggerCb){frag.staggerCb.cancel();frag.staggerCb = null; // it's not possible for the same frag to be removed
	// twice, so if we have a pending stagger callback,
	// it means this frag is queued for enter but removed
	// before its transition started. Since it is already
	// destroyed, we can just leave it in detached state.
	return;}var staggerAmount=this.getStagger(frag,index,total,'leave');if(inDocument && staggerAmount){var op=frag.staggerCb = cancellable(function(){frag.staggerCb = null;frag.remove();});setTimeout(op,staggerAmount);}else {frag.remove();}}, /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */move:function move(frag,prevEl){frag.before(prevEl.nextSibling,false);}, /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */cacheFrag:function cacheFrag(value,frag,index,key){var trackByKey=this.params.trackBy;var cache=this.cache;var primitive=!isObject(value);var id;if(key || trackByKey || primitive){id = trackByKey?trackByKey === '$index'?index:value[trackByKey]:key || value;if(!cache[id]){cache[id] = frag;}else if(trackByKey !== '$index'){process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);}}else {id = this.id;if(hasOwn(value,id)){if(value[id] === null){value[id] = frag;}else {process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);}}else {def(value,id,frag);}}frag.raw = value;}, /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */getCachedFrag:function getCachedFrag(value,index,key){var trackByKey=this.params.trackBy;var primitive=!isObject(value);var frag;if(key || trackByKey || primitive){var id=trackByKey?trackByKey === '$index'?index:value[trackByKey]:key || value;frag = this.cache[id];}else {frag = value[this.id];}if(frag && (frag.reused || frag.fresh)){process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);}return frag;}, /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */deleteCachedFrag:function deleteCachedFrag(frag){var value=frag.raw;var trackByKey=this.params.trackBy;var scope=frag.scope;var index=scope.$index; // fix #948: avoid accidentally fall through to
	// a parent repeater which happens to have $key.
	var key=hasOwn(scope,'$key') && scope.$key;var primitive=!isObject(value);if(trackByKey || key || primitive){var id=trackByKey?trackByKey === '$index'?index:value[trackByKey]:key || value;this.cache[id] = null;}else {value[this.id] = null;frag.raw = null;}}, /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */getStagger:function getStagger(frag,index,total,type){type = type + 'Stagger';var trans=frag.node.__v_trans;var hooks=trans && trans.hooks;var hook=hooks && (hooks[type] || hooks.stagger);return hook?hook.call(frag,index,total):index * parseInt(this.params[type] || this.params.stagger,10);}, /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */_preProcess:function _preProcess(value){ // regardless of type, store the un-filtered raw value.
	this.rawValue = value;return value;}, /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */_postProcess:function _postProcess(value){if(isArray(value)){return value;}else if(isPlainObject(value)){ // convert plain object to array.
	var keys=Object.keys(value);var i=keys.length;var res=new Array(i);var key;while(i--) {key = keys[i];res[i] = {$key:key,$value:value[key]};}return res;}else {if(typeof value === 'number'){value = range(value);}return value || [];}},unbind:function unbind(){if(this.descriptor.ref){(this._scope || this.vm).$refs[this.descriptor.ref] = null;}if(this.frags){var i=this.frags.length;var frag;while(i--) {frag = this.frags[i];this.deleteCachedFrag(frag);frag.destroy();}}}}; /**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */function findPrevFrag(frag,anchor,id){var el=frag.node.previousSibling; /* istanbul ignore if */if(!el)return;frag = el.__vfrag__;while((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {el = el.previousSibling; /* istanbul ignore if */if(!el)return;frag = el.__vfrag__;}return frag;} /**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */function findVmFromFrag(frag){var node=frag.node; // handle multi-node frag
	if(frag.end){while(!node.__vue__ && node !== frag.end && node.nextSibling) {node = node.nextSibling;}}return node.__vue__;} /**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */function range(n){var i=-1;var ret=new Array(n);while(++i < n) {ret[i] = i;}return ret;}if(process.env.NODE_ENV !== 'production'){vFor.warnDuplicate = function(value){warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');};}var html={bind:function bind(){ // a comment node means this is a binding for
	// {{{ inline unescaped html }}}
	if(this.el.nodeType === 8){ // hold nodes
	this.nodes = []; // replace the placeholder with proper anchor
	this.anchor = createAnchor('v-html');replace(this.el,this.anchor);}},update:function update(value){value = _toString(value);if(this.nodes){this.swap(value);}else {this.el.innerHTML = value;}},swap:function swap(value){ // remove old nodes
	var i=this.nodes.length;while(i--) {remove(this.nodes[i]);} // convert new value to a fragment
	// do not attempt to retrieve from id selector
	var frag=parseTemplate(value,true,true); // save a reference to these nodes so we can remove later
	this.nodes = toArray(frag.childNodes);before(frag,this.anchor);}};var text={bind:function bind(){this.attr = this.el.nodeType === 3?'data':'textContent';},update:function update(value){this.el[this.attr] = _toString(value);}}; // must export plain object
	var publicDirectives={text:text,html:html,'for':vFor,'if':vIf,show:show,model:model,on:on,bind:bind,el:el,ref:ref,cloak:cloak};var queue$1=[];var queued=false; /**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */function pushJob(job){queue$1.push(job);if(!queued){queued = true;nextTick(flush);}} /**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */function flush(){ // Force layout
	var f=document.documentElement.offsetHeight;for(var i=0;i < queue$1.length;i++) {queue$1[i]();}queue$1 = [];queued = false; // dummy return, so js linters don't complain about
	// unused variable f
	return f;}var TYPE_TRANSITION=1;var TYPE_ANIMATION=2;var transDurationProp=transitionProp + 'Duration';var animDurationProp=animationProp + 'Duration'; /**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */function Transition(el,id,hooks,vm){this.id = id;this.el = el;this.enterClass = id + '-enter';this.leaveClass = id + '-leave';this.hooks = hooks;this.vm = vm; // async state
	this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;this.justEntered = false;this.entered = this.left = false;this.typeCache = {}; // bind
	var self=this;['enterNextTick','enterDone','leaveNextTick','leaveDone'].forEach(function(m){self[m] = bind$1(self[m],self);});}var p$1=Transition.prototype; /**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */p$1.enter = function(op,cb){this.cancelPending();this.callHook('beforeEnter');this.cb = cb;addClass(this.el,this.enterClass);op();this.entered = false;this.callHookWithCb('enter');if(this.entered){return; // user called done synchronously.
	}this.cancel = this.hooks && this.hooks.enterCancelled;pushJob(this.enterNextTick);}; /**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */p$1.enterNextTick = function(){ // Important hack:
	// in Chrome, if a just-entered element is applied the
	// leave class while its interpolated property still has
	// a very small value (within one frame), Chrome will
	// skip the leave transition entirely and not firing the
	// transtionend event. Therefore we need to protected
	// against such cases using a one-frame timeout.
	this.justEntered = true;var self=this;setTimeout(function(){self.justEntered = false;},17);var enterDone=this.enterDone;var type=this.getCssTransitionType(this.enterClass);if(!this.pendingJsCb){if(type === TYPE_TRANSITION){ // trigger transition by removing enter class now
	removeClass(this.el,this.enterClass);this.setupCssCb(transitionEndEvent,enterDone);}else if(type === TYPE_ANIMATION){this.setupCssCb(animationEndEvent,enterDone);}else {enterDone();}}else if(type === TYPE_TRANSITION){removeClass(this.el,this.enterClass);}}; /**
	 * The "cleanup" phase of an entering transition.
	 */p$1.enterDone = function(){this.entered = true;this.cancel = this.pendingJsCb = null;removeClass(this.el,this.enterClass);this.callHook('afterEnter');if(this.cb)this.cb();}; /**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */p$1.leave = function(op,cb){this.cancelPending();this.callHook('beforeLeave');this.op = op;this.cb = cb;addClass(this.el,this.leaveClass);this.left = false;this.callHookWithCb('leave');if(this.left){return; // user called done synchronously.
	}this.cancel = this.hooks && this.hooks.leaveCancelled; // only need to handle leaveDone if
	// 1. the transition is already done (synchronously called
	//    by the user, which causes this.op set to null)
	// 2. there's no explicit js callback
	if(this.op && !this.pendingJsCb){ // if a CSS transition leaves immediately after enter,
	// the transitionend event never fires. therefore we
	// detect such cases and end the leave immediately.
	if(this.justEntered){this.leaveDone();}else {pushJob(this.leaveNextTick);}}}; /**
	 * The "nextTick" phase of a leaving transition.
	 */p$1.leaveNextTick = function(){var type=this.getCssTransitionType(this.leaveClass);if(type){var event=type === TYPE_TRANSITION?transitionEndEvent:animationEndEvent;this.setupCssCb(event,this.leaveDone);}else {this.leaveDone();}}; /**
	 * The "cleanup" phase of a leaving transition.
	 */p$1.leaveDone = function(){this.left = true;this.cancel = this.pendingJsCb = null;this.op();removeClass(this.el,this.leaveClass);this.callHook('afterLeave');if(this.cb)this.cb();this.op = null;}; /**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */p$1.cancelPending = function(){this.op = this.cb = null;var hasPending=false;if(this.pendingCssCb){hasPending = true;off(this.el,this.pendingCssEvent,this.pendingCssCb);this.pendingCssEvent = this.pendingCssCb = null;}if(this.pendingJsCb){hasPending = true;this.pendingJsCb.cancel();this.pendingJsCb = null;}if(hasPending){removeClass(this.el,this.enterClass);removeClass(this.el,this.leaveClass);}if(this.cancel){this.cancel.call(this.vm,this.el);this.cancel = null;}}; /**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */p$1.callHook = function(type){if(this.hooks && this.hooks[type]){this.hooks[type].call(this.vm,this.el);}}; /**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */p$1.callHookWithCb = function(type){var hook=this.hooks && this.hooks[type];if(hook){if(hook.length > 1){this.pendingJsCb = cancellable(this[type + 'Done']);}hook.call(this.vm,this.el,this.pendingJsCb);}}; /**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */p$1.getCssTransitionType = function(className){ /* istanbul ignore if */if(!transitionEndEvent ||  // skip CSS transitions if page is not visible -
	// this solves the issue of transitionend events not
	// firing until the page is visible again.
	// pageVisibility API is supported in IE10+, same as
	// CSS transitions.
	document.hidden ||  // explicit js-only transition
	this.hooks && this.hooks.css === false ||  // element is hidden
	isHidden(this.el)){return;}var type=this.typeCache[className];if(type)return type;var inlineStyles=this.el.style;var computedStyles=window.getComputedStyle(this.el);var transDuration=inlineStyles[transDurationProp] || computedStyles[transDurationProp];if(transDuration && transDuration !== '0s'){type = TYPE_TRANSITION;}else {var animDuration=inlineStyles[animDurationProp] || computedStyles[animDurationProp];if(animDuration && animDuration !== '0s'){type = TYPE_ANIMATION;}}if(type){this.typeCache[className] = type;}return type;}; /**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */p$1.setupCssCb = function(event,cb){this.pendingCssEvent = event;var self=this;var el=this.el;var onEnd=this.pendingCssCb = function(e){if(e.target === el){off(el,event,onEnd);self.pendingCssEvent = self.pendingCssCb = null;if(!self.pendingJsCb && cb){cb();}}};on$1(el,event,onEnd);}; /**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */function isHidden(el){return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);}var transition={priority:1100,update:function update(id,oldId){var el=this.el; // resolve on owner vm
	var hooks=resolveAsset(this.vm.$options,'transitions',id);id = id || 'v'; // apply on closest vm
	el.__v_trans = new Transition(el,id,hooks,this.el.__vue__ || this.vm);if(oldId){removeClass(el,oldId + '-transition');}addClass(el,id + '-transition');}};var bindingModes=config._propBindingModes;var propDef={bind:function bind(){var child=this.vm;var parent=child._context; // passed in from compiler directly
	var prop=this.descriptor.prop;var childKey=prop.path;var parentKey=prop.parentPath;var twoWay=prop.mode === bindingModes.TWO_WAY;var parentWatcher=this.parentWatcher = new Watcher(parent,parentKey,function(val){if(assertProp(prop,val)){child[childKey] = val;}},{twoWay:twoWay,filters:prop.filters, // important: props need to be observed on the
	// v-for scope if present
	scope:this._scope}); // set the child initial value.
	initProp(child,prop,parentWatcher.value); // setup two-way binding
	if(twoWay){ // important: defer the child watcher creation until
	// the created hook (after data observation)
	var self=this;child.$once('hook:created',function(){self.childWatcher = new Watcher(child,childKey,function(val){parentWatcher.set(val);},{ // ensure sync upward before parent sync down.
	// this is necessary in cases e.g. the child
	// mutates a prop array, then replaces it. (#1683)
	sync:true});});}},unbind:function unbind(){this.parentWatcher.teardown();if(this.childWatcher){this.childWatcher.teardown();}}};var component={priority:1500,params:['keep-alive','transition-mode','inline-template'], /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */bind:function bind(){if(!this.el.__vue__){ // keep-alive cache
	this.keepAlive = this.params.keepAlive;if(this.keepAlive){this.cache = {};} // check inline-template
	if(this.params.inlineTemplate){ // extract inline template as a DocumentFragment
	this.inlineTemplate = extractContent(this.el,true);} // component resolution related state
	this.pendingComponentCb = this.Component = null; // transition related state
	this.pendingRemovals = 0;this.pendingRemovalCb = null; // create a ref anchor
	this.anchor = createAnchor('v-component');replace(this.el,this.anchor); // remove is attribute.
	// this is removed during compilation, but because compilation is
	// cached, when the component is used elsewhere this attribute
	// will remain at link time.
	this.el.removeAttribute('is'); // remove ref, same as above
	if(this.descriptor.ref){this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));} // if static, build right now.
	if(this.literal){this.setComponent(this.expression);}}else {process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);}}, /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */update:function update(value){if(!this.literal){this.setComponent(value);}}, /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */setComponent:function setComponent(value,cb){this.invalidatePending();if(!value){ // just remove current
	this.unbuild(true);this.remove(this.childVM,cb);this.childVM = null;}else {var self=this;this.resolveComponent(value,function(){self.mountComponent(cb);});}}, /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */resolveComponent:function resolveComponent(id,cb){var self=this;this.pendingComponentCb = cancellable(function(Component){self.ComponentName = Component.options.name || id;self.Component = Component;cb();});this.vm._resolveComponent(id,this.pendingComponentCb);}, /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */mountComponent:function mountComponent(cb){ // actual mount
	this.unbuild(true);var self=this;var activateHook=this.Component.options.activate;var cached=this.getCached();var newComponent=this.build();if(activateHook && !cached){this.waitingFor = newComponent;activateHook.call(newComponent,function(){self.waitingFor = null;self.transition(newComponent,cb);});}else { // update ref for kept-alive component
	if(cached){newComponent._updateRef();}this.transition(newComponent,cb);}}, /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */invalidatePending:function invalidatePending(){if(this.pendingComponentCb){this.pendingComponentCb.cancel();this.pendingComponentCb = null;}}, /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */build:function build(extraOptions){var cached=this.getCached();if(cached){return cached;}if(this.Component){ // default options
	var options={name:this.ComponentName,el:cloneNode(this.el),template:this.inlineTemplate, // make sure to add the child with correct parent
	// if this is a transcluded component, its parent
	// should be the transclusion host.
	parent:this._host || this.vm, // if no inline-template, then the compiled
	// linker can be cached for better performance.
	_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:true,_isRouterView:this._isRouterView, // if this is a transcluded component, context
	// will be the common parent vm of this instance
	// and its host.
	_context:this.vm, // if this is inside an inline v-for, the scope
	// will be the intermediate scope created for this
	// repeat fragment. this is used for linking props
	// and container directives.
	_scope:this._scope, // pass in the owner fragment of this component.
	// this is necessary so that the fragment can keep
	// track of its contained components in order to
	// call attach/detach hooks for them.
	_frag:this._frag}; // extra options
	// in 1.0.0 this is used by vue-router only
	/* istanbul ignore if */if(extraOptions){extend(options,extraOptions);}var child=new this.Component(options);if(this.keepAlive){this.cache[this.Component.cid] = child;} /* istanbul ignore if */if(process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment){warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);}return child;}}, /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */getCached:function getCached(){return this.keepAlive && this.cache[this.Component.cid];}, /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */unbuild:function unbuild(defer){if(this.waitingFor){this.waitingFor.$destroy();this.waitingFor = null;}var child=this.childVM;if(!child || this.keepAlive){if(child){ // remove ref
	child._updateRef(true);}return;} // the sole purpose of `deferCleanup` is so that we can
	// "deactivate" the vm right now and perform DOM removal
	// later.
	child.$destroy(false,defer);}, /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */remove:function remove(child,cb){var keepAlive=this.keepAlive;if(child){ // we may have a component switch when a previous
	// component is still being transitioned out.
	// we want to trigger only one lastest insertion cb
	// when the existing transition finishes. (#1119)
	this.pendingRemovals++;this.pendingRemovalCb = cb;var self=this;child.$remove(function(){self.pendingRemovals--;if(!keepAlive)child._cleanup();if(!self.pendingRemovals && self.pendingRemovalCb){self.pendingRemovalCb();self.pendingRemovalCb = null;}});}else if(cb){cb();}}, /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */transition:function transition(target,cb){var self=this;var current=this.childVM; // for devtool inspection
	if(process.env.NODE_ENV !== 'production'){if(current)current._inactive = true;target._inactive = false;}this.childVM = target;switch(self.params.transitionMode){case 'in-out':target.$before(self.anchor,function(){self.remove(current,cb);});break;case 'out-in':self.remove(current,function(){target.$before(self.anchor,cb);});break;default:self.remove(current);target.$before(self.anchor,cb);}}, /**
	   * Unbind.
	   */unbind:function unbind(){this.invalidatePending(); // Do not defer cleanup when unbinding
	this.unbuild(); // destroy all keep-alive cached instances
	if(this.cache){for(var key in this.cache) {this.cache[key].$destroy();}this.cache = null;}}};var vClass={deep:true,update:function update(value){if(value && typeof value === 'string'){this.handleObject(stringToObject(value));}else if(isPlainObject(value)){this.handleObject(value);}else if(isArray(value)){this.handleArray(value);}else {this.cleanup();}},handleObject:function handleObject(value){this.cleanup(value);var keys=this.prevKeys = Object.keys(value);for(var i=0,l=keys.length;i < l;i++) {var key=keys[i];if(value[key]){addClass(this.el,key);}else {removeClass(this.el,key);}}},handleArray:function handleArray(value){this.cleanup(value);for(var i=0,l=value.length;i < l;i++) {if(value[i]){addClass(this.el,value[i]);}}this.prevKeys = value.slice();},cleanup:function cleanup(value){if(this.prevKeys){var i=this.prevKeys.length;while(i--) {var key=this.prevKeys[i];if(key && (!value || !contains$1(value,key))){removeClass(this.el,key);}}}}};function stringToObject(value){var res={};var keys=value.trim().split(/\s+/);var i=keys.length;while(i--) {res[keys[i]] = true;}return res;}function contains$1(value,key){return isArray(value)?value.indexOf(key) > -1:hasOwn(value,key);}var internalDirectives={style:style,'class':vClass,component:component,prop:propDef,transition:transition};var propBindingModes=config._propBindingModes;var empty={}; // regexes
	var identRE=/^[$_a-zA-Z]+[\w$]*$/;var settablePathRE=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/; /**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */function compileProps(el,propOptions){var props=[];var names=Object.keys(propOptions);var i=names.length;var options,name,attr,value,path,parsed,prop;while(i--) {name = names[i];options = propOptions[name] || empty;if(process.env.NODE_ENV !== 'production' && name === '$data'){warn('Do not use $data as prop.');continue;} // props could contain dashes, which will be
	// interpreted as minus calculations by the parser
	// so we need to camelize the path here
	path = camelize(name);if(!identRE.test(path)){process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');continue;}prop = {name:name,path:path,options:options,mode:propBindingModes.ONE_WAY,raw:null};attr = hyphenate(name); // first check dynamic version
	if((value = getBindAttr(el,attr)) === null){if((value = getBindAttr(el,attr + '.sync')) !== null){prop.mode = propBindingModes.TWO_WAY;}else if((value = getBindAttr(el,attr + '.once')) !== null){prop.mode = propBindingModes.ONE_TIME;}}if(value !== null){ // has dynamic binding!
	prop.raw = value;parsed = parseDirective(value);value = parsed.expression;prop.filters = parsed.filters; // check binding type
	if(isLiteral(value)){ // for expressions containing literal numbers and
	// booleans, there's no need to setup a prop binding,
	// so we can optimize them as a one-time set.
	prop.optimizedLiteral = true;}else {prop.dynamic = true; // check non-settable path for two-way bindings
	if(process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)){prop.mode = propBindingModes.ONE_WAY;warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);}}prop.parentPath = value; // warn required two-way
	if(process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY){warn('Prop "' + name + '" expects a two-way binding type.');}}else if((value = getAttr(el,attr)) !== null){ // has literal binding!
	prop.raw = value;}else if(options.required){ // warn missing required
	process.env.NODE_ENV !== 'production' && warn('Missing required prop: ' + name);} // push prop
	props.push(prop);}return makePropsLinkFn(props);} /**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */function makePropsLinkFn(props){return function propsLinkFn(vm,scope){ // store resolved props info
	vm._props = {};var i=props.length;var prop,path,options,value,raw;while(i--) {prop = props[i];raw = prop.raw;path = prop.path;options = prop.options;vm._props[path] = prop;if(raw === null){ // initialize absent prop
	initProp(vm,prop,getDefault(vm,options));}else if(prop.dynamic){ // dynamic prop
	if(vm._context){if(prop.mode === propBindingModes.ONE_TIME){ // one time binding
	value = (scope || vm._context).$get(prop.parentPath);initProp(vm,prop,value);}else { // dynamic binding
	vm._bindDir({name:'prop',def:propDef,prop:prop},null,null,scope); // el, host, scope
	}}else {process.env.NODE_ENV !== 'production' && warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + raw + '"');}}else if(prop.optimizedLiteral){ // optimized literal, cast it and just set once
	var stripped=stripQuotes(raw);value = stripped === raw?toBoolean(toNumber(raw)):stripped;initProp(vm,prop,value);}else { // string literal, but we need to cater for
	// Boolean props with no value
	value = options.type === Boolean && raw === ''?true:raw;initProp(vm,prop,value);}}};} /**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */function getDefault(vm,options){ // no default, return undefined
	if(!hasOwn(options,'default')){ // absent boolean value defaults to false
	return options.type === Boolean?false:undefined;}var def=options['default']; // warn against non-factory defaults for Object & Array
	if(isObject(def)){process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');} // call factory function for non-Function types
	return typeof def === 'function' && options.type !== Function?def.call(vm):def;} // special binding prefixes
	var bindRE=/^v-bind:|^:/;var onRE=/^v-on:|^@/;var argRE=/:(.*)$/;var modifierRE=/\.[^\.]+/g;var transitionRE=/^(v-bind:|:)?transition$/; // terminal directives
	var terminalDirectives=['for','if']; // default directive priority
	var DEFAULT_PRIORITY=1000; /**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */function compile(el,options,partial){ // link function for the node itself.
	var nodeLinkFn=partial || !options._asComponent?compileNode(el,options):null; // link function for the childNodes
	var childLinkFn=!(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes()?compileNodeList(el.childNodes,options):null; /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */return function compositeLinkFn(vm,el,host,scope,frag){ // cache childNodes before linking parent, fix #657
	var childNodes=toArray(el.childNodes); // link
	var dirs=linkAndCapture(function compositeLinkCapturer(){if(nodeLinkFn)nodeLinkFn(vm,el,host,scope,frag);if(childLinkFn)childLinkFn(vm,childNodes,host,scope,frag);},vm);return makeUnlinkFn(vm,dirs);};} /**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */function linkAndCapture(linker,vm){var originalDirCount=vm._directives.length;linker();var dirs=vm._directives.slice(originalDirCount);dirs.sort(directiveComparator);for(var i=0,l=dirs.length;i < l;i++) {dirs[i]._bind();}return dirs;} /**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */function directiveComparator(a,b){a = a.descriptor.def.priority || DEFAULT_PRIORITY;b = b.descriptor.def.priority || DEFAULT_PRIORITY;return a > b?-1:a === b?0:1;} /**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */function makeUnlinkFn(vm,dirs,context,contextDirs){return function unlink(destroying){teardownDirs(vm,dirs,destroying);if(context && contextDirs){teardownDirs(context,contextDirs);}};} /**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */function teardownDirs(vm,dirs,destroying){var i=dirs.length;while(i--) {dirs[i]._teardown();if(!destroying){vm._directives.$remove(dirs[i]);}}} /**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */function compileAndLinkProps(vm,el,props,scope){var propsLinkFn=compileProps(el,props);var propDirs=linkAndCapture(function(){propsLinkFn(vm,scope);},vm);return makeUnlinkFn(vm,propDirs);} /**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */function compileRoot(el,options,contextOptions){var containerAttrs=options._containerAttrs;var replacerAttrs=options._replacerAttrs;var contextLinkFn,replacerLinkFn; // only need to compile other attributes for
	// non-fragment instances
	if(el.nodeType !== 11){ // for components, container and replacer need to be
	// compiled separately and linked in different scopes.
	if(options._asComponent){ // 2. container attributes
	if(containerAttrs && contextOptions){contextLinkFn = compileDirectives(containerAttrs,contextOptions);}if(replacerAttrs){ // 3. replacer attributes
	replacerLinkFn = compileDirectives(replacerAttrs,options);}}else { // non-component, just compile as a normal element.
	replacerLinkFn = compileDirectives(el.attributes,options);}}else if(process.env.NODE_ENV !== 'production' && containerAttrs){ // warn container directives for fragment instances
	var names=containerAttrs.filter(function(attr){ // allow vue-loader/vueify scoped css attributes
	return attr.name.indexOf('_v-') < 0 &&  // allow event listeners
	!onRE.test(attr.name) &&  // allow slots
	attr.name !== 'slot';}).map(function(attr){return '"' + attr.name + '"';});if(names.length){var plural=names.length > 1;warn('Attribute' + (plural?'s ':' ') + names.join(', ') + (plural?' are':' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');}}return function rootLinkFn(vm,el,scope){ // link context scope dirs
	var context=vm._context;var contextDirs;if(context && contextLinkFn){contextDirs = linkAndCapture(function(){contextLinkFn(context,el,null,scope);},context);} // link self
	var selfDirs=linkAndCapture(function(){if(replacerLinkFn)replacerLinkFn(vm,el);},vm); // return the unlink function that tearsdown context
	// container directives.
	return makeUnlinkFn(vm,selfDirs,context,contextDirs);};} /**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */function compileNode(node,options){var type=node.nodeType;if(type === 1 && node.tagName !== 'SCRIPT'){return compileElement(node,options);}else if(type === 3 && node.data.trim()){return compileTextNode(node,options);}else {return null;}} /**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */function compileElement(el,options){ // preprocess textareas.
	// textarea treats its text content as the initial value.
	// just bind it as an attr directive for value.
	if(el.tagName === 'TEXTAREA'){var tokens=parseText(el.value);if(tokens){el.setAttribute(':value',tokensToExp(tokens));el.value = '';}}var linkFn;var hasAttrs=el.hasAttributes(); // check terminal directives (for & if)
	if(hasAttrs){linkFn = checkTerminalDirectives(el,options);} // check element directives
	if(!linkFn){linkFn = checkElementDirectives(el,options);} // check component
	if(!linkFn){linkFn = checkComponent(el,options);} // normal directives
	if(!linkFn && hasAttrs){linkFn = compileDirectives(el.attributes,options);}return linkFn;} /**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */function compileTextNode(node,options){ // skip marked text nodes
	if(node._skip){return removeText;}var tokens=parseText(node.wholeText);if(!tokens){return null;} // mark adjacent text nodes as skipped,
	// because we are using node.wholeText to compile
	// all adjacent text nodes together. This fixes
	// issues in IE where sometimes it splits up a single
	// text node into multiple ones.
	var next=node.nextSibling;while(next && next.nodeType === 3) {next._skip = true;next = next.nextSibling;}var frag=document.createDocumentFragment();var el,token;for(var i=0,l=tokens.length;i < l;i++) {token = tokens[i];el = token.tag?processTextToken(token,options):document.createTextNode(token.value);frag.appendChild(el);}return makeTextNodeLinkFn(tokens,frag,options);} /**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */function removeText(vm,node){remove(node);} /**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */function processTextToken(token,options){var el;if(token.oneTime){el = document.createTextNode(token.value);}else {if(token.html){el = document.createComment('v-html');setTokenType('html');}else { // IE will clean up empty textNodes during
	// frag.cloneNode(true), so we have to give it
	// something here...
	el = document.createTextNode(' ');setTokenType('text');}}function setTokenType(type){if(token.descriptor)return;var parsed=parseDirective(token.value);token.descriptor = {name:type,def:publicDirectives[type],expression:parsed.expression,filters:parsed.filters};}return el;} /**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */function makeTextNodeLinkFn(tokens,frag){return function textNodeLinkFn(vm,el,host,scope){var fragClone=frag.cloneNode(true);var childNodes=toArray(fragClone.childNodes);var token,value,node;for(var i=0,l=tokens.length;i < l;i++) {token = tokens[i];value = token.value;if(token.tag){node = childNodes[i];if(token.oneTime){value = (scope || vm).$eval(value);if(token.html){replace(node,parseTemplate(value,true));}else {node.data = value;}}else {vm._bindDir(token.descriptor,node,host,scope);}}}replace(el,fragClone);};} /**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */function compileNodeList(nodeList,options){var linkFns=[];var nodeLinkFn,childLinkFn,node;for(var i=0,l=nodeList.length;i < l;i++) {node = nodeList[i];nodeLinkFn = compileNode(node,options);childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes()?compileNodeList(node.childNodes,options):null;linkFns.push(nodeLinkFn,childLinkFn);}return linkFns.length?makeChildLinkFn(linkFns):null;} /**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */function makeChildLinkFn(linkFns){return function childLinkFn(vm,nodes,host,scope,frag){var node,nodeLinkFn,childrenLinkFn;for(var i=0,n=0,l=linkFns.length;i < l;n++) {node = nodes[n];nodeLinkFn = linkFns[i++];childrenLinkFn = linkFns[i++]; // cache childNodes before linking parent, fix #657
	var childNodes=toArray(node.childNodes);if(nodeLinkFn){nodeLinkFn(vm,node,host,scope,frag);}if(childrenLinkFn){childrenLinkFn(vm,childNodes,host,scope,frag);}}};} /**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */function checkElementDirectives(el,options){var tag=el.tagName.toLowerCase();if(commonTagRE.test(tag))return;var def=resolveAsset(options,'elementDirectives',tag);if(def){return makeTerminalNodeLinkFn(el,tag,'',options,def);}} /**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */function checkComponent(el,options){var component=checkComponentAttr(el,options);if(component){var ref=findRef(el);var descriptor={name:'component',ref:ref,expression:component.id,def:internalDirectives.component,modifiers:{literal:!component.dynamic}};var componentLinkFn=function componentLinkFn(vm,el,host,scope,frag){if(ref){defineReactive((scope || vm).$refs,ref,null);}vm._bindDir(descriptor,el,host,scope,frag);};componentLinkFn.terminal = true;return componentLinkFn;}} /**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */function checkTerminalDirectives(el,options){ // skip v-pre
	if(getAttr(el,'v-pre') !== null){return skip;} // skip v-else block, but only if following v-if
	if(el.hasAttribute('v-else')){var prev=el.previousElementSibling;if(prev && prev.hasAttribute('v-if')){return skip;}}var value,dirName;for(var i=0,l=terminalDirectives.length;i < l;i++) {dirName = terminalDirectives[i]; /* eslint-disable no-cond-assign */if(value = el.getAttribute('v-' + dirName)){return makeTerminalNodeLinkFn(el,dirName,value,options);} /* eslint-enable no-cond-assign */}}function skip(){}skip.terminal = true; /**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */function makeTerminalNodeLinkFn(el,dirName,value,options,def){var parsed=parseDirective(value);var descriptor={name:dirName,expression:parsed.expression,filters:parsed.filters,raw:value, // either an element directive, or if/for
	def:def || publicDirectives[dirName]}; // check ref for v-for and router-view
	if(dirName === 'for' || dirName === 'router-view'){descriptor.ref = findRef(el);}var fn=function terminalNodeLinkFn(vm,el,host,scope,frag){if(descriptor.ref){defineReactive((scope || vm).$refs,descriptor.ref,null);}vm._bindDir(descriptor,el,host,scope,frag);};fn.terminal = true;return fn;} /**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */function compileDirectives(attrs,options){var i=attrs.length;var dirs=[];var attr,name,value,rawName,rawValue,dirName,arg,modifiers,dirDef,tokens;while(i--) {attr = attrs[i];name = rawName = attr.name;value = rawValue = attr.value;tokens = parseText(value); // reset arg
	arg = null; // check modifiers
	modifiers = parseModifiers(name);name = name.replace(modifierRE,''); // attribute interpolations
	if(tokens){value = tokensToExp(tokens);arg = name;pushDir('bind',publicDirectives.bind,true); // warn against mixing mustaches with v-bind
	if(process.env.NODE_ENV !== 'production'){if(name === 'class' && Array.prototype.some.call(attrs,function(attr){return attr.name === ':class' || attr.name === 'v-bind:class';})){warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');}}}else  // special attribute: transition
	if(transitionRE.test(name)){modifiers.literal = !bindRE.test(name);pushDir('transition',internalDirectives.transition);}else  // event handlers
	if(onRE.test(name)){arg = name.replace(onRE,'');pushDir('on',publicDirectives.on);}else  // attribute bindings
	if(bindRE.test(name)){dirName = name.replace(bindRE,'');if(dirName === 'style' || dirName === 'class'){pushDir(dirName,internalDirectives[dirName]);}else {arg = dirName;pushDir('bind',publicDirectives.bind);}}else  // normal directives
	if(name.indexOf('v-') === 0){ // check arg
	arg = (arg = name.match(argRE)) && arg[1];if(arg){name = name.replace(argRE,'');} // extract directive name
	dirName = name.slice(2); // skip v-else (when used with v-show)
	if(dirName === 'else'){continue;}dirDef = resolveAsset(options,'directives',dirName);if(process.env.NODE_ENV !== 'production'){assertAsset(dirDef,'directive',dirName);}if(dirDef){pushDir(dirName,dirDef);}}} /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Boolean} [interp]
	   */function pushDir(dirName,def,interp){var parsed=parseDirective(value);dirs.push({name:dirName,attr:rawName,raw:rawValue,def:def,arg:arg,modifiers:modifiers,expression:parsed.expression,filters:parsed.filters,interp:interp});}if(dirs.length){return makeNodeLinkFn(dirs);}} /**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */function parseModifiers(name){var res=Object.create(null);var match=name.match(modifierRE);if(match){var i=match.length;while(i--) {res[match[i].slice(1)] = true;}}return res;} /**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */function makeNodeLinkFn(directives){return function nodeLinkFn(vm,el,host,scope,frag){ // reverse apply because it's sorted low to high
	var i=directives.length;while(i--) {vm._bindDir(directives[i],el,host,scope,frag);}};}var specialCharRE=/[^\w\-:\.]/; /**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */function transclude(el,options){ // extract container attributes to pass them down
	// to compiler, because they need to be compiled in
	// parent scope. we are mutating the options object here
	// assuming the same object will be used for compile
	// right after this.
	if(options){options._containerAttrs = extractAttrs(el);} // for template tags, what we want is its content as
	// a documentFragment (for fragment instances)
	if(isTemplate(el)){el = parseTemplate(el);}if(options){if(options._asComponent && !options.template){options.template = '<slot></slot>';}if(options.template){options._content = extractContent(el);el = transcludeTemplate(el,options);}}if(el instanceof DocumentFragment){ // anchors for fragment instance
	// passing in `persist: true` to avoid them being
	// discarded by IE during template cloning
	prepend(createAnchor('v-start',true),el);el.appendChild(createAnchor('v-end',true));}return el;} /**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */function transcludeTemplate(el,options){var template=options.template;var frag=parseTemplate(template,true);if(frag){var replacer=frag.firstChild;var tag=replacer.tagName && replacer.tagName.toLowerCase();if(options.replace){ /* istanbul ignore if */if(el === document.body){process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');} // there are many cases where the instance must
	// become a fragment instance: basically anything that
	// can create more than 1 root nodes.
	if( // multi-children template
	frag.childNodes.length > 1 ||  // non-element template
	replacer.nodeType !== 1 ||  // single nested component
	tag === 'component' || resolveAsset(options,'components',tag) || replacer.hasAttribute('is') || replacer.hasAttribute(':is') || replacer.hasAttribute('v-bind:is') ||  // element directive
	resolveAsset(options,'elementDirectives',tag) ||  // for block
	replacer.hasAttribute('v-for') ||  // if block
	replacer.hasAttribute('v-if')){return frag;}else {options._replacerAttrs = extractAttrs(replacer);mergeAttrs(el,replacer);return replacer;}}else {el.appendChild(frag);return el;}}else {process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);}} /**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */function extractAttrs(el){if(el.nodeType === 1 && el.hasAttributes()){return toArray(el.attributes);}} /**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */function mergeAttrs(from,to){var attrs=from.attributes;var i=attrs.length;var name,value;while(i--) {name = attrs[i].name;value = attrs[i].value;if(!to.hasAttribute(name) && !specialCharRE.test(name)){to.setAttribute(name,value);}else if(name === 'class'){value.split(/\s+/).forEach(function(cls){addClass(to,cls);});}}}var compiler=Object.freeze({compile:compile,compileAndLinkProps:compileAndLinkProps,compileRoot:compileRoot,transclude:transclude});function stateMixin(Vue){ /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */Object.defineProperty(Vue.prototype,'$data',{get:function get(){return this._data;},set:function set(newData){if(newData !== this._data){this._setData(newData);}}}); /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */Vue.prototype._initState = function(){this._initProps();this._initMeta();this._initMethods();this._initData();this._initComputed();}; /**
	   * Initialize props.
	   */Vue.prototype._initProps = function(){var options=this.$options;var el=options.el;var props=options.props;if(props && !el){process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');} // make sure to convert string selectors into element now
	el = options.el = query(el);this._propsUnlinkFn = el && el.nodeType === 1 && props // props must be linked in proper scope if inside v-for
	?compileAndLinkProps(this,el,props,this._scope):null;}; /**
	   * Initialize the data.
	   */Vue.prototype._initData = function(){var propsData=this._data;var optionsDataFn=this.$options.data;var optionsData=optionsDataFn && optionsDataFn();if(optionsData){this._data = optionsData;for(var prop in propsData) {if(process.env.NODE_ENV !== 'production' && hasOwn(optionsData,prop)){warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');}if(this._props[prop].raw !== null || !hasOwn(optionsData,prop)){set(optionsData,prop,propsData[prop]);}}}var data=this._data; // proxy data on instance
	var keys=Object.keys(data);var i,key;i = keys.length;while(i--) {key = keys[i];this._proxy(key);} // observe data
	observe(data,this);}; /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */Vue.prototype._setData = function(newData){newData = newData || {};var oldData=this._data;this._data = newData;var keys,key,i; // unproxy keys not present in new data
	keys = Object.keys(oldData);i = keys.length;while(i--) {key = keys[i];if(!(key in newData)){this._unproxy(key);}} // proxy keys not already proxied,
	// and trigger change for changed values
	keys = Object.keys(newData);i = keys.length;while(i--) {key = keys[i];if(!hasOwn(this,key)){ // new property
	this._proxy(key);}}oldData.__ob__.removeVm(this);observe(newData,this);this._digest();}; /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */Vue.prototype._proxy = function(key){if(!isReserved(key)){ // need to store ref to self here
	// because these getter/setters might
	// be called by child scopes via
	// prototype inheritance.
	var self=this;Object.defineProperty(self,key,{configurable:true,enumerable:true,get:function proxyGetter(){return self._data[key];},set:function proxySetter(val){self._data[key] = val;}});}}; /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */Vue.prototype._unproxy = function(key){if(!isReserved(key)){delete this[key];}}; /**
	   * Force update on every watcher in scope.
	   */Vue.prototype._digest = function(){for(var i=0,l=this._watchers.length;i < l;i++) {this._watchers[i].update(true); // shallow updates
	}}; /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */function noop(){}Vue.prototype._initComputed = function(){var computed=this.$options.computed;if(computed){for(var key in computed) {var userDef=computed[key];var def={enumerable:true,configurable:true};if(typeof userDef === 'function'){def.get = makeComputedGetter(userDef,this);def.set = noop;}else {def.get = userDef.get?userDef.cache !== false?makeComputedGetter(userDef.get,this):bind$1(userDef.get,this):noop;def.set = userDef.set?bind$1(userDef.set,this):noop;}Object.defineProperty(this,key,def);}}};function makeComputedGetter(getter,owner){var watcher=new Watcher(owner,getter,null,{lazy:true});return function computedGetter(){if(watcher.dirty){watcher.evaluate();}if(Dep.target){watcher.depend();}return watcher.value;};} /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */Vue.prototype._initMethods = function(){var methods=this.$options.methods;if(methods){for(var key in methods) {this[key] = bind$1(methods[key],this);}}}; /**
	   * Initialize meta information like $index, $key & $value.
	   */Vue.prototype._initMeta = function(){var metas=this.$options._meta;if(metas){for(var key in metas) {defineReactive(this,key,metas[key]);}}};}var eventRE=/^v-on:|^@/;function eventsMixin(Vue){ /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */Vue.prototype._initEvents = function(){var options=this.$options;if(options._asComponent){registerComponentEvents(this,options.el);}registerCallbacks(this,'$on',options.events);registerCallbacks(this,'$watch',options.watch);}; /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */function registerComponentEvents(vm,el){var attrs=el.attributes;var name,handler;for(var i=0,l=attrs.length;i < l;i++) {name = attrs[i].name;if(eventRE.test(name)){name = name.replace(eventRE,'');handler = (vm._scope || vm._context).$eval(attrs[i].value,true);vm.$on(name.replace(eventRE),handler);}}} /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */function registerCallbacks(vm,action,hash){if(!hash)return;var handlers,key,i,j;for(key in hash) {handlers = hash[key];if(isArray(handlers)){for(i = 0,j = handlers.length;i < j;i++) {register(vm,action,key,handlers[i]);}}else {register(vm,action,key,handlers);}}} /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */function register(vm,action,key,handler,options){var type=typeof handler;if(type === 'function'){vm[action](key,handler,options);}else if(type === 'string'){var methods=vm.$options.methods;var method=methods && methods[handler];if(method){vm[action](key,method,options);}else {process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');}}else if(handler && type === 'object'){register(vm,action,key,handler.handler,handler);}} /**
	   * Setup recursive attached/detached calls
	   */Vue.prototype._initDOMHooks = function(){this.$on('hook:attached',onAttached);this.$on('hook:detached',onDetached);}; /**
	   * Callback to recursively call attached hook on children
	   */function onAttached(){if(!this._isAttached){this._isAttached = true;this.$children.forEach(callAttach);}} /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */function callAttach(child){if(!child._isAttached && inDoc(child.$el)){child._callHook('attached');}} /**
	   * Callback to recursively call detached hook on children
	   */function onDetached(){if(this._isAttached){this._isAttached = false;this.$children.forEach(callDetach);}} /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */function callDetach(child){if(child._isAttached && !inDoc(child.$el)){child._callHook('detached');}} /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */Vue.prototype._callHook = function(hook){var handlers=this.$options[hook];if(handlers){for(var i=0,j=handlers.length;i < j;i++) {handlers[i].call(this);}}this.$emit('hook:' + hook);};}function noop(){} /**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */function Directive(descriptor,vm,el,host,scope,frag){this.vm = vm;this.el = el; // copy descriptor properties
	this.descriptor = descriptor;this.name = descriptor.name;this.expression = descriptor.expression;this.arg = descriptor.arg;this.modifiers = descriptor.modifiers;this.filters = descriptor.filters;this.literal = this.modifiers && this.modifiers.literal; // private
	this._locked = false;this._bound = false;this._listeners = null; // link context
	this._host = host;this._scope = scope;this._frag = frag; // store directives on node in dev mode
	if(process.env.NODE_ENV !== 'production' && this.el){this.el._vue_directives = this.el._vue_directives || [];this.el._vue_directives.push(this);}} /**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */Directive.prototype._bind = function(){var name=this.name;var descriptor=this.descriptor; // remove attribute
	if((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute){var attr=descriptor.attr || 'v-' + name;this.el.removeAttribute(attr);} // copy def properties
	var def=descriptor.def;if(typeof def === 'function'){this.update = def;}else {extend(this,def);} // setup directive params
	this._setupParams(); // initial bind
	if(this.bind){this.bind();}if(this.literal){this.update && this.update(descriptor.raw);}else if((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()){ // wrapped updater for context
	var dir=this;if(this.update){this._update = function(val,oldVal){if(!dir._locked){dir.update(val,oldVal);}};}else {this._update = noop;}var preProcess=this._preProcess?bind$1(this._preProcess,this):null;var postProcess=this._postProcess?bind$1(this._postProcess,this):null;var watcher=this._watcher = new Watcher(this.vm,this.expression,this._update, // callback
	{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:preProcess,postProcess:postProcess,scope:this._scope}); // v-model with inital inline value need to sync back to
	// model instead of update to DOM on init. They would
	// set the afterBind hook to indicate that.
	if(this.afterBind){this.afterBind();}else if(this.update){this.update(watcher.value);}}this._bound = true;}; /**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */Directive.prototype._setupParams = function(){if(!this.params){return;}var params=this.params; // swap the params array with a fresh object.
	this.params = Object.create(null);var i=params.length;var key,val,mappedKey;while(i--) {key = params[i];mappedKey = camelize(key);val = getBindAttr(this.el,key);if(val != null){ // dynamic
	this._setupParamWatcher(mappedKey,val);}else { // static
	val = getAttr(this.el,key);if(val != null){this.params[mappedKey] = val === ''?true:val;}}}}; /**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */Directive.prototype._setupParamWatcher = function(key,expression){var self=this;var called=false;var unwatch=(this._scope || this.vm).$watch(expression,function(val,oldVal){self.params[key] = val; // since we are in immediate mode,
	// only call the param change callbacks if this is not the first update.
	if(called){var cb=self.paramWatchers && self.paramWatchers[key];if(cb){cb.call(self,val,oldVal);}}else {called = true;}},{immediate:true});(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);}; /**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */Directive.prototype._checkStatement = function(){var expression=this.expression;if(expression && this.acceptStatement && !isSimplePath(expression)){var fn=parseExpression(expression).get;var scope=this._scope || this.vm;var handler=function handler(e){scope.$event = e;fn.call(scope,scope);scope.$event = null;};if(this.filters){handler = scope._applyFilters(handler,null,this.filters);}this.update(handler);return true;}}; /**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */Directive.prototype.set = function(value){ /* istanbul ignore else */if(this.twoWay){this._withLock(function(){this._watcher.set(value);});}else if(process.env.NODE_ENV !== 'production'){warn('Directive.set() can only be used inside twoWay' + 'directives.');}}; /**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */Directive.prototype._withLock = function(fn){var self=this;self._locked = true;fn.call(self);nextTick(function(){self._locked = false;});}; /**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 */Directive.prototype.on = function(event,handler){on$1(this.el,event,handler);(this._listeners || (this._listeners = [])).push([event,handler]);}; /**
	 * Teardown the watcher and call unbind.
	 */Directive.prototype._teardown = function(){if(this._bound){this._bound = false;if(this.unbind){this.unbind();}if(this._watcher){this._watcher.teardown();}var listeners=this._listeners;var i;if(listeners){i = listeners.length;while(i--) {off(this.el,listeners[i][0],listeners[i][1]);}}var unwatchFns=this._paramUnwatchFns;if(unwatchFns){i = unwatchFns.length;while(i--) {unwatchFns[i]();}}if(process.env.NODE_ENV !== 'production' && this.el){this.el._vue_directives.$remove(this);}this.vm = this.el = this._watcher = this._listeners = null;}};function lifecycleMixin(Vue){ /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */Vue.prototype._updateRef = function(remove){var ref=this.$options._ref;if(ref){var refs=(this._scope || this._context).$refs;if(remove){if(refs[ref] === this){refs[ref] = null;}}else {refs[ref] = this;}}}; /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   * @return {Element}
	   */Vue.prototype._compile = function(el){var options=this.$options; // transclude and init element
	// transclude can potentially replace original
	// so we need to keep reference; this step also injects
	// the template and caches the original attributes
	// on the container node and replacer node.
	var original=el;el = transclude(el,options);this._initElement(el); // root is always compiled per-instance, because
	// container attrs and props can be different every time.
	var contextOptions=this._context && this._context.$options;var rootLinker=compileRoot(el,options,contextOptions); // compile and link the rest
	var contentLinkFn;var ctor=this.constructor; // component compilation can be cached
	// as long as it's not using inline-template
	if(options._linkerCachable){contentLinkFn = ctor.linker;if(!contentLinkFn){contentLinkFn = ctor.linker = compile(el,options);}} // link phase
	// make sure to link root with prop scope!
	var rootUnlinkFn=rootLinker(this,el,this._scope);var contentUnlinkFn=contentLinkFn?contentLinkFn(this,el):compile(el,options)(this,el); // register composite unlink function
	// to be called during instance destruction
	this._unlinkFn = function(){rootUnlinkFn(); // passing destroying: true to avoid searching and
	// splicing the directives
	contentUnlinkFn(true);}; // finally replace original
	if(options.replace){replace(original,el);}this._isCompiled = true;this._callHook('compiled');return el;}; /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */Vue.prototype._initElement = function(el){if(el instanceof DocumentFragment){this._isFragment = true;this.$el = this._fragmentStart = el.firstChild;this._fragmentEnd = el.lastChild; // set persisted text anchors to empty
	if(this._fragmentStart.nodeType === 3){this._fragmentStart.data = this._fragmentEnd.data = '';}this._fragment = el;}else {this.$el = el;}this.$el.__vue__ = this;this._callHook('beforeCompile');}; /**
	   * Create and bind a directive to an element.
	   *
	   * @param {String} name - directive name
	   * @param {Node} node   - target node
	   * @param {Object} desc - parsed directive descriptor
	   * @param {Object} def  - directive definition object
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */Vue.prototype._bindDir = function(descriptor,node,host,scope,frag){this._directives.push(new Directive(descriptor,this,node,host,scope,frag));}; /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */Vue.prototype._destroy = function(remove,deferCleanup){if(this._isBeingDestroyed){if(!deferCleanup){this._cleanup();}return;}this._callHook('beforeDestroy');this._isBeingDestroyed = true;var i; // remove self from parent. only necessary
	// if parent is not being destroyed as well.
	var parent=this.$parent;if(parent && !parent._isBeingDestroyed){parent.$children.$remove(this); // unregister ref (remove: true)
	this._updateRef(true);} // destroy all children.
	i = this.$children.length;while(i--) {this.$children[i].$destroy();} // teardown props
	if(this._propsUnlinkFn){this._propsUnlinkFn();} // teardown all directives. this also tearsdown all
	// directive-owned watchers.
	if(this._unlinkFn){this._unlinkFn();}i = this._watchers.length;while(i--) {this._watchers[i].teardown();} // remove reference to self on $el
	if(this.$el){this.$el.__vue__ = null;} // remove DOM element
	var self=this;if(remove && this.$el){this.$remove(function(){self._cleanup();});}else if(!deferCleanup){this._cleanup();}}; /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */Vue.prototype._cleanup = function(){if(this._isDestroyed){return;} // remove self from owner fragment
	// do it in cleanup so that we can call $destroy with
	// defer right when a fragment is about to be removed.
	if(this._frag){this._frag.children.$remove(this);} // remove reference from data ob
	// frozen object may not have observer.
	if(this._data.__ob__){this._data.__ob__.removeVm(this);} // Clean up references to private properties and other
	// instances. preserve reference to _data so that proxy
	// accessors still work. The only potential side effect
	// here is that mutating the instance after it's destroyed
	// may affect the state of other components that are still
	// observing the same object, but that seems to be a
	// reasonable responsibility for the user rather than
	// always throwing an error on them.
	this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null; // call the last hook...
	this._isDestroyed = true;this._callHook('destroyed'); // turn off all instance listeners.
	this.$off();};}function miscMixin(Vue){ /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */Vue.prototype._applyFilters = function(value,oldValue,filters,write){var filter,fn,args,arg,offset,i,l,j,k;for(i = 0,l = filters.length;i < l;i++) {filter = filters[i];fn = resolveAsset(this.$options,'filters',filter.name);if(process.env.NODE_ENV !== 'production'){assertAsset(fn,'filter',filter.name);}if(!fn)continue;fn = write?fn.write:fn.read || fn;if(typeof fn !== 'function')continue;args = write?[value,oldValue]:[value];offset = write?2:1;if(filter.args){for(j = 0,k = filter.args.length;j < k;j++) {arg = filter.args[j];args[j + offset] = arg.dynamic?this.$get(arg.value):arg.value;}}value = fn.apply(this,args);}return value;}; /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String} id
	   * @param {Function} cb
	   */Vue.prototype._resolveComponent = function(id,cb){var factory=resolveAsset(this.$options,'components',id);if(process.env.NODE_ENV !== 'production'){assertAsset(factory,'component',id);}if(!factory){return;} // async component factory
	if(!factory.options){if(factory.resolved){ // cached
	cb(factory.resolved);}else if(factory.requested){ // pool callbacks
	factory.pendingCallbacks.push(cb);}else {factory.requested = true;var cbs=factory.pendingCallbacks = [cb];factory(function resolve(res){if(isPlainObject(res)){res = Vue.extend(res);} // cache resolved
	factory.resolved = res; // invoke callbacks
	for(var i=0,l=cbs.length;i < l;i++) {cbs[i](res);}},function reject(reason){process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason?'\nReason: ' + reason:''));});}}else { // normal component
	cb(factory);}};}function globalAPI(Vue){ /**
	   * Expose useful internals
	   */Vue.util = util;Vue.config = config;Vue.set = set;Vue['delete'] = del;Vue.nextTick = nextTick; /**
	   * The following are exposed for advanced usage / plugins
	   */Vue.compiler = compiler;Vue.FragmentFactory = FragmentFactory;Vue.internalDirectives = internalDirectives;Vue.parsers = {path:path,text:text$1,template:template,directive:directive,expression:expression}; /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */Vue.cid = 0;var cid=1; /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */Vue.extend = function(extendOptions){extendOptions = extendOptions || {};var Super=this;var isFirstExtend=Super.cid === 0;if(isFirstExtend && extendOptions._Ctor){return extendOptions._Ctor;}var name=extendOptions.name || Super.options.name;var Sub=createClass(name || 'VueComponent');Sub.prototype = Object.create(Super.prototype);Sub.prototype.constructor = Sub;Sub.cid = cid++;Sub.options = mergeOptions(Super.options,extendOptions);Sub['super'] = Super; // allow further extension
	Sub.extend = Super.extend; // create asset registers, so extended classes
	// can have their private assets too.
	config._assetTypes.forEach(function(type){Sub[type] = Super[type];}); // enable recursive self-lookup
	if(name){Sub.options.components[name] = Sub;} // cache constructor
	if(isFirstExtend){extendOptions._Ctor = Sub;}return Sub;}; /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */function createClass(name){return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();} /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */Vue.use = function(plugin){ /* istanbul ignore if */if(plugin.installed){return;} // additional parameters
	var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install === 'function'){plugin.install.apply(plugin,args);}else {plugin.apply(null,args);}plugin.installed = true;return this;}; /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */Vue.mixin = function(mixin){Vue.options = mergeOptions(Vue.options,mixin);}; /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */config._assetTypes.forEach(function(type){Vue[type] = function(id,definition){if(!definition){return this.options[type + 's'][id];}else { /* istanbul ignore if */if(process.env.NODE_ENV !== 'production'){if(type === 'component' && commonTagRE.test(id)){warn('Do not use built-in HTML elements as component ' + 'id: ' + id);}}if(type === 'component' && isPlainObject(definition)){definition.name = id;definition = Vue.extend(definition);}this.options[type + 's'][id] = definition;return definition;}};});}var filterRE=/[^|]\|[^|]/;function dataAPI(Vue){ /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */Vue.prototype.$get = function(exp,asStatement){var res=parseExpression(exp);if(res){if(asStatement && !isSimplePath(exp)){var self=this;return function statementHandler(){res.get.call(self,self);};}else {try{return res.get.call(this,this);}catch(e) {}}}}; /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */Vue.prototype.$set = function(exp,val){var res=parseExpression(exp,true);if(res && res.set){res.set.call(this,this,val);}}; /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */Vue.prototype.$delete = function(key){del(this._data,key);}; /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */Vue.prototype.$watch = function(expOrFn,cb,options){var vm=this;var parsed;if(typeof expOrFn === 'string'){parsed = parseDirective(expOrFn);expOrFn = parsed.expression;}var watcher=new Watcher(vm,expOrFn,cb,{deep:options && options.deep,filters:parsed && parsed.filters});if(options && options.immediate){cb.call(vm,watcher.value);}return function unwatchFn(){watcher.teardown();};}; /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */Vue.prototype.$eval = function(text,asStatement){ // check for filters.
	if(filterRE.test(text)){var dir=parseDirective(text); // the filter regex check might give false positive
	// for pipes inside strings, so it's possible that
	// we don't get any filters here
	var val=this.$get(dir.expression,asStatement);return dir.filters?this._applyFilters(val,null,dir.filters):val;}else { // no filter
	return this.$get(text,asStatement);}}; /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */Vue.prototype.$interpolate = function(text){var tokens=parseText(text);var vm=this;if(tokens){if(tokens.length === 1){return vm.$eval(tokens[0].value) + '';}else {return tokens.map(function(token){return token.tag?vm.$eval(token.value):token.value;}).join('');}}else {return text;}}; /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */Vue.prototype.$log = function(path){var data=path?getPath(this._data,path):this._data;if(data){data = clean(data);} // include computed fields
	if(!path){for(var key in this.$options.computed) {data[key] = clean(this[key]);}}console.log(data);}; /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */function clean(obj){return JSON.parse(JSON.stringify(obj));}}function domAPI(Vue){ /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */Vue.prototype.$nextTick = function(fn){nextTick(fn,this);}; /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$appendTo = function(target,cb,withTransition){return insert(this,target,cb,withTransition,append,appendWithTransition);}; /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$prependTo = function(target,cb,withTransition){target = query(target);if(target.hasChildNodes()){this.$before(target.firstChild,cb,withTransition);}else {this.$appendTo(target,cb,withTransition);}return this;}; /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$before = function(target,cb,withTransition){return insert(this,target,cb,withTransition,beforeWithCb,beforeWithTransition);}; /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$after = function(target,cb,withTransition){target = query(target);if(target.nextSibling){this.$before(target.nextSibling,cb,withTransition);}else {this.$appendTo(target.parentNode,cb,withTransition);}return this;}; /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$remove = function(cb,withTransition){if(!this.$el.parentNode){return cb && cb();}var inDocument=this._isAttached && inDoc(this.$el); // if we are not in document, no need to check
	// for transitions
	if(!inDocument)withTransition = false;var self=this;var realCb=function realCb(){if(inDocument)self._callHook('detached');if(cb)cb();};if(this._isFragment){removeNodeRange(this._fragmentStart,this._fragmentEnd,this,this._fragment,realCb);}else {var op=withTransition === false?removeWithCb:removeWithTransition;op(this.$el,this,realCb);}return this;}; /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */function insert(vm,target,cb,withTransition,op1,op2){target = query(target);var targetIsDetached=!inDoc(target);var op=withTransition === false || targetIsDetached?op1:op2;var shouldCallHook=!targetIsDetached && !vm._isAttached && !inDoc(vm.$el);if(vm._isFragment){mapNodeRange(vm._fragmentStart,vm._fragmentEnd,function(node){op(node,target,vm);});cb && cb();}else {op(vm.$el,target,vm,cb);}if(shouldCallHook){vm._callHook('attached');}return vm;} /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */function query(el){return typeof el === 'string'?document.querySelector(el):el;} /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function append(el,target,vm,cb){target.appendChild(el);if(cb)cb();} /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function beforeWithCb(el,target,vm,cb){before(el,target);if(cb)cb();} /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function removeWithCb(el,vm,cb){remove(el);if(cb)cb();}}function eventsAPI(Vue){ /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$on = function(event,fn){(this._events[event] || (this._events[event] = [])).push(fn);modifyListenerCount(this,event,1);return this;}; /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$once = function(event,fn){var self=this;function on(){self.$off(event,on);fn.apply(this,arguments);}on.fn = fn;this.$on(event,on);return this;}; /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$off = function(event,fn){var cbs; // all
	if(!arguments.length){if(this.$parent){for(event in this._events) {cbs = this._events[event];if(cbs){modifyListenerCount(this,event,-cbs.length);}}}this._events = {};return this;} // specific event
	cbs = this._events[event];if(!cbs){return this;}if(arguments.length === 1){modifyListenerCount(this,event,-cbs.length);this._events[event] = null;return this;} // specific handler
	var cb;var i=cbs.length;while(i--) {cb = cbs[i];if(cb === fn || cb.fn === fn){modifyListenerCount(this,event,-1);cbs.splice(i,1);break;}}return this;}; /**
	   * Trigger an event on self.
	   *
	   * @param {String} event
	   * @return {Boolean} shouldPropagate
	   */Vue.prototype.$emit = function(event){var cbs=this._events[event];var shouldPropagate=!cbs;if(cbs){cbs = cbs.length > 1?toArray(cbs):cbs;var args=toArray(arguments,1);for(var i=0,l=cbs.length;i < l;i++) {var res=cbs[i].apply(this,args);if(res === true){shouldPropagate = true;}}}return shouldPropagate;}; /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */Vue.prototype.$broadcast = function(event){ // if no child has registered for this event,
	// then there's no need to broadcast.
	if(!this._eventsCount[event])return;var children=this.$children;for(var i=0,l=children.length;i < l;i++) {var child=children[i];var shouldPropagate=child.$emit.apply(child,arguments);if(shouldPropagate){child.$broadcast.apply(child,arguments);}}return this;}; /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */Vue.prototype.$dispatch = function(){this.$emit.apply(this,arguments);var parent=this.$parent;while(parent) {var shouldPropagate=parent.$emit.apply(parent,arguments);parent = shouldPropagate?parent.$parent:null;}return this;}; /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */var hookRE=/^hook:/;function modifyListenerCount(vm,event,count){var parent=vm.$parent; // hooks do not get broadcasted so no need
	// to do bookkeeping for them
	if(!parent || !count || hookRE.test(event))return;while(parent) {parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;parent = parent.$parent;}}}function lifecycleAPI(Vue){ /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */Vue.prototype.$mount = function(el){if(this._isCompiled){process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');return;}el = query(el);if(!el){el = document.createElement('div');}this._compile(el);this._initDOMHooks();if(inDoc(this.$el)){this._callHook('attached');ready.call(this);}else {this.$once('hook:attached',ready);}return this;}; /**
	   * Mark an instance as ready.
	   */function ready(){this._isAttached = true;this._isReady = true;this._callHook('ready');} /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   */Vue.prototype.$destroy = function(remove,deferCleanup){this._destroy(remove,deferCleanup);}; /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @return {Function}
	   */Vue.prototype.$compile = function(el,host,scope,frag){return compile(el,this.$options,true)(this,el,host,scope,frag);};} /**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */function Vue(options){this._init(options);} // install internals
	initMixin(Vue);stateMixin(Vue);eventsMixin(Vue);lifecycleMixin(Vue);miscMixin(Vue); // install APIs
	globalAPI(Vue);dataAPI(Vue);domAPI(Vue);eventsAPI(Vue);lifecycleAPI(Vue);var convertArray=vFor._postProcess; /**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */function limitBy(arr,n,offset){offset = offset?parseInt(offset,10):0;return typeof n === 'number'?arr.slice(offset,offset + n):arr;} /**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */function filterBy(arr,search,delimiter){arr = convertArray(arr);if(search == null){return arr;}if(typeof search === 'function'){return arr.filter(search);} // cast to lowercase string
	search = ('' + search).toLowerCase(); // allow optional `in` delimiter
	// because why not
	var n=delimiter === 'in'?3:2; // extract and flatten keys
	var keys=toArray(arguments,n).reduce(function(prev,cur){return prev.concat(cur);},[]);var res=[];var item,key,val,j;for(var i=0,l=arr.length;i < l;i++) {item = arr[i];val = item && item.$value || item;j = keys.length;if(j){while(j--) {key = keys[j];if(key === '$key' && contains(item.$key,search) || contains(getPath(val,key),search)){res.push(item);break;}}}else if(contains(item,search)){res.push(item);}}return res;} /**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */function orderBy(arr,sortKey,reverse){arr = convertArray(arr);if(!sortKey){return arr;}var order=reverse && reverse < 0?-1:1; // sort on a copy to avoid mutating original array
	return arr.slice().sort(function(a,b){if(sortKey !== '$key'){if(isObject(a) && '$value' in a)a = a.$value;if(isObject(b) && '$value' in b)b = b.$value;}a = isObject(a)?getPath(a,sortKey):a;b = isObject(b)?getPath(b,sortKey):b;return a === b?0:a > b?order:-order;});} /**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */function contains(val,search){var i;if(isPlainObject(val)){var keys=Object.keys(val);i = keys.length;while(i--) {if(contains(val[keys[i]],search)){return true;}}}else if(isArray(val)){i = val.length;while(i--) {if(contains(val[i],search)){return true;}}}else if(val != null){return val.toString().toLowerCase().indexOf(search) > -1;}}var digitsRE=/(\d{3})(?=\d)/g; // asset collections must be a plain object.
	var filters={orderBy:orderBy,filterBy:filterBy,limitBy:limitBy, /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */json:{read:function read(value,indent){return typeof value === 'string'?value:JSON.stringify(value,null,Number(indent) || 2);},write:function write(value){try{return JSON.parse(value);}catch(e) {return value;}}}, /**
	   * 'abc' => 'Abc'
	   */capitalize:function capitalize(value){if(!value && value !== 0)return '';value = value.toString();return value.charAt(0).toUpperCase() + value.slice(1);}, /**
	   * 'abc' => 'ABC'
	   */uppercase:function uppercase(value){return value || value === 0?value.toString().toUpperCase():'';}, /**
	   * 'AbC' => 'abc'
	   */lowercase:function lowercase(value){return value || value === 0?value.toString().toLowerCase():'';}, /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */currency:function currency(value,_currency){value = parseFloat(value);if(!isFinite(value) || !value && value !== 0)return '';_currency = _currency != null?_currency:'$';var stringified=Math.abs(value).toFixed(2);var _int=stringified.slice(0,-3);var i=_int.length % 3;var head=i > 0?_int.slice(0,i) + (_int.length > 3?',':''):'';var _float=stringified.slice(-3);var sign=value < 0?'-':'';return _currency + sign + head + _int.slice(i).replace(digitsRE,'$1,') + _float;}, /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */pluralize:function pluralize(value){var args=toArray(arguments,1);return args.length > 1?args[value % 10 - 1] || args[args.length - 1]:args[0] + (value === 1?'':'s');}, /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */debounce:function debounce(handler,delay){if(!handler)return;if(!delay){delay = 300;}return _debounce(handler,delay);}};var partial={priority:1750,params:['name'], // watch changes to name for dynamic partials
	paramWatchers:{name:function name(value){vIf.remove.call(this);if(value){this.insert(value);}}},bind:function bind(){this.anchor = createAnchor('v-partial');replace(this.el,this.anchor);this.insert(this.params.name);},insert:function insert(id){var partial=resolveAsset(this.vm.$options,'partials',id);if(process.env.NODE_ENV !== 'production'){assertAsset(partial,'partial',id);}if(partial){this.factory = new FragmentFactory(this.vm,partial);vIf.insert.call(this);}},unbind:function unbind(){if(this.frag){this.frag.destroy();}}}; // This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.
	var slot={priority:1750,params:['name'],bind:function bind(){var host=this.vm;var raw=host.$options._content;var content;if(!raw){this.fallback();return;}var context=host._context;var slotName=this.params.name;if(!slotName){ // Default content
	var self=this;var compileDefaultContent=function compileDefaultContent(){self.compile(extractFragment(raw.childNodes,raw,true),context,host);};if(!host._isCompiled){ // defer until the end of instance compilation,
	// because the default outlet must wait until all
	// other possible outlets with selectors have picked
	// out their contents.
	host.$once('hook:compiled',compileDefaultContent);}else {compileDefaultContent();}}else {var selector='[slot="' + slotName + '"]';var nodes=raw.querySelectorAll(selector);if(nodes.length){content = extractFragment(nodes,raw);if(content.hasChildNodes()){this.compile(content,context,host);}else {this.fallback();}}else {this.fallback();}}},fallback:function fallback(){this.compile(extractContent(this.el,true),this.vm);},compile:function compile(content,context,host){if(content && context){var scope=host?host._scope:this._scope;this.unlink = context.$compile(content,host,scope,this._frag);}if(content){replace(this.el,content);}else {remove(this.el);}},unbind:function unbind(){if(this.unlink){this.unlink();}}}; /**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */function extractFragment(nodes,parent,main){var frag=document.createDocumentFragment();for(var i=0,l=nodes.length;i < l;i++) {var node=nodes[i]; // if this is the main outlet, we want to skip all
	// previously selected nodes;
	// otherwise, we want to mark the node as selected.
	// clone the node so the original raw content remains
	// intact. this ensures proper re-compilation in cases
	// where the outlet is inside a conditional block
	if(main && !node.__v_selected){append(node);}else if(!main && node.parentNode === parent){node.__v_selected = true;append(node);}}return frag;function append(node){if(isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')){node = parseTemplate(node);}node = cloneNode(node);frag.appendChild(node);}}var elementDirectives={slot:slot,partial:partial};Vue.version = '1.0.10'; /**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */Vue.options = {directives:publicDirectives,elementDirectives:elementDirectives,filters:filters,transitions:{},components:{},partials:{},replace:true}; // devtools global hook
	/* istanbul ignore if */if(process.env.NODE_ENV !== 'production'){if(inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__){window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init',Vue);}}module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser

	'use strict';

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// import core stuff
	'use strict';

	__webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active {\n  outline: 0; }\n\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\n@-moz-viewport {\n  width: device-width; }\n\n@-ms-viewport {\n  width: device-width; }\n\n@-o-viewport {\n  width: device-width; }\n\n@-webkit-viewport {\n  width: device-width; }\n\n@viewport {\n  width: device-width; }\n\nhtml {\n  font-size: 16px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #373a3c;\n  background-color: #fff; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: .5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #818a91; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\na {\n  color: #563d7c;\n  text-decoration: none; }\n  a:focus, a:hover {\n    color: #322449;\n    text-decoration: underline; }\n  a:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation; }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #818a91;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: left; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  margin: 0;\n  line-height: inherit;\n  border-radius: 0; }\n\ntextarea {\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit; }\n\ninput[type=\"search\"] {\n  box-sizing: inherit;\n  -webkit-appearance: none; }\n\noutput {\n  display: inline-block; }\n\n[hidden] {\n  display: none !important; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height;\n  transition-property: height; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .2; }\n  .close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: .5; }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f7f7f9;\n  border-radius: 0.25rem; }\n\nkbd {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 0.2rem; }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold; }\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  line-height: 1.5;\n  color: #373a3c; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #55595c;\n  text-align: center;\n  background-color: #eceeef;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem; }\n  .input-group-addon.form-control-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 0.275rem 0.75rem;\n    font-size: 0.875rem;\n    border-radius: 0.2rem; }\n  .input-group-addon.form-control-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 0.75rem 1.25rem;\n    font-size: 1.25rem;\n    border-radius: 0.3rem; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9 {\n  padding-bottom: 42.85714%; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n\nh1 {\n  font-size: 2.5rem; }\n\nh2 {\n  font-size: 2rem; }\n\nh3 {\n  font-size: 1.75rem; }\n\nh4 {\n  font-size: 1.5rem; }\n\nh5 {\n  font-size: 1.25rem; }\n\nh6 {\n  font-size: 1rem; }\n\n.h1 {\n  font-size: 2.5rem; }\n\n.h2 {\n  font-size: 2rem; }\n\n.h3 {\n  font-size: 1.75rem; }\n\n.h4 {\n  font-size: 1.5rem; }\n\n.h5 {\n  font-size: 1.25rem; }\n\n.h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: normal; }\n\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.dl-horizontal {\n  margin-right: -1.875rem;\n  margin-left: -1.875rem; }\n  .dl-horizontal::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n  border-left: 0.25rem solid #eceeef; }\n  .blockquote p:last-child,\n  .blockquote ul:last-child,\n  .blockquote ol:last-child {\n    margin-bottom: 0; }\n  .blockquote footer {\n    display: block;\n    font-size: 80%;\n    line-height: 1.5;\n    color: #818a91; }\n    .blockquote footer::before {\n      content: \"\\2014   \\A0\"; }\n\n.blockquote-reverse {\n  padding-right: 1rem;\n  padding-left: 0;\n  text-align: right;\n  border-right: 0.25rem solid #eceeef;\n  border-left: 0; }\n  .blockquote-reverse footer::before {\n    content: \"\"; }\n  .blockquote-reverse footer::after {\n    content: \"\\A0   \\2014\"; }\n\n.bg-inverse {\n  color: #eceeef;\n  background-color: #373a3c; }\n\n.bg-faded {\n  background-color: #f7f7f9; }\n\n.bg-primary {\n  color: #fff !important;\n  background-color: #563d7c !important; }\n\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #3e2c5a; }\n\n.bg-success {\n  color: #fff !important;\n  background-color: #42b983 !important; }\n\na.bg-success:focus, a.bg-success:hover {\n  background-color: #359368; }\n\n.bg-info {\n  color: #fff !important;\n  background-color: #5bc0de !important; }\n\na.bg-info:focus, a.bg-info:hover {\n  background-color: #31b0d5; }\n\n.bg-warning {\n  color: #fff !important;\n  background-color: #f0ad4e !important; }\n\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #ec971f; }\n\n.bg-danger {\n  color: #fff !important;\n  background-color: #d9534f !important; }\n\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #c9302c; }\n\n.hidden-xs-up {\n  display: none !important; }\n\n@media (max-width: 543px) {\n  .hidden-xs-down {\n    display: none !important; } }\n\n@media (min-width: 544px) {\n  .hidden-sm-up {\n    display: none !important; } }\n\n@media (max-width: 767px) {\n  .hidden-sm-down {\n    display: none !important; } }\n\n@media (min-width: 768px) {\n  .hidden-md-up {\n    display: none !important; } }\n\n@media (max-width: 991px) {\n  .hidden-md-down {\n    display: none !important; } }\n\n@media (min-width: 992px) {\n  .hidden-lg-up {\n    display: none !important; } }\n\n@media (max-width: 1199px) {\n  .hidden-lg-down {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-xl-up {\n    display: none !important; } }\n\n.hidden-xl-down {\n  display: none !important; }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\n.m-a-0 {\n  margin: 0 !important; }\n\n.m-t-0 {\n  margin-top: 0 !important; }\n\n.m-r-0 {\n  margin-right: 0 !important; }\n\n.m-b-0 {\n  margin-bottom: 0 !important; }\n\n.m-l-0 {\n  margin-left: 0 !important; }\n\n.m-x-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important; }\n\n.m-y-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.m-a {\n  margin: 1rem !important; }\n\n.m-t {\n  margin-top: 1rem !important; }\n\n.m-r {\n  margin-right: 1rem !important; }\n\n.m-b {\n  margin-bottom: 1rem !important; }\n\n.m-l {\n  margin-left: 1rem !important; }\n\n.m-x {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important; }\n\n.m-y {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important; }\n\n.m-x-auto {\n  margin-right: auto !important;\n  margin-left: auto !important; }\n\n.m-a-md {\n  margin: 1.5rem !important; }\n\n.m-t-md {\n  margin-top: 1.5rem !important; }\n\n.m-r-md {\n  margin-right: 1.5rem !important; }\n\n.m-b-md {\n  margin-bottom: 1.5rem !important; }\n\n.m-l-md {\n  margin-left: 1.5rem !important; }\n\n.m-x-md {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important; }\n\n.m-y-md {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important; }\n\n.m-a-lg {\n  margin: 3rem !important; }\n\n.m-t-lg {\n  margin-top: 3rem !important; }\n\n.m-r-lg {\n  margin-right: 3rem !important; }\n\n.m-b-lg {\n  margin-bottom: 3rem !important; }\n\n.m-l-lg {\n  margin-left: 3rem !important; }\n\n.m-x-lg {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important; }\n\n.m-y-lg {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important; }\n\n.p-a-0 {\n  padding: 0 !important; }\n\n.p-t-0 {\n  padding-top: 0 !important; }\n\n.p-r-0 {\n  padding-right: 0 !important; }\n\n.p-b-0 {\n  padding-bottom: 0 !important; }\n\n.p-l-0 {\n  padding-left: 0 !important; }\n\n.p-x-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important; }\n\n.p-y-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n\n.p-a {\n  padding: 1rem !important; }\n\n.p-t {\n  padding-top: 1rem !important; }\n\n.p-r {\n  padding-right: 1rem !important; }\n\n.p-b {\n  padding-bottom: 1rem !important; }\n\n.p-l {\n  padding-left: 1rem !important; }\n\n.p-x {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important; }\n\n.p-y {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important; }\n\n.p-a-md {\n  padding: 1.5rem !important; }\n\n.p-t-md {\n  padding-top: 1.5rem !important; }\n\n.p-r-md {\n  padding-right: 1.5rem !important; }\n\n.p-b-md {\n  padding-bottom: 1.5rem !important; }\n\n.p-l-md {\n  padding-left: 1.5rem !important; }\n\n.p-x-md {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important; }\n\n.p-y-md {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important; }\n\n.p-a-lg {\n  padding: 3rem !important; }\n\n.p-t-lg {\n  padding-top: 3rem !important; }\n\n.p-r-lg {\n  padding-right: 3rem !important; }\n\n.p-b-lg {\n  padding-bottom: 3rem !important; }\n\n.p-l-lg {\n  padding-left: 3rem !important; }\n\n.p-x-lg {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important; }\n\n.p-y-lg {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important; }\n\n.pos-f-t {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n.invisible {\n  visibility: hidden !important; }\n\n.text-hide {\n  font: \"0/0\" a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-xs-left {\n  text-align: left !important; }\n\n.text-xs-right {\n  text-align: right !important; }\n\n.text-xs-center {\n  text-align: center !important; }\n\n@media (min-width: 544px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.text-muted {\n  color: #818a91; }\n\n.text-primary {\n  color: #563d7c !important; }\n\na.text-primary:focus, a.text-primary:hover {\n  color: #3e2c5a; }\n\n.text-success {\n  color: #42b983 !important; }\n\na.text-success:focus, a.text-success:hover {\n  color: #359368; }\n\n.text-info {\n  color: #5bc0de !important; }\n\na.text-info:focus, a.text-info:hover {\n  color: #31b0d5; }\n\n.text-warning {\n  color: #f0ad4e !important; }\n\na.text-warning:focus, a.text-warning:hover {\n  color: #ec971f; }\n\n.text-danger {\n  color: #d9534f !important; }\n\na.text-danger:focus, a.text-danger:hover {\n  color: #c9302c; }\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n  .container::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  @media (min-width: 544px) {\n    .container {\n      max-width: 576px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 940px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n  .container-fluid::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.row {\n  margin-left: -0.9375rem;\n  margin-right: -0.9375rem; }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 544px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 768px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {\n    float: left; }\n  .col-xl-1 {\n    width: 8.33333%; }\n  .col-xl-2 {\n    width: 16.66667%; }\n  .col-xl-3 {\n    width: 25%; }\n  .col-xl-4 {\n    width: 33.33333%; }\n  .col-xl-5 {\n    width: 41.66667%; }\n  .col-xl-6 {\n    width: 50%; }\n  .col-xl-7 {\n    width: 58.33333%; }\n  .col-xl-8 {\n    width: 66.66667%; }\n  .col-xl-9 {\n    width: 75%; }\n  .col-xl-10 {\n    width: 83.33333%; }\n  .col-xl-11 {\n    width: 91.66667%; }\n  .col-xl-12 {\n    width: 100%; }\n  .col-xl-pull-0 {\n    right: auto; }\n  .col-xl-pull-1 {\n    right: 8.33333%; }\n  .col-xl-pull-2 {\n    right: 16.66667%; }\n  .col-xl-pull-3 {\n    right: 25%; }\n  .col-xl-pull-4 {\n    right: 33.33333%; }\n  .col-xl-pull-5 {\n    right: 41.66667%; }\n  .col-xl-pull-6 {\n    right: 50%; }\n  .col-xl-pull-7 {\n    right: 58.33333%; }\n  .col-xl-pull-8 {\n    right: 66.66667%; }\n  .col-xl-pull-9 {\n    right: 75%; }\n  .col-xl-pull-10 {\n    right: 83.33333%; }\n  .col-xl-pull-11 {\n    right: 91.66667%; }\n  .col-xl-pull-12 {\n    right: 100%; }\n  .col-xl-push-0 {\n    left: auto; }\n  .col-xl-push-1 {\n    left: 8.33333%; }\n  .col-xl-push-2 {\n    left: 16.66667%; }\n  .col-xl-push-3 {\n    left: 25%; }\n  .col-xl-push-4 {\n    left: 33.33333%; }\n  .col-xl-push-5 {\n    left: 41.66667%; }\n  .col-xl-push-6 {\n    left: 50%; }\n  .col-xl-push-7 {\n    left: 58.33333%; }\n  .col-xl-push-8 {\n    left: 66.66667%; }\n  .col-xl-push-9 {\n    left: 75%; }\n  .col-xl-push-10 {\n    left: 83.33333%; }\n  .col-xl-push-11 {\n    left: 91.66667%; }\n  .col-xl-push-12 {\n    left: 100%; }\n  .col-xl-offset-0 {\n    margin-left: 0%; }\n  .col-xl-offset-1 {\n    margin-left: 8.33333%; }\n  .col-xl-offset-2 {\n    margin-left: 16.66667%; }\n  .col-xl-offset-3 {\n    margin-left: 25%; }\n  .col-xl-offset-4 {\n    margin-left: 33.33333%; }\n  .col-xl-offset-5 {\n    margin-left: 41.66667%; }\n  .col-xl-offset-6 {\n    margin-left: 50%; }\n  .col-xl-offset-7 {\n    margin-left: 58.33333%; }\n  .col-xl-offset-8 {\n    margin-left: 66.66667%; }\n  .col-xl-offset-9 {\n    margin-left: 75%; }\n  .col-xl-offset-10 {\n    margin-left: 83.33333%; }\n  .col-xl-offset-11 {\n    margin-left: 91.66667%; }\n  .col-xl-offset-12 {\n    margin-left: 100%; } }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	"use strict";

	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(9);

	var _docsHtml = __webpack_require__(11);

	var _docsHtml2 = _interopRequireDefault(_docsHtml);

	// import vuestrap dependencies

	__webpack_require__(12);

	__webpack_require__(15);

	__webpack_require__(22);

	// import external dependencies

	var _search = __webpack_require__(23);

	var _search2 = _interopRequireDefault(_search);

	// import utils

	var _utils = __webpack_require__(35);

	// import package.json meta data

	var _packageJson = __webpack_require__(37);

	var _packageJson2 = _interopRequireDefault(_packageJson);

	// export component object
	exports['default'] = {
	    template: _docsHtml2['default'],
	    replace: true,
	    data: function data() {
	        return {
	            currentView: '',
	            pkg: _packageJson2['default']
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./docs.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../autoprefixer-loader/index.js!./../../../../sass-loader/index.js!./../../../../vuestrap-theme-loader/index.js!./docs.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<!-- header -->\r\n<nav class=\"navbar navbar-fixed-top navbar-light bg-faded\">\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand text-center\" href=\"#/\">\r\n\t\t\t\t<img v-bind:src=\"'assets/vuestrap-logo.svg'\" alt=\"Vuestrap logo\">\r\n\t\t\t</a>\r\n\t\t\t<a class=\"navbar-brand text-center\" href=\"#/\">\r\n\t\t\t\tDocumentation\r\n\t\t\t</a>\r\n\t\t\t<ul class=\"nav navbar-nav pull-right\">\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a href=\"#/\" class=\"btn\">Introduction</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a href=\"{{pkg.homepage}}\" class=\"btn btn-success\" target=\"_blank\">Github</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n  </div><!-- /.container -->\r\n</nav><!-- /.navbar -->\r\n\r\n<!-- content -->\r\n<div class=\"container\">\r\n\t<div class=\"row row-offcanvas row-offcanvas-right\">\r\n\t\t<div class=\"col-xs-12 col-sm-9\">\r\n\t\t\t<component :is=\"currentView\"></component>\r\n    </div><!-- /col-xs-12 -->\r\n\r\n\t\t<!-- sidebar -->\r\n\t\t<div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\">\r\n\t\t\t<docs-search :list=\"routes\" :current-view=\"currentView\"></docs-search>\r\n\t\t</div><!--/sidebar-->\r\n\r\n\t</div><!--/row-->\r\n</div><!--/container-->";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(13);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: inline-block; }\n  .nav-link:focus, .nav-link:hover {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #818a91; }\n    .nav-link.disabled, .nav-link.disabled:focus, .nav-link.disabled:hover {\n      color: #818a91;\n      cursor: not-allowed;\n      background-color: transparent; }\n\n.nav-inline .nav-link + .nav-link {\n  margin-left: 1rem; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .nav-tabs .nav-item {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs .nav-item + .nav-item {\n      margin-left: .2rem; }\n  .nav-tabs .nav-link {\n    display: block;\n    padding: 0.5em 1em;\n    border: 1px solid transparent;\n    border-radius: 0.25rem 0.25rem 0 0; }\n    .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #eceeef #eceeef #ddd; }\n    .nav-tabs .nav-link.disabled, .nav-tabs .nav-link.disabled:focus, .nav-tabs .nav-link.disabled:hover {\n      color: #818a91;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active, .nav-tabs .nav-link.active:focus, .nav-tabs .nav-link.active:hover,\n  .nav-tabs .nav-item.open .nav-link,\n  .nav-tabs .nav-item.open .nav-link:focus,\n  .nav-tabs .nav-item.open .nav-link:hover {\n    color: #55595c;\n    background-color: #fff;\n    border-color: #ddd #ddd transparent; }\n\n.nav-pills::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.nav-pills .nav-item {\n  float: left; }\n  .nav-pills .nav-item + .nav-item {\n    margin-left: .2rem; }\n\n.nav-pills .nav-link {\n  display: block;\n  padding: 0.5em 1em;\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active, .nav-pills .nav-link.active:focus, .nav-pills .nav-link.active:hover,\n.nav-pills .nav-item.open .nav-link,\n.nav-pills .nav-item.open .nav-link:focus,\n.nav-pills .nav-item.open .nav-link:hover {\n  color: #fff;\n  cursor: default;\n  background-color: #563d7c; }\n\n.nav-stacked .nav-item {\n  display: block;\n  float: none; }\n  .nav-stacked .nav-item + .nav-item {\n    margin-top: .2rem;\n    margin-left: 0; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(16);

	__webpack_require__(18);

	__webpack_require__(13);

	__webpack_require__(20);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".navbar {\n  position: relative;\n  padding: 0.5rem 1rem; }\n  .navbar::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  @media (min-width: 544px) {\n    .navbar {\n      border-radius: 0.25rem; } }\n\n.navbar-full {\n  z-index: 1000; }\n  @media (min-width: 544px) {\n    .navbar-full {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 544px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0; }\n\n.navbar-fixed-bottom {\n  bottom: 0; }\n\n.navbar-sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1030;\n  width: 100%; }\n  @media (min-width: 544px) {\n    .navbar-sticky-top {\n      border-radius: 0; } }\n\n.navbar-brand {\n  float: left;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  margin-right: 1rem;\n  font-size: 1.25rem; }\n  .navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n\n.navbar-divider {\n  float: left;\n  width: 1px;\n  padding-top: .425rem;\n  padding-bottom: .425rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  overflow: hidden; }\n  .navbar-divider::before {\n    content: \"\\A0\"; }\n\n.navbar-toggler {\n  padding: .5rem .75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n@media (min-width: 544px) {\n  .navbar-toggleable-xs {\n    display: block !important; } }\n\n@media (min-width: 768px) {\n  .navbar-toggleable-sm {\n    display: block !important; } }\n\n@media (min-width: 992px) {\n  .navbar-toggleable-md {\n    display: block !important; } }\n\n.navbar-nav .nav-item {\n  float: left; }\n\n.navbar-nav .nav-link {\n  display: block;\n  padding-top: .425rem;\n  padding-bottom: .425rem; }\n  .navbar-nav .nav-link + .nav-link {\n    margin-left: 1rem; }\n\n.navbar-nav .nav-item + .nav-item {\n  margin-left: 1rem; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.8); }\n  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.8); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.3); }\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.6); }\n\n.navbar-light .navbar-nav .open > .nav-link, .navbar-light .navbar-nav .open > .nav-link:focus, .navbar-light .navbar-nav .open > .nav-link:hover,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link:focus,\n.navbar-light .navbar-nav .active > .nav-link:hover,\n.navbar-light .navbar-nav .nav-link.open,\n.navbar-light .navbar-nav .nav-link.open:focus,\n.navbar-light .navbar-nav .nav-link.open:hover,\n.navbar-light .navbar-nav .nav-link.active,\n.navbar-light .navbar-nav .nav-link.active:focus,\n.navbar-light .navbar-nav .nav-link.active:hover {\n  color: rgba(0, 0, 0, 0.8); }\n\n.navbar-light .navbar-divider {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.navbar-dark .navbar-brand {\n  color: white; }\n  .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n    color: white; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n\n.navbar-dark .navbar-nav .open > .nav-link, .navbar-dark .navbar-nav .open > .nav-link:focus, .navbar-dark .navbar-nav .open > .nav-link:hover,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link:focus,\n.navbar-dark .navbar-nav .active > .nav-link:hover,\n.navbar-dark .navbar-nav .nav-link.open,\n.navbar-dark .navbar-nav .nav-link.open:focus,\n.navbar-dark .navbar-nav .nav-link.open:hover,\n.navbar-dark .navbar-nav .nav-link.active,\n.navbar-dark .navbar-nav .nav-link.active:focus,\n.navbar-dark .navbar-nav .nav-link.active:hover {\n  color: white; }\n\n.navbar-dark .navbar-divider {\n  background-color: rgba(255, 255, 255, 0.075); }\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".btn {\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:focus, .btn:hover {\n    text-decoration: none; }\n  .btn.focus {\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    background-image: none;\n    outline: 0; }\n  .btn.disabled, .btn:disabled {\n    cursor: not-allowed;\n    opacity: .65; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #3e2c5a;\n    border-color: #3a2953; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #3e2c5a;\n    border-color: #3a2953; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #3e2c5a;\n    border-color: #3a2953;\n    background-image: none; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #2e2042;\n      border-color: #1b1327; }\n  .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary:disabled:focus, .btn-primary:disabled.focus {\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .btn-primary.disabled:hover, .btn-primary:disabled:hover {\n    background-color: #563d7c;\n    border-color: #563d7c; }\n\n.btn-secondary {\n  color: #373a3c;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-secondary:hover {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-secondary:active, .btn-secondary.active,\n  .open > .btn-secondary.dropdown-toggle {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad;\n    background-image: none; }\n    .btn-secondary:active:hover, .btn-secondary:active:focus, .btn-secondary:active.focus, .btn-secondary.active:hover, .btn-secondary.active:focus, .btn-secondary.active.focus,\n    .open > .btn-secondary.dropdown-toggle:hover,\n    .open > .btn-secondary.dropdown-toggle:focus,\n    .open > .btn-secondary.dropdown-toggle.focus {\n      color: #373a3c;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-secondary.disabled:focus, .btn-secondary.disabled.focus, .btn-secondary:disabled:focus, .btn-secondary:disabled.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-secondary.disabled:hover, .btn-secondary:disabled:hover {\n    background-color: #fff;\n    border-color: #ccc; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2;\n    background-image: none; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1f7e9a; }\n  .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info:disabled:focus, .btn-info:disabled.focus {\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info.disabled:hover, .btn-info:disabled:hover {\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n\n.btn-success {\n  color: #fff;\n  background-color: #42b983;\n  border-color: #42b983; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #359368;\n    border-color: #328c63; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #359368;\n    border-color: #328c63; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #359368;\n    border-color: #328c63;\n    background-image: none; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #2b7956;\n      border-color: #205b40; }\n  .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success:disabled:focus, .btn-success:disabled.focus {\n    background-color: #42b983;\n    border-color: #42b983; }\n  .btn-success.disabled:hover, .btn-success:disabled:hover {\n    background-color: #42b983;\n    border-color: #42b983; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316;\n    background-image: none; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #b06d0f; }\n  .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning:disabled:focus, .btn-warning:disabled.focus {\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning.disabled:hover, .btn-warning:disabled:hover {\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a;\n    background-image: none; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #8b211e; }\n  .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger:disabled:focus, .btn-danger:disabled.focus {\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger.disabled:hover, .btn-danger:disabled:hover {\n    background-color: #d9534f;\n    border-color: #d9534f; }\n\n.btn-primary-outline {\n  color: #563d7c;\n  background-image: none;\n  background-color: transparent;\n  border-color: #563d7c; }\n  .btn-primary-outline:focus, .btn-primary-outline.focus, .btn-primary-outline:active, .btn-primary-outline.active,\n  .open > .btn-primary-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .btn-primary-outline:hover {\n    color: #fff;\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .btn-primary-outline.disabled:focus, .btn-primary-outline.disabled.focus, .btn-primary-outline:disabled:focus, .btn-primary-outline:disabled.focus {\n    border-color: #886ab5; }\n  .btn-primary-outline.disabled:hover, .btn-primary-outline:disabled:hover {\n    border-color: #886ab5; }\n\n.btn-secondary-outline {\n  color: #ccc;\n  background-image: none;\n  background-color: transparent;\n  border-color: #ccc; }\n  .btn-secondary-outline:focus, .btn-secondary-outline.focus, .btn-secondary-outline:active, .btn-secondary-outline.active,\n  .open > .btn-secondary-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-secondary-outline:hover {\n    color: #fff;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-secondary-outline.disabled:focus, .btn-secondary-outline.disabled.focus, .btn-secondary-outline:disabled:focus, .btn-secondary-outline:disabled.focus {\n    border-color: white; }\n  .btn-secondary-outline.disabled:hover, .btn-secondary-outline:disabled:hover {\n    border-color: white; }\n\n.btn-info-outline {\n  color: #5bc0de;\n  background-image: none;\n  background-color: transparent;\n  border-color: #5bc0de; }\n  .btn-info-outline:focus, .btn-info-outline.focus, .btn-info-outline:active, .btn-info-outline.active,\n  .open > .btn-info-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info-outline:hover {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info-outline.disabled:focus, .btn-info-outline.disabled.focus, .btn-info-outline:disabled:focus, .btn-info-outline:disabled.focus {\n    border-color: #b0e1ef; }\n  .btn-info-outline.disabled:hover, .btn-info-outline:disabled:hover {\n    border-color: #b0e1ef; }\n\n.btn-success-outline {\n  color: #42b983;\n  background-image: none;\n  background-color: transparent;\n  border-color: #42b983; }\n  .btn-success-outline:focus, .btn-success-outline.focus, .btn-success-outline:active, .btn-success-outline.active,\n  .open > .btn-success-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #42b983;\n    border-color: #42b983; }\n  .btn-success-outline:hover {\n    color: #fff;\n    background-color: #42b983;\n    border-color: #42b983; }\n  .btn-success-outline.disabled:focus, .btn-success-outline.disabled.focus, .btn-success-outline:disabled:focus, .btn-success-outline:disabled.focus {\n    border-color: #8bd6b4; }\n  .btn-success-outline.disabled:hover, .btn-success-outline:disabled:hover {\n    border-color: #8bd6b4; }\n\n.btn-warning-outline {\n  color: #f0ad4e;\n  background-image: none;\n  background-color: transparent;\n  border-color: #f0ad4e; }\n  .btn-warning-outline:focus, .btn-warning-outline.focus, .btn-warning-outline:active, .btn-warning-outline.active,\n  .open > .btn-warning-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning-outline:hover {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning-outline.disabled:focus, .btn-warning-outline.disabled.focus, .btn-warning-outline:disabled:focus, .btn-warning-outline:disabled.focus {\n    border-color: #f8d9ac; }\n  .btn-warning-outline.disabled:hover, .btn-warning-outline:disabled:hover {\n    border-color: #f8d9ac; }\n\n.btn-danger-outline {\n  color: #d9534f;\n  background-image: none;\n  background-color: transparent;\n  border-color: #d9534f; }\n  .btn-danger-outline:focus, .btn-danger-outline.focus, .btn-danger-outline:active, .btn-danger-outline.active,\n  .open > .btn-danger-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger-outline:hover {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger-outline.disabled:focus, .btn-danger-outline.disabled.focus, .btn-danger-outline:disabled:focus, .btn-danger-outline:disabled.focus {\n    border-color: #eba5a3; }\n  .btn-danger-outline.disabled:hover, .btn-danger-outline:disabled:hover {\n    border-color: #eba5a3; }\n\n.btn-link {\n  font-weight: normal;\n  color: #563d7c;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {\n    background-color: transparent; }\n  .btn-link, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover {\n    border-color: transparent; }\n  .btn-link:focus, .btn-link:hover {\n    color: #322449;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link:disabled:focus, .btn-link:disabled:hover {\n    color: #818a91;\n    text-decoration: none; }\n\n.btn-lg {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem; }\n\n.btn-sm {\n  padding: 0.25rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #55595c;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem; }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: none; }\n  .form-control::-webkit-input-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control::placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #eceeef;\n    opacity: 1; }\n  .form-control:disabled {\n    cursor: not-allowed; }\n\n.form-control-file,\n.form-control-range {\n  display: block; }\n\n.form-control-label {\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 2.25rem; }\n  input[type=\"date\"].input-sm,\n  .input-group-sm input[type=\"date\"].form-control,\n  input[type=\"time\"].input-sm,\n  .input-group-sm\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-sm,\n  .input-group-sm\n  input[type=\"month\"].form-control {\n    line-height: 1.8625rem; }\n  input[type=\"date\"].input-lg,\n  .input-group-lg input[type=\"date\"].form-control,\n  input[type=\"time\"].input-lg,\n  .input-group-lg\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-lg,\n  .input-group-lg\n  input[type=\"month\"].form-control {\n    line-height: 3.16667rem; } }\n\n.form-control-static {\n  min-height: 2.25rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0; }\n  .form-control-static.form-control-sm, .form-control-static.form-control-lg {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.form-control-lg {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem; }\n  .radio label,\n  .checkbox label {\n    padding-left: 1.25rem;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n    .radio label input:only-child,\n    .checkbox label input:only-child {\n      position: static; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: .25rem;\n  margin-left: -1.25rem; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -.25rem; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: .75rem; }\n\ninput[type=\"radio\"]:disabled, input[type=\"radio\"].disabled,\ninput[type=\"checkbox\"]:disabled,\ninput[type=\"checkbox\"].disabled {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\n.checkbox-inline.disabled {\n  cursor: not-allowed; }\n\n.radio.disabled label,\n.checkbox.disabled label {\n  cursor: not-allowed; }\n\n.form-control-success,\n.form-control-warning,\n.form-control-danger {\n  padding-right: 2.25rem;\n  background-repeat: no-repeat;\n  background-position: center right 0.5625rem;\n  background-size: 1.4625rem 1.4625rem; }\n\n.has-success .text-help,\n.has-success .form-control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #42b983; }\n\n.has-success .form-control {\n  border-color: #42b983; }\n\n.has-success .input-group-addon {\n  color: #42b983;\n  border-color: #42b983;\n  background-color: #d6f1e5; }\n\n.has-success .form-control-feedback {\n  color: #42b983; }\n\n.has-success .form-control-success {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjNWNiODVjIiBkPSJNMjMzLjggNjEwYy0xMy4zIDAtMjYtNi0zNC0xNi44TDkwLjUgNDQ4LjhDNzYuMyA0MzAgODAgNDAzLjMgOTguOCAzODljMTguOC0xNC4yIDQ1LjUtMTAuNCA1OS44IDguNGw3MiA5NUw0NTEuMyAyNDJjMTIuNS0yMCAzOC44LTI2LjIgNTguOC0xMy43IDIwIDEyLjQgMjYgMzguNyAxMy43IDU4LjhMMjcwIDU5MGMtNy40IDEyLTIwLjIgMTkuNC0zNC4zIDIwaC0yeiIvPjwvc3ZnPg==\"); }\n\n.has-warning .text-help,\n.has-warning .form-control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #f0ad4e; }\n\n.has-warning .form-control {\n  border-color: #f0ad4e; }\n\n.has-warning .input-group-addon {\n  color: #f0ad4e;\n  border-color: #f0ad4e;\n  background-color: white; }\n\n.has-warning .form-control-feedback {\n  color: #f0ad4e; }\n\n.has-warning .form-control-warning {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZjBhZDRlIiBkPSJNNjAzIDY0MC4ybC0yNzguNS01MDljLTMuOC02LjYtMTAuOC0xMC42LTE4LjUtMTAuNnMtMTQuNyA0LTE4LjUgMTAuNkw5IDY0MC4yYy0zLjcgNi41LTMuNiAxNC40LjIgMjAuOCAzLjggNi41IDEwLjggMTAuNCAxOC4zIDEwLjRoNTU3YzcuNiAwIDE0LjYtNCAxOC40LTEwLjQgMy41LTYuNCAzLjYtMTQuNCAwLTIwLjh6bS0yNjYuNC0zMGgtNjEuMlY1NDloNjEuMnY2MS4yem0wLTEwN2gtNjEuMlYzMDRoNjEuMnYxOTl6Ii8+PC9zdmc+\"); }\n\n.has-danger .text-help,\n.has-danger .form-control-label,\n.has-danger .radio,\n.has-danger .checkbox,\n.has-danger .radio-inline,\n.has-danger .checkbox-inline,\n.has-danger.radio label,\n.has-danger.checkbox label,\n.has-danger.radio-inline label,\n.has-danger.checkbox-inline label {\n  color: #d9534f; }\n\n.has-danger .form-control {\n  border-color: #d9534f; }\n\n.has-danger .input-group-addon {\n  color: #d9534f;\n  border-color: #d9534f;\n  background-color: #fdf7f7; }\n\n.has-danger .form-control-feedback {\n  color: #d9534f; }\n\n.has-danger .form-control-danger {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZDk1MzRmIiBkPSJNNDQ3IDU0NC40Yy0xNC40IDE0LjQtMzcuNiAxNC40LTUyIDBsLTg5LTkyLjctODkgOTIuN2MtMTQuNSAxNC40LTM3LjcgMTQuNC01MiAwLTE0LjQtMTQuNC0xNC40LTM3LjYgMC01Mmw5Mi40LTk2LjMtOTIuNC05Ni4zYy0xNC40LTE0LjQtMTQuNC0zNy42IDAtNTJzMzcuNi0xNC4zIDUyIDBsODkgOTIuOCA4OS4yLTkyLjdjMTQuNC0xNC40IDM3LjYtMTQuNCA1MiAwIDE0LjMgMTQuNCAxNC4zIDM3LjYgMCA1MkwzNTQuNiAzOTZsOTIuNCA5Ni40YzE0LjQgMTQuNCAxNC40IDM3LjYgMCA1MnoiLz48L3N2Zz4=\"); }\n\n@media (min-width: 544px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .form-control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(18);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(24);

	var _searchHtml = __webpack_require__(26);

	var _searchHtml2 = _interopRequireDefault(_searchHtml);

	__webpack_require__(27);

	__webpack_require__(32);

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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".vuestrap-docs-search .list-group-search {\n  background: #f7f7f9; }\n\n.vuestrap-docs-search .list-group-item.active {\n  color: #42b983;\n  background-color: transparent;\n  border-color: #42b983; }\n", ""]);

	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"vuestrap-docs-search list-group\">\r\n  <!-- search -->\r\n  <div class=\"list-group-item list-group-search\" v-if=\"list.length > showSearch\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" v-model=\"search\" autocomplete=\"off\">\r\n  </div>\r\n  <!-- components -->\r\n  <a href=\"#{{item.url}}\" \r\n    v-bind:class=\"{\r\n      'list-group-item': true, \r\n      active: currentView && item.id === currentView,\r\n    }\" \r\n    v-for=\"item in list | skipIntro | filterBy search in 'title'\">\r\n    {{item.title}}\r\n  </a>\r\n</div>";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(28);

	__webpack_require__(30);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".list-group {\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: .75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 0.25rem;\n    border-top-left-radius: 0.25rem; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.list-group-flush .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0; }\n\na.list-group-item,\nbutton.list-group-item {\n  width: 100%;\n  color: #555;\n  text-align: inherit; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:focus, a.list-group-item:hover,\n  button.list-group-item:focus,\n  button.list-group-item:hover {\n    color: #555;\n    text-decoration: none;\n    background-color: #f5f5f5; }\n\n.list-group-item.disabled, .list-group-item.disabled:focus, .list-group-item.disabled:hover {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: #eceeef; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text {\n    color: #818a91; }\n\n.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:focus .list-group-item-text, .list-group-item.active:hover .list-group-item-text {\n    color: #beaed7; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:focus, a.list-group-item-success:hover,\n  button.list-group-item-success:focus,\n  button.list-group-item-success:hover {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active, a.list-group-item-success.active:focus, a.list-group-item-success.active:hover,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:focus,\n  button.list-group-item-success.active:hover {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:focus, a.list-group-item-info:hover,\n  button.list-group-item-info:focus,\n  button.list-group-item-info:hover {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active, a.list-group-item-info.active:focus, a.list-group-item-info.active:hover,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:focus,\n  button.list-group-item-info.active:hover {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:focus, a.list-group-item-warning:hover,\n  button.list-group-item-warning:focus,\n  button.list-group-item-warning:hover {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:focus, a.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active:hover {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:focus, a.list-group-item-danger:hover,\n  button.list-group-item-danger:focus,\n  button.list-group-item-danger:hover {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:focus, a.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active:hover {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n", ""]);

	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".label {\n  display: inline-block;\n  padding: .25em .4em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n  .label:empty {\n    display: none; }\n\n.btn .label {\n  position: relative;\n  top: -1px; }\n\na.label:focus, a.label:hover {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-pill {\n  padding-right: .6em;\n  padding-left: .6em;\n  border-radius: 10rem; }\n\n.label-default {\n  background-color: #818a91; }\n  .label-default[href]:focus, .label-default[href]:hover {\n    background-color: #687077; }\n\n.label-primary {\n  background-color: #563d7c; }\n  .label-primary[href]:focus, .label-primary[href]:hover {\n    background-color: #3e2c5a; }\n\n.label-success {\n  background-color: #42b983; }\n  .label-success[href]:focus, .label-success[href]:hover {\n    background-color: #359368; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:focus, .label-info[href]:hover {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:focus, .label-warning[href]:hover {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:focus, .label-danger[href]:hover {\n    background-color: #c9302c; }\n", ""]);

	// exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(18);

	__webpack_require__(20);

	__webpack_require__(33);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".c-input {\n  position: relative;\n  display: inline;\n  padding-left: 1.5rem;\n  color: #555;\n  cursor: pointer; }\n  .c-input > input {\n    position: absolute;\n    z-index: -1;\n    opacity: 0; }\n    .c-input > input:checked ~ .c-indicator {\n      color: #fff;\n      background-color: #0074d9; }\n    .c-input > input:focus ~ .c-indicator {\n      box-shadow: 0 0 0 .075rem #fff, 0 0 0 .2rem #0074d9; }\n    .c-input > input:active ~ .c-indicator {\n      color: #fff;\n      background-color: #84c6ff; }\n  .c-input + .c-input {\n    margin-left: 1rem; }\n\n.c-indicator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  font-size: 65%;\n  line-height: 1rem;\n  color: #eee;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #eee;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%; }\n\n.c-checkbox .c-indicator {\n  border-radius: .25rem; }\n\n.c-checkbox input:checked ~ .c-indicator {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=); }\n\n.c-checkbox input:indeterminate ~ .c-indicator {\n  background-color: #0074d9;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOCA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDN2Mmg4VjNIMHoiLz4NCjwvc3ZnPg0K); }\n\n.c-radio .c-indicator {\n  border-radius: 50%; }\n\n.c-radio input:checked ~ .c-indicator {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQsMUMyLjMsMSwxLDIuMywxLDRzMS4zLDMsMywzczMtMS4zLDMtM1M1LjcsMSw0LDF6Ii8+DQo8L3N2Zz4NCg==); }\n\n.c-inputs-stacked .c-input {\n  display: inline; }\n  .c-inputs-stacked .c-input::after {\n    display: block;\n    margin-bottom: .25rem;\n    content: \"\"; }\n  .c-inputs-stacked .c-input + .c-input {\n    margin-left: 0; }\n\n.c-select {\n  display: inline-block;\n  max-width: 100%;\n  padding: .375rem 1.75rem .375rem .75rem;\n  padding-right: .75rem \\9;\n  vertical-align: middle;\n  background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC) no-repeat right 0.75rem center;\n  background-image: none \\9;\n  background-size: 8px 10px;\n  border: 1px solid #ccc;\n  -moz-appearance: none;\n  -webkit-appearance: none; }\n  .c-select:focus {\n    border-color: #51a7e8;\n    outline: none; }\n  .c-select::-ms-expand {\n    opacity: 0; }\n\n.c-select-sm {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  font-size: 12px; }\n  .c-select-sm:not([multiple]) {\n    height: 26px;\n    min-height: 26px; }\n\n.file {\n  position: relative;\n  display: inline-block;\n  height: 2.5rem;\n  cursor: pointer; }\n\n.file input {\n  min-width: 14rem;\n  margin: 0;\n  filter: alpha(opacity=0);\n  opacity: 0; }\n\n.file-custom {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  border: .075rem solid #ddd;\n  border-radius: .25rem; }\n\n.file-custom::after {\n  content: \"Choose file...\"; }\n\n.file-custom::before {\n  position: absolute;\n  top: -.075rem;\n  right: -.075rem;\n  bottom: -.075rem;\n  z-index: 6;\n  display: block;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  content: \"Browse\";\n  background-color: #eee;\n  border: .075rem solid #ddd;\n  border-radius: 0 .25rem .25rem 0; }\n", ""]);

	// exports


/***/ },
/* 35 */
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

	var _director = __webpack_require__(36);

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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	

	//
	// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
	// Version 1.2.6
	'use strict';

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

	    check: function check() {
	      var h = dloc.hash;
	      if (h != this.hash) {
	        this.hash = h;
	        this.onHashChanged();
	      }
	    },

	    fire: function fire() {
	      if (this.mode === 'modern') {
	        this.history === true ? window.onpopstate() : window.onhashchange();
	      } else {
	        this.onHashChanged();
	      }
	    },

	    init: function init(fn, history) {
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
	      if ('onhashchange' in window && (document.documentMode === undefined || document.documentMode > 7)) {
	        // At least for now HTML5 history is available for 'modern' browsers only
	        if (this.history === true) {
	          // There is an old bug in Chrome that causes onpopstate to fire even
	          // upon initial page load. Since the handler is run manually in init(),
	          // this would cause Chrome to run it twise. Currently the only
	          // workaround seems to be to set the handler after the initial page load
	          // http://code.google.com/p/chromium/issues/detail?id=63040
	          setTimeout(function () {
	            window.onpopstate = onchange;
	          }, 500);
	        } else {
	          window.onhashchange = onchange;
	        }
	        this.mode = 'modern';
	      } else {
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

	        window.setInterval(function () {
	          self.check();
	        }, 50);

	        this.onHashChanged = onchange;
	        this.mode = 'legacy';
	      }

	      Router.listeners.push(fn);

	      return this.mode;
	    },

	    destroy: function destroy(fn) {
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

	    setHash: function setHash(s) {
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
	        dloc.hash = s[0] === '/' ? s : '/' + s;
	      }
	      return this;
	    },

	    writeFrame: function writeFrame(s) {
	      // IE support...
	      var f = document.getElementById('state-frame');
	      var d = f.contentDocument || f.contentWindow.document;
	      d.open();
	      d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
	      d.close();
	    },

	    syncHash: function syncHash() {
	      // IE support...
	      var s = this._hash;
	      if (s != dloc.hash) {
	        dloc.hash = s;
	      }
	      return this;
	    },

	    onHashChanged: function onHashChanged() {}
	  };

	  var Router = exports.Router = function (routes) {
	    if (!(this instanceof Router)) return new Router(routes);

	    this.params = {};
	    this.routes = {};
	    this.methods = ['on', 'once', 'after', 'before'];
	    this.scope = [];
	    this._methods = {};

	    this._insert = this.insert;
	    this.insert = this.insertEx;

	    this.historySupport = (window.history != null ? window.history.pushState : null) != null;

	    this.configure();
	    this.mount(routes || {});
	  };

	  Router.prototype.init = function (r) {
	    var self = this,
	        routeTo;
	    this.handler = function (onChangeEvent) {
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
	    } else {
	      if (this.convert_hash_in_init) {
	        // Use hash as route
	        routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
	        if (routeTo) {
	          window.history.replaceState({}, document.title, routeTo);
	        }
	      } else {
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
	    if (v.charAt(1) === '/') {
	      v = v.slice(1);
	    }
	    return v.slice(1, v.length).split("/");
	  };

	  Router.prototype.setRoute = function (i, v, val) {
	    var url = this.explode();

	    if (typeof i === 'number' && typeof v === 'string') {
	      url[i] = v;
	    } else if (typeof val === 'string') {
	      url.splice(i, v, s);
	    } else {
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
	  Router.prototype.insertEx = function (method, path, route, parent) {
	    if (method === "once") {
	      method = "on";
	      route = (function (route) {
	        var once = false;
	        return function () {
	          if (once) return;
	          once = true;
	          return route.apply(this, arguments);
	        };
	      })(route);
	    }
	    return this._insert(method, path, route, parent);
	  };

	  Router.prototype.getRoute = function (v) {
	    var ret = v;

	    if (typeof v === "number") {
	      ret = this.explode()[v];
	    } else if (typeof v === "string") {
	      var h = this.explode();
	      ret = h.indexOf(v);
	    } else {
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
	      iterator(arr[completed], function (err) {
	        if (err || err === false) {
	          callback(err);
	          callback = function () {};
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
	    var matches,
	        last = 0,
	        out = "";
	    while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
	      last = matches.index + matches[0].length;
	      matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
	      out += str.substr(0, matches.index) + matches[0];
	    }
	    str = out += str.substr(last);
	    var captures = str.match(/:([^\/]+)/ig),
	        capture,
	        length;
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
	    var last = 0,
	        left = 0,
	        right = 0,
	        start = (start || "(").toString(),
	        stop = (stop || ")").toString(),
	        i;
	    for (i = 0; i < routes.length; i++) {
	      var chunk = routes[i];
	      if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && ! ~chunk.indexOf(stop, last) || ! ~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
	        left = chunk.indexOf(start, last);
	        right = chunk.indexOf(stop, last);
	        if (~left && ! ~right || ! ~left && ~right) {
	          var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
	          routes = [tmp].concat(routes.slice((i || 1) + 1));
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

	  Router.prototype.configure = function (options) {
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

	  Router.prototype.param = function (token, matcher) {
	    if (token[0] !== ":") {
	      token = ":" + token;
	    }
	    var compiled = new RegExp(token, "g");
	    this.params[token] = function (str) {
	      return str.replace(compiled, matcher.source || matcher);
	    };
	    return this;
	  };

	  Router.prototype.on = Router.prototype.route = function (method, path, route) {
	    var self = this;
	    if (!route && typeof path == "function") {
	      route = path;
	      path = method;
	      method = "on";
	    }
	    if (Array.isArray(path)) {
	      return path.forEach(function (p) {
	        self.on(method, p, route);
	      });
	    }
	    if (path.source) {
	      path = path.source.replace(/\\\//ig, "/");
	    }
	    if (Array.isArray(method)) {
	      return method.forEach(function (m) {
	        self.on(m.toLowerCase(), path, route);
	      });
	    }
	    path = path.split(new RegExp(this.delimiter));
	    path = terminator(path, this.delimiter);
	    this.insert(method, this.scope.concat(path), route);
	  };

	  Router.prototype.path = function (path, routesFn) {
	    var self = this,
	        length = this.scope.length;
	    if (path.source) {
	      path = path.source.replace(/\\\//ig, "/");
	    }
	    path = path.split(new RegExp(this.delimiter));
	    path = terminator(path, this.delimiter);
	    this.scope = this.scope.concat(path);
	    routesFn.call(this, this);
	    this.scope.splice(length, path.length);
	  };

	  Router.prototype.dispatch = function (method, path, callback) {
	    var self = this,
	        fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""),
	        invoked = this._invoked,
	        after;
	    this._invoked = true;
	    if (!fns || fns.length === 0) {
	      this.last = [];
	      if (typeof this.notfound === "function") {
	        this.invoke([this.notfound], {
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
	    after = this.every && this.every.after ? [this.every.after].concat(this.last) : [this.last];
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

	  Router.prototype.invoke = function (fns, thisArg, callback) {
	    var self = this;
	    var apply;
	    if (this.async) {
	      apply = function (fn, next) {
	        if (Array.isArray(fn)) {
	          return _asyncEverySeries(fn, apply, next);
	        } else if (typeof fn == "function") {
	          fn.apply(thisArg, (fns.captures || []).concat(next));
	        }
	      };
	      _asyncEverySeries(fns, apply, function () {
	        if (callback) {
	          callback.apply(thisArg, arguments);
	        }
	      });
	    } else {
	      apply = function (fn) {
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

	  Router.prototype.traverse = function (method, path, routes, regexp, filter) {
	    var fns = [],
	        current,
	        exact,
	        match,
	        next,
	        that;
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
	      next = [[routes.before, routes[method]].filter(Boolean)];
	      next.after = [routes.after].filter(Boolean);
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
	          next = [[routes[r].before, routes[r][method]].filter(Boolean)];
	          next.after = [routes[r].after].filter(Boolean);
	          next.matched = true;
	          next.captures = match.slice(1);
	          if (this.recurse && routes === this.routes) {
	            next.push([routes.before, routes.on].filter(Boolean));
	            next.after = next.after.concat([routes.after].filter(Boolean));
	          }
	          return filterRoutes(next);
	        }
	        next = this.traverse(method, path, routes[r], current);
	        if (next.matched) {
	          if (next.length > 0) {
	            fns = fns.concat(next);
	          }
	          if (this.recurse) {
	            fns.push([routes[r].before, routes[r].on].filter(Boolean));
	            next.after = next.after.concat([routes[r].after].filter(Boolean));
	            if (routes === this.routes) {
	              fns.push([routes["before"], routes["on"]].filter(Boolean));
	              next.after = next.after.concat([routes["after"]].filter(Boolean));
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

	  Router.prototype.insert = function (method, path, route, parent) {
	    var methodType, parentType, isArray, nested, part;
	    path = path.filter(function (p) {
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
	          parent[method] = [parent[method], route];
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
	          parent[part][method] = [parent[part][method], route];
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

	  Router.prototype.extend = function (methods) {
	    var self = this,
	        len = methods.length,
	        i;
	    function extend(method) {
	      self._methods[method] = true;
	      self[method] = function () {
	        var extra = arguments.length === 1 ? [method, ""] : [method];
	        self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
	      };
	    }
	    for (i = 0; i < len; i++) {
	      extend(methods[i]);
	    }
	  };

	  Router.prototype.runlist = function (fns) {
	    var runlist = this.every && this.every.before ? [this.every.before].concat(_flatten(fns)) : _flatten(fns);
	    if (this.every && this.every.on) {
	      runlist.push(this.every.on);
	    }
	    runlist.captures = fns.captures;
	    runlist.source = fns.source;
	    return runlist;
	  };

	  Router.prototype.mount = function (routes, path) {
	    if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
	      return;
	    }
	    var self = this;
	    path = path || [];
	    if (!Array.isArray(path)) {
	      path = path.split(self.delimiter);
	    }
	    function insertOrMount(route, local) {
	      var rename = route,
	          parts = route.split(self.delimiter),
	          routeType = typeof routes[route],
	          isRoute = parts[0] === "" || !self._methods[parts[0]],
	          event = isRoute ? "on" : rename;
	      if (isRoute) {
	        rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [""])[0].length);
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
	})( true ? exports : window);
	//

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = {
		"name": "vuestrap-base-components",
		"version": "0.7.3",
		"description": "Web components that extend Bootstrap 4.",
		"library": "vuestrapBase",
		"repository": {
			"type": "git",
			"url": "git+https://github.com/kzima/vuestrap-base-components.git"
		},
		"scripts": {
			"dev": "webpack -w --colors --progress --config webpack.build.js --env dev",
			"dist": "webpack --colors --progress --config  webpack.build.js --env docs && webpack --colors --progress --config webpack.build.js --env dev && webpack --colors --progress --config webpack.build.js --env dist",
			"docs": "webpack-dev-server --inline --hot --quiet --config webpack.build.js --env docs"
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
		"peerDependencies": {
			"vuestrap": "^1.0.0",
			"vuestrap-icons": "^0.4.9"
		},
		"dependencies": {
			"vue": "^1.0.12"
		},
		"devDependencies": {
			"autoprefixer-loader": "^3.1.0",
			"babel-core": "^5.8.33",
			"babel-eslint": "^4.1.3",
			"babel-loader": "^5.3.3",
			"css-loader": "^0.21.0",
			"director": "^1.2.8",
			"extract-text-webpack-plugin": "^0.8.2",
			"highlightjs-loader": "^0.2.3",
			"html-loader": "^0.3.0",
			"json-loader": "^0.5.4",
			"node-sass": "^3.4.1",
			"optimist": "^0.6.1",
			"sass-loader": "^3.1.1",
			"style-loader": "^0.13.0",
			"vuestrap-docs": "^0.2.2",
			"vuestrap-theme-loader": "^0.1.2",
			"webpack": "^1.12.9",
			"webpack-dev-server": "^1.12.1"
		},
		"homepage": "https://github.com/kzima/vuestrap-base-components#readme"
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// import modules and pages
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _srcDocsIntroduction = __webpack_require__(39);

	var _srcDocsIntroduction2 = _interopRequireDefault(_srcDocsIntroduction);

	var _srcDocsAccordion = __webpack_require__(44);

	var _srcDocsAccordion2 = _interopRequireDefault(_srcDocsAccordion);

	var _srcDocsAlert = __webpack_require__(60);

	var _srcDocsAlert2 = _interopRequireDefault(_srcDocsAlert);

	var _srcDocsBreadcrumb = __webpack_require__(66);

	var _srcDocsBreadcrumb2 = _interopRequireDefault(_srcDocsBreadcrumb);

	var _srcDocsButtonGroup = __webpack_require__(75);

	var _srcDocsButtonGroup2 = _interopRequireDefault(_srcDocsButtonGroup);

	var _srcDocsButtonCheckbox = __webpack_require__(84);

	var _srcDocsButtonCheckbox2 = _interopRequireDefault(_srcDocsButtonCheckbox);

	var _srcDocsButtonRadio = __webpack_require__(91);

	var _srcDocsButtonRadio2 = _interopRequireDefault(_srcDocsButtonRadio);

	var _srcDocsButtons = __webpack_require__(97);

	var _srcDocsButtons2 = _interopRequireDefault(_srcDocsButtons);

	var _srcDocsCard = __webpack_require__(105);

	var _srcDocsCard2 = _interopRequireDefault(_srcDocsCard);

	var _srcDocsCarousel = __webpack_require__(116);

	var _srcDocsCarousel2 = _interopRequireDefault(_srcDocsCarousel);

	var _srcDocsCollapse = __webpack_require__(125);

	var _srcDocsCollapse2 = _interopRequireDefault(_srcDocsCollapse);

	var _srcDocsDropdown = __webpack_require__(129);

	var _srcDocsDropdown2 = _interopRequireDefault(_srcDocsDropdown);

	var _srcDocsDropdownSelect = __webpack_require__(140);

	var _srcDocsDropdownSelect2 = _interopRequireDefault(_srcDocsDropdownSelect);

	var _srcDocsFormCheckbox = __webpack_require__(148);

	var _srcDocsFormCheckbox2 = _interopRequireDefault(_srcDocsFormCheckbox);

	var _srcDocsFormRadio = __webpack_require__(158);

	var _srcDocsFormRadio2 = _interopRequireDefault(_srcDocsFormRadio);

	var _srcDocsFormInput = __webpack_require__(164);

	var _srcDocsFormInput2 = _interopRequireDefault(_srcDocsFormInput);

	var _srcDocsFormSelect = __webpack_require__(170);

	var _srcDocsFormSelect2 = _interopRequireDefault(_srcDocsFormSelect);

	var _srcDocsFormTextarea = __webpack_require__(176);

	var _srcDocsFormTextarea2 = _interopRequireDefault(_srcDocsFormTextarea);

	var _srcDocsImages = __webpack_require__(182);

	var _srcDocsImages2 = _interopRequireDefault(_srcDocsImages);

	var _srcDocsJumbotron = __webpack_require__(188);

	var _srcDocsJumbotron2 = _interopRequireDefault(_srcDocsJumbotron);

	var _srcDocsLabels = __webpack_require__(194);

	var _srcDocsLabels2 = _interopRequireDefault(_srcDocsLabels);

	var _srcDocsListGroup = __webpack_require__(201);

	var _srcDocsListGroup2 = _interopRequireDefault(_srcDocsListGroup);

	var _srcDocsMedia = __webpack_require__(209);

	var _srcDocsMedia2 = _interopRequireDefault(_srcDocsMedia);

	var _srcDocsModal = __webpack_require__(218);

	var _srcDocsModal2 = _interopRequireDefault(_srcDocsModal);

	var _srcDocsNav = __webpack_require__(227);

	var _srcDocsNav2 = _interopRequireDefault(_srcDocsNav);

	var _srcDocsNavbar = __webpack_require__(235);

	var _srcDocsNavbar2 = _interopRequireDefault(_srcDocsNavbar);

	var _srcDocsPager = __webpack_require__(241);

	var _srcDocsPager2 = _interopRequireDefault(_srcDocsPager);

	var _srcDocsPagination = __webpack_require__(250);

	var _srcDocsPagination2 = _interopRequireDefault(_srcDocsPagination);

	var _srcDocsPopover = __webpack_require__(259);

	var _srcDocsPopover2 = _interopRequireDefault(_srcDocsPopover);

	var _srcDocsProgress = __webpack_require__(268);

	var _srcDocsProgress2 = _interopRequireDefault(_srcDocsProgress);

	var _srcDocsTables = __webpack_require__(277);

	var _srcDocsTables2 = _interopRequireDefault(_srcDocsTables);

	var _srcDocsTabs = __webpack_require__(286);

	var _srcDocsTabs2 = _interopRequireDefault(_srcDocsTabs);

	var _srcDocsTooltip = __webpack_require__(292);

	var _srcDocsTooltip2 = _interopRequireDefault(_srcDocsTooltip);

	exports['default'] = {
		pages: [_srcDocsIntroduction2['default'], _srcDocsAccordion2['default'], _srcDocsAlert2['default'], _srcDocsBreadcrumb2['default'], _srcDocsButtonGroup2['default'], _srcDocsButtonCheckbox2['default'], _srcDocsButtonRadio2['default'], _srcDocsButtons2['default'], _srcDocsCard2['default'], _srcDocsCarousel2['default'], _srcDocsCollapse2['default'], _srcDocsDropdown2['default'], _srcDocsDropdownSelect2['default'], _srcDocsFormCheckbox2['default'], _srcDocsFormRadio2['default'], _srcDocsFormInput2['default'], _srcDocsFormSelect2['default'], _srcDocsFormTextarea2['default'], _srcDocsImages2['default'], _srcDocsJumbotron2['default'], _srcDocsLabels2['default'], _srcDocsListGroup2['default'], _srcDocsMedia2['default'], _srcDocsModal2['default'], _srcDocsNav2['default'], _srcDocsNavbar2['default'], _srcDocsPager2['default'], _srcDocsPagination2['default'], _srcDocsPopover2['default'], _srcDocsProgress2['default'], _srcDocsTables2['default'], _srcDocsTabs2['default'], _srcDocsTooltip2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _introductionHtml = __webpack_require__(40);

	var _introductionHtml2 = _interopRequireDefault(_introductionHtml);

	__webpack_require__(41);

	exports['default'] = {
		route: {
			url: '/',
			name: 'introduction',
			title: 'Intoduction'
		},
		data: function data() {
			return {
				pkg: this.$parent.pkg,
				componentNameCamelCase: 'alert',
				componentName: 'alert',
				componentNameSurfixed: 'vs-alert'
			};
		},
		template: _introductionHtml2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron\">\r\n  <h1>{{pkg.name}} <span class=\"label label-success\">{{pkg.version}}</span></h1>\r\n  <p>{{pkg.description}}</p>\r\n</div>\r\n<h2>Installation</h2>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-6\">\r\n    <h3>Compiled</h3>\r\n    <p>Minified CSS and JavaScript with no  documentation or original source files.</p>\r\n    <code>bower install {{pkg.name}} --save-dev</code>\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-6\">\r\n    <h3>Source</h3>\r\n    <p>Source Sass, JavaScript, and documentation files.</p>\r\n    <code>npm install {{pkg.name}} --save-dev</code>\r\n   </div>\r\n</div>\r\n\r\n<div class=\"m-b-lg\"></div>\r\n<h2>Usage</h2>\r\n<p>For compiled components, use it within your Vue instance like this:</p>\r\n<p><code>new Vue({ components: { '{{componentNameSurfixed}}': {{pkg.library}}.{{componentNameCamelCase}} }})</code></p>\r\n\r\n<div class=\"m-b\"></div>\r\n<strong>OR</strong>\r\n<div class=\"m-b\"></div>\r\n\r\n<p>If you chosen to work with source components, just import* desired component like so:</p>\r\n<p><code>import {{componentNameCamelCase}} from '{{pkg.name}}/src/components/{{componentName}}'</code></p>\r\n<p>and then load it in your Vue instance:</p>\r\n<p><code>new Vue({ components: { '{{componentNameSurfixed}}' : {{componentNameCamelCase}} }})</code></p>\r\n<p>*Note: You will need <a href=\"https://github.com/babel/babel-loader\">Babel Loader</a> in your Webpack config file to support ES6 syntax.</p>\r\n\r\n<div class=\"m-b-lg\"></div>\r\n<h2>Examples</h2>\r\n<ul>\r\n  <li><a href=\"examples/basic.html\" target=\"_blank\">Basic example of a landing page with selected components.</a></li>\r\n  <li><a href=\"http://kzima.github.io/vuestrap-starter/\" target=\"_blank\">Advanced example</a> with webpack config and theme implementation - (<a href=\"https://github.com/kzima/vuestrap-starter\" target=\"_blank\">source on github</a>)</li>\r\n</ul>";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(42);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #eceeef;\n  border-radius: 0.3rem; }\n\n.jumbotron-hr {\n  border-top-color: #d0d5d8; }\n\n@media (min-width: 544px) {\n  .jumbotron {\n    padding: 4rem 2rem; } }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n", ""]);

	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _accordionJson = __webpack_require__(45);

	var _accordionJson2 = _interopRequireDefault(_accordionJson);

	var _accordionHtml = __webpack_require__(46);

	var _accordionHtml2 = _interopRequireDefault(_accordionHtml);

	var _snippetHtml = __webpack_require__(47);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsCollapse = __webpack_require__(48);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

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
/* 45 */
/***/ function(module, exports) {

	module.exports = {
		"name": "accordion",
		"title": "Accordion",
		"description": "Extend the default collapse behavior to create an accordion. It requires both <code>id</code> and <code>group</code> for this to work.",
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
				"description": "You need to provide <code>id</code> for both <code>&lt;vs-collapse></code> and <code>&lt;vs-collapse-toggle></code> elements, so accordion knows which element to open."
			},
			{
				"name": "group",
				"type": "String",
				"default": "",
				"required": true,
				"description": "You need to provide <code>group</code> for both <code>&lt;vs-collapse></code> and <code>&lt;vs-collapse-toggle></code> elements, so accordion knows which elements to hide in the same group."
			}
		]
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-collapse-toggle id=\"item-1\" group=\"accordion-1\">\r\n\t\t\t<div><a href=\"#\">Collapsible Group Item #1</a></div>\r\n\t\t</vs-collapse-toggle>\r\n\t\t<vs-collapse id=\"item-1\" group=\"accordion-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>First</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</vs-collapse>\r\n\t\t<vs-collapse-toggle id=\"item-2\" group=\"accordion-1\">\r\n\t\t\t<div><a href=\"#\">Collapsible Group Item #2</a></div>\r\n\t\t</vs-collapse-toggle>\r\n\t\t<vs-collapse id=\"item-2\" group=\"accordion-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>Second</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</vs-collapse>\r\n\t\t<vs-collapse-toggle id=\"item-3\" group=\"accordion-1\">\r\n\t\t\t<div><a href=\"#\">Collapsible Group Item #3</a></div>\r\n\t\t</vs-collapse-toggle>\r\n\t\t<vs-collapse id=\"item-3\" group=\"accordion-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>Third</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</vs-collapse>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- item 1 --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse-toggle</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-1\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Collapsible Group Item #1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-1\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>First<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- item 2 --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse-toggle</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-2\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Collapsible Group Item #2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-2\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>Second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- item 3--&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse-toggle</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-3\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Collapsible Group Item #3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-3\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>Third<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse</span>&gt;</span>\r\n";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _collapseHtml = __webpack_require__(49);

	var _collapseHtml2 = _interopRequireDefault(_collapseHtml);

	var _utilsHelpersJs = __webpack_require__(50);

	// import polyfill for IE9

	__webpack_require__(51);

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
	      setTimeout(function () {
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
	      setTimeout(function () {
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
	  }
	};

	exports.collapse = collapse;
	// export component object
	var collapseToggle = {
	  template: '<span v-on:click.stop.prevent="toggle($event)"><slot></slot></span>',
	  replace: true,
	  computed: {},
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
	    toggle: function toggle() {
	      // if both attributes missing, ignore
	      if (!this.id && !this.group) return;

	      // broadcast accordion toggle if both id and group are set otherwise broadcast collapse
	      // we also use dispatch to tell other components about the change
	      if (this.id && this.group) {
	        this.$root.$broadcast('toggled::accordion', { id: this.id, group: this.group });
	        this.$root.$dispatch('toggled::accordion', { id: this.id, group: this.group });
	      } else {
	        this.$root.$broadcast('toggled::collapse', { id: this.id, group: this.group });
	        this.$root.$dispatch('toggled::collapse', { id: this.id, group: this.group });
	      }
	    }
	  }
	};
	exports.collapseToggle = collapseToggle;

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div id=\"{{id}}\" class=\"collapse\">\r\n  <slot></slot>\r\n</div>";

/***/ },
/* 50 */
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

/***/ },
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(53);

	var _demoHtml = __webpack_require__(55);

	var _demoHtml2 = _interopRequireDefault(_demoHtml);

	__webpack_require__(56);

	__webpack_require__(57);

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
	            'default': "",
	            required: true
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".vuestrap-docs-demo {\n  margin-bottom: 4rem; }\n  .vuestrap-docs-demo .code-demo {\n    position: relative;\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 2rem;\n    padding: 1rem;\n    padding-bottom: 0;\n    border: solid #f7f7f9;\n    border-width: .2rem; }\n    .vuestrap-docs-demo .code-demo > .inverse {\n      background-color: #898989;\n      padding: 0.2em; }\n  .vuestrap-docs-demo .highlight {\n    padding: 1rem;\n    margin: 1rem -1rem;\n    background-color: #f7f7f9;\n    margin-bottom: 0; }\n    .vuestrap-docs-demo .highlight pre {\n      margin-bottom: 0; }\n  .vuestrap-docs-demo .options > table code {\n    display: inline-block;\n    margin-right: 2px;\n    margin-bottom: 2px; }\n  .vuestrap-docs-demo .options > table td {\n    width: 10%; }\n  .vuestrap-docs-demo .options > table td:nth-child(1) {\n    min-width: 150px;\n    color: #563d7c; }\n  .vuestrap-docs-demo .options > table td:nth-child(5) {\n    width: 50%; }\n  .vuestrap-docs-demo [slot=\"controls\"] {\n    background-color: #f7f7f9;\n    padding: 1rem; }\n  .vuestrap-docs-demo [slot=\"controls\"] label {\n    margin-bottom: 0;\n    margin-right: 0.5rem; }\n  .vuestrap-docs-demo label.btn {\n    margin-bottom: 0; }\n  .vuestrap-docs-demo .label {\n    margin-right: 0.5rem; }\n  .vuestrap-docs-demo > .label {\n    background-color: #563d7c; }\n  .vuestrap-docs-demo > .alert {\n    border-right-color: #e6e6ec;\n    border-top-color: #e6e6ec;\n    border-bottom-color: #e6e6ec;\n    border-left-width: 5px;\n    background-color: transparent; }\n    .vuestrap-docs-demo > .alert .icons {\n      vertical-align: text-bottom; }\n  .vuestrap-docs-demo .tab-content .tab-pane {\n    padding: 1em 0; }\n", ""]);

	// exports


/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<section class=\"vuestrap-docs-demo\" id=\"{{meta.name}}\">\r\n\r\n\t<!-- Meta title -->\r\n\t<h2>{{meta.title}}</h2>\r\n\t<p v-html=\"meta.description\"></p>\r\n\r\n\t<div class=\"m-b\"></div>\r\n\r\n\t<div class=\"alert alert-info\" role=\"alert\" v-if=\"meta.note\">\r\n  \t<icon background=\"circle-outline\" size=\"sm\" variant=\"info\" text=\"i\"></icon> <span v-html=\"meta.note\"></span>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Component manipulators -->\r\n\t<slot name=\"controls\"></slot>\r\n\r\n\t<!-- Output & Code sample -->\r\n\t<div class=\"code-demo\">\r\n\r\n\t\t<slot class=\"markup\" name=\"markup\"></slot>\r\n\r\n\t\t<div class=\"highlight\">\r\n\t\t\t<pre><code v-html=\"snippet\"></code></pre>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Options -->\r\n\t<div class=\"options\" v-if=\"meta.options.length\">\r\n\t\t<h3>Options</h3>\r\n\t\t<table class='table table-responsive'>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Name</th>\r\n\t\t\t\t<th>Type</th>\r\n\t\t\t\t<th>Default</th>\r\n\t\t\t\t<th>Required</th>\r\n\t\t\t\t<th>Description</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr v-for=\"item in meta.options\">\r\n\t\t\t\t<td>{{item.name}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<code v-html=\"item.type\"></code>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td><code v-if=\"item.default\" v-html=\"item.default\"></code></td>\r\n\t\t\t\t<td>{{item.required == true ? 'yes' : ''}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p v-html=\"item.description\"></p>\r\n\t\t\t\t\t<p v-if=\"item.values\">\r\n\t\t\t\t\t\tPosible values:\r\n\t\t\t\t\t\t<code v-for=\"item in item.values\">{{item}}</code>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\t\r\n\t</div>\r\n\r\n\t<!-- Accessibility -->\r\n\t<div class=\"accessibility\" v-if=\"meta.accessibility\">\r\n\t\t<h3>Accessibility</h3>\r\n\t\t<p v-html=\"meta.accessibility\"></p>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Browser Support -->\r\n\t<div class=\"browserSupport\" v-if=\"meta.browserSupport\">\r\n\t\t<h3>Browser Support</h3>\r\n\t\t<span class=\"label label-primary\" v-for=\"item in meta.browserSupport.browsers\">{{ item }}</span>\r\n\t\t<p><small v-html=\"meta.browserSupport.note\"></small></p>\r\n\t</div>\r\n</section>\r\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(30);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(58);

	__webpack_require__(18);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".alert {\n  padding: 15px;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: bold; }\n\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d0e9c6;\n  color: #3c763d; }\n  .alert-success hr {\n    border-top-color: #c1e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bcdff1;\n  color: #31708f; }\n  .alert-info hr {\n    border-top-color: #a6d5ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faf2cc;\n  color: #8a6d3b; }\n  .alert-warning hr {\n    border-top-color: #f7ecb5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebcccc;\n  color: #a94442; }\n  .alert-danger hr {\n    border-top-color: #e4b9b9; }\n  .alert-danger .alert-link {\n    color: #843534; }\n", ""]);

	// exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _alertJson = __webpack_require__(61);

	var _alertJson2 = _interopRequireDefault(_alertJson);

	var _alertHtml = __webpack_require__(62);

	var _alertHtml2 = _interopRequireDefault(_alertHtml);

	var _snippetHtml = __webpack_require__(63);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsAlert = __webpack_require__(64);

	var _srcComponentsAlert2 = _interopRequireDefault(_srcComponentsAlert);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

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
/* 61 */
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
				"default": false,
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
				"default": false,
				"description": "Show/hide close button."
			}
		]
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>show <input type=\"checkbox\" v-model=\"show\"></label>\r\n\t\t<label>dismissible <input type=\"checkbox\" v-model=\"dismissible\"></label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-alert\r\n\t\t    :show.sync=\"show\"\r\n\t\t    :state=\"state\"\r\n\t\t    :message=\"message\"\r\n\t\t    :dismissible=\"dismissible\">\r\n\t\t    This is an alert\r\n\t\t</vs-alert>\r\n\t\t<template v-if=\"!show\">\r\n\t\t\t<button href='#' v-on:click=\"show = true\">Show alert again</button>\r\n\t\t</template>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-alert</span> \r\n  <span class=\"hljs-attribute\">show.sync</span>=<span class=\"hljs-value\">\"showVariable\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"state\"</span>\r\n  <span class=\"hljs-attribute\">dismissible</span>&gt;</span>\r\n  This is an alert\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-alert</span>&gt;</span>\r\n";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(57);

	var _alertHtml = __webpack_require__(65);

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
/* 65 */
/***/ function(module, exports) {

	module.exports = "<div class=\"alert {{alertState}} {{ dismissible ? 'alert-dismissible' : '' }} fade in\" role=\"alert\" v-show=\"show\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" v-if=\"dismissible\" v-on:click.stop=\"dismiss\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        <span class=\"sr-only\">Close</span>\r\n    </button>\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _breadcrumbJson = __webpack_require__(67);

	var _breadcrumbJson2 = _interopRequireDefault(_breadcrumbJson);

	var _breadcrumbHtml = __webpack_require__(68);

	var _breadcrumbHtml2 = _interopRequireDefault(_breadcrumbHtml);

	var _snippetHtml = __webpack_require__(69);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsBreadcrumb = __webpack_require__(70);

	var _srcComponentsBreadcrumb2 = _interopRequireDefault(_srcComponentsBreadcrumb);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

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
	      list: [{ text: 'Home', href: '#' }, { text: 'Library', active: true }]
	    };
	  },
	  components: {
	    vsBreadcrumb: _srcComponentsBreadcrumb2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 67 */
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
/* 68 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<vs-breadcrumb\r\n    \t\t:list=\"list\">\r\n\t\t\t</vs-breadcrumb>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\t\r\n</docs-demo>\t\r\n";

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-breadcrumb</span> \r\n  <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"[{text: 'Home', href: '#'}, {text: 'Library', active: true}]\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-breadcrumb</span>&gt;</span>\r\n";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(71);

	var _breadcrumbHtml = __webpack_require__(74);

	var _breadcrumbHtml2 = _interopRequireDefault(_breadcrumbHtml);

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
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(72);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(73);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".breadcrumb {\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #eceeef;\n  border-radius: 0.25rem; }\n  .breadcrumb::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .breadcrumb > li {\n    float: left; }\n    .breadcrumb > li + li::before {\n      padding-right: .5rem;\n      padding-left: .5rem;\n      color: #818a91;\n      content: \"/\"; }\n  .breadcrumb > .active {\n    color: #818a91; }\n", ""]);

	// exports


/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<ol class=\"breadcrumb\" style=\"margin-bottom: 5px;\">\r\n    <li v-for=\"item in list\" v-bind:class=\"{ active: active }\">\r\n        <a href=\"{{item.href}}\" v-if=\"!active\">{{item.text}}</a>\r\n        <span v-if=\"active\">{{item.text}}</span>\r\n    </li>\r\n</ol>";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonGroupJson = __webpack_require__(76);

	var _buttonGroupJson2 = _interopRequireDefault(_buttonGroupJson);

	var _buttonGroupHtml = __webpack_require__(77);

	var _buttonGroupHtml2 = _interopRequireDefault(_buttonGroupHtml);

	var _snippetHtml = __webpack_require__(78);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsButtonGroup = __webpack_require__(79);

	var _srcComponentsButtonGroup2 = _interopRequireDefault(_srcComponentsButtonGroup);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

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
	    vsButtonGroup: _srcComponentsButtonGroup2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 76 */
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
				"default": false,
				"required": false,
				"description": "Stacks buttons in vertical position."
			}
		]
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<vs-button-group :vertical=\"vertical\">\r\n\t\t\t  <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n\t\t\t  <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n\t\t\t  <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n\t\t\t</vs-button-group>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n</docs-demo>\t\r\n";

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-button-group</span> <span class=\"hljs-attribute\">vertical</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"button\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-secondary\"</span>&gt;</span>Left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"button\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-secondary\"</span>&gt;</span>Middle<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"button\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-secondary\"</span>&gt;</span>Right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-button-group</span>&gt;</span>\r\n";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(80);

	var _buttonGroupHtml = __webpack_require__(83);

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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(81);

	__webpack_require__(18);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(82);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n    .btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 0.3em 0.3em 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 0.3em 0.3em; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n", ""]);

	// exports


/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\" v-bind:class=\"{ 'btn-group-vertical': vertical }\">\r\n\t<slot></slot>\r\n</div>\r\n";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonCheckboxJson = __webpack_require__(85);

	var _buttonCheckboxJson2 = _interopRequireDefault(_buttonCheckboxJson);

	var _buttonCheckboxHtml = __webpack_require__(86);

	var _buttonCheckboxHtml2 = _interopRequireDefault(_buttonCheckboxHtml);

	var _snippetHtml = __webpack_require__(87);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsButtonCheckbox = __webpack_require__(88);

	var _srcComponentsButtonCheckbox2 = _interopRequireDefault(_srcComponentsButtonCheckbox);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      sizes: _utils.sizes,
	      variant: 'primary',
	      variants: _utils.variants
	    };
	  },
	  components: {
	    vsButtonCheckbox: _srcComponentsButtonCheckbox2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 85 */
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
				"default": false,
				"required": false,
				"description": "If set to true, a full object will be returned in the model. By default only <code>value</code> is returned."
			}
		]
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-button-checkbox\r\n\t\t  :list.sync=\"list\"\r\n\t\t  :model.sync=\"model\"\r\n\t\t  :size=\"size\"\r\n\t\t  :variant=\"variant\"\r\n\t\t  return-object>\r\n\t\t</vs-button-checkbox>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-button-checkbox</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">:list.sync</span>=<span class=\"hljs-value\">\" [{\r\n      text: 'First',\r\n      value: 'first',\r\n    }, {\r\n      text: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      text: 'Third',\r\n      value: 'third',\r\n    }]\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">return-object</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-button-checkbox</span>&gt;</span>\r\n";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(80);

	var _buttonCheckboxHtml = __webpack_require__(89);

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
/* 89 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\r\n  <label class=\"btn {{btnVariant}} {{btnSize}} {{ checked($index) ? 'active' : '' }}\" v-for=\"item in list\">\r\n  <input \r\n  \ttype=\"checkbox\" \r\n  \tvalue=\"{{item.value}}\" \r\n  \tautocomplete=\"off\" \r\n  \tv-model=\"item.checked\" \r\n  \tv-bind:disabled=\"item.disabled\">\r\n  \t{{item.text}}\r\n  </label>\r\n</div>\r\n";

/***/ },
/* 90 */
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonRadioJson = __webpack_require__(92);

	var _buttonRadioJson2 = _interopRequireDefault(_buttonRadioJson);

	var _buttonRadioHtml = __webpack_require__(93);

	var _buttonRadioHtml2 = _interopRequireDefault(_buttonRadioHtml);

	var _snippetHtml = __webpack_require__(94);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsButtonRadio = __webpack_require__(95);

	var _srcComponentsButtonRadio2 = _interopRequireDefault(_srcComponentsButtonRadio);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      sizes: _utils.sizes,
	      variant: 'primary',
	      variants: _utils.variants
	    };
	  },
	  components: {
	    vsButtonRadio: _srcComponentsButtonRadio2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 92 */
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
				"default": false,
				"required": false,
				"description": "If set to true, a full object will be returned in the model. By default only String <code>value</code> is returned."
			}
		]
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t\t<label>\r\n\t\t\t\tsize\r\n\t\t\t\t<select v-model=\"size\">\r\n\t\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\r\n\t\t\t<label>\r\n\t\t\t\tvariant\r\n\t\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-button-radio\r\n\t\t\t:model.sync=\"model\"\r\n\t    :list=\"list\"\r\n\t    :size=\"size\"\r\n\t    :variant=\"variant\"\r\n\t    return-object>\r\n\t\t</vs-button-radio>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\t\r\n</docs-demo>\t\r\n";

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-button-radio</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"[{\r\n      text: 'First',\r\n      value: 'first',\r\n    }, {\r\n      text: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      text: 'Third',\r\n      value: 'third',\r\n    }]\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">return-boject</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-button-radio</span>&gt;</span>\r\n";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(80);

	var _buttonRadioHtml = __webpack_require__(96);

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
/* 96 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\r\n    <label \r\n    \tclass=\"btn {{btnVariant}} {{btnSize}} {{ selection == item.value ? 'active' : '' }}\" \r\n    \tv-for=\"item in list\">\r\n      <input \r\n      \ttype=\"radio\" \r\n      \tname=\"options\" \r\n      \tvalue=\"{{item.value}}\" \r\n      \tautocomplete=\"off\" \r\n      \tv-model=\"selection\"> {{item.text}}\r\n    </label>\r\n</div>\r\n";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _buttonsJson = __webpack_require__(98);

	var _buttonsJson2 = _interopRequireDefault(_buttonsJson);

	var _buttonsHtml = __webpack_require__(99);

	var _buttonsHtml2 = _interopRequireDefault(_buttonsHtml);

	var _snippetHtml = __webpack_require__(100);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsButtons = __webpack_require__(101);

	var _srcComponentsButtons2 = _interopRequireDefault(_srcComponentsButtons);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      sizes: _utils.sizes,
	      variant: 'primary',
	      variants: _utils.variants
	    };
	  },
	  components: {
	    vsBtn: _srcComponentsButtons2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 98 */
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
				"default": false,
				"description": "Button spans over full width of a parent."
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"default": false,
				"description": "Make buttons look inactive by adding the disabled boolean attribute to any <code>&lt;vs-btn></code> element."
			},
			{
				"name": "inactive",
				"type": "Boolean",
				"default": false,
				"description": "Similar to disabled state, but it's clickable."
			},
			{
				"name": "href",
				"type": "String",
				"default": "",
				"description": "If <code>href</code> is provided, button is a regular <code>&lt;a></code> link with button spacing."
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
/* 99 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-btn :size=\"size\" variant=\"primary\">Primary</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"secondary\">Secondary</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"success\">Success</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"warning\">Warning</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"danger\">Danger</vs-btn>\r\n\t\t<hr>\r\n\t\t<vs-btn :size=\"size\" variant=\"primary-outline\">Primary</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"secondary-outline\">Secondary</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"success-outline\">Success</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"warning-outline\">Warning</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"danger-outline\">Danger</vs-btn>\r\n\t\t<hr>\r\n\t\t<vs-btn :size=\"size\" variant=\"link\">Button Link</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"link\" href=\"#\">Regular Link</vs-btn>\r\n\t\t<vs-btn :size=\"size\" variant=\"primary\" :disabled=\"true\">Disabled</vs-btn>\r\n\t\t<hr>\r\n\t\t<vs-btn :size=\"size\" variant=\"primary\" :block=\"true\">Block</vs-btn>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- colour variants --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>&gt;</span>Primary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"secondary\"</span>&gt;</span>Secondary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"success\"</span>&gt;</span>Success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"warning\"</span>&gt;</span>Warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"danger\"</span>&gt;</span>Danger<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- outlined variants --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary-outline\"</span>&gt;</span>Primary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"secondary-outline\"</span>&gt;</span>Secondary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"success-outline\"</span>&gt;</span>Success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"warning-outline\"</span>&gt;</span>Warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"danger-outline\"</span>&gt;</span>Danger<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- button types --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"link\"</span>&gt;</span>Button Link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"link\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Regular Link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>Disabled<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span> <span class=\"hljs-attribute\">block</span>&gt;</span>Block<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-btn</span>&gt;</span>\r\n";

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(22);

	var _buttonsHtml = __webpack_require__(102);

	var _buttonsHtml2 = _interopRequireDefault(_buttonsHtml);

	__webpack_require__(103);

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
	    href: {
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
	  methods: {}
	};
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<span class=\"btn {{btnVariant}} {{btnSize}} {{btnBlock}} {{inactive ? 'btn-inactive' : ''}}\" v-bind:disabled=\"disabled\">\r\n\t<template v-if=\"!href\"><slot></slot></template>\r\n\t<a v-bind:href=\"href\" class=\"{{btnDisabled}}\" v-bind:role=\"role\" v-if=\"href\"><slot></slot></a>\r\n</span>";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(104);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".btn.btn-inactive {\n  opacity: 0.8; }\n", ""]);

	// exports


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _cardJson = __webpack_require__(106);

	var _cardJson2 = _interopRequireDefault(_cardJson);

	var _cardHtml = __webpack_require__(107);

	var _cardHtml2 = _interopRequireDefault(_cardHtml);

	var _snippetHtml = __webpack_require__(108);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsCard = __webpack_require__(109);

	var _srcComponentsCard2 = _interopRequireDefault(_srcComponentsCard);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      variants: _utils.variants
	    };
	  },
	  components: {
	    vsCard: _srcComponentsCard2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 106 */
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
/* 107 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tvariant\r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\r\n\t\t<label>\r\n\t\t\ttype\r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\r\n\t\t<label>\r\n\t\t\talign\r\n\t\t\t<select v-model=\"align\">\r\n\t\t\t\t<option v-for=\"option in aligns\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<vs-card style=\"max-width: 350px;\" \r\n\t\t\t\t:variant=\"variant\"\r\n\t\t\t\t:type=\"type\"\r\n\t\t\t\t:align=\"align\">\r\n\t\t\t\t<img class=\"card-img img-fluid\" v-bind:src=\"'assets/card-350x150.png'\" alt=\"Card image cap\">\r\n\t\t\t  <div class=\"card-block\">\r\n\t\t\t    <h4 class=\"card-title\">Card title</h4>\r\n\t\t\t    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n\t\t\t  </div>\r\n\t\t  </vs-card>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-card</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"default\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"default\"</span> <span class=\"hljs-attribute\">align</span>=<span class=\"hljs-value\">\"left\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-img img-fluid\"</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"https://placehold.it/350x150\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"Card image cap\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-title\"</span>&gt;</span>Card title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-text\"</span>&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span>&gt;</span>Button<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-card</span>&gt;</span>\r\n";

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(110);

	var _cardHtml = __webpack_require__(115);

	var _cardHtml2 = _interopRequireDefault(_cardHtml);

	// import polyfill for IE9

	__webpack_require__(51);

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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(111);

	__webpack_require__(18);

	__webpack_require__(113);

	__webpack_require__(28);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(112);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".card {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem;\n  background-color: #fff;\n  border: 0.0625rem solid #e5e5e5;\n  border-radius: 0.25rem; }\n\n.card-block {\n  padding: 1.25rem; }\n\n.card-title {\n  margin-bottom: 0.75rem; }\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-radius: 0.25rem 0.25rem 0 0; }\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-radius: 0 0 0.25rem 0.25rem; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  background-color: #f5f5f5;\n  border-bottom: 0.0625rem solid #e5e5e5; }\n  .card-header:first-child {\n    border-radius: 0.1875rem 0.1875rem 0 0; }\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: #f5f5f5;\n  border-top: 0.0625rem solid #e5e5e5; }\n  .card-footer:last-child {\n    border-radius: 0 0 0.1875rem 0.1875rem; }\n\n.card-primary {\n  background-color: #563d7c;\n  border-color: #563d7c; }\n\n.card-success {\n  background-color: #42b983;\n  border-color: #42b983; }\n\n.card-info {\n  background-color: #5bc0de;\n  border-color: #5bc0de; }\n\n.card-warning {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e; }\n\n.card-danger {\n  background-color: #d9534f;\n  border-color: #d9534f; }\n\n.card-inverse .card-header,\n.card-inverse .card-footer {\n  border-bottom: 0.075rem solid rgba(255, 255, 255, 0.2); }\n\n.card-inverse .card-header,\n.card-inverse .card-footer,\n.card-inverse .card-title,\n.card-inverse .card-blockquote {\n  color: #fff; }\n\n.card-inverse .card-link,\n.card-inverse .card-text,\n.card-inverse .card-blockquote > footer {\n  color: rgba(255, 255, 255, 0.65); }\n\n.card-inverse .card-link:focus, .card-inverse .card-link:hover {\n  color: #fff; }\n\n.card-blockquote {\n  padding: 0;\n  margin-bottom: 0;\n  border-left: 0; }\n\n.card-img {\n  border-radius: 0.25rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img-top {\n  border-radius: 0.1875rem 0.1875rem 0 0; }\n\n.card-img-bottom {\n  border-radius: 0 0 0.1875rem 0.1875rem; }\n\n@media (min-width: 544px) {\n  .card-deck {\n    display: table;\n    table-layout: fixed;\n    border-spacing: 1.25rem 0; }\n    .card-deck .card {\n      display: table-cell;\n      width: 1%;\n      vertical-align: top; }\n  .card-deck-wrapper {\n    margin-right: -1.25rem;\n    margin-left: -1.25rem; } }\n\n@media (min-width: 544px) {\n  .card-group {\n    display: table;\n    width: 100%;\n    table-layout: fixed; }\n    .card-group .card {\n      display: table-cell;\n      vertical-align: top; }\n      .card-group .card + .card {\n        margin-left: 0;\n        border-left: 0; }\n      .card-group .card:first-child {\n        border-bottom-right-radius: 0;\n        border-top-right-radius: 0; }\n        .card-group .card:first-child .card-img-top {\n          border-top-right-radius: 0; }\n        .card-group .card:first-child .card-img-bottom {\n          border-bottom-right-radius: 0; }\n      .card-group .card:last-child {\n        border-bottom-left-radius: 0;\n        border-top-left-radius: 0; }\n        .card-group .card:last-child .card-img-top {\n          border-top-left-radius: 0; }\n        .card-group .card:last-child .card-img-bottom {\n          border-bottom-left-radius: 0; }\n      .card-group .card:not(:first-child):not(:last-child) {\n        border-radius: 0; }\n        .card-group .card:not(:first-child):not(:last-child) .card-img-top,\n        .card-group .card:not(:first-child):not(:last-child) .card-img-bottom {\n          border-radius: 0; } }\n\n@media (min-width: 544px) {\n  .card-columns {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 1.25rem;\n       -moz-column-gap: 1.25rem;\n            column-gap: 1.25rem; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n", ""]);

	// exports


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(114);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".img-fluid {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 0.3rem; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  line-height: 1.5;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #818a91; }\n", ""]);

	// exports


/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card {{cardVariant}} {{cardAlign}} {{cardInverse}}\">\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _carouselJson = __webpack_require__(117);

	var _carouselJson2 = _interopRequireDefault(_carouselJson);

	var _carouselHtml = __webpack_require__(118);

	var _carouselHtml2 = _interopRequireDefault(_carouselHtml);

	var _snippetHtml = __webpack_require__(119);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsCarousel = __webpack_require__(120);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
/* 117 */
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
				"default": true,
				"required": "false",
				"description": "Show/hide indicators."
			},
			{
				"name": "controls",
				"type": "Boolean",
				"default": true,
				"required": "false",
				"description": "Show/hide controls."
			}
		]
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>controls <input type=\"checkbox\" v-model=\"controls\"></label>\r\n\t\t<label>indicators <input type=\"checkbox\" v-model=\"indicators\"></label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-carousel\r\n\t\t\t\t:interval=\"5000\",\r\n\t\t\t\t:controls=\"controls\"\r\n\t\t\t\t:indicators=\"indicators\">\r\n\t\t\t  <vs-slide>\r\n\t\t\t    <img v-bind:src=\"'assets/carousel-one.png'\" class=\"img-fluid\">\r\n\t\t\t  </vs-slide>\r\n\t\t\t  <vs-slide>\r\n\t\t\t    <img v-bind:src=\"'assets/carousel-two.png'\" class=\"img-fluid\">\r\n\t\t\t  </vs-slide>\r\n\t\t\t  <vs-slide>\r\n\t\t\t    <img v-bind:src=\"'assets/carousel-three.png'\" class=\"img-fluid\">\r\n\t\t\t  </vs-slide>\r\n\t\t\t</vs-carousel>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-carousel</span> <span class=\"hljs-attribute\">:interval</span>=<span class=\"hljs-value\">\"5000\"</span> <span class=\"hljs-attribute\">controls</span>=<span class=\"hljs-value\">\"false\"</span> <span class=\"hljs-attribute\">indicators</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/1200x400?text=one\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-slide</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/1200x400?text=two\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-slide</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/1200x400?text=three\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-slide</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-carousel</span>&gt;</span>\r\n";

/***/ },
/* 120 */
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

	__webpack_require__(121);

	var _carouselHtml = __webpack_require__(124);

	var _carouselHtml2 = _interopRequireDefault(_carouselHtml);

	var _utilsHelpersJs = __webpack_require__(50);

	// import polyfill for IE9

	__webpack_require__(51);

	// this is directly linked to the bootstrap animation timing in _carusel.scss
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
	      setTimeout(function () {
	        _this2._items[oldVal].classList.remove(_this2.direction.outgoing, 'active');
	        _this2._items[val].classList.remove(_this2.direction.overlay);
	        _this2.animating = false;
	        // trigger an event
	        _this2.$dispatch('slid::carousel', val);
	      }, TRANSITION_DURATION);
	    }
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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(113);

	__webpack_require__(122);

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(123);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n  .carousel-inner > .carousel-item {\n    position: relative;\n    display: none;\n    -webkit-transition: .6s ease-in-out left;\n    transition: .6s ease-in-out left; }\n    .carousel-inner > .carousel-item > img,\n    .carousel-inner > .carousel-item > a > img {\n      display: inline-block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .carousel-item {\n        -webkit-transition: -webkit-transform .6s ease-in-out;\n        transition: -webkit-transform .6s ease-in-out;\n        transition: transform .6s ease-in-out;\n        transition: transform .6s ease-in-out, -webkit-transform .6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n                perspective: 1000px; }\n        .carousel-inner > .carousel-item.next, .carousel-inner > .carousel-item.active.right {\n          left: 0;\n          -webkit-transform: translate3d(100%, 0, 0);\n                  transform: translate3d(100%, 0, 0); }\n        .carousel-inner > .carousel-item.prev, .carousel-inner > .carousel-item.active.left {\n          left: 0;\n          -webkit-transform: translate3d(-100%, 0, 0);\n                  transform: translate3d(-100%, 0, 0); }\n        .carousel-inner > .carousel-item.next.left, .carousel-inner > .carousel-item.prev.right, .carousel-inner > .carousel-item.active {\n          left: 0;\n          -webkit-transform: translate3d(0, 0, 0);\n                  transform: translate3d(0, 0, 0); } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  opacity: 0.5; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n  .carousel-control.right {\n    right: 0;\n    left: auto;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n  .carousel-control:focus, .carousel-control:hover {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    position: absolute;\n    top: 50%;\n    z-index: 5;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    margin-top: -10px;\n    font-family: serif;\n    line-height: 1; }\n  .carousel-control .icon-prev {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev::before {\n    content: \"\\2039\"; }\n  .carousel-control .icon-next::before {\n    content: \"\\203A\"; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: transparent;\n    border: 1px solid #fff;\n    border-radius: 10px; }\n  .carousel-indicators .active {\n    width: 12px;\n    height: 12px;\n    margin: 0;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn {\n    text-shadow: none; }\n\n@media (min-width: 544px) {\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px; }\n  .carousel-control .icon-prev {\n    margin-left: -15px; }\n  .carousel-control .icon-next {\n    margin-right: -15px; }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n", ""]);

	// exports


/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\" v-on:mouseenter=\"pause()\" v-on:mouseleave=\"start()\">\r\n\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\" v-show=\"indicators\">\r\n        <li v-for=\"item in slides\" v-bind:class=\"{'active': item == index}\" v-on:click=\"changeSlide($index)\"></li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n        <slot></slot>\r\n    </div>\r\n\r\n    <!-- Controls -->\r\n    <a class=\"left carousel-control\" href=\"#\" role=\"button\" v-on:click.prevent=\"prev\" v-show=\"controls\">\r\n        <span class=\"icon-prev\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#\" role=\"button\" v-on:click.prevent=\"next\" v-show=\"controls\">\r\n        <span class=\"icon-next\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n\r\n</div>";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _collapseJson = __webpack_require__(126);

	var _collapseJson2 = _interopRequireDefault(_collapseJson);

	var _collapseHtml = __webpack_require__(127);

	var _collapseHtml2 = _interopRequireDefault(_collapseHtml);

	var _snippetHtml = __webpack_require__(128);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsCollapse = __webpack_require__(48);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

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
/* 126 */
/***/ function(module, exports) {

	module.exports = {
		"name": "collapse",
		"title": "Collapse",
		"description": "Click the buttons below to show and hide another element. It requires either <code>id</code> or <code>group</code> (but not both) for this to work.",
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
				"required": "false",
				"description": "With <code>id</code> you can control individual collapse elements. Use same unique <code>id</code> for both <code>&lt;vs-collapse></code> and <code>&lt;vs-collapse-toggle></code> elements."
			},
			{
				"name": "group",
				"type": "String",
				"default": "",
				"required": "false",
				"description": "With <code>group</code> you can control a number of collapse elements. Use same unique <code>group</code> for all <code>&lt;vs-collapse></code> and <code>&lt;vs-collapse-toggle></code> elements."
			}
		]
	};

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<vs-collapse-toggle id=\"collapse-1\">\r\n\t\t\t<button class=\"btn btn-default\">Toogle first</button>\r\n\t\t</vs-collapse-toggle>\r\n\t\t<vs-collapse-toggle id=\"collapse-2\">\r\n\t\t\t<button class=\"btn btn-default\">Toogle second</button>\r\n\t\t</vs-collapse-toggle>\r\n\t\t<vs-collapse-toggle group=\"group-1\">\r\n\t\t\t<button class=\"btn btn-default\">Toogle all</button>\r\n\t\t</vs-collapse-toggle>\r\n\t\t\r\n\t\t<div class=\"m-b\"></div>\r\n\r\n\t\t<vs-collapse id=\"collapse-1\" group=\"group-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>First</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</vs-collapse>\r\n\t\t<vs-collapse id=\"collapse-2\" group=\"group-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>Second</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</vs-collapse>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- triggers --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse-toggle</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"collapse-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-default\"</span>&gt;</span>Toogle first<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse-toggle</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"collapse-2\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-default\"</span>&gt;</span>Toogle second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse-toggle</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"group-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-default\"</span>&gt;</span>Toogle all<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse-toggle</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- item 1 --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"collapse-1\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"group-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>First<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- item 2 --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"collapse-2\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"group-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>Second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-collapse</span>&gt;</span>\r\n";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dropdownJson = __webpack_require__(130);

	var _dropdownJson2 = _interopRequireDefault(_dropdownJson);

	var _dropdownHtml = __webpack_require__(131);

	var _dropdownHtml2 = _interopRequireDefault(_dropdownHtml);

	var _snippetHtml = __webpack_require__(132);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsDropdown = __webpack_require__(133);

	var _srcComponentsDropdown2 = _interopRequireDefault(_srcComponentsDropdown);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      caret: true,
	      dropup: false,
	      size: 'md',
	      sizes: _utils.sizes,
	      variant: 'primary',
	      variants: _utils.variants
	    };
	  },
	  components: {
	    vsDropdown: _srcComponentsDropdown2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 130 */
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
				"name": "icon",
				"type": "String",
				"default": "",
				"required": false,
				"description": "Show icon to the left of the button text."
			},
			{
				"name": "caret",
				"type": "Boolean",
				"default": true,
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
				"default": false,
				"description": "Allow for dropdowns to go bottom up (aka, dropup-menu)"
			}
		]
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>caret <input type=\"checkbox\" v-model=\"caret\"></label>\r\n\t\t<label>dropup <input type=\"checkbox\" v-model=\"dropup\"></label>\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-dropdown\r\n\t\t\t  :text=\"'Action'\"\r\n\t\t\t  :variant=\"variant\"\r\n\t\t\t  :size=\"size\"\r\n\t\t\t  :caret=\"caret\"\r\n\t\t\t  :dropup=\"dropup\">\r\n\t\t\t  <ul class=\"dropdown-menu\">\r\n\t\t\t      <li><a class=\"dropdown-item\" href=\"#\" v-on:click.prevent=\"\">Completed</a></li>\r\n\t\t\t      <li><a class=\"dropdown-item\" href=\"#\" v-on:click.prevent=\"\">Pending</a></li>\r\n\t\t\t  </ul>\r\n\t\t\t</vs-dropdown>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-dropdown</span> \r\n  <span class=\"hljs-attribute\">text</span>=<span class=\"hljs-value\">\"Action\"</span>\r\n  <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">caret</span>=<span class=\"hljs-value\">\"false\"</span>\r\n  <span class=\"hljs-attribute\">dropup</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-menu\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-item\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Completed<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-item\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Pending<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-dropdown</span>&gt;</span>\r\n";

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(134);

	var _dropdownHtml = __webpack_require__(137);

	var _dropdownHtml2 = _interopRequireDefault(_dropdownHtml);

	__webpack_require__(138);

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
	    icon: {
	      type: String,
	      'default': ''
	    },
	    caret: {
	      type: Boolean,
	      'default': true
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
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(135);

	__webpack_require__(18);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(136);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: .25rem;\n  margin-left: .25rem;\n  vertical-align: middle;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-left: 0.3em solid transparent; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropup .dropdown-toggle::after {\n  border-top: 0;\n  border-bottom: 0.3em solid; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 1rem;\n  color: #373a3c;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n\n.dropdown-divider {\n  height: 1px;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  background-color: #e5e5e5; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #373a3c;\n  text-align: inherit;\n  white-space: nowrap;\n  background: none;\n  border: 0; }\n  .dropdown-item:focus, .dropdown-item:hover {\n    color: #2b2d2f;\n    text-decoration: none;\n    background-color: #f5f5f5; }\n  .dropdown-item.active, .dropdown-item.active:focus, .dropdown-item.active:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #563d7c;\n    outline: 0; }\n  .dropdown-item.disabled, .dropdown-item.disabled:focus, .dropdown-item.disabled:hover {\n    color: #818a91; }\n  .dropdown-item.disabled:focus, .dropdown-item.disabled:hover {\n    text-decoration: none;\n    cursor: not-allowed;\n    background-color: transparent;\n    background-image: none;\n    filter: \"progid:DXImageTransform.Microsoft.gradient(enabled = false)\"; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto; }\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #818a91;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 0.3em solid; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n", ""]);

	// exports


/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{ open: show, dropdown: !dropup, dropup: dropup}\">\r\n    <button\r\n        id=\"dLabel\"\r\n        class=\"btn dropdown {{dropdownToggle}} {{btnVariant}} {{btnSize}}\" role=\"button\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"{{show}}\"\r\n        v-on:click=\"toggle($event)\">\r\n        <span v-html=\"text\" v-show=\"text\"></span>\r\n        <span class=\"caret\"></span>\r\n    </button>\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(139);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".dropup {\n  display: inline-block; }\n", ""]);

	// exports


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dropdownSelectJson = __webpack_require__(141);

	var _dropdownSelectJson2 = _interopRequireDefault(_dropdownSelectJson);

	var _dropdownSelectHtml = __webpack_require__(142);

	var _dropdownSelectHtml2 = _interopRequireDefault(_dropdownSelectHtml);

	var _snippetHtml = __webpack_require__(143);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsDropdownSelect = __webpack_require__(144);

	var _srcComponentsDropdownSelect2 = _interopRequireDefault(_srcComponentsDropdownSelect);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      positions: _utils.positions,
	      size: 'md',
	      sizes: _utils.sizes,
	      variant: 'primary',
	      variants: _utils.variants
	    };
	  },
	  components: {
	    vsDropdownSelect: _srcComponentsDropdownSelect2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 141 */
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
				"default": "''",
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
				"default": "'left'",
				"required": false,
				"description": "Vertical position of the dropdown list against the dropdown button. It becomes handy when dropdown floats to the right."
			},
			{
				"name": "icon",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "Show icon to the left of the button text."
			},
			{
				"name": "caret",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "Show/hide down caret."
			},
			{
				"name": "default-text",
				"type": "String",
				"default": "'Plase select one'",
				"required": false,
				"description": "Default text shown before selection is made."
			},
			{
				"name": "force-default",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "Force default text to be always shown, if set to true."
			},
			{
				"name": "return-object",
				"type": "Boolean",
				"default": false,
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
			}
		]
	};

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>caret <input type=\"checkbox\" v-model=\"caret\"></label>\r\n\t\t<label>dropup <input type=\"checkbox\" v-model=\"dropup\"></label>\r\n\t\t<label>force default <input type=\"checkbox\" v-model=\"forceDefault\"></label>\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tposition \r\n\t\t\t<select v-model=\"position\">\r\n\t\t\t\t<option v-for=\"option in positions\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\" class=\"clearfix\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<div class=\"div\" v-bind:class=\"{'pull-right': position == 'right'}\">\r\n\t\t\t\t<vs-dropdown-select\r\n\t\t\t    :list=\"list\"\r\n\t\t\t    :model.sync=\"model\"\r\n\t\t\t    :position=\"position\"\r\n\t\t\t    :size=\"size\"\r\n\t\t\t    :variant=\"variant\"\r\n\t\t\t    default-text=\"Action\"\r\n\t\t\t    :force-default=\"forceDefault\"\r\n\t\t\t    :caret=\"caret\"\r\n\t\t\t    :dropup=\"dropup\"\r\n\t\t\t    return-object>\r\n\t\t\t\t</vs-dropdown-select>\r\n\t\t\t</div>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-dropdown-select</span> \r\n  <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"[\r\n    {\r\n      text: 'First',\r\n      value: 'first',\r\n    }, {\r\n      text: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      text: 'Third',\r\n      value: 'third',\r\n    }]\"</span>\r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"left\"</span>\r\n  <span class=\"hljs-attribute\">default-text</span>=<span class=\"hljs-value\">\"Action\"</span>\r\n  <span class=\"hljs-attribute\">force-default</span>=<span class=\"hljs-value\">\"false\"</span>\r\n  <span class=\"hljs-attribute\">caret</span>=<span class=\"hljs-value\">\"false\"</span>\r\n  <span class=\"hljs-attribute\">dropup</span>\r\n  <span class=\"hljs-attribute\">return-object</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-dropdown-select</span>&gt;</span>\r\n";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(134);

	var _dropdownSelectHtml = __webpack_require__(145);

	var _dropdownSelectHtml2 = _interopRequireDefault(_dropdownSelectHtml);

	__webpack_require__(146);

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
	      // if zero show default message
	      if (this.returnObject && this.model && !this.model.text || !this.returnObject && this.model && this.model.length === 0 || this.forceDefault) {
	        return this.defaultText;
	      }

	      // show selected item
	      if (this.returnObject && this.model && this.model.text) {
	        return this.model.text;
	      }
	      if (!this.returnObject && this.model) {
	        return this.model;
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
	    icon: {
	      type: String,
	      'default': ''
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
/* 145 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dropdown-select\" v-bind:class=\"{open: show, dropdown: !dropup, dropup: dropup}\">\r\n    <button\r\n        id=\"dLabel\"\r\n        class=\"btn dropdown {{dropdownToggle}} {{btnVariant}} {{btnSize}}\"\r\n        role=\"button\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"show\"\r\n        v-on:click=\"toggle($event)\">\r\n        <span class=\"checked-items\" v-html=\"displayItem\"></span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" v-bind:class=\"{'dropdown-menu-right' : position == 'right'}\" aria-labelledby=\"dLabel\">\r\n        <li v-for=\"item in list\">\r\n            <button class=\"dropdown-item\" v-on:click.stop=\"select(item)\">{{item.text}}</button>\r\n        </li>\r\n    </ul>\r\n</div>\r\n";

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(147);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".dropup.dropdown-select {\n  display: inline-block; }\n", ""]);

	// exports


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formCheckboxJson = __webpack_require__(149);

	var _formCheckboxJson2 = _interopRequireDefault(_formCheckboxJson);

	var _formCheckboxHtml = __webpack_require__(150);

	var _formCheckboxHtml2 = _interopRequireDefault(_formCheckboxHtml);

	var _snippetHtml = __webpack_require__(151);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsFormCheckbox = __webpack_require__(152);

	var _srcComponentsFormCheckbox2 = _interopRequireDefault(_srcComponentsFormCheckbox);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      states: _utils.states
	    };
	  },
	  components: {
	    vsFormCheckbox: _srcComponentsFormCheckbox2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 149 */
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
				"default": true,
				"required": false,
				"description": "A custom styling overlying the default radio button."
			},
			{
				"name": "vertical",
				"type": "Boolean",
				"default": true,
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
				"default": false,
				"required": false,
				"description": "If set to true, a full object will be returned in the model. By default only <code>value</code> is returned."
			}
		]
	};

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t\t<label>custom <input type=\"checkbox\" v-model=\"custom\"></label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-form-checkbox\r\n\t\t    :list.sync=\"list\"\r\n\t\t    :model.sync=\"model\"\r\n\t\t    :custom=\"custom\"\r\n\t\t    :vertical=\"vertical\"\r\n\t\t    :state=\"state\"\r\n\t\t    return-object>\r\n\t\t\t</vs-form-checkbox>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-form-checkbox</span> \r\n  <span class=\"hljs-attribute\">:list.sync</span>=<span class=\"hljs-value\">\"[{\r\n    text: 'First',\r\n    value: 'first',\r\n  }, {\r\n    text: 'Second',\r\n    value: 'second',\r\n  }, {\r\n    text: 'Third',\r\n    value: 'third',\r\n    disabled: true\r\n  }]\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'default'\"</span>\r\n  <span class=\"hljs-attribute\">custom</span>=<span class=\"hljs-value\">\"false\"</span>\r\n  <span class=\"hljs-attribute\">vertical</span>\r\n  <span class=\"hljs-attribute\">return-object</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-form-checkbox</span>&gt;</span>\r\n";

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(153);

	var _formCheckboxHtml = __webpack_require__(157);

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
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(154);

	__webpack_require__(155);

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(20);

	__webpack_require__(33);

	__webpack_require__(18);

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(156);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".c-input {\n  color: inherit; }\n", ""]);

	// exports


/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n\t<div class=\"checkbox\" v-for=\"item in list\" v-bind:class=\"{ 'checkbox-inline': !vertical, disabled: item.disabled }\">\r\n\t\t<label v-bind:class=\"{ 'c-input': custom, 'c-checkbox': custom }\">\r\n\t\t\t<input \r\n\t\t\t\tid=\"{{item.id}}\" \r\n\t\t\t\ttype=\"checkbox\" \r\n\t\t\t\tvalue=\"{{item.value}}\" \r\n\t\t\t\tautocomplete=\"off\" \r\n\t\t\t\tv-model=\"item.checked\" \r\n\t\t\t\tv-bind:disabled=\"item.disabled\">\r\n\t\t\t\t<span class=\"c-indicator\" v-if=\"custom\"></span> {{item.text}}\r\n\t\t</label>\r\n\t</div>\r\n</fieldset>\r\n";

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formRadioJson = __webpack_require__(159);

	var _formRadioJson2 = _interopRequireDefault(_formRadioJson);

	var _formRadioHtml = __webpack_require__(160);

	var _formRadioHtml2 = _interopRequireDefault(_formRadioHtml);

	var _snippetHtml = __webpack_require__(161);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsFormRadio = __webpack_require__(162);

	var _srcComponentsFormRadio2 = _interopRequireDefault(_srcComponentsFormRadio);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      states: _utils.states
	    };
	  },
	  components: {
	    vsFormRadio: _srcComponentsFormRadio2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 159 */
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
				"default": true,
				"required": false,
				"description": "A custom styling overlying the default radio button."
			},
			{
				"name": "vertical",
				"type": "Boolean",
				"default": true,
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
				"default": false,
				"required": false,
				"description": "If set to true, a full object will be returned in the model. By default only <code>value</code> is returned."
			}
		]
	};

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t\t<label>custom <input type=\"checkbox\" v-model=\"custom\"></label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-form-radio\r\n\t\t    :model.sync=\"model\"\r\n\t\t    :list=\"list\"\r\n\t\t    :custom=\"custom\"\r\n\t\t    :vertical=\"vertical\"\r\n\t\t    :state=\"state\"\r\n\t\t    return-object>\r\n\t\t\t</vs-form-radio>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-form-radio</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"[\r\n    {\r\n      name: 'First',\r\n      value: 'first',\r\n    }, {\r\n      name: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      name: 'Third (disabled)',\r\n      value: 'third',\r\n      disabled: true,\r\n    }]\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'success'\"</span>\r\n  <span class=\"hljs-attribute\">custom</span>=<span class=\"hljs-value\">\"false\"</span>\r\n  <span class=\"hljs-attribute\">vertical</span>\r\n  <span class=\"hljs-attribute\">return-object</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-form-radio</span>&gt;</span>\r\n";

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(153);

	var _formRadioHtml = __webpack_require__(163);

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
/* 163 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n\t<div class=\"radio\" v-for=\"item in list\" v-bind:class=\"{ 'radio-inline': !vertical, disabled: item.disabled }\">\r\n\t\t<label v-bind:class=\"{ 'c-input': custom, 'c-radio': custom }\">\r\n\t\t\t<input \r\n\t\t\t\tid=\"{{item.id}}\" \r\n\t\t\t\ttype=\"radio\" \r\n\t\t\t\tname=\"{{name}}\"\r\n\t\t\t\tvalue=\"{{item.value}}\" \r\n\t\t\t\tautocomplete=\"off\" \r\n\t\t\t\tv-model=\"selection\" \r\n\t\t\t\tdisabled=\"{{item.disabled}}\">\r\n\t\t \t<span class=\"c-indicator\" v-if=\"custom\"></span> {{item.name}}\r\n\t\t</label>\r\n\t</div>\r\n</fieldset>\r\n";

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formInputJson = __webpack_require__(165);

	var _formInputJson2 = _interopRequireDefault(_formInputJson);

	var _formInputHtml = __webpack_require__(166);

	var _formInputHtml2 = _interopRequireDefault(_formInputHtml);

	var _snippetHtml = __webpack_require__(167);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsFormInput = __webpack_require__(168);

	var _srcComponentsFormInput2 = _interopRequireDefault(_srcComponentsFormInput);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      sizes: _utils.sizes,
	      state: 'success',
	      states: _utils.states,
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
/* 165 */
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
				"default": true,
				"required": false,
				"description": "Show/hide icon within input. Icon is only shown when state is set."
			}
		]
	};

/***/ },
/* 166 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>state icon <input type=\"checkbox\" v-model=\"stateIcon\"></label>\r\n\t\t<label>size\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-form-input\r\n\t\t    :model.sync=\"model\"\r\n\t\t    type=\"text\"\r\n\t\t    label=\"Example Label\"\r\n\t\t    placeholder=\"Placeholder\"\r\n\t\t    description=\"We'll never share your email with anyone else.\"\r\n\t\t    :size=\"size\"\r\n\t\t    :state-icon=\"stateIcon\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</vs-form-input>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-form-input</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span>\r\n  <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"Example Label\"</span>\r\n  <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"Placeholder\"</span>\r\n  <span class=\"hljs-attribute\">description</span>=<span class=\"hljs-value\">\"We'll never share your email with anyone else.\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'success'\"</span>\r\n  <span class=\"hljs-attribute\">state-icon</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-form-input</span>&gt;</span>\r\n";

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(32);

	var _utilsHelpersJs = __webpack_require__(50);

	var _formInputHtml = __webpack_require__(169);

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
/* 169 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n    <label for=\"{{id}}\" v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <div class=\"inputClass\">\r\n        <input \r\n        \ttype=\"{{type}}\" \r\n        \tclass=\"form-control {{stateIconType}} {{inputSize}}\" \r\n        \tid=\"{{id}}\" \r\n        \tplaceholder=\"{{placeholder}}\" \r\n        \tv-model=\"model\">\r\n    </div>\r\n    <small class=\"text-muted\" v-if=\"description\" v-html=\"description\"></small>\r\n</fieldset>\r\n";

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formSelectJson = __webpack_require__(171);

	var _formSelectJson2 = _interopRequireDefault(_formSelectJson);

	var _formSelectHtml = __webpack_require__(172);

	var _formSelectHtml2 = _interopRequireDefault(_formSelectHtml);

	var _snippetHtml = __webpack_require__(173);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsFormSelect = __webpack_require__(174);

	var _srcComponentsFormSelect2 = _interopRequireDefault(_srcComponentsFormSelect);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      sizes: _utils.sizes,
	      state: 'default',
	      states: _utils.states
	    };
	  },
	  components: {
	    vsFormSelect: _srcComponentsFormSelect2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 171 */
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
/* 172 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>size\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-form-select\r\n\t\t    :model.sync=\"model\"\r\n\t\t    :options=\"options\"\r\n\t\t    type=\"text\"\r\n\t\t    label=\"Example Label\"\r\n\t\t    description=\"We'll never share your gender with anyone else.\"\r\n\t\t    :size=\"size\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</vs-form-select>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-form-select</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">:options</span>=<span class=\"hljs-value\">\"options\"</span>\r\n  <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span>\r\n  <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"Example Label\"</span>\r\n  <span class=\"hljs-attribute\">description</span>=<span class=\"hljs-value\">\"We'll never share your gender with anyone else.\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'success'\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-form-select</span>&gt;</span>\r\n";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(32);

	var _utilsHelpersJs = __webpack_require__(50);

	var _formSelectHtml = __webpack_require__(175);

	var _formSelectHtml2 = _interopRequireDefault(_formSelectHtml);

	// export component object
	exports['default'] = {
	  template: _formSelectHtml2['default'],
	  replace: true,
	  computed: {
	    allOptions: function allOptions() {
	      if (this.defaultOption.length) {
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
/* 175 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n    <label for=\"{{id}}\" v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <!-- single select -->\r\n    <select class=\"form-control {{inputSize}}\" id=\"{{id}}\" v-model=\"model\" options=\"allOptions\" v-if=\"!multiple\">\r\n    \t<option v-for=\"option in allOptions\" v-bind:value=\"option.value\">{{option.text}}</option>\r\n    </select>\r\n    <small class=\"text-muted\" v-if=\"description\" v-html=\"description\"></small>\r\n</fieldset>\r\n";

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _formTextareaJson = __webpack_require__(177);

	var _formTextareaJson2 = _interopRequireDefault(_formTextareaJson);

	var _formTextareaHtml = __webpack_require__(178);

	var _formTextareaHtml2 = _interopRequireDefault(_formTextareaHtml);

	var _snippetHtml = __webpack_require__(179);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsFormTextarea = __webpack_require__(180);

	var _srcComponentsFormTextarea2 = _interopRequireDefault(_srcComponentsFormTextarea);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      states: _utils.states
	    };
	  },
	  components: {
	    vsFormTextarea: _srcComponentsFormTextarea2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 177 */
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
/* 178 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-form-textarea\r\n\t\t    :model.sync=\"model\"\r\n\t\t    type=\"text\"\r\n\t\t    label=\"Example Label\"\r\n\t\t    description=\"Extra textarea description.\"\r\n\t\t    :rows=\"2\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</vs-form-textarea>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-form-textarea</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span>\r\n  <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"Example Label\"</span>\r\n  <span class=\"hljs-attribute\">description</span>=<span class=\"hljs-value\">\"Extra textarea description.\"</span>\r\n  <span class=\"hljs-attribute\">rows</span>=<span class=\"hljs-value\">\"2\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'success'\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-form-textarea</span>&gt;</span>\r\n";

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(32);

	var _utilsHelpersJs = __webpack_require__(50);

	var _formTextareaHtml = __webpack_require__(181);

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
/* 181 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n    <label for=\"{{id}}\" v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <textarea class=\"form-control\" id=\"{{id}}\" rows=\"{{rows}}\" v-model=\"model\"></textarea>\r\n    <small class=\"text-muted\" v-if=\"description\" v-html=\"description\"></small>\r\n</fieldset>";

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(183);

	var _imagesJson = __webpack_require__(185);

	var _imagesJson2 = _interopRequireDefault(_imagesJson);

	var _imagesHtml = __webpack_require__(186);

	var _imagesHtml2 = _interopRequireDefault(_imagesHtml);

	var _snippetHtml = __webpack_require__(187);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

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
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(184);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(113);

/***/ },
/* 185 */
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
/* 186 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\" v-if=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<img v-bind:src=\"'assets/150x150.png'\" alt=\"...\" class=\"img-rounded\">\r\n\t\t\t<img v-bind:src=\"'assets/150x150.png'\" alt=\"...\" class=\"img-circle\">\r\n\t\t\t<img v-bind:src=\"'assets/150x150.png'\" alt=\"...\" class=\"img-thumbnail\">\r\n\t\t\t<div class=\"m-b\"></div>\r\n\t\t\t<img v-bind:src=\"'assets/responsive.png'\" alt=\"...\" class=\"img-fluid\" >\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/150x150?text=150x150\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"...\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"img-rounded\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/150x150?text=150x150\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"...\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"img-circle\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/150x150?text=150x150\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"...\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"img-thumbnail\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/1000x150?text=1000x150 - responsive\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"...\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"img-fluid\"</span> &gt;</span>\r\n";

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jumbotronJson = __webpack_require__(189);

	var _jumbotronJson2 = _interopRequireDefault(_jumbotronJson);

	var _jumbotronHtml = __webpack_require__(190);

	var _jumbotronHtml2 = _interopRequireDefault(_jumbotronHtml);

	var _snippetHtml = __webpack_require__(191);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsJumbotron = __webpack_require__(192);

	var _srcComponentsJumbotron2 = _interopRequireDefault(_srcComponentsJumbotron);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

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
/* 189 */
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
				"default": false,
				"required": false,
				"description": "To make the jumbotron full width, and without rounded corners."
			}
		]
	};

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>fluid <input type=\"checkbox\" v-model=\"fluid\"></label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-jumbotron :fluid=\"fluid\">\r\n\t\t\t\t<h1 class=\"display-3\">Hello, world!</h1>\r\n\t\t\t  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\r\n\t\t\t  <hr class=\"m-y-md\">\r\n\t\t\t  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n\t\t\t  <p class=\"lead\">\r\n\t\t\t    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n\t\t\t  </p>\r\n\t\t\t</vs-jumbotron>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 191 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-jumbotron</span> <span class=\"hljs-attribute\">fluid</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h1</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"display-3\"</span>&gt;</span>Hello, world!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h1</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lead\"</span>&gt;</span>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">hr</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"m-y-md\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>It uses utility classes for typography and spacing to space content out within the larger container.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lead\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary btn-lg\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"button\"</span>&gt;</span>Learn more<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-jumbotron</span>&gt;</span>\r\n";

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(41);

	var _jumbotronHtml = __webpack_require__(193);

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
/* 193 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron\" v-bind:class=\"{ 'jumbotron-fluid': fluid }\">\r\n  <div class=\"container\">\r\n    <slot></slot>\r\n  </div>\r\n</div>";

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _labelsJson = __webpack_require__(195);

	var _labelsJson2 = _interopRequireDefault(_labelsJson);

	var _labelsHtml = __webpack_require__(196);

	var _labelsHtml2 = _interopRequireDefault(_labelsHtml);

	var _snippetHtml = __webpack_require__(197);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsBadge = __webpack_require__(198);

	var _srcComponentsBadge2 = _interopRequireDefault(_srcComponentsBadge);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      variants: _utils.variants,
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
/* 195 */
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
/* 196 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\ttype \r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-badge :variant=\"variant\" :type=\"type\">open</vs-badge>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 197 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-badge</span> <span class=\"hljs-attribute\">:variant</span>=<span class=\"hljs-value\">\"variant\"</span> <span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"type\"</span>&gt;</span>open<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-badge</span>&gt;</span>\r\n";

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _srcComponentsLabels = __webpack_require__(199);

	var _srcComponentsLabels2 = _interopRequireDefault(_srcComponentsLabels);

	exports['default'] = _srcComponentsLabels2['default'];
	module.exports = exports['default'];

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(56);

	var _labelsHtml = __webpack_require__(200);

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
/* 200 */
/***/ function(module, exports) {

	module.exports = "<span class=\"label {{labelVariant}} {{labelType}}\">\r\n\t<slot></slot>\r\n</span>\r\n";

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _listGroupJson = __webpack_require__(202);

	var _listGroupJson2 = _interopRequireDefault(_listGroupJson);

	var _listGroupHtml = __webpack_require__(203);

	var _listGroupHtml2 = _interopRequireDefault(_listGroupHtml);

	var _snippetHtml = __webpack_require__(204);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsListGroup = __webpack_require__(205);

	var _srcComponentsLabels = __webpack_require__(199);

	var _srcComponentsLabels2 = _interopRequireDefault(_srcComponentsLabels);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      states: _utils.states.concat([{ text: 'info', value: 'info' }]),
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
/* 202 */
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
				"description": "A color context ot the individual <code>&lt;vs-list-group-item></code>."
			},
			{
				"name": "active",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "An active state ot the individual <code>&lt;vs-list-group-item></code>."
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "A disabled state ot the individual <code>&lt;vs-list-group-item></code>."
			},
			{
				"name": "flush",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "Removes borders if set to true."
			}
		]
	};

/***/ },
/* 203 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>flush <input type=\"checkbox\" v-model=\"flush\"></label>\r\n\t\t<label>\r\n\t\t\tstate \r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-list-group style=\"width: 350px\" :flush=\"flush\">\r\n\t\t\t\t<vs-list-group-item :state=\"state\">\r\n\t\t\t    <vs-badge type=\"pill\" class=\"pull-right\">14</vs-badge>\r\n\t\t\t    Cras justo odio\r\n\t\t\t  </vs-list-group-item>\r\n\t\t\t  <vs-list-group-item>\r\n\t\t\t    <vs-badge type=\"pill\" class=\"pull-right\">2</vs-badge>\r\n\t\t\t    Dapibus ac facilisis in\r\n\t\t\t  </vs-list-group-item>\r\n\t\t\t  <vs-list-group-item>\r\n\t\t\t    <vs-badge type=\"pill\" class=\"pull-right\">1</vs-badge>\r\n\t\t\t    Morbi leo risus\r\n\t\t\t  </vs-list-group-item>\r\n\t\t\t</vs-list-group>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-list-group</span> <span class=\"hljs-attribute\">flush</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-list-group-item</span> <span class=\"hljs-attribute\">state</span>=<span class=\"hljs-value\">\"success\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-badge</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"pill\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pull-right\"</span>&gt;</span>14<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-badge</span>&gt;</span>\r\n    Cras justo odio\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-list-group-item</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-list-group-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-badge</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"pill\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pull-right\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-badge</span>&gt;</span>\r\n    Dapibus ac facilisis in\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-list-group-item</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-list-group-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-badge</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"pill\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pull-right\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-badge</span>&gt;</span>\r\n    Morbi leo risus\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-list-group-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-list-group</span>&gt;</span>";

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(27);

	var _listGroupHtml = __webpack_require__(206);

	var _listGroupHtml2 = _interopRequireDefault(_listGroupHtml);

	__webpack_require__(207);

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
/* 206 */
/***/ function(module, exports) {

	module.exports = "<ul v-bind:class=\"{'list-group': true, 'list-group-flush': flush}\">\r\n  <slot></slot>\r\n</ul>";

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(208);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".list-group li.list-group-item:focus, .list-group li.list-group-item:hover {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5; }\n", ""]);

	// exports


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mediaJson = __webpack_require__(210);

	var _mediaJson2 = _interopRequireDefault(_mediaJson);

	var _mediaHtml = __webpack_require__(211);

	var _mediaHtml2 = _interopRequireDefault(_mediaHtml);

	var _snippetHtml = __webpack_require__(212);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsMedia = __webpack_require__(213);

	var _srcComponentsMedia2 = _interopRequireDefault(_srcComponentsMedia);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

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
/* 210 */
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
/* 211 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n    <div slot=\"controls\">\r\n        <!-- Html controls start-->\r\n        <label>\r\n\t\t\tposition\r\n\t\t\t<select v-model=\"position\">\r\n\t\t\t\t<option v-for=\"option in positions\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n        <!-- Html controls end-->\r\n    </div>\r\n    <div slot=\"markup\">\r\n        <!-- Html markup start-->\r\n        <vs-media :position=\"position\">\r\n            <div slot=\"aside\">\r\n                <a href=\"#\">\r\n                \t<img class=\"media-object\" v-bind:src=\"'assets/media.png'\">\r\n                </a>\r\n            </div>\r\n            <div slot=\"body\">\r\n            \t<h4 class=\"media-heading\">Media heading</h4>\r\n                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n            </div>\r\n        </vs-media>\r\n        <!-- Html markup end-->\r\n    </div>\r\n</docs-demo>\r\n";

/***/ },
/* 212 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-media</span> <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"top left\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"aside\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"media-object\"</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/50x50?text=media\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"media-heading\"</span>&gt;</span>Media heading<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span> \r\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-media</span>&gt;</span>\r\n";

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(214);

	var _mediaHtml = __webpack_require__(217);

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
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(215);

	__webpack_require__(113);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(216);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1; }\n\n.media-body {\n  width: 10000px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right {\n  padding-left: 10px; }\n\n.media-left {\n  padding-right: 10px; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n", ""]);

	// exports


/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "<div class=\"media\">\r\n  <div class=\"{{mediaHorizontalAlign}} {{mediaVerticalAlign}}\" v-if=\"mediaHorizontalAlign == 'media-left'\">\r\n  \t<slot name=\"aside\">\r\n  </div>\r\n  <div class=\"media-body\">\r\n  \t<slot name=\"body\">\r\n  </div>\r\n  <div class=\"{{mediaHorizontalAlign}} {{mediaVerticalAlign}}\" v-if=\"mediaHorizontalAlign == 'media-right'\">\r\n  \t<slot name=\"aside\">\r\n  </div>\r\n</div>";

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _modalJson = __webpack_require__(219);

	var _modalJson2 = _interopRequireDefault(_modalJson);

	var _modalHtml = __webpack_require__(220);

	var _modalHtml2 = _interopRequireDefault(_modalHtml);

	var _snippetHtml = __webpack_require__(221);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsModal = __webpack_require__(222);

	var _srcComponentsModal2 = _interopRequireDefault(_srcComponentsModal);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      sizes: _utils.sizes,
	      fade: true
	    };
	  },
	  components: {
	    vsModal: _srcComponentsModal2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 219 */
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
				"default": true,
				"required": false,
				"description": "If set to true modal will fade in on open and fade out on close."
			}
		]
	};

/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n    <div slot=\"controls\">\r\n        <!-- Html controls start-->\r\n        <label>fade <input type=\"checkbox\" v-model=\"fade\"></label>\r\n        <label>\r\n\t\t\tsize\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n        <!-- Html controls end-->\r\n    </div>\r\n    <div slot=\"markup\">\r\n        <!-- Html markup start-->\r\n\r\n        <!-- trigger -->\r\n        <button class=\"btn btn-primary\" v-on:click=\"$broadcast('show::modal', 'modal1')\">\r\n        \tShow Modal\r\n        </button>\r\n\r\n        <!-- modal -->\r\n        <vs-modal id=\"modal1\" :size=\"size\" :fade=\"fade\">\r\n            <div slot=\"modal-header\">\r\n                <h3>header</h3>\r\n            </div>\r\n            <div slot=\"modal-body\">\r\n                body\r\n            </div>\r\n            <div slot=\"modal-footer\">\r\n                <button class=\"btn btn-primary\" v-on:click=\"$broadcast('hide::modal', 'modal1')\">\r\n                    OK\r\n                </button>\r\n            </div>\r\n        </vs-modal>\r\n        <!-- Html markup end-->\r\n    </div>\r\n</docs-demo>\r\n";

/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- trigger --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary mini\"</span> <span class=\"hljs-attribute\">v-on:click</span>=<span class=\"hljs-value\">\"$broadcast('show::modal', 'modal1')\"</span>&gt;</span>\r\n  Show Modal\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-comment\">&lt;!-- modal --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-modal</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"modal1\"</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">fade</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"modal-header\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>header<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"modal-body\"</span>&gt;</span>\r\n    body\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"modal-footer\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span> <span class=\"hljs-attribute\">v-on:click</span>=<span class=\"hljs-value\">\"$broadcast('hide::modal', 'modal1')\"</span>&gt;</span>\r\n      OK\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-modal</span>&gt;</span>\r\n";

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(223);

	var _utilsHelpersJs = __webpack_require__(50);

	var _modalHtml = __webpack_require__(226);

	var _modalHtml2 = _interopRequireDefault(_modalHtml);

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
	    }
	  },
	  methods: {
	    show: function show() {
	      this.$el.style.display = 'block';
	      var _this = this;
	      // wait for the display block, and then add class "in" class on the modal
	      setTimeout(function () {
	        _this.animateBackdrop = true;
	        setTimeout(function () {
	          _this.animateModal = true;
	          _this.$dispatch('shown::modal');
	        }, _this.fade ? TRANSITION_DURATION : 0);
	      }, 0);
	    },
	    hide: function hide() {
	      var _this = this;
	      // first animate modal out
	      this.animateModal = false;
	      setTimeout(function () {
	        // wait for animation to complete and then hide the backdrop
	        _this.animateBackdrop = false;
	        setTimeout(function () {
	          // no hide the modal wrapper
	          _this.$el.style.display = 'none';
	          _this.$dispatch('hidden::modal');
	        }, _this.fade ? TRANSITION_DURATION : 0);
	      }, _this.fade ? TRANSITION_DURATION : 0);
	    },
	    onClickOut: function onClickOut(e) {
	      // if backdrop clicked, hide modal
	      if (e.target.id && e.target.id === this.id) {
	        this.hide();
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;

	    // support for esc key press
	    document.addEventListener('keydown', function (e) {
	      var key = e.which || e.keyCode;
	      if (key === 27) {
	        // 27 is esc
	        _this2.hide();
	      }
	    });
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
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(224);

	__webpack_require__(18);

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(225);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".modal-open {\n  overflow: hidden; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n  -webkit-overflow-scrolling: touch; }\n  .modal.fade .modal-dialog {\n    -webkit-transition: -webkit-transform .3s ease-out;\n    transition: -webkit-transform .3s ease-out;\n    transition: transform .3s ease-out;\n    transition: transform .3s ease-out, -webkit-transform .3s ease-out;\n    -webkit-transform: translate(0, -25%);\n        -ms-transform: translate(0, -25%);\n            transform: translate(0, -25%); }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n        -ms-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.in {\n    opacity: 0.5; }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .modal-footer .btn + .btn {\n    margin-bottom: 0;\n    margin-left: 5px; }\n  .modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 544px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 768px) {\n  .modal-lg {\n    width: 900px; } }\n", ""]);

	// exports


/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = "<div style=\"display: none\">\r\n\t<div id=\"{{id}}\" class=\"modal\" v-bind:class=\"{ fade: fade, in: animateModal || !fade }\" style=\"display: block\" v-on:click=\"onClickOut($event)\">\r\n\t  \t<div class=\"modal-dialog  modal-{{size}}\" role=\"document\" style=\"z-index: 9999\">\r\n\t\t    <div class=\"modal-content\">\r\n\t\t        <div class=\"modal-header\">\r\n\t\t        \t<slot name=\"modal-header\"></slot>\r\n\t\t        </div>\r\n\t\t        <div class=\"modal-body\">\r\n\t\t        \t<slot name=\"modal-body\"></slot>\r\n\t\t        </div>\r\n\t\t        <div class=\"modal-footer\">\r\n\t\t        \t<slot name=\"modal-footer\"></slot>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"modal-backdrop\" v-bind:class=\"{ fade: fade, in: animateBackdrop || !fade }\"></div>\r\n</div>";

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _navJson = __webpack_require__(228);

	var _navJson2 = _interopRequireDefault(_navJson);

	var _navHtml = __webpack_require__(229);

	var _navHtml2 = _interopRequireDefault(_navHtml);

	var _snippetHtml = __webpack_require__(230);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsNav = __webpack_require__(231);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	exports['default'] = {
	  route: {
	    url: '/navigation',
	    name: 'navigation',
	    title: 'Navigation'
	  },
	  template: _navHtml2['default'],
	  data: function data() {
	    return {
	      meta: _navJson2['default'],
	      snippet: _snippetHtml2['default'],
	      vertical: false,
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'pills', value: 'pills' }]
	    };
	  },
	  components: {
	    vsNav: _srcComponentsNav.nav,
	    vsNavItem: _srcComponentsNav.navItem,
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 228 */
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
				"default": false,
				"required": false,
				"description": "Stack items in vertical position."
			},
			{
				"name": "active",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "An active state ot the individual <code>&lt;vs-nav-item></code>."
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "A disabled state ot the individual <code>&lt;vs-nav-item></code>."
			}
		]
	};

/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\ttype\r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-nav :type=\"type\" :vertical=\"vertical\">\r\n\t\t\t \t<vs-nav-item href=\"#\" v-on:click.prevent=\"\" active>Active</vs-nav-item>\r\n\t\t\t \t<vs-nav-item href=\"#\" v-on:click.prevent=\"\">Link</vs-nav-item>\r\n\t\t\t \t<vs-nav-item href=\"#\" v-on:click.prevent=\"\">Another Link</vs-nav-item>\r\n\t\t\t \t<vs-nav-item href=\"#\" v-on:click.prevent=\"\" disabled>Disabled</vs-nav-item>\r\n\t\t\t</vs-nav>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"default\"</span> <span class=\"hljs-attribute\">:vertical</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">active</span>&gt;</span>Active<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav-item</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav-item</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Another Link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav-item</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>Disabled<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-nav</span>&gt;</span>";

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(12);

	__webpack_require__(232);

	var _navHtml = __webpack_require__(234);

	var _navHtml2 = _interopRequireDefault(_navHtml);

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
	  template: '<li class="nav-item"><a href="{{href}}" class="nav-link {{active ? \'active\' : \'\'}} {{disabled ? \'disabled\' : \'\'}}"><slot></slot></a></li>',
	  replace: true,
	  props: {
	    href: {
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
	  }
	};
	exports.navItem = navItem;

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(233);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".nav::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.nav li {\n  float: left;\n  margin-right: 0.5em; }\n  .nav li:last-child {\n    margin-right: 0; }\n", ""]);

	// exports


/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"nav\" v-bind:class=\"{ 'nav-stacked': vertical, 'nav-pills': type == 'pills', 'navbar-nav': type == 'navbar' }\">\n  <slot></slot> \n</ul>";

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _navbarJson = __webpack_require__(236);

	var _navbarJson2 = _interopRequireDefault(_navbarJson);

	var _navbarHtml = __webpack_require__(237);

	var _navbarHtml2 = _interopRequireDefault(_navbarHtml);

	var _snippetHtml = __webpack_require__(238);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsNavbar = __webpack_require__(239);

	var _srcComponentsNavbar2 = _interopRequireDefault(_srcComponentsNavbar);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      variants: _utils.variants.concat([{ text: 'inverse', value: 'inverse' }])
	    };
	  },
	  components: {
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
/* 236 */
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
				"default": false,
				"description": "Removes rounded corners if set to true."
			}
		]
	};

/***/ },
/* 237 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\tfixed\r\n\t\t\t<select v-model=\"fixed\">\r\n\t\t\t\t<option v-for=\"option in fixeds\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\ttype\r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant\r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-navbar :fixed=\"fixed\" :type=\"type\" :variant=\"variant\">\r\n\t\t\t  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n\t\t\t  <ul class=\"nav navbar-nav pull-left\">\r\n\t\t\t    <li class=\"nav-item active\">\r\n\t\t\t      <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n\t\t\t    </li>\r\n\t\t\t    <li class=\"nav-item\">\r\n\t\t\t      <a class=\"nav-link\" href=\"#\">Features</a>\r\n\t\t\t    </li>\r\n\t\t\t    <li class=\"nav-item\">\r\n\t\t\t      <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n\t\t\t    </li>\r\n\t\t\t    <li class=\"nav-item\">\r\n\t\t\t      <a class=\"nav-link\" href=\"#\">About</a>\r\n\t\t\t    </li>\r\n\t\t\t  </ul>\r\n\t\t\t  <form class=\"form-inline navbar-form pull-right\">\r\n\t\t\t    <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\r\n\t\t\t    <button class=\"btn btn-success-outline\" type=\"submit\">Search</button>\r\n\t\t\t  </form>\r\n\t\t\t</vs-navbar>\r\n\t\t\t<div v-if=\"fixed\">Look for navbar at the {{fixed}} :)</div>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-navbar</span> <span class=\"hljs-attribute\">fixed</span>=<span class=\"hljs-value\">\"top\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"light\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"default\"</span> <span class=\"hljs-attribute\">full</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"navbar-brand\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Navbar<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav navbar-nav pull-left\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-item active\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-link\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Home <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"sr-only\"</span>&gt;</span>(current)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-item\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-link\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Features<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-item\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-link\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Pricing<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-item\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-link\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>About<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">form</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"form-inline navbar-form pull-right\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"form-control\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span> <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"Search\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-success-outline\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"submit\"</span>&gt;</span>Search<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">form</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-navbar</span>&gt;</span>\r\n";

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(12);

	__webpack_require__(15);

	__webpack_require__(32);

	var _navbarHtml = __webpack_require__(240);

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
/* 240 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar {{navbarType}} {{navbarVariant}} {{navbarfixed}} {{full ? 'navbar-full' : ''}}\">\r\n\t<slot></slot>\r\n</nav>";

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _pagerJson = __webpack_require__(242);

	var _pagerJson2 = _interopRequireDefault(_pagerJson);

	var _pagerHtml = __webpack_require__(243);

	var _pagerHtml2 = _interopRequireDefault(_pagerHtml);

	var _snippetHtml = __webpack_require__(244);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsPager = __webpack_require__(245);

	var _srcComponentsPager2 = _interopRequireDefault(_srcComponentsPager);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

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
/* 242 */
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
/* 243 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-pager>\r\n\t\t\t\t<li><a href=\"#\">Previous</a></li>\r\n    \t\t<li><a href=\"#\">Next</a></li>\r\n    \t</vs-pager>\r\n    \t<hr>\r\n    \t<vs-pager>\r\n\t\t\t\t<li class=\"pager-prev\"><a href=\"#\">Older</a></li>\r\n    \t\t<li class=\"pager-next\"><a href=\"#\">Newer</a></li>\r\n    \t</vs-pager>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-pager</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Previous<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Next<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-pager</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">hr</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-pager</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pager-prev\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Older<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pager-next\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Newer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-pager</span>&gt;</span>\r\n";

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(246);

	var _pagerHtml = __webpack_require__(249);

	var _pagerHtml2 = _interopRequireDefault(_pagerHtml);

	// export component object
	exports['default'] = {
	  template: _pagerHtml2['default'],
	  replace: true
	};
	module.exports = exports['default'];

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(247);

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(248);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".pager {\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  list-style: none; }\n  .pager::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 15px; }\n    .pager li > a:focus, .pager li > a:hover {\n      text-decoration: none;\n      background-color: #eceeef; }\n  .pager .disabled > a, .pager .disabled > a:focus, .pager .disabled > a:hover {\n    color: #818a91;\n    cursor: not-allowed;\n    background-color: #fff; }\n  .pager .disabled > span {\n    color: #818a91;\n    cursor: not-allowed;\n    background-color: #fff; }\n\n.pager-next > a,\n.pager-next > span {\n  float: right; }\n\n.pager-prev > a,\n.pager-prev > span {\n  float: left; }\n", ""]);

	// exports


/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = "<nav>\r\n  <ul class=\"pager\">\r\n  \t<slot></slot>\r\n  </ul>\r\n</nav>";

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _paginationJson = __webpack_require__(251);

	var _paginationJson2 = _interopRequireDefault(_paginationJson);

	var _paginationHtml = __webpack_require__(252);

	var _paginationHtml2 = _interopRequireDefault(_paginationHtml);

	var _snippetHtml = __webpack_require__(253);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsPagination = __webpack_require__(254);

	var _srcComponentsPagination2 = _interopRequireDefault(_srcComponentsPagination);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      sizes: _utils.sizes,
	      variant: 'primary',
	      variants: _utils.variants,
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
/* 251 */
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
/* 252 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\t\tsize\r\n\t\t\t\t<select v-model=\"size\">\r\n\t\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\r\n\t\t\t<label>\r\n\t\t\t\tvariant\r\n\t\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-pagination\r\n\t\t\t    :size=\"size\"\r\n\t\t\t    :variant=\"variant\"\r\n\t\t\t    :total-rows=\"totalRows\"\r\n\t\t\t    :current-page.sync=\"currentPage\"\r\n\t\t\t    :per-page=\"perPage\">\r\n\t\t\t</vs-pagination>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-pagination</span> \r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">:total-rows</span>=<span class=\"hljs-value\">\"100\"</span>\r\n  <span class=\"hljs-attribute\">:current-page</span>=<span class=\"hljs-value\">\"currentPageVariable\"</span>\r\n  <span class=\"hljs-attribute\">:per-page</span>=<span class=\"hljs-value\">\"10\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-pagination</span>&gt;</span>\r\n";

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(255);

	var _paginationHtml = __webpack_require__(258);

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
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(256);

	__webpack_require__(18);

	__webpack_require__(81);

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(257);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.25rem; }\n  .pagination > li {\n    display: inline; }\n    .pagination > li > a,\n    .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 0.5rem 0.75rem;\n      margin-left: -1px;\n      line-height: 1.5;\n      color: #563d7c;\n      text-decoration: none;\n      background-color: #fff;\n      border: 1px solid #ddd; }\n    .pagination > li:first-child > a,\n    .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 0.25rem;\n      border-top-left-radius: 0.25rem; }\n    .pagination > li:last-child > a,\n    .pagination > li:last-child > span {\n      border-bottom-right-radius: 0.25rem;\n      border-top-right-radius: 0.25rem; }\n  .pagination > li > a:focus, .pagination > li > a:hover,\n  .pagination > li > span:focus,\n  .pagination > li > span:hover {\n    color: #322449;\n    background-color: #eceeef;\n    border-color: #ddd; }\n  .pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover,\n  .pagination > .active > span,\n  .pagination > .active > span:focus,\n  .pagination > .active > span:hover {\n    z-index: 2;\n    color: #fff;\n    cursor: default;\n    background-color: #563d7c;\n    border-color: #563d7c; }\n  .pagination > .disabled > span, .pagination > .disabled > span:focus, .pagination > .disabled > span:hover,\n  .pagination > .disabled > a,\n  .pagination > .disabled > a:focus,\n  .pagination > .disabled > a:hover {\n    color: #818a91;\n    cursor: not-allowed;\n    background-color: #fff;\n    border-color: #ddd; }\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.33333; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 0.3rem;\n  border-top-left-radius: 0.3rem; }\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 0.2rem;\n  border-top-left-radius: 0.2rem; }\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 0.2rem;\n  border-top-right-radius: 0.2rem; }\n", ""]);

	// exports


/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group pagination\" role=\"group\" aria-label=\"Pagination\">\r\n    <button type=\"button\" class=\"btn btn-secondary {{btnSize}}\" v-bind:disabled=\"currentPage == 1 \" v-on:click=\"(currentPage == 1) ? return : currentPage--\"><span aria-hidden=\"true\">&laquo;</span></button>\r\n    <button type=\"button\" class=\"btn  btn-secondary {{btnSize}} {{ currentPage == 1 ?  'active' : '' }}\" v-on:click=\"currentPage = 1\" v-show=\"showPrev\">1</button>\r\n    <span class=\"btn btn-secondary {{btnSize}}\" v-show=\"showPrev\">...</span>\r\n    <button type=\"button\"\r\n    \tclass=\"btn {{btnSize}} {{btnVariant($index)}} {{ $index + diff == currentPage ? 'active' : '' }} {{ $index + diff != currentPage ? 'hidden-xs-down' : '' }}\"\r\n    \tv-for=\"item in pageLinks\"\r\n        v-on:click=\"currentPage = $index + diff\">{{$index + diff}}\r\n    </button>\r\n    <span class=\"btn btn-secondary {{btnSize}}\" v-show=\"showNext\">...</span>\r\n    <button type=\"button\" class=\"btn btn-secondary {{btnSize}} {{ numberOfPages == currentPage ? 'active' : '' }}\" v-show=\"showNext\" v-on:click=\"currentPage = numberOfPages\">{{numberOfPages}}</button>\r\n    <button type=\"button\" class=\"btn btn-secondary {{btnSize}}\" v-bind:disabled=\"currentPage == numberOfPages\" v-on:click=\"(currentPage == numberOfPages) ? return : currentPage++\"><span aria-hidden=\"true\">&raquo;</span></button>\r\n</div>\r\n";

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _popoverJson = __webpack_require__(260);

	var _popoverJson2 = _interopRequireDefault(_popoverJson);

	var _popoverHtml = __webpack_require__(261);

	var _popoverHtml2 = _interopRequireDefault(_popoverHtml);

	var _snippetHtml = __webpack_require__(262);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsPopover = __webpack_require__(263);

	var _srcComponentsPopover2 = _interopRequireDefault(_srcComponentsPopover);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

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
/* 260 */
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
/* 261 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t<vs-popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"top\">\r\n\t\t\t<button class=\"btn\">popover top</button>\r\n\t\t</vs-popover>\r\n\t\t<vs-popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"bottom\">\r\n\t\t\t<button class=\"btn\">popover bottom</button>\r\n\t\t</vs-popover>\r\n\t\t<vs-popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"left\">\r\n\t\t\t<button class=\"btn\">popover left</button>\r\n\t\t</vs-popover>\r\n\t\t<vs-popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"right\">\r\n\t\t\t<button class=\"btn\">popover right</button>\r\n\t\t</vs-popover>\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 262 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-popover</span> \r\n  <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"popover top\"</span> \r\n  <span class=\"hljs-attribute\">text</span>=<span class=\"hljs-value\">\"Lorem ipsum dolor.\"</span> \r\n  <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"right\"</span> \r\n  <span class=\"hljs-attribute\">:triggers</span>=<span class=\"hljs-value\">\"['click']\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"form-control\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-popover</span>&gt;</span>\r\n";

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(264);

	// TODO import {Tether} from 'vuestrap-tether'

	var _popoverHtml = __webpack_require__(267);

	var _popoverHtml2 = _interopRequireDefault(_popoverHtml);

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

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
	      var _this2 = this;

	      // change state
	      this.show = typeof newState !== 'undefined' ? newState : !this.show;

	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      // element is shown
	      if (this.show) {
	        (function () {
	          var position = {
	            attachment: 'bottom center',
	            targetAttachment: 'top center'
	          };
	          if (_this2.position === 'bottom') {
	            position = {
	              attachment: 'top center',
	              targetAttachment: 'bottom center'
	            };
	          }
	          if (_this2.position === 'left') {
	            position = {
	              attachment: 'middle right',
	              targetAttachment: 'middle left'
	            };
	          }
	          if (_this2.position === 'right') {
	            position = {
	              attachment: 'middle left',
	              targetAttachment: 'middle right'
	            };
	          }

	          // let tether do the magic, after element is shown
	          _vue2['default'].nextTick(function () {
	            _this2._tether = new Tether({
	              element: _this2._popover,
	              target: _this2._trigger,
	              attachment: position.attachment,
	              targetAttachment: position.targetAttachment
	            });
	            _this2.$dispatch('shown::popover');
	          });

	          // element gets hidden
	        })();
	      } else {
	          if (this._tether) {
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
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(265);

	__webpack_require__(18);

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(266);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 0.875rem;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n  .popover.popover-top, .popover.bs-tether-element-attached-bottom {\n    margin-top: -10px; }\n    .popover.popover-top .popover-arrow, .popover.bs-tether-element-attached-bottom .popover-arrow {\n      bottom: -11px;\n      left: 50%;\n      margin-left: -11px;\n      border-top-color: rgba(0, 0, 0, 0.25);\n      border-bottom-width: 0; }\n      .popover.popover-top .popover-arrow::after, .popover.bs-tether-element-attached-bottom .popover-arrow::after {\n        bottom: 1px;\n        margin-left: -10px;\n        content: \"\";\n        border-top-color: #fff;\n        border-bottom-width: 0; }\n  .popover.popover-right, .popover.bs-tether-element-attached-left {\n    margin-left: 10px; }\n    .popover.popover-right .popover-arrow, .popover.bs-tether-element-attached-left .popover-arrow {\n      top: 50%;\n      left: -11px;\n      margin-top: -11px;\n      border-right-color: rgba(0, 0, 0, 0.25);\n      border-left-width: 0; }\n      .popover.popover-right .popover-arrow::after, .popover.bs-tether-element-attached-left .popover-arrow::after {\n        bottom: -10px;\n        left: 1px;\n        content: \"\";\n        border-right-color: #fff;\n        border-left-width: 0; }\n  .popover.popover-bottom, .popover.bs-tether-element-attached-top {\n    margin-top: 10px; }\n    .popover.popover-bottom .popover-arrow, .popover.bs-tether-element-attached-top .popover-arrow {\n      top: -11px;\n      left: 50%;\n      margin-left: -11px;\n      border-top-width: 0;\n      border-bottom-color: rgba(0, 0, 0, 0.25); }\n      .popover.popover-bottom .popover-arrow::after, .popover.bs-tether-element-attached-top .popover-arrow::after {\n        top: 1px;\n        margin-left: -10px;\n        content: \"\";\n        border-top-width: 0;\n        border-bottom-color: #fff; }\n  .popover.popover-left, .popover.bs-tether-element-attached-right {\n    margin-left: -10px; }\n    .popover.popover-left .popover-arrow, .popover.bs-tether-element-attached-right .popover-arrow {\n      top: 50%;\n      right: -11px;\n      margin-top: -11px;\n      border-right-width: 0;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n      .popover.popover-left .popover-arrow::after, .popover.bs-tether-element-attached-right .popover-arrow::after {\n        right: 1px;\n        bottom: -10px;\n        content: \"\";\n        border-right-width: 0;\n        border-left-color: #fff; }\n\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: -0.7rem -0.7rem 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover-arrow, .popover-arrow::after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover-arrow {\n  border-width: 11px; }\n\n.popover-arrow::after {\n  content: \"\";\n  border-width: 10px; }\n", ""]);

	// exports


/***/ },
/* 267 */
/***/ function(module, exports) {

	module.exports = "<span v-el:trigger>\r\n\t<slot></slot>\r\n</span> \r\n<div class=\"popover {{popoverAlignment}}\" v-show=\"show\" v-el:popover>\r\n  <div class=\"popover-arrow\"></div>\r\n  <h3 class=\"popover-title\" v-if=\"title\">{{title}}</h3>\r\n  <div class=\"popover-content\">\r\n    <span v-html=\"text\"></span>\r\n  </div>\r\n</div>";

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _progressJson = __webpack_require__(269);

	var _progressJson2 = _interopRequireDefault(_progressJson);

	var _progressHtml = __webpack_require__(270);

	var _progressHtml2 = _interopRequireDefault(_progressHtml);

	var _snippetHtml = __webpack_require__(271);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsProgress = __webpack_require__(272);

	var _srcComponentsProgress2 = _interopRequireDefault(_srcComponentsProgress);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      variants: _utils.variants
	    };
	  },
	  components: {
	    vsProgress: _srcComponentsProgress2['default'],
	    docsDemo: _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 269 */
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
				"default": false,
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
				"default": false,
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
/* 270 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>striped <input type=\"checkbox\" v-model=\"striped\"></label>\r\n\t\t<!-- <label>animated <input type=\"checkbox\" v-model=\"animated\"></label> -->\r\n\t\t<label>\r\n\t\t\tvariant\r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label class=\"form-control-label\">value</label> <input type=\"range\" v-model=\"value\"> {{value}}%\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-progress :variant=\"variant\" :value=\"value\" :striped=\"striped\" :animated=\"animated\">25%</vs-progress>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 271 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-progress</span> \r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"25\"</span> \r\n  <span class=\"hljs-attribute\">striped</span>=<span class=\"hljs-value\">\"true\"</span> \r\n  <span class=\"hljs-attribute\">animated</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  25%\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-progress</span>&gt;</span>";

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(273);

	var _progressHtml = __webpack_require__(276);

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
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(274);

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(275);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: block;\n  width: 100%;\n  height: 1rem;\n  margin-bottom: 1rem; }\n\n.progress[value] {\n  color: #0074d9;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n\n.progress[value]::-webkit-progress-bar {\n  background-color: #eee;\n  border-radius: 0.25rem; }\n\n.progress[value]::-webkit-progress-value::before {\n  content: attr(value); }\n\n.progress[value]::-webkit-progress-value {\n  background-color: #0074d9;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.progress[value=\"100\"]::-webkit-progress-value {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n@media screen and (min-width: 0\\0) {\n  .progress {\n    background-color: #eee;\n    border-radius: 0.25rem; }\n  .progress-bar {\n    display: inline-block;\n    height: 1rem;\n    text-indent: -999rem;\n    background-color: #0074d9;\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n  .progress[width^=\"0\"] {\n    min-width: 2rem;\n    color: #818a91;\n    background-color: transparent;\n    background-image: none; }\n  .progress[width=\"100%\"] {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem; } }\n\n.progress-striped[value]::-webkit-progress-value {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-striped[value]::-moz-progress-bar {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-bar-striped {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-size: 1rem 1rem; } }\n\n.progress-animated[value]::-webkit-progress-value {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-animated[value]::-moz-progress-bar {\n  animation: progress-bar-stripes 2s linear infinite; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-animated .progress-bar-striped {\n    -webkit-animation: progress-bar-stripes 2s linear infinite;\n            animation: progress-bar-stripes 2s linear infinite; } }\n\n.progress-success[value]::-webkit-progress-value {\n  background-color: #42b983; }\n\n.progress-success[value]::-moz-progress-bar {\n  background-color: #42b983; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-success .progress-bar {\n    background-color: #42b983; } }\n\n.progress-info[value]::-webkit-progress-value {\n  background-color: #5bc0de; }\n\n.progress-info[value]::-moz-progress-bar {\n  background-color: #5bc0de; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-info .progress-bar {\n    background-color: #5bc0de; } }\n\n.progress-warning[value]::-webkit-progress-value {\n  background-color: #f0ad4e; }\n\n.progress-warning[value]::-moz-progress-bar {\n  background-color: #f0ad4e; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-warning .progress-bar {\n    background-color: #f0ad4e; } }\n\n.progress-danger[value]::-webkit-progress-value {\n  background-color: #d9534f; }\n\n.progress-danger[value]::-moz-progress-bar {\n  background-color: #d9534f; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-danger .progress-bar {\n    background-color: #d9534f; } }\n", ""]);

	// exports


/***/ },
/* 276 */
/***/ function(module, exports) {

	module.exports = "<progress \r\n\tclass=\"progress {{progressVariant}} {{striped ? 'progress-striped' : ''}} {{animated ? 'progres-animated' : ''}}\" \r\n\tvalue=\"{{value}}\" \r\n\tmax=\"{{max}}\" \r\n\taria-valuenow=\"{{value}}\" \r\n\taria-valuemin=\"0\" \r\n\taria-valuemax=\"{{max}}\"\r\n\tv-el:progress>\r\n  <div class=\"progress\">\r\n    <span class=\"progress-bar\" v-bind:style=\"{width: value + '%'}\" v-el:progressbar></span>\r\n  </div>\r\n</progress>";

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tablesJson = __webpack_require__(278);

	var _tablesJson2 = _interopRequireDefault(_tablesJson);

	var _tablesHtml = __webpack_require__(279);

	var _tablesHtml2 = _interopRequireDefault(_tablesHtml);

	var _snippetHtml = __webpack_require__(280);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsTables = __webpack_require__(281);

	var _srcComponentsTables2 = _interopRequireDefault(_srcComponentsTables);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

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
/* 278 */
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
/* 279 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-table hover responsive>\r\n\t\t\t\t<table>\r\n\t\t\t\t  <thead>\r\n\t\t\t\t    <tr>\r\n\t\t\t\t      <th>#</th>\r\n\t\t\t\t      <th>First Name</th>\r\n\t\t\t\t      <th>Last Name</th>\r\n\t\t\t\t      <th>Username</th>\r\n\t\t\t\t    </tr>\r\n\t\t\t\t  </thead>\r\n\t\t\t\t  <tbody>\r\n\t\t\t\t    <tr>\r\n\t\t\t\t      <th scope=\"row\">1</th>\r\n\t\t\t\t      <td>Mark</td>\r\n\t\t\t\t      <td>Otto</td>\r\n\t\t\t\t      <td>@mdo</td>\r\n\t\t\t\t    </tr>\r\n\t\t\t\t    <tr>\r\n\t\t\t\t      <th scope=\"row\">2</th>\r\n\t\t\t\t      <td>Jacob</td>\r\n\t\t\t\t      <td>Thornton</td>\r\n\t\t\t\t      <td>@fat</td>\r\n\t\t\t\t    </tr>\r\n\t\t\t\t    <tr>\r\n\t\t\t\t      <th scope=\"row\">3</th>\r\n\t\t\t\t      <td colspan=\"2\">Larry the Bird</td>\r\n\t\t\t\t      <td>@twitter</td>\r\n\t\t\t\t    </tr>\r\n\t\t\t\t  </tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</vs-table>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 280 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-table</span> <span class=\"hljs-attribute\">hover</span> <span class=\"hljs-attribute\">responsive</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">table</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">thead</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span>&gt;</span>#<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span>&gt;</span>First Name<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span>&gt;</span>Last Name<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span>&gt;</span>Username<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">thead</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tbody</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span> <span class=\"hljs-attribute\">scope</span>=<span class=\"hljs-value\">\"row\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>Mark<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>Otto<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>@mdo<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span> <span class=\"hljs-attribute\">scope</span>=<span class=\"hljs-value\">\"row\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>Jacob<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>Thornton<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>@fat<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span> <span class=\"hljs-attribute\">scope</span>=<span class=\"hljs-value\">\"row\"</span>&gt;</span>3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span> <span class=\"hljs-attribute\">colspan</span>=<span class=\"hljs-value\">\"2\"</span>&gt;</span>Larry the Bird<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>@twitter<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tbody</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">table</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-table</span>&gt;</span>";

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(282);

	var _tablesHtml = __webpack_require__(285);

	var _tablesHtml2 = _interopRequireDefault(_tablesHtml);

	// import ie9 polyfill

	__webpack_require__(51);

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
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(283);

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(284);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    line-height: 1.5;\n    vertical-align: top;\n    border-top: 1px solid #eceeef; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #eceeef; }\n  .table tbody + tbody {\n    border-top: 2px solid #eceeef; }\n  .table .table {\n    background-color: #fff; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #eceeef; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #eceeef; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover tbody tr:hover {\n  background-color: #f5f5f5; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: #f5f5f5; }\n\n.table-hover .table-active:hover {\n  background-color: #e8e8e8; }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: #e8e8e8; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #dff0d8; }\n\n.table-hover .table-success:hover {\n  background-color: #d0e9c6; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #d0e9c6; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #d9edf7; }\n\n.table-hover .table-info:hover {\n  background-color: #c4e3f3; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #c4e3f3; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #fcf8e3; }\n\n.table-hover .table-warning:hover {\n  background-color: #faf2cc; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #faf2cc; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f2dede; }\n\n.table-hover .table-danger:hover {\n  background-color: #ebcccc; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #ebcccc; }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  min-height: 0.01%;\n  overflow-x: auto; }\n\n.thead-inverse th {\n  color: #fff;\n  background-color: #373a3c; }\n\n.thead-default th {\n  color: #55595c;\n  background-color: #eceeef; }\n\n.table-inverse {\n  color: #eceeef;\n  background-color: #373a3c; }\n  .table-inverse.table-bordered {\n    border: 0; }\n  .table-inverse th,\n  .table-inverse td,\n  .table-inverse thead th {\n    border-color: #55595c; }\n\n.table-reflow thead {\n  float: left; }\n\n.table-reflow tbody {\n  display: block;\n  white-space: nowrap; }\n\n.table-reflow th,\n.table-reflow td {\n  border-top: 1px solid #eceeef;\n  border-left: 1px solid #eceeef; }\n  .table-reflow th:last-child,\n  .table-reflow td:last-child {\n    border-right: 1px solid #eceeef; }\n\n.table-reflow thead:last-child tr:last-child th,\n.table-reflow thead:last-child tr:last-child td,\n.table-reflow tbody:last-child tr:last-child th,\n.table-reflow tbody:last-child tr:last-child td,\n.table-reflow tfoot:last-child tr:last-child th,\n.table-reflow tfoot:last-child tr:last-child td {\n  border-bottom: 1px solid #eceeef; }\n\n.table-reflow tr {\n  float: left; }\n  .table-reflow tr th,\n  .table-reflow tr td {\n    display: block !important;\n    border: 1px solid #eceeef; }\n", ""]);

	// exports


/***/ },
/* 285 */
/***/ function(module, exports) {

	module.exports = "<div v-bind:class=\"{repsonsive: responsive}\">\r\n\t<slot></slot>\r\n</div>";

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tabsJson = __webpack_require__(287);

	var _tabsJson2 = _interopRequireDefault(_tabsJson);

	var _tabsHtml = __webpack_require__(288);

	var _tabsHtml2 = _interopRequireDefault(_tabsHtml);

	var _snippetHtml = __webpack_require__(289);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsTabs = __webpack_require__(290);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);

	var _utils = __webpack_require__(90);

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
	      sizes: _utils.sizes
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
/* 287 */
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
				"default": true,
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
			}
		]
	};

/***/ },
/* 288 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>fade <input type=\"checkbox\" v-model=\"fade\"></label>\r\n\t\t<label>\r\n\t\t\t\tsize\r\n\t\t\t\t<select v-model=\"size\">\r\n\t\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<vs-tabs :fade=\"fade\" :size=\"size\">\r\n\t\t\t\t<vs-tab id=\"tab-1\" title=\"Tab 1\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quidem!</vs-tab>\r\n\t\t\t\t<vs-tab id=\"tab-2\" title=\"Tab 2\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, corporis?</vs-tab>\r\n\t\t\t\t<vs-tab id=\"tab-2\" title=\"Tab 3\" disabled>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, architecto, maiores.</vs-tab>\r\n\t\t\t</vs-tabs>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 289 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-tabs</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">fade</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-tab</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"tab-1\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Tab 1\"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quidem!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-tab</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-tab</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"tab-2\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Tab 2\"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, corporis?<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-tab</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-tab</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"tab-2\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Tab 3\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, architecto, maiores.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-tab</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-tabs</span>&gt;</span>\r\n";

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(12);

	var _tabsHtml = __webpack_require__(291);

	var _tabsHtml2 = _interopRequireDefault(_tabsHtml);

	var _utilsHelpersJs = __webpack_require__(50);

	// this is directly linked to the bootstrap animation timing in _carusel.scss
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
	      setTimeout(function () {
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
	  }
	};

	exports.tabs = tabs;
	// export tab object
	var tab = {
	  template: '<div role="tabpanel" class="tab-pane" v-bind:class="{ active: active, disabled: disabled, fade: fade, in: animate}"><slot></slot></div>',
	  replace: true,
	  data: function data() {
	    return {
	      fade: this.$parent.fade
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
	    },
	    animate: {
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
/* 291 */
/***/ function(module, exports) {

	module.exports = "<div class=\"tabs\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\" v-for=\"item in items\" v-on:click=\"setActive($index)\">\n      <span class=\"nav-link btn {{btnSize}} {{item.active ? 'active' : ''}} {{ item.disabled ? 'disabled' : '' }}\">{{item.title}}</span>\n    </li>\n  </ul>\n  <div class=\"tab-content\">\n    <slot></slot>\n  </div>\n</div>";

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tooltipJson = __webpack_require__(293);

	var _tooltipJson2 = _interopRequireDefault(_tooltipJson);

	var _tooltipHtml = __webpack_require__(294);

	var _tooltipHtml2 = _interopRequireDefault(_tooltipHtml);

	var _snippetHtml = __webpack_require__(295);

	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);

	var _srcComponentsTooltip = __webpack_require__(296);

	var _srcComponentsTooltip2 = _interopRequireDefault(_srcComponentsTooltip);

	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(52);

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
/* 293 */
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
				"description": "Title or a small text."
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
/* 294 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t\t<vs-tooltip text=\"tooltip top\" position=\"top\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip top</button>\r\n\t\t\t\t</vs-tooltip>\r\n\t\t\t\t<vs-tooltip text=\"tooltip bottom\" position=\"bottom\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip bottom</button>\r\n\t\t\t\t</vs-tooltip>\r\n\t\t\t\t<vs-tooltip text=\"tooltip left\" position=\"left\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip left</button>\r\n\t\t\t\t</vs-tooltip>\r\n\t\t\t\t<vs-tooltip text=\"tooltip right\" position=\"right\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip right</button>\r\n\t\t\t\t</vs-tooltip>\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 295 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">vs-tooltip</span> \r\n  <span class=\"hljs-attribute\">text</span>=<span class=\"hljs-value\">\"tooltip top\"</span> \r\n  <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"top\"</span>\r\n  <span class=\"hljs-attribute\">:triggers</span>=<span class=\"hljs-value\">\"['hover']\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn\"</span>&gt;</span>tooltip top<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">vs-tooltip</span>&gt;</span>\r\n";

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(297);

	// TODO import {Tether} from 'vuestrap-tether'

	var _tooltipHtml = __webpack_require__(300);

	var _tooltipHtml2 = _interopRequireDefault(_tooltipHtml);

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

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
	      var _this2 = this;

	      // change state
	      this.show = typeof newState !== 'undefined' ? newState : !this.show;

	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      // element is shown
	      if (this.show) {
	        (function () {
	          var position = {
	            attachment: 'bottom center',
	            targetAttachment: 'top center'
	          };
	          if (_this2.position === 'bottom') {
	            position = {
	              attachment: 'top center',
	              targetAttachment: 'bottom center'
	            };
	          }
	          if (_this2.position === 'left') {
	            position = {
	              attachment: 'middle right',
	              targetAttachment: 'middle left'
	            };
	          }
	          if (_this2.position === 'right') {
	            position = {
	              attachment: 'middle left',
	              targetAttachment: 'middle right'
	            };
	          }

	          // let tether do the magic, after element is shown
	          _vue2['default'].nextTick(function () {
	            _this2._tether = new Tether({
	              element: _this2._tooltip,
	              target: _this2._trigger,
	              attachment: position.attachment,
	              targetAttachment: position.targetAttachment
	            });
	            _this2.$dispatch('shown::tooltip');
	          });

	          // element gets hidden
	        })();
	      } else {
	          // remove the tether reference from the element
	          if (this._tether) {
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
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(298);

	__webpack_require__(18);

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(299);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 0.875rem;\n  opacity: 0; }\n  .tooltip.in {\n    opacity: 0.9; }\n  .tooltip.tooltip-top, .tooltip.bs-tether-element-attached-bottom {\n    padding: 5px 0;\n    margin-top: -3px; }\n    .tooltip.tooltip-top .tooltip-arrow, .tooltip.bs-tether-element-attached-bottom .tooltip-arrow {\n      bottom: 0;\n      left: 50%;\n      margin-left: -5px;\n      border-width: 5px 5px 0;\n      border-top-color: #000; }\n  .tooltip.tooltip-right, .tooltip.bs-tether-element-attached-left {\n    padding: 0 5px;\n    margin-left: 3px; }\n    .tooltip.tooltip-right .tooltip-arrow, .tooltip.bs-tether-element-attached-left .tooltip-arrow {\n      top: 50%;\n      left: 0;\n      margin-top: -5px;\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000; }\n  .tooltip.tooltip-bottom, .tooltip.bs-tether-element-attached-top {\n    padding: 5px 0;\n    margin-top: 3px; }\n    .tooltip.tooltip-bottom .tooltip-arrow, .tooltip.bs-tether-element-attached-top .tooltip-arrow {\n      top: 0;\n      left: 50%;\n      margin-left: -5px;\n      border-width: 0 5px 5px;\n      border-bottom-color: #000; }\n  .tooltip.tooltip-left, .tooltip.bs-tether-element-attached-right {\n    padding: 0 5px;\n    margin-left: -3px; }\n    .tooltip.tooltip-left .tooltip-arrow, .tooltip.bs-tether-element-attached-right .tooltip-arrow {\n      top: 50%;\n      right: 0;\n      margin-top: -5px;\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n", ""]);

	// exports


/***/ },
/* 300 */
/***/ function(module, exports) {

	module.exports = "<span v-el:trigger>\r\n\t<slot></slot>\r\n</span> \r\n<div class=\"tooltip fade in {{tooltipAlignment}}\" v-show=\"show\" v-el:tooltip>\r\n\t<div class=\"tooltip-inner\">\r\n\t\t<div class=\"tooltip-arrow\"></div>\r\n\t  <div class=\"tooltip-content\">\r\n\t    <span v-html=\"text\"></span>\r\n\t  </div>\r\n\t</div>\r\n</div>";

/***/ }
/******/ ]);