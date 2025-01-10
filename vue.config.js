const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack'); // Importez Webpack pour utiliser DefinePlugin

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true), // Active l'API des options
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false), // Désactive les DevTools en production
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true), // Ajoute des détails pour SSR
      }),
    ],
  },
});
