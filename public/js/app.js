console.log("Hello about page")

const weatherPara=document.getElementById('weather-info')

function functionName(mytext) {
    var data=mytext;
    var url="/weather?address="+data;
    
    fetch(url).then((response) => {
        response.json().then((data) => {
            var weatherDetails=data;
            
            weatherPara.textContent=data;
            console.log(weatherDetails)
        })
    });
}

const weather = document.querySelector('form')

weather.addEventListener('submit', (e) => {
    e.preventDefault();
})