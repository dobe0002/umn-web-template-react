import React from 'react';
import { configure, shallow } from 'enzyme';
import LockIcon from '../src/HeaderFooter/LockIcon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('LockIcon', () => {
  it('LockIcon renders correctly', () => {
    const lockIcon = shallow(<LockIcon />);
    expect(lockIcon).toMatchSnapshot();
  });
});
