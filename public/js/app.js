console.log("Hello about page")



const weatherPara=document.getElementById('weather-info')

function functionName(mytext) {
    var data=mytext;
    var url="http://localhost:3000/weather?address="+data;
    
    fetch(url).then((response) => {
        response.json().then((data) => {
            var weatherDetails=JSON.stringify(data);
            weatherPara.textContent=weatherDetails;
            console.log(weatherDetails)
        })
    });
}

const weather = document.querySelector('form')

weather.addEventListener('submit', (e) => {
    e.preventDefault();
})