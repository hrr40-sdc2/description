import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './../../src/components/Search.jsx';

configure({ adapter: new Adapter() });

describe('Search Component', () => {

  test('renders', () => {
    const wrapper = mount(<Search />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Search input should be functional', () => {
    const wrapper = mount(<Search />);
    wrapper.find('input').simulate('change', {
      target: { value: 'Dui' }
    });

    expect(wrapper.find('input').props().name).toEqual('overview-qry');
  });

});
