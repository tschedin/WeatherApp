import React from "react";

const Form = props => (
<form onSubmit={props.getWeather}>
    <input type="text" name = "city" placeholder="City..."/>
    <input type="text" name = "country" placeholder="and Country"/>
    {/* <input type="text" name = "zip" placeholder="...or Zip Code"/> */}
    <button>Input</button>
</form>
);

export default Form;
