import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Header from '../src/Header';
import Adapter from 'enzyme-adapter-react-16';
const { axe, toHaveNoViolations } = require('jest-axe');
expect.extend(toHaveNoViolations);

configure({ adapter: new Adapter() });

describe('UMN Header', () => {
  it('Accessibility check', async () => {
    const header = mount(<Header />);
    const results = await axe(header.getDOMNode());

    console.log('Axe violations', results.violations);

    expect(results).toHaveNoViolations();
  });
  it('Header renders correctly', () => {
    const header = shallow(<Header />);
    // console.log(header.html());
    expect(header).toMatchSnapshot();
  });
});
