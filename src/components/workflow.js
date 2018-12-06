import React from 'react';
import {PropTypes} from 'prop-types';
import {Paper, withStyles} from '@material-ui/core';

const styles = theme => ({
  root:{
    margin: '15px auto 15px auto',
    width: '50%'
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
    const {component, emit_event, classes} = this.props;
    const Component = React.createElement(component, {emit:emit_event});
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
  classes: PropTypes.object
};

export default withStyles(styles)(Workflow);
