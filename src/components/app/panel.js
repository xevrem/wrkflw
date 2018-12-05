import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Workflow from 'containers/workflow';
import {WORKFLOW} from 'workflows/basic';

export const AppPanel = () => (
  <Switch>
    <Route path='/' component={()=>(<Workflow workflow={WORKFLOW}/>)} />
  </Switch>
);
