import React from 'react';
import {shallow, mount} from 'enzyme';
import {Workflow} from 'components/workflow';
import {Foo} from 'components/states';

describe('Workflow', () => {
  it('should render without crashing', () => {
    shallow(<Workflow init_workflow={jest.fn()} component={Foo}/>);
  });

  it('should contain a child', () => {
    const wrapper = mount(<Workflow init_workflow={jest.fn()} component={Foo}/>);

    expect(wrapper.find(Foo)).toBeDefined();
  });
});
