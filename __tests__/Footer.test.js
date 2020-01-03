/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../src/Footer';

const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);
configure({ adapter: new Adapter() });

describe('UMN Footer', () => {
  it('Accessibility check', async () => {
    const footer = mount(<Footer />);
    const results = await axe(footer.getDOMNode());

    // console.log('Axe violations', results.violations);

    expect(results).toHaveNoViolations();
  });
  it('Footer renders correctly', () => {
    const footer = shallow(<Footer year='1234' />);
    expect(footer).toMatchSnapshot();
  });
  it('A default year displayed when year attribute is not passed', () => {
    const footer = shallow(<Footer />);
    const year = footer
      .find('.year')
      .text()
      .trim();
    expect(year).not.toEqual('');
  });
});
