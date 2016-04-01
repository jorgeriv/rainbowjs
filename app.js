;(function(){'use strict';
  window.rb = window.rb || {};
  rb = window.rb;
  var Colour = function(r, g, b){
    var radius, azimuth;
    this.r = r;
    this.g = g;
    this.b = b;
  };
  function coordinates2rgb(radius, azimuth){

  }

  function rgb2coordinates(r, g, b){
    var radius, azimuth;

    radius = r + g + b;
  }

/**
 * Formula from: http://www.easyrgb.com/index.php?X=MATH&H=20#text20
 */
  function rgb2hsv(r, g, b){
    var h, s, v, min, max, del, del_r, del_g, del_b;
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    del = max - min;

    v = max;//Math.ceil(max/255);
    if(del === 0){
      h = 0;
      s = 0;
    } else {
      s = del / max;
      del_r = (((max - r) / 6 ) + (del / 2)) / del;
      del_g = (((max - g) / 6 ) + (del / 2)) / del;
      del_b = (((max - b) / 6 ) + (del / 2)) / del;

      if(r === max){
        h = del_b - del_g;
      } else if(g === max){
        h = (1 / 3) + del_r - del_b;
      } else if(b === max){
        h = (2 / 3) + del_g - del_r;
      }
      if(h < 0){
        h += 1;
      }

      if(h > 1){
        h -= 1;
      }
    }
    v = v / 255;
    return {h: h, s: s, v: v};
  }
/**
 * Formula fron: http://www.easyrgb.com/index.php?X=MATH&H=21#text21
 */
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
      } else if( var_i === 4 ){
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

  Colour.prototype.setCoordinates = function setCoordinates(){

  };

  Colour.prototype.getCoordinates = function setCoordinates(){

  };

  Colour.prototype.setRGB= function setCoordinates(){

  };

  Colour.prototype.getRGB = function setCoordinates(){

  };
  Colour.prototype.setHex= function setCoordinates(){

  };

  Colour.prototype.getHex = function setCoordinates(){

  };

  rb.generate = function generate(){

  };
}());
