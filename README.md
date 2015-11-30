Vuestrap Base Components
=========

Vuestrap Base Components extend Bootstrap 4 with [vuestrap](http://kzima.github.io/vuestrap#readme) web components built with Vue.js and Webpack.

DEMO
=========

[Documentation](http://kzima.github.io/vuestrap-base-components/#/alert)

QUICK USE
=========

For compiled components, use it within your Vue instance like this:

```js
new Vue({
	el: '#app',
	components: { 'alert': vuestrapBase.alert }
})
```

-- OR --

If you chosen to work with source components, just import* desired component like so:

```js
import alert from 'vuestrap-alert/src/components/alert'
```

and then load it in your Vue instance:

```js
new Vue({
	el: '#app',
	components: { 'vs-alert': alert }
})
```

*Note: You will need <a href="https://github.com/babel/babel-loader">Babel Loader</a> in your Webpack config file to support ES6 syntax.

You can then use icon component in your html, like so:
```html
<vs-alert>Hello</vs-alert>
```

TODO
=========
- testing
