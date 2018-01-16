const geolib = require('geolib');

module.exports = (lat_long) => {

  const latA = lat_long.split(' ')[0].slice(1, 16);
  const longA = lat_long.split(' ')[1].slice(0, 19);
  const distance = geolib.getDistance(
      { latitude: latA, longitude: longA },
      { latitude: 51.5295460939963, longitude: -0.0423161603498166 } // hard coded for fac
      )/1000+'km';

  return distance;
};
  
