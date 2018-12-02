import { connect } from 'react-redux';
import { Workflow } from 'components/workflow';
import { emit_event, init_workflow } from 'modules/workflow';

const map_state_to_props = state => ({
  component: state.current_state.component
});
const map_dispatch_to_props = {
  emit_event,
  init_workflow
};

export default connect(
  map_state_to_props,
  map_dispatch_to_props
)(Workflow);
