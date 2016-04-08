const complement = require('../../src/distribution-functions/complement');

describe('Complement function', ()=>{'use strict';

it('should create an array with 2 element if no arguments are passed', ()=>{
  let result = complement();
  expect(result.length).toBe(2);
  expect(result[1]).toBe(0.5);
});

it('should create an array with 3 complements', ()=>{
  let count = 3,
      result = complement(count);
  expect(result.length).toBe(count + 1); // 3 ccomplements + 1 base value
  expect(result[1]).toBe(0.5);
  expect(result[2]).toBe(0.5 + Math.pow(0.3, 3));
});

it('should accept a configuration object', ()=>{
  let count = 3,
      config = {
        dist: 0.2
      },
      result = complement(count, config);
  expect(result.length).toBe(count + 1);
  expect(result[0]).toBe(0);
  expect(result[1]).toBe(0.5);
  expect(result[2]).toBe(0.5 + config.dist);
  expect(result[3]).toBe(0.5 - config.dist);
});

it('should accept a configuration object with a invert property', ()=>{
  let count = 3,
      config = {
        dist: 0.2,
        invert: true,
      },
      result = complement(count, config);
      expect(result.length).toBe(count + 1);
      expect(result[0]).toBe(0);
      expect(result[1]).toBe(0.5);
      expect(result[2]).toBe(0.5 - config.dist);
      expect(result[3]).toBe(0.5 + config.dist);
});

it('should accept a configuration object with a function as distance property', ()=>{
  let count = 3,
      index = 2,
      config = {
        dist: {
          fn: (a)=>{
            return a/2;
          },
          params: [0.5]
        },
      },
      result = complement(count, config);
  expect(result.length).toBe(count + 1);
  expect(result[index]).toBe(0.5 + Math.pow(config.dist.fn(config.dist.params[0]), count-index));
});

it('should not allow for values greather than 1', ()=>{
  let count = 1,
      dist = 3;

  expect(()=>{
    complement(count, {dist: dist});
  }).toThrow();
});

it('should not allow for values lesser than 0', ()=>{
  let count = 1,
      dist = -1;

  expect(()=>{
    complement(count, {dist: dist});
  }).toThrow();
});

});
