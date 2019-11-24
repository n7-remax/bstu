import React from 'react'
import { Link } from 'react-router-dom'


import './header.css'

const Header = () =>
    <header className="header">
        <div className="logo-place">
            <Link to="/"><img className="logo" src={require('./logo.png')} alt="logo"></img></Link>
            <h1><Link to="/">Bryansk State Technical University</Link></h1>
        </div>
        <nav className="nav">
            <ul>
                <li><a href="#">Study with us</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Interntaional</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </nav>
    </header>

export default Header