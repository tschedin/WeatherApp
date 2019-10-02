import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./weatherapp.css";
import WeatherApp from './WeatherApp';
import registerServiceWorker from './registerServiceWorker';

var destination = document.querySelector("#container");

// ReactDOM.render(<WeatherApp />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    <div>
    <WeatherApp />
    </div>,
    destination
    );