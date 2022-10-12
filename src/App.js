import './App.css';
import { useState } from "react";
import UserAddress from "./User";

function App() {

	function test(){
		return "this is test function";
	}

    return (
        <div className='App'>
			<UserAddress myFn={test} />
        </div>
    );
}

export default App;
