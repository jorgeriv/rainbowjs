const rotate = require('../../src/distribution-functions/rotate');

describe('Rotate function', ()=>{'use strict';

  it('should create an array with one value', ()=>{
    let result = rotate();
    expect(result.length).toBe(1);
    expect(result[0]).toBe(0);
  });

  it('should create an array with 4 values', ()=>{
    let count = 4,
        result = rotate(count);
    expect(result.length).toBe(count);
    expect(result[0]).toBe(0);
    expect(result[1]).toBe(0.5);
    expect(result[2]).toBe(0.6);
    expect(result[3]).toBe(0.10000000000000009); // This should be 0.1 but this error comes from EcmaScript itself
  });

  it('should accept a configuration object', ()=>{
    let count = 4,
        config = {length: 0.25},
        result = rotate(count, config);
    expect(result.length).toBe(count);
    expect(result[0]).toBe(0);
    expect(result[1]).toBe(0.5);
    expect(result[2]).toBe(0.75);
    expect(result[3]).toBe(0.25);
  });

  it('should accept an invert property in the configuration object', ()=>{
    let count = 4,
        config = {
          length: 0.25,
          invert: true
        },
        result = rotate(count, config);

    expect(result.length).toBe(count);
    expect(result[0]).toBe(0);
    expect(result[1]).toBe(0.5);
    expect(result[2]).toBe(0.25);
    expect(result[3]).toBe(0.75);
  });
});
