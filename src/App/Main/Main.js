import React from 'react';
import { Route } from 'react-router-dom'

import Intro from './Intro/Intro';
import City from './City/City';
import Vision from './Vision/Vision';
import Bryansk from './Bryansk/Bryansk';
import Science from './Science/Science';
import University from './University/University';
import AboutUniversity from './AboutUniversity/AboutUniversity';
import Invitation from '../MigrationDepartment/Invitation/Invitation';
import Visa from '../MigrationDepartment/Visa/Visa';
import InternationalDepartment from '../AboutUs/InternationalDepartment/InternationalDepartment';

function Main() {
  return (
    <main className="Main">
      <Route exact path="/bstu" render={() => <Intro/>}/>
      <Route exact path="/bstu" render={() => <City/>}/>
      <Route exact path="/bstu" render={() => <Vision/>}/>
      <Route exact path="/bstu" render={() => <University/>}/>
      <Route path="/migration-department/invitation/" component={Invitation}/>
      <Route path="/migration-department/international-department/" component={InternationalDepartment}/>
      <Route path="/about-us/visa/" component={Visa}/>
      <Route path="/bryansk/" component={Bryansk}/>
      <Route path="/our-vision/" component={Science}/>
      <Route path="/about-university/" component={AboutUniversity}/>

    </main>
  );
}

export default Main;
