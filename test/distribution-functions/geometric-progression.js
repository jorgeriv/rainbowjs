const geometricProgression = require('../../src/distribution-functions/geometric-progression');

describe('Geometric progressions', ()=>{'use strict';

it('should generate an array of one value by default', ()=>{
  let result = geometricProgression();
  expect(result.length).toBe(1);
  expect(result[0]).toBe(1);
});

it('should create a geometric progression with 3 values', ()=>{
  let iterations = 3,
  result = geometricProgression(iterations);
  expect(result.length).toBe(iterations);
  expect(result[2]).toEqual(Math.pow(0.5, iterations -1));
});

it('should return only the last value', ()=>{
  let iterations = 5,
      ratio = 0.2,
      result = geometricProgression(iterations, ratio, true);
  expect(typeof result).toEqual('number');
  expect(result).toEqual(Math.pow(0.2, iterations - 1));
});

it('should return a geometric progression (array) with 8 values', ()=>{
  let iterations = 8,
      ratio = 2,
      result = geometricProgression(iterations, ratio);
  expect(typeof result).toEqual('object');
  expect(result.length).toBeDefined();
  expect(result[iterations - 1]).toEqual(Math.pow(ratio, iterations -1));
});
});
