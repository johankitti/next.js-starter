import React from 'react';
import { shallow } from 'enzyme';
import { Component as MyApp } from './_app';

describe('<MyApp />', () => {
  it('should render properly', () => {
    const component = shallow(<MyApp />);
    expect(component.type()).toEqual('div');
  });
});
