const path = require('path');
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const port =process.env.PORT||3001

//setting up express
const express = require('express');
app = express();

//setting up path for express static asset and for express server
dir_path_server = path.join(__filename, '../../public')
//single static page about.html checked in public folder
app.use(express.static(dir_path_server));


//set up for hbs
app.set('view engine', 'hbs')
path_template = path.join(__filename, '../../Template');
app.set('views', path_template)

//index page
app.get('', (req, res) => {
    res.render('index', {
        about: 'index'
    })
})

//help page
app.get('/help', (req, res) => {
    res.render('help', {
        page: 'help page'
    })
})

//weather app
//http://localhost:3000/weather?address=Montreal
app.get('/weather', (req, res) => {
    //check for address entered in query string
    if (!req.query.address) {
        return res.send("No address entered")
    }
    address = req.query.address
    console.log(address)
    geocode(address, (error, result) => {
        forecast(result.latitude, result.longitude, (error, result) => {
            res.send({result})
        })
    })
    //res.send(address)

})

//404 page
app.get('*', (req, res) => {
    res.send("404 Page not found")
})
//server 
app.listen(port, () => {
    console.log("RUNNING");
});