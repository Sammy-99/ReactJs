import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import {Contact} from "./Components/Contact";
import Author from "./Components/Author";

function App() {
    let users = [
        {id : 1, name : "sam"},
        {id : 2, name : "sammy"},
        {id : 3, name : "khan"}
    ];
    return (
        <div>
            <h1>Routing</h1>
            <BrowserRouter>
                {users.map(user => (
                    <Link to={"contact/" + user.id + "/" + user.name} state={{userId : user.id}}> {user.name} </Link>
                ))}

                <Routes>
                    <Route path="/contact/:id/:name" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
