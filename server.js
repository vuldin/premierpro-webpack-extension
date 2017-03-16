let webpack = require('webpack')
let WebpackDevServer = require('webpack-dev-server')
let config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: false,
  historyApiFallback: false
}).listen(3000, 'localhost', function (err, result) {
  if (err) console.log(err)
  console.log('listening at localhost:3000')
})
