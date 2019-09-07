const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed;

// reduce it to a nice object containing the .env key value pairs
let envKeys = {};
if (env) {
  envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
}


module.exports = {
  entry: {
    main: __dirname + '/client/src/index.jsx',
    vendor: ['styled-components'],
  },
  optimization: {
    runtimeChunk: {
      name: 'vendor'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          enforce: true
        },
        default: {
          chunks: 'all',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  resolve: {
    alias: {
      'styled-components': path.resolve('./node_modules', 'styled-components'),
    }
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/client/dist'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: __dirname + '/client/src/index.html',
      filename: __dirname + '/client/dist/index.html'
    }),
    new webpack.DefinePlugin(envKeys)
  ]
};