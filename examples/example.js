/* globals R:false, document:false */
'use strict';

// An array of scheme tipes.
// see all the available predefined scheme types in the documentation.
var schemeTypes = [
  'complementary',
  'analogous',
  'triadic',
  'splitComplementary',
  'rectangle',
  'square',
];

function main() {
  let mainColor, hsv = {};

  // Generate new color object
  mainColor = new R.Color();

  // Generate random numbers for HSV
  hsv.h = Math.random(); // Set hue
  hsv.s = (Math.random()/2) + 0.5; // Set saturation
  hsv.v = (Math.random()/2) + 0.5; // Set value

  // Set color Hue, Saturation and Value
  mainColor.HSV(hsv.h, hsv.s, hsv.v);

  // For each of our scheme types generate a new scheme object
  schemeTypes.forEach(function(type){
    return createSchemes((new R.Scheme({
      name: type,
      colors: [{base: mainColor.toJSON()}]
    })), type);
  });
}

function createSchemes(scheme, type){
  // Set scheme configuration to a predefined type and generate the scheme's colors
  scheme.configure(type).generate();

  // Create DOM elements
  var body = document.body,
  schemeDiv = document.createElement('div'),
  mainColorDiv = document.createElement('div'),
  title = document.createElement('h1'),
  auxColor = [];

  schemeDiv.className = 'scheme';
  title.textContent = scheme.name();
  schemeDiv.appendChild(title);
  mainColorDiv.className = 'main';

  // Iterate over scheme colors
  scheme.colors.forEach(function(color, index){
    // Main color div
    if(index === 0){
      mainColorDiv.style = 'background-color: #' + color.base.hex();
      return;
    }

    // Auxiliary colors
    var auxColorDiv = document.createElement('div');
    auxColorDiv.className = 'auxiliary';
    auxColorDiv.style = 'background-color: #' + color.base.hex();
    auxColor.push(auxColorDiv);
  });

  schemeDiv.appendChild(mainColorDiv);
  auxColor.forEach(function(div){
    // Append to the DOM
    schemeDiv.appendChild(div);
  });
  body.appendChild(schemeDiv);
}

// Start the application
main();
