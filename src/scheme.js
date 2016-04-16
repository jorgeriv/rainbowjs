'use strict';

const Color = require('./color');
const distributionGenerator = require('./distribution-generator');
const schemeDefinitions = require('./scheme-definitions');

function Scheme(options){
  options = options || {};
  this.name = options.name || '';
  this.colors = options.colors || [{base: new Color()}];
}

Scheme.prototype.toJSON = function toJSON(){
  return JSON.stringify({
    name: this.name,
    colors: this.colors
  });
};

Scheme.prototype.setName = function setName(name){
  this.name = name;
  return this;
};

Scheme.prototype.getName = function getName(){
  return this.name;
};

Scheme.prototype.rotate = function rotate(angle){
  function rotateColors(color){
    color.rotateHueWheel(angle);
  }
  this.traverse(rotateColors);
  return this;
};

Scheme.prototype.setSaturation = function setSaturation(saturation){
  saturation = saturation || this.colors[0].base.getHSV().s;
  function saturateColors(color){
    color.setHSV(null, saturation);
  }
  this.traverse(saturateColors);
  return this;
};

Scheme.prototype.flatten = function flatten(value){
  value = value || this.colors[0].base.getHSV().v;
  function flattenColors(color){
    color.setHSV(null, null, value);
  }

  this.traverse(flattenColors);
  return this;
};


Scheme.prototype.reset = function reset(){
  this.name = '';
  this.colors = [{base: new Color()}];
  return this;
};

Scheme.prototype.homogenize = function homogenize(saturation, value){
  this.setSaturation(saturation);
  this.flatten(value);
  return this;
};

Scheme.prototype.configure = function configure(options){
  if(!options){
    throw new Error('configure method was call without configuration options.');
  }
  if(typeof options === 'string'){
    options = schemeDefinitions[options];
    if(!options){
      throw new Error(`Type ${options} is not defined.`);
    }
  }

  this.config = options;
};

Scheme.prototype.generate = function generate(){
  let angles;

  angles = distributionGenerator(this.config);
  angles.forEach((angle)=>{
    // Fist color in the array is the main color to calculate other scheme colors
    var auxColor = this.colors[0].base.clone();
    this.colors({base: auxColor.rotateHueWheel(angle)});
  });
};

Scheme.prototype.traverse = function traverse(fn){
  this.colors.forEach(function(colorSet){
    fn(colorSet.base);
    colorSet.shades.forEach(fn);
    colorSet.tints.forEach(fn);
    colorSet.tones.forEach(fn);
  });
};

module.exports = Scheme;
