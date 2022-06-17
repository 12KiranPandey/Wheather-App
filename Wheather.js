let city="Mumbai";
var speed,weather,country,humidity,des,Temp;
async function getWeather()
{
   var city2=document.getElementById('cityName').value;
    if(city2!="")
    {
        city=city2;
    }
    const api='e0ab29e1a91dafe94e29a46a0f1c4df0';
    const data= await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&apikey=${api}`)
    const res=await data.json();
    console.log(res);
    console.log(res.wind.speed);
    speed=res.wind.speed;
    weather=res.weather[0].main;
    Temp=(res.main.temp)-273.15;
    value=Temp.toFixed(2);
    des=res.weather[0].description;
    country=res.sys.country;
    humidity=res.main.humidity;
    document.querySelector("#city").innerHTML=city+"<sup>"+country+"<sup>";
    document.querySelector("#weather").innerHTML=weather;
    document.querySelector("#speed").innerHTML=speed;
    document.querySelector("#des").innerHTML=des;
    document.querySelector("#img").src="image/"+weather+".png";
    document.querySelector("#temp").innerHTML=value+"<span>&#176C</span>";
}   
getWeather();