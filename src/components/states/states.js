import React from 'react';
import {PropTypes} from 'prop-types';
import {EVENTS} from '../../workflows/basic';

export const Foo = props => (
  <div>
    <h3>Foo</h3>
    <button onClick={()=>props.emit(EVENTS.BACK)}>back</button>
    <button onClick={()=>props.emit(EVENTS.NEXT)}>next</button>
  </div>
);

Foo.propTypes = {
  emit: PropTypes.func
};

export const Bar = props => (
  <div>
    <h3>Bar</h3>
    <button onClick={()=>props.emit(EVENTS.BACK)}>back</button>
    <button onClick={()=>props.emit(EVENTS.NEXT)}>next</button>
  </div>
);

Bar.propTypes = {
  emit: PropTypes.func
};

export const FooBar = props => (
  <div>
    <h3>FooBar</h3>
    <button onClick={()=>props.emit(EVENTS.BACK)}>back</button>
    <button onClick={()=>props.emit(EVENTS.NEXT)}>next</button>
  </div>
);

FooBar.propTypes = {
  emit: PropTypes.func
};
