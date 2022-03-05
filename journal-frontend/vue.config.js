module.exports = {
  devServer: {
    host: 'localhost',
    compress: true,
    disableHostCheck: true   // That solved it
  }
}