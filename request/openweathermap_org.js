const request = require('request');

function getTemperatura(lat, lng) {
    return new Promise((resolve, reject) => {
        request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=abac083a6fea0afd8f6ceac8aa3b58d9`, function(error, response, body) {
            if (error) {
                reject(error);
            } else {
                let bodyJson = JSON.parse(body);
                let temp = bodyJson.main.temp;
                resolve({
                    temp: temp
                });
            }
        });

    });
}

module.exports = {
    getTemperatura
}