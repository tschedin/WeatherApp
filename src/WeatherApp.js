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
          
            <div className="radio">
          <label>
            <input type="radio" value="option1" checked={true} />
            Actual Temp
          </label>

          <label>
            <input type="radio" value="option2" />
            Real Feel
          </label>
            </div>
          
          
          </form>
         
        </div> 
      </div>
    );
  }
}
 
export default WeatherApp;