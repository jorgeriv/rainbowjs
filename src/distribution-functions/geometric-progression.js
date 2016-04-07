function geometricProgression(iterations, ratio, endValue){'use strict';
  iterations = iterations || 1;
  ratio = ratio || 0.5;
  endValue = !!endValue;

  let sequence = [],
  currBlock = 1;

  if(endValue){ // Return only the last value
    return Math.pow(ratio, iterations -1);
  }
  for(var ii = 0; ii < iterations; ii++){
    sequence.push(currBlock);
    currBlock = (currBlock * ratio);
  }
  return sequence;
}

module.exports = geometricProgression;
