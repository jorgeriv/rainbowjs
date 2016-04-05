define(['./geometric-progression'], function(geoetricProgression){'use strict';
  return function(count = 1, options = {}){
    let pivot = 0,
        distIncr = 0,
        currDist = 0,
        currPosDist = 0,
        currNegDist = 0,
        distances = [],
        direction = true, // trule for positive, false for negative
        defaults = {
          dist: {
            fn: geoetricProgression,
            params: [count, 0.3, true] // See geometric-progression.js
          },
          invert: false
        };

    options.dist = options.dist || defaults.dist;
    options.invert = options.invert || defaults.invert;
    if(typeof options.dist === 'number'){
      distIncr = options.dist;
    } else{
      distIncr = options.dist.fn.apply(this, options.dist.params);
    }
    if(options.invert){
      direction = !direction;
    }
    for(var ii; ii < count; ii++){
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
  };
});
