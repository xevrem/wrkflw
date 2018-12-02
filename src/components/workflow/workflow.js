import React from 'react';
import {PropTypes} from 'prop-types';

export class Workflow extends React.Component{

  componentDidMount(){
    this.props.init_workflow(this.props.workflow);
  }

  render(){
    const {Component, emit_event} = this.props;
    return(
      <div className='workflow-main'>
        {Component ? (<Component emit={emit_event}/>) : ''}
      </div>
    );
  }
}

Workflow.propTypes = {
  Component: PropTypes.oneOfType[
    PropTypes.func,
    PropTypes.element
  ],
  workflow: PropTypes.object,
  emit_event: PropTypes.func,
  init_workflow : PropTypes.func
};
