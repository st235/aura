const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/html/index.html',
  filename: 'index.html',
  inject: 'body'
});

const getAbsolutePathForName = (folderName) => path.resolve(__dirname, 'dist');

const config = {
  entry: './src/js/index.js',
  output: {
    path: getAbsolutePathForName('dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss?$/,
        use: [ "style-loader", "css-loader", "sass-loader" ], 
        exclude: /node_modules/
      },
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;
