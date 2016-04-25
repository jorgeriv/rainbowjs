'use strict';

const Color = require('./color');
const Scheme = require('./scheme');

let rainbow = {
  Color: Color,
  Scheme: Scheme
};

if(window){
  window.R = rainbow;
}
module.exports = rainbow;
