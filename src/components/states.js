import React from 'react';
import {PropTypes} from 'prop-types';
import {
  Button,
  Typography,
  withStyles
} from '@material-ui/core';
import {EVENTS} from 'workflows/basic';

const styles = theme => ({
  root:{
    textAlign: 'center'
  },
});

export const FooBase = props => {
  const {classes,emit, valid} = props;
  return (
    <div className={classes.root}>
      <Typography variant="h3">Foo</Typography>
      <Button color="primary" onClick={()=>valid(EVENTS.BACK)}>back</Button>
      <Button color="primary" onClick={()=>emit(EVENTS.NEXT)}>next</Button>
    </div>
  );
};

FooBase.propTypes = {
  emit: PropTypes.func,
  classes: PropTypes.object,
  valid: PropTypes.func
};

export const Foo = withStyles(styles)(FooBase);

export const BarBase = props => {
  const {classes,emit} = props;
  return (
    <div className={classes.root}>
      <Typography variant="h3">Bar</Typography>
      <Button color="primary" onClick={()=>emit(EVENTS.BACK)}>back</Button>
      <Button color="primary" onClick={()=>emit(EVENTS.NEXT)}>next</Button>
    </div>
  );
};

BarBase.propTypes = {
  emit: PropTypes.func,
  classes: PropTypes.object
};

export const Bar = withStyles(styles)(BarBase);

export const FooBarBase = props => {
  const {classes, emit} = props;
  return (
    <div className={classes.root}>
      <Typography variant="h3">FooBar</Typography>
      <Button color="primary" onClick={()=>emit(EVENTS.BACK)}>back</Button>
      <Button color="primary" onClick={()=>emit(EVENTS.NEXT)}>next</Button>
    </div>
  );
};

FooBarBase.propTypes = {
  emit: PropTypes.func,
  classes: PropTypes.object
};

export const FooBar = withStyles(styles)(FooBarBase);
