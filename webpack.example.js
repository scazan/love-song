
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
  devtool: '#inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};
