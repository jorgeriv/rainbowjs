const requirejs = require('../requirejs');
const analogous = requirejs('distribution-functions/analogous');

describe('Analogous function', ()=>{'use strict';

  it('should create an array with one value', ()=>{
    let result = analogous(1, {dist: 3});
    expect(result.length).toBe(1);
    expect(result[0]).toBe(0);
  });

  it('should create an array with 3 values', ()=>{
    let result = analogous(3);
    expect(result.length).toBe(3);
    expect(result[1]).toBe(1/3);
  });
});
