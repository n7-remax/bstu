import React from 'react'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import logo from '../../common/images/logo/logo.png'

const Header = () =>
    <header className="header">
        <div className="container">
            <div className="logo-place">
                <Link to="/bstu"><img className="logo" src={logo} alt="logo"></img></Link>
                <h1 className="logo-text"><Link to="/bstu">Bryansk State Technical University</Link></h1>
            </div>
            <nav className="nav">

                    <Link to="/bstu">Home</Link>
                    <div class="dropdown">
                        <button class="dropbtn">About us</button>
                        <div class="dropdown-content">
                            <Link to="/about-university/">About BSTU</Link>
                            <a href="#">History</a>
                            <Link to="/migration-department/international-department/">International department</Link>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Our speciality</button>
                        <div class="dropdown-content">
                            <a href="#">Full education</a>
                            <a href="#">Past education</a>
                            <a href="#">Paid</a>
                            <a href="#">Free</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">International studies resource</button>
                        <div class="dropdown-content">
                            <a href="#">Map of Bryansk</a>
                            <a href="#">Our Campuses</a>
                            <a href="#">Transfer</a>
                            <a href="#">The first stap</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Migration department</button>
                        <div class="dropdown-content">
                            <Link to="/migration-department/invitation/">Invitation</Link>
                            <Link to="/migration-department/visa/">Visa</Link>
                            <a href="#">Registration</a>
                            <a href="#">Memo</a>
                        </div>
                    </div>
               
            </nav>
        </div>
    </header>

export default Header