import React from "react";

import Titles from "./Components/titles";
import Form from "./Components/form";
import Weather from "./Components/weather";

const API_KEY = "d798f5a297dd3b2e788deb6074ca3429";
// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={}

class WeatherApp extends React.Component {
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