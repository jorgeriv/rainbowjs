const Color = require('../src/color');

describe('Color', ()=>{'use strict';
let color;

//Specs

// Object creation
it('should create a new color', ()=> {
  color = new Color();
  expect(color.r).toBe(255);
  expect(color.g).toBe(0);
  expect(color.b).toBe(0);
});

// Change color's RGB values
it('should update set rgb', ()=>{
  color.setRGB(20, 20, 255);
  expect(color.r).toBe(20);
  expect(color.g).toBe(20);
  expect(color.b).toBe(255);
});

// Change color's RGB values
it('should get hsv', ()=>{
  let hsv = color.getHSV();

  expect(hsv.h).toBe(0.6666666666666666);
  expect(hsv.s).toBe(0.9215686274509803);
  expect(hsv.v).toBe(1);
});

// Set color's Hex RGB values
it('should set hex RGB', ()=>{
  let hrgb = color.setHRGB('ffffff');

  expect(hrgb.r).toBe(255);
  expect(hrgb.g).toBe(255);
  expect(hrgb.b).toBe(255);
});

// Get color's Hex RGB values
it('should set hex RGB', ()=>{
  let hrgb = color.getHRGB();
  expect(hrgb).toBe('ffffff');
});

// Set color's hue
it('should set hue value', ()=>{
  let hue = 0.5;
  color.setHSV(hue);
  expect(color.getHSV().h).toBeCloseTo(hue, 3);
});

// Set color's saturation
it('should set saturation value', ()=>{
  let saturation = 0.5;
  color.setHSV(null, saturation);
  expect(color.getHSV().s).toBeCloseTo(saturation, 3);
});

// Set color's value
it('should set value value', ()=>{
  let value = 0.5;
  color.setHSV(null, null, value);
  expect(color.getHSV().v).toBeCloseTo(value, 2);
});

it('should generate generate an array of shades', ()=>{
  let shades = color.getShades(5);
  expect(shades instanceof Array).toBe(true);
  expect(shades.length).toBe(5);
});

it('should generate generate an array of tones', ()=>{
  let tones = color.getTones(5);
  expect(tones instanceof Array).toBe(true);
  expect(tones.length).toBe(5);
});

it('should generate generate an array of tints', ()=>{
  let thints = color.getShades(5);
  expect(thints instanceof Array).toBe(true);
  expect(thints.length).toBe(5);
});

it('should set the color by CSS name', ()=>{
  let rebeccapurple = color.setColorByName('rebeccapurple');
  expect(rebeccapurple instanceof Object).toBe(true);
  expect(rebeccapurple.getHRGB()).toBe('663399');
});

it('should throw when setting an undefined name', ()=>{
  expect(()=>{
    color.setColorByName('badname');
  }).toThrowError('color badname is not defined');
});

it('should convert object to JSON string', ()=>{
  expect(color.toJSON())
    .toBe('{"name":"rebeccapurple","r":102,"g":51,"b":153}');
});

});
