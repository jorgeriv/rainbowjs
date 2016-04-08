const analogous = require('../../src/distribution-functions/analogous');

describe('Analogous function', ()=>{'use strict';

it('should create an array with 1 element if no arguments are passed', ()=>{
  let result = analogous();
  expect(result.length).toBe(1);
  expect(result[0]).toBe(0);
});

it('should create an array with 3 values', ()=>{
  let result = analogous(3);
  expect(result.length).toBe(3);
  expect(result[1]).toBe(Math.pow(0.3, 3));
  expect(result[2]).toBe(-1 * Math.pow(0.3, 3));
});

it('should accept a configuration object', ()=>{
  let count = 3,
      config = {
        dist: 0.2
      },
      result = analogous(count, config);
  expect(result.length).toBe(count);
  expect(result[1]).toBe(config.dist);
  expect(result[2]).toBe(-1 * config.dist);
});

it('should accept a configuration object with a invert property', ()=>{
  let count = 3,
      config = {
        dist: 0.2,
        invert: true,
      },
      result = analogous(count, config);
  expect(result.length).toBe(count);
  expect(result[2]).toBe(config.dist);
  expect(result[1]).toBe(-1 * config.dist);
});

it('should accept a configuration object with a function as distance property', ()=>{
  let count = 3,
      index = 1,
      config = {
        dist: {
          fn: (a)=>{
            return a/2;
          },
          params: [0.5]
        },
      },
      result = analogous(count, config);
  expect(result.length).toBe(count);
  expect(result[index]).toBe(Math.pow(config.dist.fn(config.dist.params[0]), count-(index + 1)));
});

it('should not allow for values greather than 1', ()=>{
  let count = 1,
      dist = 3;

  expect(()=>{
    analogous(count, {dist: dist});
  }).toThrow();
});

it('should not allow for values lesser than 0', ()=>{
  let count = 1,
      dist = -1;

  expect(()=>{
    analogous(count, {dist: dist});
  }).toThrow();
});

});
