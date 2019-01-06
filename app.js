const argv = require('./config/yargs').argv;
const request = require('request');

let direccion = argv.direccion;

let encodedUrl = encodeURI(direccion);
let json = [];
console.log(encodedUrl);

request(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDi8t7pAMNRfjgwcGAZ0gcy_e_c7JBvmKI`, function(error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    let bodyJson = JSON.parse(body); //se parsea y guardo el body.
    let results = bodyJson.results[0]; // se optiene la parte de interes.

    let direccion = results.formatted_address;
    let lat = results.geometry.location.lat;
    let lng = results.geometry.location.lng;

    console.log(`${direccion}\nlatitud  : ${lat}\nlongitud : ${lng}`);

});