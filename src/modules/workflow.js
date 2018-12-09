import React from 'react';
import {RSAA} from 'redux-api-middleware';

export const WORKFLOW_INIT = 'workflow/INIT';
export const EVENT_EMIT = 'workflow/event/EMIT';
export const EVENT_ERROR = 'workflow/event/ERROR';
export const EVENT_VALIDATE_REQUEST = 'workflow/event/validate/REQUEST';
export const EVENT_VALIDATE_SUCCESS = 'workflow/event/validate/SUCCESS';
export const EVENT_VALIDATE_FAILED = 'workflow/event/validate/FAILED';

export const init_workflow = workflow => ({
  type: WORKFLOW_INIT,
  payload: workflow
});

export const emit_event = event => {
  return async dispatch => {
    let validation = null;
    try{
      validation = await dispatch(validate_event(event));
    }catch(exception){
      console.log('emit_event() - validation exception:', exception);
    }

    //TODO: interrogate foo
    console.log('emit_event() - validation:', validation);

    return {
      type: EVENT_EMIT,
      payload: event
    };
  };
};


export const validate_event = event => {
  return async dispatch => {
    const actionResponse = await dispatch({
      [RSAA]: {
        endpoint: 'http://localhost:8000/workflows',
        method: 'PUT',
        body: JSON.stringify(event),
        headers:{
          'Content-Type': 'application/json',
        },
        types:[
          EVENT_VALIDATE_REQUEST,
          EVENT_VALIDATE_SUCCESS,
          EVENT_VALIDATE_FAILED
        ]
      }
    });

    if(actionResponse.error){
      console.log('validate_event() - failed:', actionResponse);
      throw new Error('workflow module - validate_event() - failed:', actionResponse);
    }

    if(actionResponse.json().then(data => {
      console.log('actionResponse - json:', data);
    }));

    return actionResponse;
  };
};

const null_state = () => (<div>null-state</div>);

export const initialState = {
  workflow: {},
  current_state:{
    component: null_state, transitions:[]}
};

const reducer = (state = initialState, action) => {
  // console.log('WM:', state, action);
  switch(action.type){
    case WORKFLOW_INIT:{
      let current_state = action.payload.initial_state;
      let workflow = action.payload;
      return {
        ...state,
        workflow: {...workflow},
        current_state: {...action.payload.states[current_state]}
      };
    }
    case EVENT_EMIT:{
      let next_state_id = state.current_state.transitions[action.payload];
      let next_state = state.workflow.states[next_state_id];
      return {
        ...state,
        current_state: {...next_state}
      };
    }
    case EVENT_ERROR:
      return {...state};
    default:
      break;
  }
  return {...state};
};

export default reducer;
