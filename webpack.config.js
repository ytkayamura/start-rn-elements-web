const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [ '@babel/polyfill', path.resolve(__dirname, 'src/index.jsx') ],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader' },
      { test: /\.html?$/, loader: 'html-loader' },
      { test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader' },
    ],
  },
  resolve: {
    modules: [ 'node_modules', path.resolve(__dirname, 'src') ],
    extensions: ['.js'],
    alias: {
      'react-native$': 'react-native-web'
    },
  },
};
