import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Banner from './../../src/components/Banner.jsx';

configure({ adapter: new Adapter() });

describe('Banner Component', () => {

  test('renders', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper.exists()).toBe(true);
  });

});
