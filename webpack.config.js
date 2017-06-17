let path = require('path');

let webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'views/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'views/build/js'),
        filename: 'index.js',
    },
    devtool: 'inline-source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query:
            {
              presets: ['react']
            }
        },
        {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    }
};
