const apikey="1a751a562017720c37c6f9b05817f292";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
   const response = await fetch(apiUrl + city+`&appid=${apikey}`);
   
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        
   var data=await response.json();
   console.log(data);

   document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
   document.querySelector(".perc").innerHTML=data.main.humidity+"%";
   document.querySelector(".wind-speed").innerHTML=data.wind.speed+" km/hr";
   
   if(data.weather[0].main == "Clouds"){
    WeatherIcon.src="images/cloudy.png";
   }
   else if(data.weather[0].main == "Clear"){
    WeatherIcon.src="images/clear.png";
   }
   else if(data.weather[0].main == "Rain"){
    WeatherIcon.src="images/heavy rain.png";
   }
   else if(data.weather[0].main == "Drizzle"){
    WeatherIcon.src="images/rainy.png";
   }
   else if(data.weather[0].main == "Mist"){
    WeatherIcon.src="images/wind.png";
   }

   document.querySelector(".weather").style.display="block";
   document.querySelector(".error").style.display="none";

    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
