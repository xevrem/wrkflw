import React from 'react';
import {shallow} from 'enzyme';
import {AppRouter} from 'components/app/router';

describe('AppRouter', () => {
  it('can render without crashing', () => {
    shallow(<AppRouter/>);
  });

  it('should give Route a component', ()=>{
    const wrapper = shallow(<AppRouter/>);
    expect(wrapper.find('Route').props().component).toBeDefined();
  });

});
