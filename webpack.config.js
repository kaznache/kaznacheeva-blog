const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'less-loader'}
				]
			},
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
		]
  },
  plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			"window.jQuery": 'jquery',
			"root.jQuery": 'jquery'
		})
  ]
};