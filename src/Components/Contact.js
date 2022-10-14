import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Contact(props){
    // const location = useLocation();
    // const {userId} = location.state;
    // OR import 'useParams' module to get all parameters
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <h3>Contact Component</h3>
        </div>
    )
}

export {Contact}