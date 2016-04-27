'use strict';

const Color = require('./color');
const distributionGenerator = require('./distribution-generator');
const schemeDefinitions = require('./scheme-definitions');

function Scheme(options){
  options = options || {};
  this._name = options.name || undefined;
  this.colors = options.colors || [{base: new Color()}];
}

Scheme.prototype.toJSON = function toJSON(){

  return {
    name: this._name,
    colors: this.colors
  };
};

Scheme.prototype.name = function name(name){
  if(arguments.length === 0){ // Get behavior
    return this._name;
  } // Set behavior
  this._name = name;
  return this;
};

Scheme.prototype.rotate = function rotate(angle){
  function rotateColors(color){
    color.rotateHueWheel(angle);
  }
  this.traverse(rotateColors);
  return this;
};

Scheme.prototype.setSaturation = function setSaturation(saturation){
  saturation = saturation || this.colors[0].base.HSV().s;
  function saturateColors(color){
    color.HSV(null, saturation);
  }
  this.traverse(saturateColors);
  return this;
};

Scheme.prototype.flatten = function flatten(value){
  value = value || this.colors[0].base.HSV().v;
  function flattenColors(color){
    color.HSV(null, null, value);
  }

  this.traverse(flattenColors);
  return this;
};

Scheme.prototype.reset = function reset(){
  this._name = undefined;
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
  angles.forEach((angle, index)=>{
    if(index === 0){ // first iteration is the main color which is already in the array
      return;
    }
    // Fist color in the array is the main color to calculate other scheme colors
    var auxColor = this.colors[0].base.clone();
    this.colors.push({base: auxColor.rotateHueWheel(angle)});
  });
};

Scheme.prototype.generateShades = function generateShades(colorIndex, shadesCount){
  if(!colorIndex) return;
  if(!shadesCount){
    shadesCount = colorIndex;
    colorIndex = -1;
  }
  if(colorIndex < 0){ // Apply to all colors
    this.colors.forEach((color, index)=>{
      this.colors[index].shades = color.base.getShades(shadesCount);
    });
  } else {
    this.colors[colorIndex].shades = this.colors[colorIndex].base.getShades(shadesCount);
  }
  return this;
};

Scheme.prototype.generateTints = function generateTints(colorIndex, tintsCount){
  if(!colorIndex) return;
  if(!tintsCount){
    tintsCount = colorIndex;
    colorIndex = -1;
  }
  if(colorIndex < 0){ // Apply to all colors
    this.colors.forEach((color, index)=>{
      this.colors[index].tints = color.base.getTints(tintsCount);
    });
  } else {
    this.colors[colorIndex].tints = this.colors[colorIndex].base.getTints(tintsCount);
  }
  return this;
};

Scheme.prototype.generateTones = function generateTones(colorIndex, tonesCount){
  if(!colorIndex) return;
  if(!tonesCount){
    tonesCount = colorIndex;
    colorIndex = -1;
  }
  if(colorIndex < 0){ // Apply to all colors
    this.colors.forEach((color, index)=>{
      this.colors[index].tones = color.base.getShades(tonesCount);
    });
  } else {
    this.colors[colorIndex].tones = this.colors[colorIndex].base.getShades(tonesCount);
  }
  return this;
};

Scheme.prototype.traverse = function traverse(fn){
  this.colors.forEach((colorSet)=>{
    fn(colorSet.base);
    if(colorSet.shades && colorSet.shades.length > 0){
      colorSet.shades.forEach(fn);
    }

    if(colorSet.tints && colorSet.tints.length > 0){
      colorSet.tints.forEach(fn);
    }

    if(colorSet.tones && colorSet.tones.length > 0){
      colorSet.tones.forEach(fn);
    }
  });
};

Scheme.prototype.clone = function clone(){
  return new Scheme({
    name: this._name,
    colors: this.colors
  });
};

module.exports = Scheme;
