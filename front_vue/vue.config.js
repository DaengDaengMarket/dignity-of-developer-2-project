// vue.config.js
const path = require('path');

module.exports = {
  devServer: {
    overlay: false,
  },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src/')
        }
    }
}
};
