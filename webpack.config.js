let path = require('path')
let webpack = require('webpack')
//let CopyWebpackPlugin = require('copy-webpack-plugin')
let TARGET = process.env.npm_lifecycle_event
let mergecat = require('./src/util').mergecat

  /* config for copy-webpack-plugin
  context: path.join(__dirname),
  plugins: [
    new CopyWebpackPlugin([{ from: 'CSXS', to: 'CSXS' }]),
    new CopyWebpackPlugin([{ from: 'lib', to: 'lib' }]),
  ],
  */
let exp = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,loaders: ['babel'],include: path.join(__dirname, 'src') },
      { test: /\.css?$/, include: path.join(__dirname, 'node_modules'), loaders: ['style', 'css']},
      { test: /\.css?$/, include: path.join(__dirname, 'src', 'components'), loaders: ['style', 'css']},
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.png$/,include: path.join(__dirname, 'media'),
        loader: 'url?limit=10000&mimetype=image/x-apple-ios-png&prefix=images' },
    ]
  }
}
if(TARGET === 'start') exp = mergecat(exp,{
  entry: [
    'webpack-dev-server/client?http://localhost:3000'
  ]
})
if(TARGET === 'build') exp = mergecat(exp,{
})
module.exports = exp
