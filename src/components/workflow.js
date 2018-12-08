import React from 'react';
import {PropTypes} from 'prop-types';
import {
  Paper,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  root:{
    width: '50%',
    margin: '0px auto 0px auto',
  },
  paper:{
    padding: theme.spacing.unit
  }
});

class Workflow extends React.Component{

  componentDidMount(){
    this.props.init_workflow(this.props.workflow);
  }

  render(){
    const {component, emit_event, validate_event, classes} = this.props;
    const Component = React.createElement(component, {
      emit: emit_event, 
      valid: validate_event});
    return(
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {Component}
        </Paper>
      </div>
    );
  }
}

Workflow.propTypes = {
  component: PropTypes.func,
  workflow: PropTypes.object,
  emit_event: PropTypes.func,
  init_workflow : PropTypes.func,
  classes: PropTypes.object,
  validate_event: PropTypes.func
};

export default withStyles(styles)(Workflow);
