const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2liaWxqb2UiLCJhIjoiY2tmYnF1Ymc0MHB1ajMxcWpwd2tsb29nbSJ9.Uw9Grl4G2baQaZFcKY1Hdw&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            
            callback('Unable to find location. Try another search.', undefined)
        } else {
            
           // console.log(response.body.features);
            callback(undefined, {
                
                 latitude: response.body.features[0].center[1],
                 longitude: response.body.features[0].center[0],
                 location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode