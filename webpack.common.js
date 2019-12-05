const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    library: '',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules)/,
        use: [
          'vue-loader',
        ]
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'css-loader'
        }
      },
    ]
  }
}
