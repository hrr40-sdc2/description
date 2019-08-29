import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from './../../src/components/Menu.jsx';

configure({ adapter: new Adapter() });

describe('Menu Component', () => {

  test('renders', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.exists()).toBe(true);
  });

});
