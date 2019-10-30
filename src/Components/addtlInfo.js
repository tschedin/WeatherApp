import React from "react";

const addtlInfo = props => (
    <form onSubmit={props.getRadar}>
        <button onClick={props.addtlInfo}>Get Radar</button>
    </form>
);

export default addtlInfo;



