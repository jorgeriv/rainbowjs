
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

  Color.prototype.HSV = function HSV(h, s, v){

    if(arguments.length === 0){ // set behavior
      return rgb2hsv(this.r, this.g, this.b);

    } // get behavior
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


  Color.prototype.RGB = function RGB(r, g, b){
    if(arguments.length === 0){ // Get
      return {r: this.r, g: this.g, b: this.b};
    } // Set
    r = r || this.r;
    g = g || this.g;
    b = b || this.b;
    this.r = r;
    this.g = g;
    this.b = b;
    return this;
  };


  Color.prototype.hex = function hex(hexString){
    if(arguments.length === 0){
      let hr = this.r.toString(16),
          hg = this.g.toString(16),
          hb = this.b.toString(16);
          // Ussing two places to represent each number
          hr = hr.length < 2 ? '0' + hr : hr;
          hg = hg.length < 2 ? '0' + hg : hg;
          hb = hb.length < 2 ? '0' + hb : hb;

      return hr + hg + hb;
    }
    let r = parseInt(hexString.substr(0, 2), 16),
        g = parseInt(hexString.substr(2, 2), 16),
        b = parseInt(hexString.substr(4, 2), 16);

    this.RGB(r, g, b);
    return this;
  };


  Color.prototype.rotateHueWheel = function rotateHueWheel(angle){
    var hsv = this.HSV();
    hsv.h += angle;
    if(hsv.h > 1){
      hsv.h -= 1;
    }
    this.HSV(hsv.h);
    return this;
  };

  Color.prototype.hue = function hue(hue){
    if(arguments.length === 0)return this.HSV().h; // Get behavior
    return this.HSV(hue); // Set behavior
  };

  Color.prototype.saturation = function saturation(saturation){
    if(arguments.length === 0) return this.HSV().s; // Get behavior
    return this.HSV(null,saturation); // Set behavior
  };

  Color.prototype.value = function value(value){
    if (arguments.length === 0) return this.HSV().v; // Get behavior
    return this.HSV(null, null, value); // Set behavior
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
          return shades.push(shade.value(point));
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
        return tints.push(tint.value(point));
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
        tone.value(point);
        tone.value(point);
        return tones.push(tone);
      });

    //return new colors which are tones of original color
    return tones;
  };

  Color.prototype.createScheme = function createscheme(){
  };

  Color.prototype.name = function name(name){
    if(arguments.length === 0){ // Get behavior
      return this.name;
    } // Set behavior
    this.name = name;
    return this;
  };

  Color.prototype.cssName = function cssName(name){
    let hexString;
    if(arguments.length === 0){ // Get behavior
        hexString = this.hex();
        for(let key in colorPresets){
          if(colorPresets[key] === hexString){
            return key;
          }
        }
        // Not found, return undefined
        return void 0;
    } // Set behavior
    hexString = colorPresets[name];
    if(typeof hexString === 'string'){
      this.name = name;
      this.hex(hexString);
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
    return {
      name: this.name,
      r: this.r,
      g: this.g,
      b: this.b
    };
  };

module.exports = Color;
