import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Workflow from 'containers/workflow';
import {WORKFLOW, COMPONENT_MAPPING} from 'workflows/basic';

export const AppPanel = () => (
  <Switch>
    <Route path='/' component={()=>(
      <Workflow 
        workflow={WORKFLOW}
        mapping={COMPONENT_MAPPING}
      />
    )} />
  </Switch>
);
