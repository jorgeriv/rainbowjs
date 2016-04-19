
'use strict';
const rgb2hsv = require('./color-operations/rgb2hsv');
const hsv2rgb = require('./color-operations/hsv2rgb');
const distGenerator = require('./distribution-generator');
const colorPresets = require('./color-presets');

  function Color(obj){
    let defaults = {
      r : 255,
      g : 0,
      b : 0
    };
    obj = obj || {};

    this.name = obj.name;
    this.r = obj.r || defaults.r;
    this.g = obj.g || defaults.g;
    this.b = obj.b || defaults.b;
  }

  Color.prototype.setHSV = function setHSV(h, s, v){
    let hsv = rgb2hsv(this.r, this.g, this.b),
        rgb;

    h = h || hsv.h;
    s = s || hsv.s;
    v = v || hsv.v;
    rgb = hsv2rgb(h, s, v);
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;

    return this;
  };

  Color.prototype.getHSV = function getHSV(){
    return rgb2hsv(this.r, this.g, this.b);
  };

  Color.prototype.setRGB= function setRGB(r, g, b){
    r = r || this.r;
    g = g || this.g;
    b = b || this.b;
    this.r = r;
    this.g = g;
    this.b = b;
    return this;
  };

  Color.prototype.getRGB = function getRGB(){
    return {r: this.r, g: this.g, b: this.b};
  };

  Color.prototype.setHRGB = function setHRGB(hexString){
    let r = parseInt(hexString.substr(0, 2), 16),
        g = parseInt(hexString.substr(2, 2), 16),
        b = parseInt(hexString.substr(4, 2), 16);

    this.setRGB(r, g, b);
    return this;
  };

  Color.prototype.getHRGB = function getHRGB(){
    let hr = this.r.toString(16),
        hg = this.g.toString(16),
        hb = this.b.toString(16);

    return hr + hg + hb;
  };

  Color.prototype.rotateHueWheel = function rotateHueWheel(angle){
    var hsv = this.getHSV();
    hsv.h += angle;
    if(hsv.h > 1){
      hsv.h -= 1;
    }
    this.setHSV(hsv.h);
    return this;
  };

  Color.prototype.setHue = function setHue(hue){
    this.setHSV(hue);
    return this;
  };

  Color.prototype.setSaturation = function setSaturation(saturation){
    return this.setHSV(null,saturation);
  };

  Color.prototype.setValue = function setValue(value){
    return this.setHSV(null, null, value);
  };

  Color.prototype.getShades = function getShades(count, distType, options){
      let shades = [],
          config = {};

      config.count = count || 2;
      config.type = distType || 'equidistant';
      config.options = options || {};

      distGenerator(config)
        .forEach((point)=>{
          var shade = this.clone();
          return shades.push(shade.setValue(point));
        });

      //return new colors which are shades of original color
      return shades;
  };

  Color.prototype.getTints = function getTints(count, distType, options){
    let tints = [],
        config = {};

    config.count = count || 2;
    config.type = distType || 'equidistant';
    config.options = options || {};

    distGenerator(config)
      .forEach((point)=>{
        var tint = this.clone();
        return tints.push(tint.setSaturation(point));
      });

    //return new colors which are tints of original color
    return tints;
  };

  Color.prototype.getTones = function getTones(count, distType, options){
    let tones = [],
        config = {};

    config.count = count || 2;
    config.type = distType || 'equidistant';
    config.options = options || {};

    distGenerator(config)
      .forEach((point)=>{
        var tone = this.clone();
        tone.setSaturation(point);
        tone.setValue(point);
        return tones.push(tone);
      });

    //return new colors which are tones of original color
    return tones;
  };

  Color.prototype.createScheme = function createscheme(){
  };

  Color.prototype.setName = function setName(name){
    this.name = name;
    return this;
  };

  Color.prototype.getName = function getName(){
    return this.name;
  };

  Color.prototype.setColorByName = function setColorByName(name){
    let hexString = colorPresets[name];
    if(typeof hexString === 'string'){
      this.name = name;
      this.setHRGB(hexString);
    } else{
      throw new Error(`color ${name} is not defined`);
    }
    return this;
  };

  Color.prototype.clone = function clone(){
    let obj = {
      name: this.name,
      r: this.r,
      g: this.g,
      b: this.b
    };
    return new Color(obj);
  };

  Color.prototype.toJSON = function toJSON(){
    return JSON.stringify({
      name: this.name,
      r: this.r,
      g: this.g,
      b: this.b
    });
  };

module.exports = Color;
