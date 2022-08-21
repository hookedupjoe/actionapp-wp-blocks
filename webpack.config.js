module.exports = {
    entry: {
		block: './src/block.js',
		mockblock: './src/mockblock.js'
	  },
	  output: {
		path: __dirname,
		filename: 'blocks/[name].js'
	  },
	  module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};