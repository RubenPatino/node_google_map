const argv = require('./config/yargs').argv;
const maps = require('./request/maps_google_api');
const weather = require('./request/openweathermap_org');

let direccion = argv.direccion;
let encodedUrl = encodeURI(direccion);

maps.getGeometry(encodedUrl).then(resolve => {
    console.log(resolve.dir);

    weather.getTemperatura(resolve.lat, resolve.lng).then(resolve => {
        console.log(`Temperatura : ${resolve.temp} C`);
    }).catch(reject => {
        console.log(reject);
    })

}).catch(reject => {
    console.log(reject);
});