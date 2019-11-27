import React from 'react';
import { Route } from 'react-router-dom'

import './main.css';

import Intro from './Intro/Intro';
import City from './City/City';
import Vision from './Vision/Vision';
import Bryansk from './Bryansk/Bryansk';
import Science from './Science/Science';
import University from './University/University';

function Main() {
  return (
    <main className="Main">
      <Route exact path="/" render={() => <Intro/>}/>
      <Route exact path="/" render={() => <City/>}/>
      <Route exact path="/" render={() => <Vision/>}/>
      <Route exact path="/" render={() => <University/>}/>
      <Route path="/bryansk" component={Bryansk}/>
      <Route path="/our-vision" component={Science}/>

    </main>
  );
}

export default Main;
