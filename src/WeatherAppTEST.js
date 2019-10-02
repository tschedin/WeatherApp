import React from "react";

import Titles from "./Components/titles";
import Form from "./Components/form";
import Weather from "./Components/weather";

const API_KEY = "d798f5a297dd3b2e788deb6074ca3429";


class WeatherApp extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await apiCall.json();
        console.log(data);
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description
        })
    }
render() {
    return (
    <div>
          <Titles />      
          <Form getWeather={this.getWeather}/>      
          <Weather />
    </div>
        );
}

}; 

export default WeatherApp;