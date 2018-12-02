import React from 'react';
export const WORKFLOW_INIT = 'workflow/INIT';
export const EVENT_EMIT = 'event/EMIT';

export const init_workflow = workflow => ({
  type: WORKFLOW_INIT,
  payload: workflow
});

export const emit_event = event => ({
  type: EVENT_EMIT,
  payload: event
});

const null_state = () => (<div>null-state</div>);

const initialState = {
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
    default:
      break;
  }
  return {...state};
};

export default reducer;
