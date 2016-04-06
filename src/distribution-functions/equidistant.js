define(function(){'use strict';
return function(count){
  count = count || 1;
  let distances = [],
      gap = 1 / count,
      currDist = 0;
  for(var ii = 0; ii < count; ii++){
    distances.push(currDist);
    currDist += gap;
  }
  return distances;
};
});
