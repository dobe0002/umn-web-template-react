import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import AppBanner from '../src/AppBanner';
import Adapter from 'enzyme-adapter-react-16';
const { axe, toHaveNoViolations } = require('jest-axe');
expect.extend(toHaveNoViolations);
configure({ adapter: new Adapter() });

describe('Application Banner', () => {
  it('Accessibility check', async () => {
    const appBanner = mount(<AppBanner appTitle='My super duper app' />);
    const results = await axe(appBanner.getDOMNode());

    console.log('Axe violations', results.violations);

    expect(results).toHaveNoViolations();
  });
  it('AppBanner renders correctly', () => {
    const appBanner = shallow(<AppBanner appTitle='My super duper app' />);
    expect(appBanner).toMatchSnapshot();
  });
});
