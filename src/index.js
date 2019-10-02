import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./weatherapp.css";
import WeatherApp from "./WeatherAppTEST";


var destination = document.querySelector("#container");

ReactDOM.render(
<div>
    <WeatherApp/>
</div>,
destination
);