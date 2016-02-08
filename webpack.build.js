var config = require('./webpack.config.js')
var webpack = require('webpack')
var optimist = require('optimist')
var pkg = require('./package.json')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// get some options
var ENV = optimist.argv.env || 'development'
var BUNDLE = optimist.argv.bundle || false

// file name
var fileName = (ENV === 'production') ? './dist/[name].min' : './dist/[name]'
if (BUNDLE) {
  fileName = (ENV === 'production') ? './dist/[name]-bundle.min' : './dist/[name]-bundle'
}

/**
 * define environment
 */
// set an environment variable to be available in the build script
config.plugins = []
if (ENV) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"' + ENV + '"'
    }
  }))
}

// define plugins for production
if (ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
      warnings: false
    }
  }))
}

/**
 * define devtool for source maps
 */
if (ENV === 'development' && !BUNDLE) {
  config.devtool = 'source-map'
}

/**
 * define scss loaders
 * in docs we want css stuff served from static bundle js that has css and js included
 */
if (ENV === 'docs' || BUNDLE) {
  config.module.loaders.push({
    test: /\.scss$/,
    loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader!vuestrap-theme-loader'
  })
} else {
  config.plugins.push(new ExtractTextPlugin(fileName + '.css'))
  config.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader!vuestrap-theme-loader')
  })
}

/**
 * define entry
 * if docs get everything, including styling, all source components and docs compoenents
 * otherwise just load source components
 */
if (ENV !== 'docs') {
  config.entry = {}
  config.entry[pkg.library] = './src/components/compiled.js'
} else {
  config.entry = './src/index.js'
}

/**
 * define output
 * creates bundle files that include css and js -> this is a main script in package.json
 * creates seperate styling and js files -> these files will be included in bower
 * creates docs bundle file that includes everything -> used in index.html (gh_pages)
 */
config.output = (ENV !== 'docs') ? {
  filename: fileName + '.js',
  library: pkg.library,
  libraryTarget: 'umd'
} : {
  path: './dist',
  publicPath: '/dist/',
  filename: 'docs.js'
}

module.exports = config
