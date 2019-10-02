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
        
        if ( city  && country ) {
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        });
    } else {
    this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Invalid entry.  Please check city and country."   
    });
}
}

render() {
    return (
    <div>
          <div className="wrapper">
              <div className="main">
                  <div className="container">
                      <div className="row">
                        <div className="col-xs-5 title-container">
                            <Titles />                               
                        </div>
                        <div className="col-xs-7 form-container">
                            <Form getWeather={this.getWeather} />   
                            <Weather 
                                temperature={this.state.temperature} 
                                city={this.state.city} 
                                country={this.state.country} 
                                humidity={this.state.humidity} 
                                description={this.state.description} 
                                error={this.state.error}
                            />
                        </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
        );
}

}; 

export default WeatherApp;