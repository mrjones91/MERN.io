var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

try {
  import Config from 'dij-config';
  console.log(Config)
  NODE_ENV.MONGO_URL = Config.mongoURL;
} catch (e) {
  console.log('no dij-config. default MONGO_URL');
}

module.exports = {
  devtool: 'source-map',

  entry: __dirname + "/client/index.js",

  output: {
    path: __dirname + '/static/dist/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style','css?modules'),
      },
      {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: 'babel',
      }
    ],
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'MONGO_URL': NODE_ENV.MONGO_URL
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),
    new ExtractTextPlugin("app.css"),
  ],
};
