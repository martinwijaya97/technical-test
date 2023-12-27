import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from '../views/Home';

const Routers = () => {
  return (
    <Switch>
      <Redirect exact from='/' to='/home' />
      <Route path='/home' render={() => <Home />} />
    </Switch>
  );
};
export default Routers;
