const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const entry = {
  canvas_index: '/Users/xchen/workSpace/DialyDemo/src/demo/canvas/index.ts',
  keyword_index: '/Users/xchen/workSpace/DialyDemo/src/demo/css/keyword/index.ts',
  debounce_index: '/Users/xchen/workSpace/DialyDemo/src/demo/debounce/index.ts',
  draggle_deaggle: '/Users/xchen/workSpace/DialyDemo/src/demo/draggle/deaggle.ts',
  draggle_index: '/Users/xchen/workSpace/DialyDemo/src/demo/draggle/index.ts',
  numberScroll_index: '/Users/xchen/workSpace/DialyDemo/src/demo/numberScroll/index.ts',
  throttle_index: '/Users/xchen/workSpace/DialyDemo/src/demo/throttle/index.ts',
  typescript_decorator: '/Users/xchen/workSpace/DialyDemo/src/demo/typescript/decorator.ts',
  typescript_file: '/Users/xchen/workSpace/DialyDemo/src/demo/typescript/file.ts',
  typescript_namespace: '/Users/xchen/workSpace/DialyDemo/src/demo/typescript/namespace.ts',
  typescript_norrowing: '/Users/xchen/workSpace/DialyDemo/src/demo/typescript/norrowing.ts',
  typescript_typeAnnotation: '/Users/xchen/workSpace/DialyDemo/src/demo/typescript/typeAnnotation.ts',
  typescript_typescript: '/Users/xchen/workSpace/DialyDemo/src/demo/typescript/typescript.ts'
}
const htmlTemplate = [
  {
    template: '/Users/xchen/workSpace/DialyDemo/src/demo/canvas/index.html',
    filename: 'canvas_index.html',
    chunks: [ 'canvas_index' ]
  },
  {
    template: '/Users/xchen/workSpace/DialyDemo/src/demo/css/keyword/index.html',
    filename: 'keyword_index.html',
    chunks: [ 'keyword_index' ]
  },
  {
    template: '/Users/xchen/workSpace/DialyDemo/src/demo/debounce/index.html',
    filename: 'debounce_index.html',
    chunks: [ 'debounce_index' ]
  },
  {
    template: '/Users/xchen/workSpace/DialyDemo/src/demo/draggle/index.html',
    filename: 'draggle_index.html',
    chunks: [ 'draggle_index' ]
  },
  {
    template: '/Users/xchen/workSpace/DialyDemo/src/demo/numberScroll/index.html',
    filename: 'numberScroll_index.html',
    chunks: [ 'numberScroll_index' ]
  },
  {
    template: '/Users/xchen/workSpace/DialyDemo/src/demo/throttle/index.html',
    filename: 'throttle_index.html',
    chunks: [ 'throttle_index' ]
  }
]
module.exports = {
  mode: 'development',
  entry,
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
    extensions: ['.ts', '.less', '.js','.css'],
  },
  // 多数组打包
  plugins: htmlTemplate.map(val => {
    return new HtmlWebpackPlugin(val)
  }),
  devServer: {
    port: 3002,
    host: '0.0.0.0',
    client: {
      logging: 'info'
    }
  },
}