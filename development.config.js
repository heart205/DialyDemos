const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const entry = require('./src/lib/fs-loader').entry
const htmlTemplate = require('./src/lib/fs-loader').htmlTemplateAttribute
module.exports = {
  mode: 'development',
  entry: {
    ...entry,
    index: path.resolve(__dirname, 'src/index.ts'),
  },
  output: {
    filename: '[name]_bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.less', '.js', '.css'],
  },

  // 多数组打包
  plugins: [
    new webpack.DefinePlugin({
      process: {
        template: JSON.stringify(htmlTemplate),
      },
    }),
    ...htmlTemplate.map((val) => {
      return new HtmlWebpackPlugin(val)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      chunks: ['index'],
    }),
  ],
  devServer: {
    port: 3002,
    host: '0.0.0.0',
    client: {
      logging: 'info',
    },
  },
}
