module.exports = {
  publicPath: '/analysis/',
  devServer: {
    https: true,
    proxy: {
      '^/api': {
        'target': 'https://dataorganisation-iotshowcase.azurewebsites.net',
        'ws': true,
        'changeOrigin': true
      },
      '^/client': {
        'target': 'https://iotdata.service.signalr.net/',
        'ws': true,
        'changeOrigin': true
      }
    }
  },
  lintOnSave: false
}
