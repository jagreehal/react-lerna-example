import React from 'react';
import { mount } from 'enzyme';

import Component from '.';

describe('Component', function() {
  it('renders without props', function() {
    const wrapper = mount(<Component />);
    expect(wrapper).toBeDefined();
  });
});
