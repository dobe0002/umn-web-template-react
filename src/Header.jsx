/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WordMark from './HeaderFooter/WordMark.jsx';
import MainNavLinks from './HeaderFooter/MainNavLinks.jsx';
import SearchIcon from './HeaderFooter/SearchIcon.jsx';
import SkipLinks from './HeaderFooter/SkipLinks.jsx';

/** ** Header  **** */

const HeaderWrapper = styled.header`
  position: relative;
  min-height: ${64 - 13}px;
  /*min-width: 660px;*/
  background-color: #7a0019;
  padding: 0 54px;
  padding-top: 13px;
  color: #fff;
  font-size: 14px;
  font-family: Helvetica, 'Helvetica Neue', Futura, Verdana, Geneva, sans-serif;
  @media (max-width: 609px) {
    min-height: 90px;
  }
`;
/** ** Search  **** */
const Form = styled.form`
  display: block;
  position: absolute;
  right: 54px;
  bottom: 8px;
  @media (max-width: 775px) {
    right: 17px;
  }
  @media (max-width: 609px) {
    display: block;
    right: auto;
    top: 64px;
  }
`;

const Input = styled.input`
  font-size: 14px;
  border: none;
  padding: 4px;
  width: 175px;
  @media (max-width: 674px) {
    width: 151px;
  }
`;
const Button = styled.button`
  background-color: #7a0019;
  border: none;
`;

const Header = props => {
  const { mainContentId, mainNavId } = props;
  return (
    <HeaderWrapper>
      <SkipLinks mainContentId={mainContentId} mainNavId={mainNavId} />
      <div>
        <a href='http://umn.edu/'>
          <WordMark />
        </a>
        <MainNavLinks color='#fff' />
      </div>
      <Form id='search-form' name='gs' action='https://usearch.umn.edu/'>
        <Input
          type='text'
          name='query'
          maxLength='256'
          placeholder='Search'
          aria-label='Search for'
        />

        <Button
          type='submit'
          name='submit'
          value='search'
          aria-label='Submit Search'
        >
          <SearchIcon />
        </Button>
      </Form>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  mainNavId: PropTypes.string,
  mainContentId: PropTypes.string
};
Header.defaultProps = {
  mainNavId: undefined,
  mainContentId: undefined
};

export default Header;
