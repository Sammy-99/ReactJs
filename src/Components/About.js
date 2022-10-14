import React from "react";
import {Link, Outlet} from "react-router-dom";

function About(){
    return (
        <div>
            <h3>About Component</h3>
            <Link to="/about/author" >Author</Link>
            <Outlet />
        </div>
    )
}

export default About;