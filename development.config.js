const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    canvas: './src/demo/canvas/watermark.ts'
  },
  output: {
    filename: '[name]_bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }]
  },
  resolve: {
    extensions: ['.ts', '.less', '.js'],
  },
  // 多数组打包
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "./src/demo/canvas/index.html"),
    filename: "main.html",
    chunks: ['canvas']
  }),
  new HtmlWebpackPlugin({ 
    template: path.resolve(__dirname, "./src/demo/app/index.html"),
    filename: "app.html",
    chunks:['app']
  })
],
  devServer: {
    port: 3002,
    host: '0.0.0.0',
    client: {
      logging: 'info'
    }
  },
}