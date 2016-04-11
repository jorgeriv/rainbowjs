const distGen= require('../src/distribution-generator');

describe('Distribution functions', ()=>{'use strict';

it('should return the rotate function by default', ()=>{
  let fn = distGen();
  expect(fn).toBeDefined();
  expect(fn instanceof Array).toBe(true);
  expect(fn.length).toBe(1);
});

it('should return a distribution function given a name', ()=>{
  let distribution = distGen(2, 'complement');

  expect(distribution instanceof Array).toBe(true);
  expect(distribution.length).toBe(3);
});

});
