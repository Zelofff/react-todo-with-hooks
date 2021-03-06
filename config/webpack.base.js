const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = mode => {
  const devMode = mode === 'development'

  return {
    entry: './src/index.js',
    output: {
      filename: 'static/js/bundle.js',
      path: path.resolve(__dirname, '../dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'linaria/loader',
              options: {
                sourceMap: devMode
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: devMode
              }
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: devMode
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        '@features': path.resolve(__dirname, '../src/features/'),
        '@ui': path.resolve(__dirname, '../src/ui/'),
        '@lib': path.resolve(__dirname, '../src/lib/')
      },
      extensions: ['.js']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: './public/index.html',
        title: 'React todo app'
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/styles.css'
      })
    ]
  }
}
