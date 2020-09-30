console.log("Hello about page")

const weatherPara=document.getElementById('weather-info')

function functionName(mytext) {
    var data=mytext;
    var url="/weather?address="+data;
    
    fetch(url).then((response) => {
        response.json().then((data) => {
            var weatherDetails=data;
            var value=JSON.stringify(data);
            //console.log(value)
            document.getElementById('weather-location').innerHTML="Location :"+data.result.location;
            document.getElementById('weather-description').innerHTML="Weather discription :"+data.result.weather_descriptions;
            document.getElementById('weather-temperature').innerHTML="Temperature :"+data.result.temperature;
           })
    });
}

const weather = document.querySelector('form')

weather.addEventListener('submit', (e) => {
    e.preventDefault();
})