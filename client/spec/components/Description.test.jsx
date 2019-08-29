import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Description from './../../src/components/Description.jsx';

configure({ adapter: new Adapter() });

describe('Description Component', () => {

  test('renders', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.exists()).toBe(true);
  });

});
