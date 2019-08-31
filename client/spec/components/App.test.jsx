import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './../../src/components/App.jsx';
import FloatingTopBar from './../../src/components/FloatingTopBar.jsx';

configure({ adapter: new Adapter() });

describe('App Component', () => {

  test('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  test('FloatingTopBar renders on scroll', () => {
    const wrapper = shallow(<FloatingTopBar />);
    expect(wrapper.exists()).toBe(true);
    // TODO: simulate scroll window till it reaches 373px
  });

});
