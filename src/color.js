define(['../src/core'], function($rb){
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
      g : g || 0,
      b : b || 0
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

  $rb.Color.prototype.setHue = function setHue(angle){
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
  /*
  $rb.Color.prototype.getShades = function getShades(num, method, options){
      var points = [], shades = [];
      method = method || 'equidistance';

      if(typeof num === 'function'){
        points = num();
      } else if(typeof num === 'number'){
        if(typeof method === 'string'){
          method = generator(method);
        }
        points = method(num, options);
      } else {
        //error
      }

      points.forEach((point)=>{
        var shade = this.clone();
        return shades.push(shade.setValue(point));
      });
      //return new colors which are shades of original color
      return shades;
  };

  $rb.Color.prototype.getTints = function getTints(){

  };

  <<<<<<< HEAD
  $rb.Color.prototype.getTones = function getTones(){

  };

  $rb.Color.prototype.createschema = function createschema(){

  };
  */
return $rb;
});
