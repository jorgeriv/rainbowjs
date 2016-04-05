define(function(){'use strict';
return function(iterations = 1, ratio = 0.5, endValue = false){
  let sequence = [],
      currBlock = 1;
  for(var ii = 0; ii < ratio; ii++){
    sequence.push(currBlock);
      currBlock = currBlock * ratio;
  }
  if(endValue){ // Return only the last value
    return sequence.pop();
  }
  return sequence;
};
});
