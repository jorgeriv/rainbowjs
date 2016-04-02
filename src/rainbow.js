;(function(){'use strict';
window.$rb = window.$rb || {};
$rb = window.$rb;

/**
* Formula from: http://www.easyrgb.com/index.php?X=MATH&H=20#text20
*/
function rgb2hsv(r, g, b){
  var h, s, v, min, max, del, del_r, del_g, del_b;
  min = Math.min(r, g, b);
  max = Math.max(r, g, b);
  del = max - min;

  v = max / 255;
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

$rb.Color = function(r, g, b){
  this.rgb = {
    r : r || 255,
    g : g || 255,
    b : b || 255
  };
  this.hsv = rgb2hsv(this.rgb.r, this.rgb.g, this.rgb.b);
};

$rb.Color.prototype.setHSV = function setHSV(h, s, v){
  this.hsv = {h: h, s: s, v: v};
  this.rgb = hsv2rgb(h, s, v);
  return this;
};

$rb.Color.prototype.getHSV = function getHSV(){
  return this.hsv;
};

$rb.Color.prototype.setRGB= function setRGB(r, g, b){
  this.rgb = {r: r, g: g, b: b};
  this.hsv = rgb2hsv(r, g, b);
  return this;
};

$rb.Color.prototype.getRGB = function getRGB(){
  return this.rgb;
};

$rb.Color.prototype.setHRGB = function setHex(hexString){
  var r, g, b;
  r = parseInt(hexString.substr(0, 2), 16);
  g = parseInt(hexString.substr(2, 2), 16);
  b = parseInt(hexString.substr(4, 2), 16);
  this.setRGB(r, g, b);
  return this;
};

$rb.Color.prototype.getHRGB = function getHex(){
  var hr, hg, hb;
  hr = this.rgb.r.toString(16);
  hg = this.rgb.g.toString(16);
  hb = this.rgb.b.toString(16);
  return hr + hg + hb;
};

$rb.Color.prototype.rotateHueWeel = function rotateHueWeel(angle){
  var hsv = this.getHSV();
  hsv.h += angle;
  if(hsv.h > 1){
    hsv.h -= 1;
  }
  this.setHSV(hsv.h, hsv.s, hsv.v);
  return this;
};

$rb.Color.prototype.setSaturation = function setSaturation(saturation){
  var hsv = this.getHSV();
  return this.setHSV(hsv.h, saturation, hsv.v);
};

$rb.Color.prototype.setValue = function setValue(value){
  var hsv = this.getHSV();
  return this.setHSV(hsv.h, hsv.s, value);
};

//TODO: Rename 'ColorScheme' to 'Scheme'  and update constructor to
// accept an options object as a parameter and a toJSON() method so an Scheme could be
// saver as JSON object and recreated from JSON
$rb.ColorScheme = function(type, mainColor){
  var angles = [];
  this.auxiliaryColors = [];
  this.mainColor = mainColor || new $rb.Color(255, 0, 0);
  this.type = type || 'complementary';
  switch(this.type){
    // complementary is the default
    case 'analogous': angles.push(-0.1, 0.1);
    break;
    case 'triadic': angles.push(0.333333, 0.666666);
    break;
    case 'split-complementary': angles.push(0.45, 0.55);
    break;
    case 'rectangle':angles.push(0.1, 0.5, 0.6);
    break;
    case 'square': angles.push(0.25, 0.5, 0.75);
    break;
    default:angles.push(0.5);
  }

  angles.forEach((angle)=>{
    var auxColor = new $rb.Color(this.mainColor.rgb.r, this.mainColor.rgb.g, this.mainColor.rgb.b);
    this.auxiliaryColors.push(auxColor.rotateHueWeel(angle));
  });
};

$rb.ColorScheme.prototype.getColorScheme = function getColorScheme(){
  return {
    'main': this.mainColor,
    'auxiliary': this.auxiliaryColors
  };
};

$rb.generate = function generate( ){

};
}());
