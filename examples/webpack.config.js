var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',

  entry: './index.jsx',

  output: {
    path: __dirname,
    publicPath: '/react-flip-move/examples',
    filename: 'dist/bundle.js',
    sourceMapFilename: 'dist/bundle.map'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('dist/style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV:       JSON.stringify('production'),
        UNIVERSAL_ENV:  JSON.stringify('client')
      }
    })
  ],

  module: {
    loaders: [
      // JAVASCRIPT
      {
        test:     /\.jsx?$/,
        loader:   'babel',
        exclude:  /node_modules/
      },
      // SASS
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.sass'],
    modulesDirectories: ['src', 'node_modules']
  }
}
