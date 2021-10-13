'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/js_71.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};