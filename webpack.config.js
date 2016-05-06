var webpack = require('webpack')

var path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.js$/, include: [path.resolve(__dirname, 'src')], loader: 'babel' },
      { test: /\.css$/, loaders: ['style', 'css?modules'] }
    ]
  },

  resove: {
    modulesDirectories: ['node_modules', 'components']
  }
}
