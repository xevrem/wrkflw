import React from 'react';
import {PropTypes} from 'prop-types';

export class Workflow extends React.Component{

  componentDidMount(){
    this.props.init_workflow(this.props.workflow);
  }

  render(){
    const {component, emit_event} = this.props;
    const Component = React.createElement(component, {emit:emit_event});
    return(
      <div className='workflow-main'>
        {Component}
      </div>
    );
  }
}

Workflow.propTypes = {
  component: PropTypes.oneOfType[
    PropTypes.func,
    PropTypes.element
  ],
  workflow: PropTypes.object,
  emit_event: PropTypes.func,
  init_workflow : PropTypes.func
};
