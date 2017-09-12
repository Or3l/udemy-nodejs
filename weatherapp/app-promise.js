const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;


var encodedAddress = encodeURI(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl)
.then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error ('Unable to find that address.')
    }

    var location = response.data.results[0].geometry.location;
    var weatherUrl = `https://api.darksky.net/forecast/566ee8431c379415addd4363a27c7aaa/${location.lat},${location.lng}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);

}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currenlty ${temperature}, it feels like ${apparentTemperature}`);
})
.catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API');
    } else {
        console.log(e.message);
    }
})



