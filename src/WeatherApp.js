import React, { Component } from "react";
import WeatherAppTempType from "./WeatherAppTempType";

class WeatherApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addZip = this.addZip.bind(this);
    }

    addZip(e) {
if (this._inputElement.value !=="") {
    var newZip = {
        text: this._inputElement.value
    };

    this.setState((prevState) => {
        return {
            items: prevState.items.concat(newZip)
        };
    });

    this._inputElement.value = "";
}

console.log(this.state.items);

e.preventDefault();

    }

  render() {
    return (
      <div className="weatherAppMain">

        <div className="header">
                <form onSubmit={this.addZip}>
                    <input ref={(a) => this._inputElement = a}
                            placeholder="Zip Code">
                    </input>
                    <button type="submit">Submit</button>                
                </form>
        </div> 
      </div>
    ); 
  } 
}

export default WeatherApp;