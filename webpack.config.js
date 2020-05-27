const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    public: path.resolve(__dirname, './src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
  },
  devServer: {
    port: 3020,
    contentBase: path.resolve(__dirname, './build'),
    hot: true,
    open: true,
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      { test: /\.html$/, use: 'html-loader' },
      {
        test: /\.less$/,
        use: [
          CssWebpackPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './images/',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    new CssWebpackPlugin({
      filename: 'style.css',
    }),
    new MinifyPlugin(),
  ],
};
