const API_URL = {
  //production: JSON.stringify('https://showcaseFunctions.azurewebsites.net'),
  production: JSON.stringify('https://iotShowcaseFunctions.azurewebsites.net'),
  development: JSON.stringify('https://localhost:8082')
};

// check environment mode
const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  publicPath: '/analysis/',
  devServer: {
    port: 8082,
    https: true,
    proxy: {
      '^/api': {
        //'target': 'https://showcaseFunctions.azurewebsites.net',
        'target': 'https://iotShowcaseFunctions.azurewebsites.net',
        'ws': true,
        'changeOrigin': true
      },
      '^/client': {
        //'target': 'https://iotdata1.service.signalr.net/',
        'target': 'https://iotdataMW.service.signalr.net/',
        'ws': true,
        'changeOrigin': true
      }
    },
  },
  "chainWebpack": (config) => {
    config.plugin('define').tap((definitions) => {
      definitions[0]['API_URL'] = API_URL[environment];
      return definitions;
    });
  },
  lintOnSave: false
}
