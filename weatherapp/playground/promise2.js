const request = require('request');


var geocodeAddress = (address) => {
    var encodedAddress = encodeURI(address);
    return new Promise((resolve, reject)=> {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body)=>{
            if (error){
                reject('Unable to connect to Google servers.');
                
            } else if (body.status === 'ZERO_RESULTS'){
                reject('Unable to find that address.');
            
            } else if(body.status === 'OK'){
                resolve(body.results[0].geometry.location);
            }
        });

    }); 

};

geocodeAddress('lobard street').then((location)=> {
    console.log(JSON.stringify(location,undefined, 2));
},
(errorMessage)=> {
    console.log(errorMessage);
});