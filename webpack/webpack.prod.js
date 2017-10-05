/**
 * This is a prod config to be merged with the Client config
 */
'use strict';
let webpack = require('webpack');
module.exports = {
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.\/environment\.dev/, './environment.prod')
  ]
};
