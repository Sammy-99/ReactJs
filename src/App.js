import './App.css';
import React from 'react';
import User from './User';

class App extends React.Component{

	constructor(){
		super();
		this.state = {
			count : 1,
			email : 'Samir@gmail.com',
			status : true
		}
	}

	componentDidMount(){
		console.log("componentDidMount");
		// alert("aaaa")
	}

	componentDidUpdate(){
		console.log(" did update ");
	}

	render(){
		return(
			<div>
				{this.state.status ? <User /> : <h1>Component removed</h1> }
				<h2>Counter : {this.state.count}</h2>
				<h3>My name is {this.state.name} and my email is {this.state.email}</h3>
				<button onClick={()=>this.setState({status : !this.state.status})} >click me</button>
			</div>
		)
	}
}

export default App;
