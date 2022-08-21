module.exports = {
	mode: 'production',
	entry: {
		richtext: './src/richtext.js',
		block: './src/block.js',
		mockblock: './src/mockblock.js'
	},
	output: {
		path: __dirname,
		filename: 'blocks/[name].js'
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