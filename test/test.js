define(['../src/rainbow'], function(){'use strict';
var schemeTypes = [
  'complementary',
  'analogous',
  'triadic',
  'split-complementary',
  'rectangle',
  'square',
];

function main() {
  var mainColor, hsv = {};
  mainColor = new $rb.Color();
  hsv.h = Math.random();
  hsv.s = Math.random();
  hsv.v = Math.random();
  mainColor.setHSV(hsv.h, hsv.s, hsv.v); //(2, 55, 240);
  schemeTypes.forEach(function(type){
    return createSchemes(new $rb.ColorScheme(type, mainColor));
  });
}

function createSchemes(scheme){
  var body = document.body,
  schemeDiv = document.createElement('div'),
  mainColorDiv = document.createElement('div'),
  schemeColors = scheme.getColorScheme(),
  title = document.createElement('h1'),
  auxColor = [];

  schemeDiv.className = 'shcema';
  title.textContent = scheme.type;
  schemeDiv.appendChild(title);
  mainColorDiv.className = 'main';
  mainColorDiv.style = "background-color: #" + schemeColors.main.getHRGB();
  schemeColors.auxiliary.forEach(function(color){
    var auxColorDiv = document.createElement('div');
    auxColorDiv.className = 'auxiliary';
    auxColorDiv.style = "background-color: #" + color.getHRGB();
    auxColor.push(auxColorDiv);
  });
  schemeDiv.appendChild(mainColorDiv);
  auxColor.forEach(function(div){
    schemeDiv.appendChild(div);
  });
  body.appendChild(schemeDiv);
}

main();
});
