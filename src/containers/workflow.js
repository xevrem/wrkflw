import { connect } from 'react-redux';
import Workflow from 'components/workflow';
import { emit_event, init_workflow, validate_event } from 'modules/workflow';

const map_state_to_props = state => ({
  component: state.workflowReducer.current_state.component
});
const map_dispatch_to_props = dispatch => ({
  emit_event: (event)=>dispatch(emit_event(event)),
  init_workflow: (workflow)=>dispatch(init_workflow(workflow)),
  validate_event: (event)=>dispatch(validate_event(event))
});

export default connect(
  map_state_to_props,
  map_dispatch_to_props
)(Workflow);
