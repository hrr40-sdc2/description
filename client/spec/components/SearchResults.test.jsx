import React from 'react';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchResults from './../../src/components/SearchResults.jsx';

configure({ adapter: new Adapter() });

describe('SearchResults Component', () => {

  test('renders', () => {
    const wrapper = shallow(<SearchResults />);
    expect(wrapper.exists()).toBe(true);
  });

});
