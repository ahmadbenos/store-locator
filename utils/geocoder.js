const NodeGeocoder = require("node-geocoder");

const options = {
    provider: 'mapquest',
    httpAdaptor: 'https',
    apiKey: process.env.MAPQUEST_API, 
    formatter: null 
  };
   
  const geocoder = NodeGeocoder(options);

  module.exports = geocoder