const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	mode: 'development',
	module: {
		rules: 
		[
			{
				test: /\.jsx?$/,
				use: "babel-loader",
				exclude: "/node_modules/"
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, 'dist')
	}
}