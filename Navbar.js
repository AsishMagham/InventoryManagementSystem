import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import './Navbar.css';
import { BrowserRouter, Route, Switch, Routes, Navigate } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <div class="navbar">
                <div id="Logo">
                    Inventory Management System
                </div>
                <div id="Links">
                    <Link to={'/login'} className='lk'>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={'/signup'} className='lk'>Signup</Link>
                </div>
            </div>
            <Routes>
                <Route path='/home8235@' element={<Home />} />

                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </>
    )
}
export default Navbar