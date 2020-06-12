/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
// import PropTypes from 'prop-types';
import WordMark from './icons/WordMark';
import MainNavLinks from './MainNavLinks';
import SearchIcon from './icons/SearchIcon';
import SkipLinks from './SkipLinks';
import AppBanner from './AppBanner';
// import styled from 'styled-components'; /* Not using styled-components so  styled-components isn't needed as a dependency */
// import PropTypes from 'prop-types';  /* Disabling this so prop-types isn't needed as a dependency */

import './Header.css'; /* Need to make a separate CSS  because it uses media queries */

const Header = (props) => {
  const { mainContentId, mainNavId, appTitle } = props;
  return (
    <header>
      <div className='umnHeaderWrapperDiv'>
        <SkipLinks mainContentId={mainContentId} mainNavId={mainNavId} />
        <div>
          <a href='http://umn.edu/'>
            <WordMark />
          </a>
          <MainNavLinks color='#fff' />
        </div>
        <form
          className='umnHeaderSearchForm'
          id='search-form'
          name='gs'
          action='https://usearch.umn.edu/'
        >
          <input
            className='umnHeaderSearchInput'
            type='text'
            name='query'
            maxLength='256'
            placeholder='Search'
            aria-label='Search for'
          />

          <button
            className='umnHeaderSearchButton'
            type='submit'
            name='submit'
            value='search'
            aria-label='Submit Search'
          >
            <SearchIcon />
          </button>
        </form>
      </div>
      {appTitle !== undefined && appTitle !== '' && (
        <AppBanner appTitle={appTitle} />
      )}
    </header>
  );
};

// Header.propTypes = {
//   mainNavId: PropTypes.string,
//   mainContentId: PropTypes.string,
//   appTitle: PropTypes.string,
// };
// Header.defaultProps = {
//   mainNavId: undefined,
//   mainContentId: undefined,
//   appTitle: undefined,
// };

export default Header;
