import configureStore from 'redux-mock-store';
import reducer, {
  init_workflow,
  emit_event,
  EVENT_EMIT,
  WORKFLOW_INIT,
  initialState
} from 'modules/workflow';
import {EVENTS, WORKFLOW} from 'workflows/basic';
import cloneDeep from 'clone-deep';

const mockStore = configureStore();

describe('Workflow Module actions', () => {
  let store = null;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should be able to perform init_workflow action', () => {
    store.dispatch(init_workflow(WORKFLOW));

    let expected = [{
      type: WORKFLOW_INIT,
      payload: WORKFLOW
    }];

    expect(store.getActions()).toEqual(expected);
  });

  it('should be able to perform emit_event action', () => {
    store.dispatch(emit_event(EVENTS.NEXT));

    let expected = [{
      type: EVENT_EMIT,
      payload: EVENTS.NEXT
    }];

    expect(store.getActions()).toEqual(expected);
  });

});

describe('Workflow Module reducer', () => {

  it('should return initialState on null action', () => {
    let action = {
      type: null
    };

    let expected_result = {
      ...initialState,
    };

    expect(reducer(initialState, action)).toEqual(expected_result);
  });

  it('should handle WORKFLOW_INIT', () => {
    let action = {
      type:WORKFLOW_INIT,
      payload: WORKFLOW
    };

    let expected_result = {
      ...initialState,
      ...{ workflow: WORKFLOW },
      ...{ current_state: WORKFLOW.states[ WORKFLOW.initial_state ] }
    };

    expect(reducer(initialState, action)).toEqual(expected_result);
  });

  it('can change the current state', () => {
    let state = {
      ...initialState,
      ...{ workflow: WORKFLOW },
      ...{ current_state: WORKFLOW.states[ WORKFLOW.initial_state ] }
    };

    let action = emit_event(EVENTS.NEXT);
    let next_state_id = WORKFLOW.states[state.current_state.id].transitions[action.payload];
    let expected_result = {
      ...state,
      ...{current_state: WORKFLOW.states[ next_state_id ]}
    };

    expect(reducer(state, action)).toEqual(expected_result);
  });
});
