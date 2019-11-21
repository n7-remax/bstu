import React from 'react'

import './header.css'

const Header = () =>
    <header className="header header-background">
        <div className="logo-place">
            <a href="#"><img className="logo" src={require('./logo.png')} alt="logo"></img></a>
            <h1>Bryansk State Technical University</h1>
        </div>
        <nav className="nav">
            <ul>
                <li><a href="#">Study with us</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Integration program</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </nav>
    </header>

export default Header