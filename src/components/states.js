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
  btn:{
    marginLeft: theme.spacing.unit,
    '&:hover':{
      boxShadow: theme.shadows[2]
    }
  }
});

export const FooBase = props => {
  const {classes,emit} = props;
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>Foo</Typography>
      <Button className={classes.btn} color="primary" onClick={()=>emit(EVENTS.BACK)}>back</Button>
      <Button className={classes.btn} color="primary" onClick={()=>emit(EVENTS.NEXT)}>next</Button>
    </div>
  );
};

FooBase.propTypes = {
  emit: PropTypes.func,
  classes: PropTypes.object,
};

export const Foo = withStyles(styles)(FooBase);

export const BarBase = props => {
  const {classes,emit} = props;
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>Bar</Typography>
      <Button className={classes.btn} color="primary" onClick={()=>emit(EVENTS.BACK)}>back</Button>
      <Button className={classes.btn} color="primary" onClick={()=>emit(EVENTS.NEXT)}>next</Button>
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
      <Typography variant="h3" gutterBottom>FooBar</Typography>
      <Button className={classes.btn} color="primary" onClick={()=>emit(EVENTS.BACK)}>back</Button>
      <Button className={classes.btn} color="primary" onClick={()=>emit(EVENTS.NEXT)}>next</Button>
    </div>
  );
};

FooBarBase.propTypes = {
  emit: PropTypes.func,
  classes: PropTypes.object
};

export const FooBar = withStyles(styles)(FooBarBase);
