'use strict';
const requirejs = require('requirejs');
requirejs.config({
  baseUrl: __dirname + '/../src',
  nodeRquire: require
});

module.exports = requirejs;
