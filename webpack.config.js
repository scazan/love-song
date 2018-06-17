
const path = require('path');

module.exports = {
  watch: false,
  entry: './src/wns.ts',
  output: {
    filename: 'wns.js',
    path: path.resolve(__dirname, 'build'),
    library: "WNS",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      {
      test: /\.ts?$/,
      loader: 'awesome-typescript-loader'
    }
    ]
  }
};
