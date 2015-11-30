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
      loader: 'html!highlightjs'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  }
}
