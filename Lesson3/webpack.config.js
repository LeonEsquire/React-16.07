const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}