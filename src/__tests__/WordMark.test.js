/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WordMark from '../HeaderFooter/icons/WordMark';

configure({ adapter: new Adapter() });

describe('WordMark', () => {
  it('Wordmark renders correctly without props', () => {
    const wordMark = shallow(<WordMark />);
    expect(wordMark).toMatchSnapshot();
  });
});
