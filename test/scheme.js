const Color = require('../src/color');
const Scheme = require('../src/scheme');

describe('Scheme', ()=>{'use strict';
let scheme;

it('should create an empty scheme', ()=>{
  scheme = new Scheme();
  expect(scheme instanceof Object).toBe(true);
  expect(scheme.mainColor).toEqual(new Color());
  expect(scheme.name).toBeUndefined();
});

it('should name an scheme', ()=>{
  let name = 'test';
  scheme.setName(name);
  expect(scheme.name).toBeDefined();
  expect(scheme.getName()).toBe(name);
});

// it('should generate secundary colors given a harmony function', ()=>{
//   scheme.apply('triadic');
//   expect(scheme.secundaryColors).toBeDefined();
//   expect(scheme.secundaryColors instanceof Array).toBe(true);
//   expect(scheme.secundaryColors.length).toBe(2);
// });

it('should rotate hue wheel of all colors', ()=>{

});

});
