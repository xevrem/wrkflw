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
      console.error('emit_event() - validation exception:', exception);
    }

    switch(validation.payload.result){
      case 'success':
        return dispatch({
          type: EVENT_EMIT,
          payload: event
        });
      case 'nomatch':
      default:
        break;
    }
  };
};


export const validate_event = event => {
  return async dispatch => {
    const response = await dispatch({
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

    if(response.error){
      console.error('validate_event() - failed:', response);
      throw new Error('workflow module - validate_event() - failed:', response);
    }

    return response;
  };
};

export const initialState = {
  workflow: {},
  current_state: null
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
