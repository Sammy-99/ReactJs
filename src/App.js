import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import User from "./User";
import { Button } from "react-bootstrap";

function App() {
    const [count, setCount] = React.useState(0);
    return (
        <div >
            <User count={count} />
            <button
                onClick={() => { setCount(Math.floor(Math.random() * 10)); }}
            >
                Update Counter
            </button>
        </div>
    );
}

export default App;
