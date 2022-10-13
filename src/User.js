import {useEffect, useRef} from "react";
import { Button } from 'react-bootstrap';
import React from "react";

function User(props) {
    const lastVal = useRef();
    const preValue = lastVal.current;

    useEffect(() => {
        lastVal.current = props.count;
    });

    return (
        <>
           <h4>current is : {props.count}</h4>
           <h4>previous value : {preValue}</h4>
        </>
    );
}

export default User;
