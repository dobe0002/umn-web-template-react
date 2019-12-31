import React from 'react';
import { configure, shallow } from 'enzyme';
import SearchIcon from '../src/HeaderFooter/SearchIcon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchIcon', () => {
  it('SearchIcon renders correctly', () => {
    const searchIcon = shallow(<SearchIcon />);
    expect(searchIcon).toMatchSnapshot();
  });
});
