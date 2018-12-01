import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const AppRouter = () => (
  <Switch>
    <Route path='/' component={()=>(<h1>hello world</h1>)} />
  </Switch>
);
