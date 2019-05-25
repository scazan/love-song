
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  watch: true,
  entry: './example/app/scripts/main.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname + '/example/dist/', 'scripts')
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('example', 'app', 'index.html'),
    }),
  ],
  devtool: '#inline-source-map',
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};
