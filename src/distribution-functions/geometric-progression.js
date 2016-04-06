define(function(){'use strict';
return function(iterations, ratio, endValue){
  iterations = iterations || 1;
  ratio = ratio || 0.5;
  endValue = !!endValue;

  let sequence = [],
      currBlock = 1;

  for(var ii = 0; ii < iterations; ii++){
    sequence.push(currBlock);
      currBlock = currBlock * ratio;
  }
  if(endValue){ // Return only the last value
    return sequence.pop();
  }
  return sequence;
};
});
