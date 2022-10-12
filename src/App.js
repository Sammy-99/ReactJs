import "./App.css";
import React, { useRef, useState } from "react";
import User from "./User";

function App() {
    return (
        <div>
            <Mobile cmp={Samsung} />
            <Led cmp={Samsung} />
        </div>
    );
}

function Samsung() {
    return (
        <>
            <span>Samsung Brand </span>
        </>
    );
}

function Mobile(props) {
    return <h1> {<props.cmp />} Mobile</h1>;
}

function Led(props) {
    return <h1> {<props.cmp />} LED </h1>;
}

function Global(){
	return(
		<span> is the international brand</span>
	)
}

export default App;
