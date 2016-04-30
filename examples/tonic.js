'use strict';

const R = require('rainbowjs');

let color = new R.Color();
let scheme = new R.Scheme({
    name: 'test-scheme',
    colors: [{base: color.toJSON()}]
});

scheme.configure('square').generate();

module.exports = scheme.toJSON();
