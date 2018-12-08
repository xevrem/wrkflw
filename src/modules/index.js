import {combineReducers} from 'redux';
import reducer from './workflow';


export default combineReducers({
  workflowReducer: reducer
});
