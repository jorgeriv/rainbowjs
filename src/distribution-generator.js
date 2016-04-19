'use strict';
const analogous = require('./distribution-functions/analogous');
const complement = require('./distribution-functions/complement');
const equidistant = require('./distribution-functions/equidistant');
const geometricProgression = require('./distribution-functions/geometric-progression');
const rotate = require('./distribution-functions/rotate');

function generateDistribution(config){
  let fn,
      defaults = {
        type: 'rotate',
        count: 1,
        options: {}
      };

  config = config || {};
  config = Object.assign(defaults, config);
  switch(config.type){
    case 'analogous': fn = analogous;
    break;
    case 'complement': fn = complement;
    break;
    case 'equidistant': fn = equidistant;
    break;
    case 'geometric-progression': fn = geometricProgression;
    break;
    case 'rotate': fn = rotate;
    break;
    default: fn = equidistant;
  }
  return fn(config.count, config.options);
}

module.exports = generateDistribution;
