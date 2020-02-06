module.exports = {
  publicPath: '/analysis/',
  devServer: {
    https: true,
    proxyTable: {
      // proxy all requests starting with /api to jsonplaceholder
      '/client': {
        target: 'https://iotdata.service.signalr.net',
        changeOrigin: true
      }
    }
  },
  lintOnSave: false
}
