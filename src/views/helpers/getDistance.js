const geolib = require('geolib');

const dist = geolib.getDistance(
    {51.5103, 7.49347},
    {"51° 31' N", "7° 28' E"}
);

console.log(dist/1000, 'km');
