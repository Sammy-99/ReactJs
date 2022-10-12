import "./App.css";
import React, { useRef, useState } from "react";
import User from "./User";

function App() {
    const users = [
        { name: "Samir Ahamad", email: "samir@gmail.com", city: "MZN" },
        { name: "Ravi Kumar", email: "ravi@gmail.com", city: "Jhajjar" },
        { name: "Vijay Pal", email: "vijay@gmail.com", city: "Noida" },
        { name: "Ebrahim", email: "ebrahim@gmail.com", city: "Shamli" },
        { name: "Sammy", email: "sammy@gmail.com", city: "Bijnor" },
    ];

	function showData(id){
		let name = users[id].name;
		let email = users[id].email;
		let city = users[id].city;
		alert(name + email + city);
	}

    return (
        <div>
            <h2> User Data </h2>
            <table border="1">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
						<th>Action</th>
                    </tr>
                    {users.map((item, i) => (
                        <tr key={i}>
                            <User showData={showData} name={item.name} email={item.email} city={item.city} index={i} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
