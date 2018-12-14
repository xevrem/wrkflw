import {get,put} from './api';

export const WORKFLOW_INIT = 'workflow/INIT';
export const EVENT_EMIT = 'workflow/event/EMIT';
export const EVENT_ERROR = 'workflow/event/ERROR';


export const init_workflow = () => {
  return async dispatch => {
    let response = await dispatch(get({
      endpoint:'/workflows'
    }));

    if(response.error){
      console.error(response.payload.name, response.payload.message);
    }

    dispatch({
      type: WORKFLOW_INIT,
      payload: response.payload.workflow
    });
  };
};

export const emit_event = event => {
  return async dispatch => {

    let response = await dispatch(put({
      endpoint: '/workflows',
      body: JSON.stringify(event),
    }));

    if(response.error){
      console.error(response.payload.name, response.payload.message);
    }

    switch(response.payload.result){
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
