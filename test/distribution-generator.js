'use strict';
const distGen= require('../src/distribution-generator');

describe('Distribution functions', ()=>{

it('should return the rotate function by default', ()=>{
  let points = distGen();
  expect(points).toBeDefined();
  expect(points instanceof Array).toBe(true);
  expect(points.length).toBe(1);
});

it('should return a distribution function given a name', ()=>{
  let config = {
    count: 2,
    type: 'complement',
    options: {}
  },
      distribution = distGen(config);

  expect(distribution instanceof Array).toBe(true);
  expect(distribution.length).toBe(2);
});

});
