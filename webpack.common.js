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
        test: /\.js$/,
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
          'vuetify-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'css-loader'
        }
      },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              // disable: true,
            },
          },
        ],
      }
    ]
  }
}
