export default{
 mode: 'development',
 entry: './src/index.js',
 output: {
	filename: 'bundle.js',
 },
 module: {
	rules: [{
	test: /\.jsx?$/,
	use: ['babel-loader']

	}]
 }

}
