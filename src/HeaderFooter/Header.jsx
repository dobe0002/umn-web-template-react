/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import WordMark from './icons/WordMark';
import MainNavLinks from './MainNavLinks';
import SearchIcon from './icons/SearchIcon';
import SkipLinks from './SkipLinks';
import AppBanner from './AppBanner';
// import styled from 'styled-components'; /* Not using styled-components so  styled-components isn't needed as a dependency */
// import PropTypes from 'prop-types';  /* Disabling this so prop-types isn't needed as a dependency */

const HeaderCSS = `
.umnHeaderWrapperDiv {
  position: relative;
  min-height: 68px;
  background-color: #7a0019;
  padding: 0 54px;
  padding-top: 15px;
  color: #fff;
  font-size: 14px;
  font-family: Helvetica, 'Helvetica Neue', Futura, Verdana, Geneva, sans-serif;
  box-sizing: border-box;
}

@media (max-width: 609px) {
  .umnHeaderWrapperDiv {
    min-height: 100px;
  }
  .umnHeaderSearchForm {
    display: block;
    right: auto;
    top: 64px;
  }
}
@media (max-width: 775px) {
  .umnHeaderSearchForm {
    right: 17px;
  }
}

.umnHeaderSearchForm {
  display: block;
  position: absolute;
  right: 54px;
  bottom: 8px;
}

.umnHeaderSearchInput {
  font-size: 14px;
  border: none;
  padding: 4px;
  width: 175px;
}
.umnHeaderSearchButton {
  background-color: #7a0019;
  border: none;
}
`;
const Header = (props) => {
  const { mainContentId, mainNavId, appTitle } = props;
  return (
    <header>
      <style
        dangerouslySetInnerHTML={{
          __html: HeaderCSS,
        }}
      />
      <div className='umnHeaderWrapperDiv'>
        <SkipLinks mainContentId={mainContentId} mainNavId={mainNavId} />
        <div>
          <a href='http://umn.edu/'>
            <WordMark />
          </a>
          <MainNavLinks color='#fff' />
        </div>
        <div id='umnHeaderSearchForm'>
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
