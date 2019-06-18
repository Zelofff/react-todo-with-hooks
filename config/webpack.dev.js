const base = require('./webpack.base')
const merge = require('webpack-merge')

const mode = 'development'

module.exports = merge(base(mode), {
  mode,
  devtool: 'inline-source-map',
  devServer: {
    hot: true
  }
})
