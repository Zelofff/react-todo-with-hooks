const base = require('./webpack.base')
const merge = require('webpack-merge')
const CompressionPlugin = require('compression-webpack-plugin')

const mode = 'production'

module.exports = merge(base(mode), {
  mode,
  plugins: [new CompressionPlugin({ test: /\.js(\?.*)?$/i })]
})
