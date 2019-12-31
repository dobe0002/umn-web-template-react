import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import SkipLinks from '../src/HeaderFooter/SkipLinks';
import Adapter from 'enzyme-adapter-react-16';
const { axe, toHaveNoViolations } = require('jest-axe');
expect.extend(toHaveNoViolations);
configure({ adapter: new Adapter() });

describe('Skip Links', () => {
  it('Accessibility check', async () => {
    const temp = (
      <div>
        <SkipLinks mainNavId='foo' mainContentId='bar' />
        <a id='foo' />
        <a id='bar' />
      </div>
    );
    const skipLinks = mount(temp);
    const results = await axe(skipLinks.getDOMNode());

    console.log('Axe violations', results.violations);

    expect(results).toHaveNoViolations();
  });
  it('Nothing is displayed when no props are passed', () => {
    const skipLinks = mount(<SkipLinks />);
    expect(skipLinks.html().trim()).toEqual('');
  });
  it('Only main nav skip links is it is only prop passed', () => {
    const skipLinks = shallow(<SkipLinks mainNavId='foo' />);
    // console.log(skipLinks.html());
    expect(skipLinks).toMatchSnapshot();
  });
  it('Only main content skip links is it is only prop passed', () => {
    const skipLinks = shallow(<SkipLinks mainContentId='bar' />);
    // console.log(skipLinks.html());
    expect(skipLinks).toMatchSnapshot();
  });
  it('Both skip links are displayed when passed', () => {
    const skipLinks = shallow(
      <SkipLinks mainNavId='foo' mainContentId='bar' />
    );
    // console.log(skipLinks.html());
    expect(skipLinks).toMatchSnapshot();
  });
});
