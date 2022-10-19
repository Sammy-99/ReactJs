import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { doIncrement, doDecrement } from "./actions/index";
import Home from "./Components/Home";

function App() {
    const myState = useSelector((state) => state.calculateValue);
    console.log("app => " + myState);
    const dispatch = useDispatch();

    return (
        <>
        <Home />
        <h1>{myState}</h1>
        <button onClick={() => dispatch(doDecrement())}>Decrement</button> &nbsp;&nbsp;&nbsp;
        <button onClick={() => dispatch(doIncrement())}>Increment</button>
        </>
    )
}

export default App;