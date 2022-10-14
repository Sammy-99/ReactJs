import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import {Contact} from "./Components/Contact";
import Author from "./Components/Author";

function App() {
    return (
        <div>
            <h1>Routing</h1>
            <BrowserRouter>
                    <Link to="/" >Home</Link> <br />
                    <Link to="/about" >About</Link><br />
                    <Link to="/contact" >Contact</Link>
                   
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />}>
                        <Route path="author" element={<Author />} /> 
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
