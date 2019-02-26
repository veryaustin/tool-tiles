const path = require('path')

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    library: ['Tool Tiles'],
    libraryTarget: 'umd',
    publicPath: '/dist/',
  },
}
