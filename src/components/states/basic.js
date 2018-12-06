import React from 'react';
import {PropTypes} from 'prop-types';
import {EVENTS} from 'workflows/basic';
import {Button, Typography, withStyles} from '@material-ui/core';

const styles = theme => ({
  root:{
    margin: '0px auto 0px auto',
    textAlign: 'center'
  },
  h3:{
    margin: theme.spacing.unit
  },
  btn:{
    margin: theme.spacing.unit,
  },
});

const FooFn = props => {
  const {classes, emit} = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.h3} variant="h3" gutterBottom>Foo</Typography>
      <Button className={classes.btn} color="primary" onClick={()=>emit(EVENTS.BACK)}>back</Button>
      <Button className={classes.btn} color="primary" onClick={()=>emit(EVENTS.NEXT)}>next</Button>
    </div>
  );
};

FooFn.propTypes = {
  emit: PropTypes.func,
  classes: PropTypes.object
};

export const Foo = withStyles(styles)(FooFn);

const BarFn = props => {
  const {classes, emit} = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.h3} variant="h3" gutterBottom>Bar</Typography>
      <Button className={classes.btn} color="primary" onClick={()=>emit(EVENTS.BACK)}>back</Button>
      <Button className={classes.btn} color="primary" onClick={()=>emit(EVENTS.NEXT)}>next</Button>
    </div>
  );
};

BarFn.propTypes = {
  emit: PropTypes.func,
  classes: PropTypes.object
};

export const Bar = withStyles(styles)(BarFn);

const FooBarFn = props => {
  const {classes, emit} = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.h3} variant="h3" gutterBottom>FooBar</Typography>
      <Button className={classes.btn} color="primary" onClick={()=>emit(EVENTS.BACK)}>back</Button>
      <Button className={classes.btn} color="primary" onClick={()=>emit(EVENTS.NEXT)}>next</Button>
    </div>
  );
};

FooBarFn.propTypes = {
  emit: PropTypes.func,
  classes: PropTypes.object
};

export const FooBar = withStyles(styles)(FooBarFn);
