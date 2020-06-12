/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LockIcon from '../HeaderFooter/icons/LockIcon';

configure({ adapter: new Adapter() });

describe('LockIcon', () => {
  it('LockIcon renders correctly', () => {
    const lockIcon = shallow(<LockIcon />);
    expect(lockIcon).toMatchSnapshot();
  });
});
