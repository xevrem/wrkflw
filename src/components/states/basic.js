import React from 'react';
import {PropTypes} from 'prop-types';
import {EVENTS} from 'workflows/basic';
import {Button, Typography} from '@material-ui/core';

export const Foo = props => (
  <div>
    <Typography variant="h3" gutterBottom>Foo</Typography>
    <Button onClick={()=>props.emit(EVENTS.BACK)}>back</Button>
    <Button onClick={()=>props.emit(EVENTS.NEXT)}>next</Button>
  </div>
);

Foo.propTypes = {
  emit: PropTypes.func
};

export const Bar = props => (
  <div>
    <Typography variant="h3" gutterBottom>Bar</Typography>
    <Button onClick={()=>props.emit(EVENTS.BACK)}>back</Button>
    <Button onClick={()=>props.emit(EVENTS.NEXT)}>next</Button>
  </div>
);

Bar.propTypes = {
  emit: PropTypes.func
};

export const FooBar = props => (
  <div>
    <Typography variant="h3" gutterBottom>FooBar</Typography>
    <Button onClick={()=>props.emit(EVENTS.BACK)}>back</Button>
    <Button onClick={()=>props.emit(EVENTS.NEXT)}>next</Button>
  </div>
);

FooBar.propTypes = {
  emit: PropTypes.func
};
