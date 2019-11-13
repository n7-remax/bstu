import React from 'react'

import './header.css'

const Header = () =>
    <header className="header test">
        <div className="logo-place">
            <a href="#"><img className="logo" src={require('./logo.png')}></img></a>
            <h1>Bryansk State Technical University</h1>
        </div>
        <nav className="nav">
            <ul>
                <li>Study with us</li>
                <li>About us</li>
                <li>Integration program</li>
            </ul>
        </nav>
    </header>

export default Header