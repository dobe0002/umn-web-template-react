import React from 'react';
import { configure, shallow } from 'enzyme';
import WordMark from '../src/HeaderFooter/WordMark';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('WordMark', () => {
  it('Wordmark renders correctly without props', () => {
    const wordMark = shallow(<WordMark />);
    expect(wordMark).toMatchSnapshot();
  });
});
