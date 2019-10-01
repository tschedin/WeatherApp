import React from "react";

import Titles from "./Components/titles";
import Form from "./Components/form";

class WeatherApp extends React.Component {
render() {
    return (
    <div>
          <Titles />      
          <Form />      
    </div>
        );
}

}; 

export default WeatherApp;