import React from 'react';
import { Route } from 'react-router-dom'

import './main.css';

import Intro from './Intro/Intro';
import City from './City/City';
import Vision from './Vision/Vision';
import Bryansk from './Bryansk/Bryansk';

function Main() {
  return (
    <main className="Main">
      <Route exact path="/" render={() => <Intro/>}/>
      <Route exact path="/" render={() => <City/>}/>
      <Route exact path="/" render={() => <Vision/>}/>
      <Route path="/bryansk" component={Bryansk}/>
    </main>
  );
}

export default Main;
