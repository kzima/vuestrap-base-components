var config = require('./webpack.config.js')
var webpack = require('webpack')
var optimist = require('optimist')
var pkg = require('./package.json')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// get some options
var ENV = optimist.argv.env || 'dev'

// file name
var fileName = (ENV === 'dist') ? './dist/[name].min' : './dist/[name]'

/**
 * define plugins
 */
// plugins for development
config.plugins = [
  new ExtractTextPlugin(fileName + '.css')
]

// plugins for production
if (ENV === 'dist') {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }))
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
	  sourceMap: false,
	  compress: {
	    warnings: false
	  }
	}))
}
// plugins for dev
if (ENV === 'dev') {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"dev"'
    }
  }))
}

/**
 * define devtool for source maps
 */
if (ENV === 'dev') {
  config.devtool = 'source-map'
}

/**
 * define scss loaders
 * in docs we want css stuff served from static bundle js
 */
if (ENV === 'docs') {
	config.module.loaders.push({
    test: /\.scss$/,
    loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader!vuestrap-theme-loader'
  })
} else {
  config.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader!vuestrap-theme-loader')
  })
}

/**
 * define entry
 */
if (ENV !== 'docs') {
  config.entry = {}
  config.entry[pkg.library] = './src/components/compiled.js'
} else {
  config.entry = './src/index.js'
}

/**
 * define output
 */
config.output = (ENV !== 'docs') ? {
  filename: fileName + '.js',
  library: pkg.library,
  libraryTarget: 'umd'
} : {
  path: './build',
  publicPath: '/build/',
  filename: 'build.js'
}

module.exports = config
