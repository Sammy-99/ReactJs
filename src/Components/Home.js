import React, { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
    const newState = useSelector((state) => state.calculateValue);
    return (
        <>
            <h3>Home Component {newState}</h3>
        </>
    );
}

export default Home;