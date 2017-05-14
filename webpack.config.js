module.exports = {
	entry: './app/components/App.js',
	output: {filename: 'prepublic/bundle.js'},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {presets: ['es2015', 'react']}
			}
		]
	}
}