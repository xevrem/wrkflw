import React from 'react';
import {PropTypes} from 'prop-types';
import {EVENTS} from 'workflows/advanced';

export const Foo = props => (
  <div>
    <h3>Foo advanced</h3>
    <button onClick={()=>props.emit(EVENTS.BACK)}>back</button>
    <button onClick={()=>props.emit(EVENTS.BASIC)}>basic</button>
    <button onClick={()=>props.emit(EVENTS.NEXT)}>next</button>
  </div>
);

Foo.propTypes = {
  emit: PropTypes.func
};

export const Bar = props => (
  <div>
    <h3>Bar advanced</h3>
    <button onClick={()=>props.emit(EVENTS.BACK)}>back</button>
    <button onClick={()=>props.emit(EVENTS.BASIC)}>basic</button>
    <button onClick={()=>props.emit(EVENTS.NEXT)}>next</button>
  </div>
);

Bar.propTypes = {
  emit: PropTypes.func
};

export const FooBar = props => (
  <div>
    <h3>FooBar advanced</h3>
    <button onClick={()=>props.emit(EVENTS.BACK)}>back</button>
    <button onClick={()=>props.emit(EVENTS.BASIC)}>basic</button>
    <button onClick={()=>props.emit(EVENTS.NEXT)}>next</button>
  </div>
);

FooBar.propTypes = {
  emit: PropTypes.func
};
