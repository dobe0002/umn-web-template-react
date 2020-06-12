/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppBanner from '../HeaderFooter/AppBanner';

const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);
configure({ adapter: new Adapter() });

describe('Application Banner', () => {
  it('Accessibility check', async () => {
    const appBanner = mount(<AppBanner appTitle='My super duper app' />);
    const results = await axe(appBanner.getDOMNode());

    // console.log('Axe violations', results.violations);

    expect(results).toHaveNoViolations();
  });
  it('AppBanner renders correctly', () => {
    const appBanner = shallow(<AppBanner appTitle='My super duper app' />);
    expect(appBanner).toMatchSnapshot();
  });
});
