
const path = require('path');

module.exports = {
	watch: true,
	entry: './src/wns.ts',
	output: {
		filename: 'wns.js',
		path: path.resolve(__dirname)
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
