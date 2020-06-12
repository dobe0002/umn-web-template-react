/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UmnHeader, UmnFooter } from '../HeaderFooter/index';

const { axe, toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);

configure({ adapter: new Adapter() });

describe('Index - entry point', () => {
  it('Accessibility check', async () => {
    const umnTemplate = mount(
      <div>
        <UmnHeader />
        <UmnFooter />
      </div>
    );
    const results = await axe(umnTemplate.getDOMNode());

    // console.log('Axe violations', results.violations);
    expect(results).toHaveNoViolations();
  });
  it('All items renders correctly', () => {
    const umnTemplate = mount(
      <div>
        <UmnHeader />
        <UmnFooter />
      </div>
    );
    // console.log(header.html());
    expect(umnTemplate).toMatchSnapshot();
  });
});
