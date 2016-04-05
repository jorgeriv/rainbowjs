define(['../src/rainbow'], function(){'use strict';
var schemaTypes = [
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
  hsv.s = (Math.random()/2) + 0.5;
  hsv.v = (Math.random()/2) + 0.5;
  mainColor.setHSV(hsv.h, hsv.s, hsv.v); //(2, 55, 240);
  schemaTypes.forEach(function(type){
    return createschemas(new $rb.Schema(type, mainColor));
  });
}

function createschemas(schema){
  var body = document.body,
  schemaDiv = document.createElement('div'),
  mainColorDiv = document.createElement('div'),
  schemaColors = schema.getSchema(),
  title = document.createElement('h1'),
  auxColor = [];

  schemaDiv.className = 'shcema';
  title.textContent = schema.type;
  schemaDiv.appendChild(title);
  mainColorDiv.className = 'main';
  mainColorDiv.style = "background-color: #" + schemaColors.main.getHRGB();
  schemaColors.auxiliary.forEach(function(color){
    var auxColorDiv = document.createElement('div');
    auxColorDiv.className = 'auxiliary';
    auxColorDiv.style = "background-color: #" + color.getHRGB();
    auxColor.push(auxColorDiv);
  });
  schemaDiv.appendChild(mainColorDiv);
  auxColor.forEach(function(div){
    schemaDiv.appendChild(div);
  });
  body.appendChild(schemaDiv);
}

main();
});
