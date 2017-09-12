const request = require('request');


var getWeather = (lat,long, callback) => {
    
    request({
        url: `https://api.darksky.net/forecast/566ee8431c379415addd4363a27c7aaa/${lat},${long}`,
        json: true
    
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to connect to retrieve data.');
        }
    });

};

module.exports.getWeather = getWeather;
