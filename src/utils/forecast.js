const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d56548c179d4f4f1156955f269908c5d&query='+latitude + ',' + longitude
    //console.log(url)
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
             const location=response.body.location.name
            const weather_descriptions=response.body.current.weather_descriptions
            const temperature=response.body.current.temperature
            callback(undefined, {location,
            weather_descriptions,
            temperature
            })
        }
    })
}

// forecast(21.31139,-157.79639,(error,result)=>{
//      console.log(result);
//  })
module.exports = forecast