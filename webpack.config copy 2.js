module.exports = {
	mode: 'production',
	optimization: {
        minimize: false
    },
	entry: {
		html: './src/html/index.js'
	},
	output: {
		path: __dirname,
		filename: 'blocks/html.js'
	},
	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	}
};