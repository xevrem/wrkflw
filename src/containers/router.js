import {getWorkflow} from '../modules/workflow';
import {connect} from 'react-redux';
import {AppRouter} from '../components/router';

const mapDispatchToProps ={getWorkflow};

export default connect(
  null,
  mapDispatchToProps
)(AppRouter);
