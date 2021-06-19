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
<<<<<<< HEAD
    }
},

=======
    },
    transpileDependencies: [
      'vuetify'
    ]
}
>>>>>>> 0317c0fde0a21ae45829b9d0386d202592a62cbe
};
