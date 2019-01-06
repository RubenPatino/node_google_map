const request = require('request');

function getGeometry(encodedUrl) {
    return new Promise((resolve, reject) => {

        request(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDi8t7pAMNRfjgwcGAZ0gcy_e_c7JBvmKI`, function(error, response, body) {

            if (error) {
                reject(error);
            } else {
                let bodyJson = JSON.parse(body); //se parsea y guardo el body.
                let status = bodyJson.status;
                if (status === 'ZERO_RESULTS') {
                    reject('No hay nada para mostrar, direccion mal digitada');
                } else {
                    let results = bodyJson.results[0]; // se optiene la parte de interes.
                    let direccion = results.formatted_address;
                    let lat = results.geometry.location.lat;
                    let lng = results.geometry.location.lng;
                    resolve({
                        dir: direccion,
                        lat: lat,
                        lng: lng
                    });
                }
            }
        });
    });
}

module.exports = {
    getGeometry
}