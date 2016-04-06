const requirejs = require('./requirejs');
const rainbow = requirejs('rainbow');

describe('Color', function() {'use strict';
  let color;

  //Specs

  // Object creation
  it('create a new color', function() {
    color = new rainbow.Color();
    expect(color.rgb.r).toBe(255);
    expect(color.rgb.g).toBe(0);
    expect(color.rgb.b).toBe(0);
  });

  // Change color's RGB values
  it('set rgb', function(){
    color.setRGB(20, 20, 255);
    expect(color.rgb.r).toBe(20);
    expect(color.rgb.g).toBe(20);
    expect(color.rgb.b).toBe(255);
  });

  // Change color's RGB values
  /*
  it('get hsv', function(){
    let hsv = color.getHSV();
    expect(hsv).toBe({
      h: 0.6666,
      s: 0.9215,
      v: 1
    });
  });
  */

});
