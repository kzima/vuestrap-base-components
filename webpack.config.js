var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// export config
module.exports = {
  themeLoader: {
    themes: ['./src/theme/docs.scss', './node_modules/vuestrap/theme/bootstrap.scss'], // docs theme, default bootstrap
  },
  resolve: {
    root: path.resolve('./')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve('./src'),
        path.resolve('./node_modules/vuestrap')
      ],
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
