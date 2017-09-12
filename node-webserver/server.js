const express = require('express');
const hbs = require('hbs');
const fs = require('fs');


var app = express();

hbs.registerPartials(__dirname+"/views/partials");
app.set('view engine', 'hbs');


//middleware
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log +'\n', (err) => {
        if(err){
            console.log('Unable to append to server.log');
        }           
    })
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs', {
//         maintenanceMessage : 'Maintenance'
//     })
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=> {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});


app.get('/', (request, response)=> {
    response.render('home.hbs', {
        pageTitle: 'Home2 Page',
        welcomeMessage: 'Helloooooo !'
    });
});
app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About Page',     
    });
});



app.get('/bad', (request, response) => {
    response.send({
        errorMessage : 'Unable to do anything !'
    });

});



app.listen(3000, () => {
    console.log('server is up');
});
