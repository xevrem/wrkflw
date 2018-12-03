import React from 'react';
import {shallow} from 'enzyme';
import {Foo, Bar, FooBar} from 'components/states';

describe('Foo', () => {
  it('should render without crashing', () => {
    shallow(<Foo/>);
  });
});

describe('Bar', () => {
  it('should render without crashing', () => {
    shallow(<Bar/>);
  });
});

describe('FooBar', () => {
  it('should render without crashing', () => {
    shallow(<FooBar/>);
  });
});
