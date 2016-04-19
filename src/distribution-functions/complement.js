'use strict';
const analogous = require('./analogous');

function complement(count, options){
    count = count || 1;
    options = options || {};
    let pivot = 0.5,
        absDistance = 0,
        distances,
        complements = analogous(count, options),
        isPair = (count % 2) === 0;

        if(complements.length > 2){
          let firstPoint = Math.abs(complements[0]),
              secondPoint = Math.abs(complements[1]);

          if(firstPoint > secondPoint){
            absDistance = firstPoint - secondPoint;
          } else {
            absDistance = secondPoint - firstPoint;
          }

          if(isPair){
            pivot += absDistance;
          }
        }

        // Rotate points 180 deg plus center;
        complements = complements.map(function(point){
          let newPointLocation;
          newPointLocation = point + pivot;
          if(newPointLocation>1){
            newPointLocation -= 1;
          }
          return newPointLocation;
        });

        distances = [].concat(0, complements);
    return distances;
  }

  module.exports = complement;
