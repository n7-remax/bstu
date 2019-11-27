import React from 'react';
import { Route } from 'react-router-dom'

import './main.css';

import Intro from './Intro/Intro';
import City from './City/City';
import Vision from './Vision/Vision';
import Bryansk from './Bryansk/Bryansk';
import Science from './Science/Science';
import University from './University/University';
import AboutUniversity from './AboutUniversity/AboutUniversity';

function Main() {
  return (
    <main className="Main">
      <Route exact path="/bstu" render={() => <Intro/>}/>
      <Route exact path="/bstu" render={() => <City/>}/>
      <Route exact path="/bstu" render={() => <Vision/>}/>
      <Route exact path="/bstu" render={() => <University/>}/>
      <Route path="/bryansk" component={Bryansk}/>
      <Route path="/our-vision" component={Science}/>
      <Route path="/about-university" component={AboutUniversity}/>

    </main>
  );
}

export default Main;
