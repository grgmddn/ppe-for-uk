'use strict';

const webpack = require('webpack');

const path = require('path');
const config = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const fetch = require('node-fetch');

const manifest = require(path.join(__dirname, config.manifest));

//  Method for getting JSON data from an API
/*
const url = manifest.apiUrl;
const getData = url => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    });
};
*/

const minify = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
};

let isProduction = () => {
  if (process.env.NODE_ENV === 'production') { return true; } else { return false; }
};

const configPromise = new Promise(function(resolve, reject) {

  //  If using getData method
  //  getData(url).then(function (response) {});

  let plugins = [

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isProduction() ? JSON.stringify('production') : JSON.stringify('development')
    }),

    //  new webpack.DefinePlugin({ 'process.env.API_DATA': JSON.stringify(response) }),

    new CleanWebpackPlugin({
        path: isProduction() ? [path.join(__dirname, config.dist), path.join(__dirname, config.cache)] : [path.join(__dirname, config.cache)]}),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, config.src, './templates/index.html'),
      inject: 'body',
      minify: isProduction() ? minify : false,
      templateParameters: {
        siteData: manifest
      }
    }),

    new MiniCssExtractPlugin({
      filename: isProduction() ? '[name].[hash].css' : '[name].css',
      chunkFilename: isProduction() ? '[id].[hash].css' : '[id].css'
    })

  ];

  if (isProduction) {
    plugins.push(new UglifyJSPlugin());
  }

  // then at some point call `resolve()` with the config object:
  resolve({

    entry: path.join(__dirname, config.src, 'app.js'), // string | object | array
    // Here the application starts executing
    // and webpack starts bundling

    output: {
      // options related to how webpack emits results

      path: path.join(__dirname, config.dist), // string
      // the target directory for all output files
      // must be an absolute path (use the Node.js path module)

      filename: isProduction() ? 'bundle.[hash].js' : 'bundle.js',
      // the filename template for entry chunks

      publicPath: '/'

    },

    plugins: plugins,

    module: {
      rules: [
        { 
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          include: path.join(__dirname, config.src),
          enforce: 'pre'
        }, {
          test: /\.(sa|sc|c)ss$/,
          use: [{
            loader: isProduction() ? MiniCssExtractPlugin.loader : 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer
              ]
            }
          }, {
            loader: 'resolve-url-loader'
          }, {
            loader: 'sass-loader'
          }]
        }, {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader:'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }, {
          test: /\.(woff2?|ttf|otf|eot|svg)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[hash].[ext]'
              }
            }
          ]
        }
      ]
    },

    devServer: isProduction() ? {} : {
      contentBase: [
        path.join(__dirname, config.src),
        path.join(__dirname, config.statics),
        path.join(__dirname, 'node_modules')
      ],
      compress: false,
      port: 8080,
      watchContentBase: true
    },

    devtool: isProduction() ? '' : 'eval-source-map'

  });
});

module.exports = configPromise;
