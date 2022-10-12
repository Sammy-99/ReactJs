import './App.css';
import { useState } from "react";

function App() {
	const [name, setName] = useState('');
	const [password, setPass] = useState('');
	const [checkBox, setCheck] = useState(false);
	const [nameErr, setNameErr] = useState('empty');
	const [passErr, setPassErr] = useState('empty');
	const [cbErr, setCbErr] = useState(true);
	const [userData, setUserDarta] = useState({});

	function formHandler(e){
		e.preventDefault();
		console.log(userData);
		if(!nameErr && !passErr && !cbErr){
			console.log('All fields have been filled.');
			console.log(`username is : ${name} and password is ${password}`);
		}else{
			console.log('Please fill the form');
		}
	}

	function nameChange(e){
		let userName = e.target.value;
		let nameAttr = e.target.name;

		if(userName.length < 3 && userName.length > 0){
			setNameErr(true);
		}else if(userName.length === 0){
			setNameErr('empty');
		}else{
			setNameErr(false);
		}
		setName(userName);
		setUserDarta({...userData, [nameAttr] : userName});
	}

	function isPassword(e){
		let userPass = e.target.value;
		let nameAttr = e.target.name;

		if(userPass.length < 6 && userPass.length > 0){
			setPassErr(true);
		}else if(userPass.length === 0){
			setPassErr('empty');
		}else{
			setPassErr(false);
		}
		setPass(userPass);
		setUserDarta({...userData, [nameAttr] : userPass});
	}

	function isChecked(e){
		// console.log(e.target.checked);
		e.target.checked ? setCbErr(false) : setCbErr(true) ;
	}

    return (
        <div className='App'>
			<form onSubmit={formHandler}>
				<input type="text" name="name" value={name} onChange={nameChange}/>
				{nameErr === true ? <span>Name should be greater than 3 letter</span> : '' }
				<br /><br />

				<input type="text" name="password" value={password} onChange={isPassword}/>
				{passErr === true ? <span>Password should be greater than 5 letter</span> : ''  }
				<br /><br />

				<input type="checkbox" onChange={isChecked} />
				{cbErr ? <span>Please check the box</span> : '' }
				<br /><br />
				<input type="submit" value="submit" />
			</form>
        </div>
    );
}

export default App;
