/**
* Formula fron: http://www.easyrgb.com/index.php?X=MATH&H=21#text21
*/

'use strict';
function hsv2rgb(h, s, v){
  var r, g, b, _h, _i, _1, _2, _3;
  if(s === 0){
    r = g = b = 255;
  } else {
    _h = h * 6;
    if(_h === 6){
      _h = 0;
    }
    _i = Math.floor(_h);
    _1 = v * ( 1 - s );
    _2 = v * ( 1 - s * ( _h - _i ) );
    _3 = v * ( 1 - s * ( 1 - ( _h - _i ) ) );

    if( _i === 0 ){
      r = v; g = _3; b = _1;
    } else if( _i === 1 ){
      r = _2; g = v; b = _1;
    } else if( _i === 2 ){
      r = _1; g = v; b = _3;
    } else if( _i === 3 ){
      r = _1; g = _2; b = v;
    } else if( _i === 4 ){
      r = _3; g = _1; b = v;
    } else{
      r = v; g = _1; b = _2;
    }
  }
  r = Math.ceil(r * 255);
  g = Math.ceil(g * 255);
  b = Math.ceil(b * 255);
  return {r: r, g: g, b: b};
}

module.exports = hsv2rgb;
