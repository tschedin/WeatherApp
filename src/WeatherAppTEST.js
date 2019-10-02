import React from "react";

import Titles from "./Components/titles";
import Form from "./Components/form";
import Weather from "./Components/weather";

const API_KEY = "d798f5a297dd3b2e788deb6074ca3429";


class WeatherApp extends React.Component {
    getWeather = async () => {
        const apiCall = await fetch('http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=${API_KEY}');
        const data = await apiCall.json();
        console.log(data);
    }
render() {
    return (
    <div>
          <Titles />      
          <Form />      
          <Weather />
    </div>
        );
}

}; 

export default WeatherApp;