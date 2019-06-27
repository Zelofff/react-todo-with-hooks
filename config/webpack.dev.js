const base = require('./webpack.base')
const merge = require('webpack-merge')

const mode = 'development'

module.exports = merge(base(mode), {
  mode,
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    port: 8000
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
})
