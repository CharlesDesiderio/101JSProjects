let address = "";
let weatherCode = "";
let curUnit = "c";

let swapUnit = () => {
    if (curUnit === "c") {
        let newTemp = Math.round((parseInt(document.querySelector(".temp").innerHTML) * 1.8) + 32);
        document.querySelector(".temp").innerHTML = newTemp + ", ";
        curUnit = "f";
        document.querySelector(".unit").innerHTML = "To C°";
    } else {
        let newTemp = Math.round((parseInt(document.querySelector(".temp").innerHTML) - 32) / 1.8);
        document.querySelector(".temp").innerHTML = newTemp + ", ";
        curUnit = "c";
        document.querySelector(".unit").innerHTML = "To F°";   
    }
    
}

let getWeather = (lon, lat) => {
    fetch(`https://api.climacell.co/v3/weather/realtime?unit_system=si&lat=${lat}&lon=${lon}&fields=temp%2Cweather_code&apikey=rROQsBJraC4zQ04QpbvbBS9q848rDlIa`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        
        document.querySelector(".temp").innerHTML += Math.round(data.temp.value) + ", ";
        weatherCode = data.weather_code.value
            .split("_")
            .join(" ");

        if (weatherCode === "tstorm") {
            weatherCode = "Thunderstorm";
        }

        document.querySelector(".weather").innerHTML += data.weather_code.value;
        document.querySelector(".weather").style.textTransform = "capitalize";

    })
    .catch((err) => {
        console.log(err);
    })
}

fetch('https://api.ipify.org?format=json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        address = data.ip;
    })
    .catch((err) => {
        console.log(err);
    })

fetch(`https://ipapi.co/${address}/json/`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".location").innerHTML = `${data.city}, ${data.region}`;
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2pkZXNpIiwiYSI6ImNrOWtlb283aDAwcHAzZmw1MDZpMW85M2EifQ.xdOjuWwykw-eLnVrKfAEEg';
        let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [data.longitude, data.latitude],
        zoom: 9
        });

        getWeather(data.longitude, data.latitude)
    })
    .catch((err) => {
        console.log(err);
    })

