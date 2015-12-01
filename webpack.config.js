var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// export config
module.exports = {
  themeLoader: {
    themes: ['./src/docs/theme/_docs.scss', './node_modules/vuestrap/theme/bootstrap.scss'], // overriding vuestrap theme and default one
  },
  resolve: {
    root: path.resolve('./')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel'
    }, {
      test: /\.html$/,
      exclude: /(snippet.html)/,
      loader: 'html'
    }, {
      test: /snippet.html$/,
      loader: 'html!highlightjs?lang=html'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  }
}
