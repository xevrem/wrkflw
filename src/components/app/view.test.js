import React from 'react';
import {shallow} from 'enzyme';
import {AppView} from 'components/app/view';

describe('AppView', () => {
  it('should render without crashing', () => {
    shallow(<AppView/>);
  });

  it('should have an AppRouter',()=>{
    const wrapper = shallow(<AppView/>);
    expect(wrapper.find('AppRouter').length).toEqual(1);
  });
});
