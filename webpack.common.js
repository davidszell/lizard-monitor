const path = require('path');

module.exports = {
	entry: './src/app.js',
	module: {
		rules: [
            {
				test: /\.(js|jsx)$/,
				exclude: path.resolve(__dirname, 'src'),
				enforce: 'pre',
				use: 'source-map-loader'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env'] },
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
            'react': 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat'
		},
	},
	output: {
		path: path.resolve(__dirname, 'public/js/'),
		publicPath: '/js/',
		filename: 'app.js',
	},
};