import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Navbar from './Navbar';
import User from './user/UserEvent';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/dashboard' component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
