const requirejs = require('../requirejs');
const equidistant = requirejs('distribution-functions/equidistant');

describe('Equidistant function', ()=>{'use strict';

  it('should create an array with one value', ()=>{
    let result = equidistant();
    expect(result.length).toBe(1);
    expect(result[0]).toBe(0);
  });

  it('should create an array with 3 values', ()=>{
    let result = equidistant(3);
    expect(result.length).toBe(3);
    expect(result[1]).toBe(1/3);
  });
});
