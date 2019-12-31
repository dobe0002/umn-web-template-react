/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchIcon from '../src/HeaderFooter/SearchIcon';

configure({ adapter: new Adapter() });

describe('SearchIcon', () => {
  it('SearchIcon renders correctly', () => {
    const searchIcon = shallow(<SearchIcon />);
    expect(searchIcon).toMatchSnapshot();
  });
});
