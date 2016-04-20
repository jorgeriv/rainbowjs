'use strict';
const Color = require('../src/color');
const Scheme = require('../src/scheme');

describe('Scheme', ()=>{
let scheme, clone;

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

it('should generate 3 shades for each color in the scheme', ()=>{
  scheme.generateShades(3);
  scheme.colors.forEach((color)=>{
    expect(color.shades).toBeDefined();
    expect(color.shades instanceof Array).toBe(true);
    expect(color.shades.length).toBe(3);
  });
});

it('should generate 3 tints for each color in the scheme', ()=>{
  scheme.generateTints(3);
  scheme.colors.forEach((color)=>{
    expect(color.tints).toBeDefined();
    expect(color.tints instanceof Array).toBe(true);
    expect(color.tints.length).toBe(3);
  });
});

it('should generate 3 tones for each color in the scheme', ()=>{
  scheme.generateTones(3);
  scheme.colors.forEach((color)=>{
    expect(color.tones).toBeDefined();
    expect(color.tones instanceof Array).toBe(true);
    expect(color.tones.length).toBe(3);
  });
});

it('should clone the scheme',()=>{
  clone = scheme.clone();
  expect(clone.name).toBe(scheme.name);
  expect(clone.colors.length).toEqual(scheme.colors.length);
  expect(clone.colors[0]).toEqual(scheme.colors[0]);
});

it('should rotate hue wheel of all colors', ()=>{
  let angle = 0.5,
      hue = clone.colors[0].base.rotateHueWheel(angle).getHSV().h;
  scheme.rotate(angle);
  expect(hue)
    .toEqual(scheme.colors[0].base.getHSV().h);
});

it('should return a JSON', ()=>{
  let scheme = new Scheme(),
  json = scheme.toJSON();
  expect(json).toEqual({name:undefined,colors:[{base: new Color()}]});
});

it('should return a JSON string reprecenting the object', ()=>{
  let scheme = new Scheme(),
  json = JSON.stringify(scheme);
  expect(json).toBe(JSON.stringify({name:undefined,colors:[{base: new Color()}]}));
});
});