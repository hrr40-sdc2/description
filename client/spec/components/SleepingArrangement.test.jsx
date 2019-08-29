import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SleepingArrangement from './../../src/components/SleepingArrangement.jsx';

configure({ adapter: new Adapter() });

describe('SleepingArrangement Component', () => {

  test('renders', () => {
    const wrapper = shallow(<SleepingArrangement />);
    expect(wrapper.exists()).toBe(true);
  });

});
