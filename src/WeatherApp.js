import React from "react";

import Titles from "./Components/titles";
import Form from "./Components/form";
import Weather from "./Components/weather";
import AddtlInfo from "./Components/addtlInfo";

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
        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`);
       //const apiCall = undefined;

    //// Placeholder for future zip API support
    //     if ( zip != "" ) {
    //         this.setState({
    //             apiCall: '`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${API_KEY}`',
    //         });
    //     } else {
    //         this.setState({
    //         apiCall:`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`,
    //     });
    // };
        const data = await apiCall.json();
        
        if ( city  && country ) {
        this.setState({
            temperature: (data.main || []).temp,
            city: data.name,
            country: (data.sys || []).country,
            humidity: (data.main || []).humidity,
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
        error: "Invalid entry.  Please populate both city and country."   
    });
}
}


getRadar = async (e) => {
    e.preventDefault();
    const apiCall = await fetch(`https://tile.openweathermap.org/map/precipitation_new/5/5/5.png?appid=${API_KEY}`);
    const data = await apiCall.json();
                        }


constructor(props) {    
    super(props)
    this.state = { isEmptyState: true }
  }

triggerAddtlInfo = async (e) => {
    e.preventDefault();
    //const isEmptyState = true;

    // if ( isEmptyState ){
    //     this.setState({
    //     });
    //  } else {
    // this.setState({ });}

    this.setState({
      //...this.state,
      isEmptyState: false,
      isAddtlInfo: true
    })
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
                            <addtlInfo addtlInfo={this.triggerAddtlInfo} />
                            {this.state.isEmptyState && <AddtlInfo addtlInfo={this.triggerAddtlInfo} />}
                            {this.state.isAddtlInfo && this.getRadar}  
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
