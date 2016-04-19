const Color = require('../src/color');
const Scheme = require('../src/scheme');

describe('Scheme', ()=>{'use strict';
let scheme;

it('should create an empty scheme', ()=>{
  scheme = new Scheme();
  expect(scheme instanceof Object).toBe(true);
  expect(scheme.colors[0].base).toEqual(new Color());
  expect(scheme.name).toBeUndefined();
});

it('should name an scheme', ()=>{
  let name = 'test';
  scheme.setName(name);
  expect(scheme.name).toBeDefined();
  expect(scheme.getName()).toBe(name);
});

it('should reset scheme to initial default values', ()=>{
  scheme.reset();
  expect(scheme.name).toBeUndefined();
});

it('should generate secundary colors given a harmony function', ()=>{
  scheme.configure('triadic');
  scheme.generate();
  expect(scheme.colors).toBeDefined();
  expect(scheme.colors instanceof Array).toBe(true);
  expect(scheme.colors.length).toBe(3);
});

it('should rotate hue wheel of all colors', ()=>{
  let angle = 0.5;
  scheme.rotate(angle);
});

});
