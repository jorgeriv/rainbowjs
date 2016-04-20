/**
* Formula from: http://www.easyrgb.com/index.php?X=MATH&H=20#text20
*/

'use strict';
function rgb2hsv(r, g, b){
  var h, s, v, min, max, del, delR, delG, delB;
  min = Math.min(r, g, b);
  max = Math.max(r, g, b);
  del = max - min;

  v = max / 255;
  if(del === 0){
    h = 0;
    s = 0;
  } else {
    s = del / max;
    delR = (((max - r) / 6 ) + (del / 2)) / del;
    delG = (((max - g) / 6 ) + (del / 2)) / del;
    delB = (((max - b) / 6 ) + (del / 2)) / del;

    if(r === max){
      h = delB - delG;
    } else if(g === max){
      h = (1 / 3) + delR - delB;
    } else if(b === max){
      h = (2 / 3) + delG - delR;
    }
    if(h < 0){
      h += 1;
    }

    if(h > 1){
      h -= 1;
    }
  }
  return {h: h, s: s, v: v};
}

module.exports = rgb2hsv;
