import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import ViewProfiles from "./components/ViewProfile";

function RegForm() {
    const [users, setUsers] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [count, setCount] = useState(0);
    const [showUpdateBtn, setShowUpdateBtn] = useState(false);
    const [userId, setUserId] = useState(0);
    const [profile, setProfile] = useState(false);
    const [currentUser, setCurrentUser] = useState('')

    useEffect(() => {
        setName('');
        setEmail('');
        setAddress('');
        setShowUpdateBtn(false);

        async function viewData() {
            let apiUrl = await fetch("http://localhost:8000/api/view");
            let result = await apiUrl.json();
            setUsers(result.data);
        }
        viewData();
    }, [count]);

    async function addData() {
        if (name !== "" && email !== "" && address !== "") {
            let payload = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    address: address,
                }),
            };

            let apiUrl = await fetch("http://localhost:8000/api/add", payload);
            let result = await apiUrl.json();
            // console.log("add data");
            setCount(count + 1);
        }
    }

    async function edit(user) {
        console.log(user);
        setUserId(user.id);
        setName(user.name);
        setEmail(user.email);
        setAddress(user.address);
        setShowUpdateBtn(true);
    }

    async function remove(id) {
        let payload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        };

        let apiUrl = await fetch(
            `http://localhost:8000/api/delete/${id}`,
            payload
        );
        let result = await apiUrl.json();
        console.log(result);
        setCount(count + 1);
    }

    async function update(){
        if (name !== "" && email !== "" && address !== "") {
            let payload = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    address: address,
                }),
            };

            let apiUrl = await fetch(`http://localhost:8000/api/edit/${userId}`, payload);
            apiUrl = await apiUrl.json();
            // console.log("update data");
            setCount(count + 1);
        }
    }

    function viewProfile(user){
        setProfile(true);
        setCurrentUser(user);
    }

    return (
        <>
            {showUpdateBtn ? <h1>Update User</h1> : <h1>Add User</h1>}
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <br />
            <Button onClick={() => addData()}>Add Data</Button> &nbsp;
            {showUpdateBtn ? <Button onClick={update} >Update Data</Button> : ''}
            {profile ? <ViewProfiles modelStatus= {profile} setModelStatus={setProfile} userProfile={currentUser} /> : ''}            
            {users != null ? (
                <>
                    <h1>Users</h1>
                    <Table border="1">
                        <tbody>
                            <tr>
                                <th>S No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                            {users.map((user, i) => (
                                <tr key={i}>
                                    <td> {user.id} </td>
                                    <td> {user.name} </td>
                                    <td> {user.email} </td>
                                    <td> {user.address} </td>
                                    <td>
                                        <Button
                                            onClick={() => edit(user)}
                                            variant='outline-secondary'
                                        >
                                            Edit
                                        </Button>
                                        &nbsp;
                                        <Button
                                            onClick={() => remove(user.id)}
                                            variant='outline-danger'
                                        >
                                            Delete
                                        </Button>
                                        &nbsp;
                                        <Button
                                            onClick={() => viewProfile(user)}
                                            variant='outline-primary'
                                        >
                                            View Profile
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            ) : (
                ""
            )}
        </>
    );
}

export default RegForm;
