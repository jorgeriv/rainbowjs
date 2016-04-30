'use strict';
/**
 * This module is an intermediate step needed to avoid circular dependencies between color and scheme modules
 **/
const Color = require('./color');
const Scheme = require('./scheme');


Color.prototype.createScheme = function createscheme(config){
  let scheme = new Scheme({colors: [{base: this.toJSON()}]});
  if(!config){
    return scheme;
  }
  return scheme.configure(config).generate();
};
