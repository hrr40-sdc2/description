import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Availability from './../../src/components/Availability.jsx';

configure({ adapter: new Adapter() });

describe('Availability Component', () => {

  test('renders', () => {
    const wrapper = shallow(<Availability />);
    expect(wrapper.exists()).toBe(true);
  });

});
