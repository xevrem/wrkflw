import { connect } from 'react-redux';
import { Workflow } from '../components/workflow';
import { get_workflow } from '../modules/workflow';

const map_state_to_props = state => ({
  workflow: state.workflow_reducer
});
const map_dispatch_to_props = { get_workflow };

export default connect(
  map_state_to_props,
  map_dispatch_to_props
)(Workflow);
