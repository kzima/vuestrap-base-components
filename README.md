Vuestrap Base Components
=========

Vuestrap Base Components extend Bootstrap 4. Built with [vuestrap](https://github.com/kzima/vuestrap/#readme), plain Vue.js and Webpack.

DEMO
=========

[Documentation](http://kzima.github.io/vuestrap-base-components/#/alert)

QUICK USE
=========

For compiled components, use it like this:

*Bower*
```js
bower install vuestrap-base --save-dev
```

```js
<link href="bower_components/vuestrap-base/dist/vuestrapBase.min.css" rel='stylesheet' type='text/css'>
<script src="bower_components/vuestrap-base/dist/vuestrapBase.min.js"></script>
```

*NPM*
```js
npm install vuestrap-base-components --save-dev
```

```js
import vuestrapBase from vuestrap-base-components
```

And then in your Vue instance:
```js
new Vue({
	el: '#app',
	components: { 'vs-alert': vuestrapBase.alert }
})
```

-- OR --

If you chosen to work with source components, just import* desired components like so:

```js
import { vsAlert, vsButton } from 'vuestrap-alert/src/components'
```

and then load it in your Vue instance:

```js
new Vue({
	el: '#app',
	components: { vsAlert, vsButton }
})
```

*Note: You will need <a href="https://github.com/babel/babel-loader">Babel Loader</a> in your Webpack config file to support ES6 syntax.

You can then use icon component in your html, like so:
```html
<vs-alert>Hello</vs-alert>
```

THEMING
=========
To be able to use your app theme with component's scss variables, you will need to use [vuestrap-theme-loader](https://github.com/kzima/vueastrap-theme-loader) in your webpack config file.

```js
npm install vuestrap-theme-loader --save-dev
```

See [vuestrap-starter](https://github.com/kzima/vuestrap-starter) for a webpack config example with theme loader.

TODO
=========
- document events
- testing
