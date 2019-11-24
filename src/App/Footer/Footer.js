import React from 'react'

import './footer.css'

const Footer = () =>
    <footer className="footer">
        <div className="row footer-info">
            <div className="col-five">
                <p>
                    <span>Bryansk State Technical University</span>
                    <span>50-letia Oktyabrya bulv.</span>
                    <span>Bryansk, 241035, Russia</span>
                </p>
                <p>
                    <span>Course and application enquiries</span>
                    <a href="#">pk@tu-bryansk.ru</a>
                </p>
                <p>
                    <span>General enquiries</span>
                    <span>(920) 604-88-04</span>
                    <a href="#">rector@tu-bryansk.ru</a>
                </p>
            </div>
            <div className="col-five">
                <ul className="social-icons transition-smooth">
                    <li><a href="http://vk.com/public45393943" title="vk" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-vk" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.facebook.com/bryanskstu" title="facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook-square"></i></a></li>
                    <li><a href="http://www.odnoklassniki.ru/group/51457726349441" title="odnoklassniki" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-odnoklassniki-square" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>

export default Footer