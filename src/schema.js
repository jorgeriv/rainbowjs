define(['../src/core'], function($rb){ 'use strict';
  //TODO: Update constructor to accept an options object as a parameter
  // and a toJSON() method so an schema could be
  // saved as JSON object and recreated from JSON

  $rb.Schema = function(type, mainColor){
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
      this.auxiliaryColors.push(auxColor.setHue(angle));
    });
  };

  $rb.Schema.prototype.getSchema = function getSchema(){
    return {
      'main': this.mainColor,
      'auxiliary': this.auxiliaryColors
    };
  };

  return $rb;
});
