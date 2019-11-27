import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./university.css";

export default class University extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true
        };
        return (
            <div className="university">
                <div className="university-quote">
                    <blockquote>“A better University - For a better world”</blockquote>
                </div>
                <div className="slider-place slider-row">
                    <Slider {...settings}>
                        <div>
                            <img className="slider-image" src={require('../../../common/images/slider-images/slide-1.jpg')} alt="university"></img>
                        </div>
                        <div>
                            <img className="slider-image" src={require('../../../common/images/slider-images/slide-2.jpg')} alt="logo"></img>
                        </div>
                        <div>
                            <img className="slider-image" src={require('../../../common/images/slider-images/slide-3.jpg')} alt="logo"></img>
                        </div>
                        <div>
                            <img className="slider-image" src={require('../../../common/images/slider-images/slide-4.jpg')} alt="logo"></img>
                        </div>
                    </Slider>
                    <div className="button-place">
                        <Link className="button" to="/about-university">Learn more about our University</Link>
                    </div>
                </div>
            </div>
        );
    }
}