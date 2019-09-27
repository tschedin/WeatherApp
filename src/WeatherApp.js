import React, { Component } from "react";
 
class WeatherApp extends Component {
  render() {
    return (
      <div className="weatherAppMain">
        <div className="header">
          <form>
            <input placeholder="enter zipcode">
            </input>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default WeatherApp;