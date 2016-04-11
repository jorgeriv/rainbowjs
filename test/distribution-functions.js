const distFn = require('../src/distribution-functions');

describe('Distribution functions', ()=>{'use strict';

it('should return the rotate function by default', ()=>{
  let fn = distFn();
  expect(fn).toBeDefined();
  expect(typeof fn).toBe('function');
});

it('should return a distribution function given a name', ()=>{
  let fn = distFn('complement'),
      result = fn(2);
  expect(fn).toBeDefined();
  expect(typeof fn).toBe('function');
  expect(typeof result).toBe('object');
  expect(result instanceof Array).toBe(true);
  expect(result.length).toBe(3);
});

});
