import React, {Component} from "react";

class User extends Component{

    componentWillUnmount(){
		console.log(" will unmount");
	}

    render(){
        return(
            <>
            <p>I am from User Class</p>
            </>
        )
    }
}

export default User;