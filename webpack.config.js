const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),  // ← emit into docs/
    filename: 'js/bundle.js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
      }
    ]
  },
  optimization: {
    minimizer: [ new TerserJSPlugin(), new CssMinimizerPlugin() ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/main.bundle.css' }),
    new HtmlWebpackPlugin({
      template: './src/dist/index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/dist/img', to: 'img' }
      ]
    })
  ]
};
