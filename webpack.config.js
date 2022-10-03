const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: [path.join(__dirname, 'src', 'index.js')],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  mode: 'development',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devtool: 'eval',
  devServer: {
    static: path.join(__dirname, 'src'),
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['babel-loader', 'source-map-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ],
    moduleIds: 'deterministic',
    // nodeEnv: 'production',
    mangleWasmImports: true,
    removeAvailableModules: true,
    flagIncludedChunks: true,
    concatenateModules: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
    new webpack.ids.DeterministicChunkIdsPlugin({maxLength: 5}),
    new ReactRefreshWebpackPlugin()
  ]
};
