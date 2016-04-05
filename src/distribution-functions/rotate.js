define(function(){'use strict';
return function rotate(count = 1, options = {}){
  const COMPANG = 0.5; // Complementary Angle
  let
  defaults = {
    angle: 0.1,
    invert: false,
  },
  angles = [],
  complementary = true,
  currAng = 0,
  nextAng;

  // Set default options if not defined;
  options.angle = options.angle || defaults.angle;
  options.invert = options.invert || defaults.invert;

  if(options.invert){
    options.angle = -options.angle;
  }

  for(let ii = 0; ii < count; ii++){
    nextAng = complementary ? COMPANG : options.angle;
    complementary = !complementary;
    currAng += nextAng;
    if(currAng > 1){
      currAng -= 1;
    }
    angles.push(currAng);
  }

  return angles;
};
});
