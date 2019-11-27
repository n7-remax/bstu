import React from 'react'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import logo from '../../common/images/logo/logo.png'


import './header.css'

const Header = () =>
    <header className="header">
        <div className="logo-place">
            <Link to="/bstu"><img className="logo" src={logo} alt="logo"></img></Link>
            <h1><Link to="/">Bryansk State Technical University</Link></h1>
        </div>
        <nav className="nav">
            <ul>
                <li><Link to="/bstu">Home</Link></li>
                <li><Link to="/our-vision">About us</Link></li>
                <li><Link to="/about-university">Our University</Link></li>
                <li><Link to="/bryansk">Explore our city</Link></li>
                <li><AnchorLink href='#footer'>Contact us</AnchorLink></li>
            </ul>
        </nav>
    </header>

export default Header