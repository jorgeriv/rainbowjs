'use strict';
const geometricProgression = require('./geometric-progression');

function analogous(count, options){
count = count || 1;
options = options || {};
let pivot = 0,
distIncr = 0,
currDist = 0,
currPosDist = 0,
currNegDist = 0,
distances = [],
direction = true, // trule for positive, false for negative
defaults = {
  dist: {
    fn: geometricProgression,
    params: [count, 0.35, true] // See geometric-progression.js
  },
  invert: false
};

options = Object.assign(defaults, options);

if(typeof options.dist === 'number'){
  distIncr = options.dist;
} else{
  distIncr = options.dist.fn.apply(this, options.dist.params);
}

if(typeof distIncr === 'number'){
  if(distIncr > 1 || distIncr < 0){
    throw new Error('Distance increment must be a value between 0 and 1');
  }
}
if(options.invert){
  direction = !direction;
}
for(let ii = 0; ii < count; ii++){
  distances.push(currDist);
  if(direction){
    currPosDist = pivot + currPosDist +distIncr;
    if(currPosDist > 1){
      currPosDist -= 1;
    }
    currDist = currPosDist;
  } else {
    currNegDist = pivot + currNegDist - distIncr;
    if(currNegDist < -1){
      currNegDist += 1;
    }
    currDist = currNegDist;
  }
  direction = !direction;
}
return distances;
}

module.exports = analogous;
