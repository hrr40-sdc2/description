import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Amenities from './../../src/components/Amenities.jsx';

configure({ adapter: new Adapter() });

describe('Amenities Component', () => {

  test('renders', () => {
    const wrapper = shallow(<Amenities />);
    expect(wrapper.exists()).toBe(true);
  });

});
