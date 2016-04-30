'use strict';
const Color = require('../src/color');
const Scheme = require('../src/scheme');
require('../src/color-scheme');

describe('Scheme', ()=>{

describe('instantiation', ()=>{
  it('should create an empty scheme', ()=>{
    let scheme = new Scheme();
    expect(scheme instanceof Object).toBe(true);
    expect(scheme.colors[0].base).toEqual(new Color());
    expect(scheme.name()).toBeUndefined();
  });

  it('should create and initializate an scheme', ()=>{
    let scheme, config;
    config = {
      name: 'test',
      colors:[{base: (new Color()).toJSON()}]
    };
    scheme = new Scheme(config);
    expect(scheme.name()).toBe(config.name);
    expect(scheme.colors).toBeDefined();
    expect(scheme.colors[0].base.toJSON()).toEqual((new Color()).toJSON());
  });
});// <<< instantiation

describe('populate colors methods', ()=>{
  it('should generate secundary colors given a harmony function', ()=>{
    let scheme = new Scheme();
    scheme.configure('triadic');
    scheme.generate();
    expect(scheme.colors).toBeDefined();
    expect(scheme.colors instanceof Array).toBe(true);
    expect(scheme.colors.length).toBe(3);
  });

  it('should generate 3 shades for each color in the scheme', ()=>{
    let scheme = new Scheme();
    scheme.generateShades(3);
    scheme.colors.forEach((color)=>{
      expect(color.shades).toBeDefined();
      expect(color.shades instanceof Array).toBe(true);
      expect(color.shades.length).toBe(3);
    });
  });

  it('should generate 3 tints for each color in the scheme', ()=>{
    let scheme = new Scheme();
    scheme.generateTints(3);
    scheme.colors.forEach((color)=>{
      expect(color.tints).toBeDefined();
      expect(color.tints instanceof Array).toBe(true);
      expect(color.tints.length).toBe(3);
    });
  });

  it('should generate 3 tones for each color in the scheme', ()=>{
    let scheme = new Scheme();
    scheme.generateTones(3);
    scheme.colors.forEach((color)=>{
      expect(color.tones).toBeDefined();
      expect(color.tones instanceof Array).toBe(true);
      expect(color.tones.length).toBe(3);
    });
  });
});// <<< populate colors methods

describe('modifiers', ()=>{

  it('should name an scheme', ()=>{
    let scheme = new Scheme(),
        name = 'test';
    scheme.name(name);
    expect(scheme.name()).toBe(name);
  });

  it('should hard reset scheme to initial default values', ()=>{
    let scheme = new Scheme({name: 'test'});
    scheme.reset('hard');
    expect(scheme.name()).toBeUndefined();
  });

  it('should soft reset scheme to initial default values', ()=>{
    let scheme = new Scheme({name: 'test'});
    scheme.reset();
    expect(scheme.name()).toBeDefined();
  });

  it('should rotate hue wheel of all colors', ()=>{
    let scheme = new Scheme(),
        clone = scheme.clone(),
        angle = 0.5,
        hue = clone.colors[0].base.rotateHueWheel(angle).HSV().h;

    scheme.rotate(angle);
    expect(scheme.colors[0].base.HSV().h).toEqual(hue);
  });

  it('should set the saturation value to all colors in the scheme',()=>{
    let saturation = 0.5,
        scheme = new Scheme();
    scheme.setSaturation(saturation);
    expect(scheme.colors[0].base.HSV().s).toBeCloseTo(saturation, 1);
  });

  it('should set the value to all colors in the scheme',()=>{
    let value = 0.5,
        scheme = new Scheme();
    scheme.flatten(value);
    expect(scheme.colors[0].base.HSV().v).toBeCloseTo(value, 1);
  });

});// <<< modifiers

describe('colors getters and setters', ()=>{
  it('should get the main color of the scheme', ()=>{
    let scheme = new Scheme();
    expect(scheme.mainColor() instanceof Color).toBe(true);
  });

  it('should set the main color of the scheme', ()=>{
    let color = new Color({name: 'test'}),
        scheme = new Scheme();
        scheme.mainColor(color);
    expect(scheme.mainColor().name()).toBe(color.name());
  });

  it('should get a color in the scheme given an index', ()=>{
    let color = new Color('rebeccapurple'),
        scheme = color.createScheme('triadic');
    expect(scheme.color().length).toEqual(3);
    expect(scheme.mainColor()).toEqual(scheme.color(0));
    expect(scheme.mainColor()).toEqual(scheme.color()[0]);
  });

  it('should set a color given an index and a color', ()=>{
    let scheme = (new Color('rebeccapurple')).createScheme('triadic');
    scheme.color(0, 'violet');
    scheme.color(1, new Color());
    scheme.color(2, '#0ff0e1');
    expect(scheme.color(0)).toEqual(new Color('violet'));
    expect(scheme.color(1)).toEqual(new Color());
    expect(scheme.color(2)).toEqual(new Color('#0ff0e1'));
  });
});// <<< colors getters and setters
it('should clone the scheme',()=>{
  let scheme = new Scheme(),
      clone = scheme.clone();

  expect(clone.toJSON()).toEqual(scheme.toJSON());
  expect(clone).not.toBe(scheme);
});

it('should return a JSON', ()=>{
  let scheme = new Scheme(),
  json = scheme.toJSON();
  expect(json).toEqual({name:undefined,colors:[{base: (new Color()).toJSON()}]});
});

it('should return a JSON string reprecenting the object', ()=>{
  let scheme = new Scheme(),
  json = JSON.stringify(scheme);
  expect(json).toBe(JSON.stringify({name:undefined,colors:[{base: new Color()}]}));
});

});
