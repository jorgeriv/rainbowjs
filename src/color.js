
'use strict';
const rgb2hsv = require('./color-operations/rgb2hsv');
const hsv2rgb = require('./color-operations/hsv2rgb');
const distGenerator = require('./distribution-functions');

  function Color(r, g, b){
    this.rgb = {
      r : r || 255,
      g : g || 0,
      b : b || 0
    };
    this.hsv = rgb2hsv(this.rgb.r, this.rgb.g, this.rgb.b);
  }

  Color.prototype.setHSV = function setHSV(h, s, v){
    this.hsv = {h: h, s: s, v: v};
    this.rgb = hsv2rgb(h, s, v);
    return this;
  };

  Color.prototype.getHSV = function getHSV(){
    return this.hsv;
  };

  Color.prototype.setRGB= function setRGB(r, g, b){
    this.rgb = {r: r, g: g, b: b};
    this.hsv = rgb2hsv(r, g, b);
    return this;
  };

  Color.prototype.getRGB = function getRGB(){
    return this.rgb;
  };

  Color.prototype.setHRGB = function setHex(hexString){
    var r, g, b;
    r = parseInt(hexString.substr(0, 2), 16);
    g = parseInt(hexString.substr(2, 2), 16);
    b = parseInt(hexString.substr(4, 2), 16);
    this.setRGB(r, g, b);
    return this;
  };

  Color.prototype.getHRGB = function getHex(){
    var hr, hg, hb;
    hr = this.rgb.r.toString(16);
    hg = this.rgb.g.toString(16);
    hb = this.rgb.b.toString(16);
    return hr + hg + hb;
  };

  Color.prototype.setHue = function setHue(angle){
    var hsv = this.getHSV();
    hsv.h += angle;
    if(hsv.h > 1){
      hsv.h -= 1;
    }
    this.setHSV(hsv.h, hsv.s, hsv.v);
    return this;
  };

  Color.prototype.setSaturation = function setSaturation(saturation){
    var hsv = this.getHSV();
    return this.setHSV(hsv.h, saturation, hsv.v);
  };

  Color.prototype.setValue = function setValue(value){
    var hsv = this.getHSV();
    return this.setHSV(hsv.h, hsv.s, value);
  };

  Color.prototype.getShades = function getShades(count, distFn, options){
      var points = [], shades = [];
      distFn = distFn || 'equidistance';

      if(typeof distFn === 'string'){
        distFn = distGenerator(distFn);
      }
      points = distFn(count, options);
      points.forEach((point)=>{
        var shade = this.clone();
        return shades.push(shade.setValue(point));
      });

      //return new colors which are shades of original color
      return shades;
  };

  Color.prototype.getTints = function getTints(){

  };

  Color.prototype.getTones = function getTones(){

  };

  Color.prototype.createSchema = function createSchema(){

  };

  Color.prototype.setColorName = function setColorName(name){
    this.name = name;
    return this;
  };

  Color.prototype.getColorName = function getColorName(){
    return this.name;
  };

  Color.prototype.setColorByName = function setColorByName(){

  };

  Color.prototype.clone = function clone(){
    return new Color(this.rgb.r, this.rgb.g, this.rgb.b);
  };

module.exports = Color;
