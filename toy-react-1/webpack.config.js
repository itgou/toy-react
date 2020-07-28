module.exports = {
    entry: './main.js',
    mode: 'development',
	module:{
		rules: [
			{
				test: /\.js$/,
				use:{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							[
								"@babel/plugin-transform-react-jsx",
								{pragma: "ToyReact.createElement"}, //不写此行时, 默认React.createElement
							]
						]
					}
				}
			}
		]
	},
    optimization: {
        minimize: false
    }
}
