import React, { Component } from "react";
 
class WeatherAppTempType extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOn: true
      };
    }
    toggle = () => {
      this.setState({isOn: !this.state.isOn})

      console.log(this.state.items);
    }
  
    render() {
      return (
        <div className="WeatherAppTempType">
          <button onClick={this.toggle}>
            {this.state.isOn ? 'Real Feel' : 'Actual'}
          </button>
        </div>
      );
    }
  }
 
export default WeatherAppTempType;