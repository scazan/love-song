
const path = require('path');

module.exports = {
	watch: true,
	entry: './app/scripts/main.tsx',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname + '/server/dist/', 'scripts')
	},
	resolve: {
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	}
};
