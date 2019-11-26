import React from 'react'

import './footer.css'

const Footer = () =>
    <footer className="footer" id="footer">
        <div className="row footer-info">
            <div className="col-five">
                <p>
                    <span>241035, Bryansk, ul Institutskaya, 16,</span>
                    <span>Administrative building, 2nd floor</span>
                    <span>RM. А210, А230, А231</span>
                </p>
                <p>
                    <span>Email:</span>
                    <a href="#">pk@tu-bryansk.ru</a>
                </p>
                <p>
                    <span>Phones:</span>
                    <span>Admissions: +7 (4832) 58-82-64</span>
                    <span>Responsible Secretary of the admission</span>
                    <span>Vysotsky Andrey: +7 (4832) 51-19-97</span>
                    <span>First Vice-rector for academic Affairs</span>
                    <span>Prokofiev Alexander: +7 (4832) 56-25-09</span>
                    <span>Preparatory courses</span>
                    <span>Lebedeva Tatyana: +7 (4832) 58-82-42</span>
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