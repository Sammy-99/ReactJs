import "./App.css";
import React, { useEffect, useState } from "react";
import { Table, Form } from "react-bootstrap";
import User from "./User";

function App() {
    const [users, setUsers] = useState([]);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState();

    useEffect(() => {

        /** First Method to fetch data */

        async function getUserData(){
            const userData = await fetch('https://reqres.in/api/users');
            const response = await userData.json();
            console.log(response.data);
            setUsers(response.data);
        }

        getUserData();

        /** Second Method to fetch api */
        // async function getUserData(){
        //     const userData = await fetch('https://reqres.in/api/users', {
        //         method : 'GET',
        //         header : { accept : 'application/json' }
        //     });
        //     const response = await userData.json();
        //     console.log(response.data);
        //     setUsers(response.data);
        // }

        // getUserData();

        /** Third Method to fetch data */

        // fetch('https://reqres.in/api/users')
        // .then((result) => {
        //     result.json()
        //     .then((res) => {
        //         console.log(res);
        //         setUsers(res.data);
        //     })
        // })
    }, []);

    useEffect(() => {
        function UpdateUser(e){
            // e.preventDefault();
    
            users[1] = {...users[1], first_name, last_name, email}; 
            
            setUsers(users);
            console.log(users)
        }

        UpdateUser();

    }, [userId])

    return (
        <div>
            <Table>
                <tbody>
                    <tr>
                        <th>S No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                    
                    {users.map((user, i) => (
                        
                        <>
                        <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td> <img src={user.avatar} alt="" width="50" /></td>
                        </tr>
                        </>
                    ))}
                    
                </tbody>
            </Table>
            <div>
                <Form>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    <button varients="success" onClick={() => setUserId(2)} >Update</button>
                </Form>
            </div>
        </div>
    );
}

export default App;
