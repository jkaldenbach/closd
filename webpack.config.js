module.exports = {
  entry: './app/app.js',
  output: { path: __dirname + '/src', filename: 'bundle.js' },
  module: {
    loaders: [{
      test: /.js/,
      loader: 'babel-loader',
      exlude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }, {
      test: /.html/,
      loader: 'html'
    }]
  }
}
