// import React, {Component} from "react";

// class UserData extends Component{
//     constructor(){
//         super();
//         this.state = {
//             lname : "ahamad@yahoo.com"
//         }
//     }
//     render(){
//         console.log(this.state.lname);
//         return(
//             <div>
//             <h1>Class Component : the value is {this.state.lname} </h1>
//             <button onClick={() => this.setState({lname : "alqazi@yahoo.com"})}>Update</button>
//             </div>
//         )
//     }
// }

function UserAddress(props){
    let a = props.myFn;
    console.log(a());
    return(
        <h1>Car Name is : {a()}</h1>
    );
}

export default UserAddress;