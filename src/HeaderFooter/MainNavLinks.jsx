/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
// import styled from 'styled-components'; /* Not using styled-components so  styled-components isn't needed as a dependency */
// import PropTypes from 'prop-types';  /* Disabling this so prop-types isn't needed as a dependency */

import LockIcon from './icons/LockIcon.jsx';

import './MainNavLinks.css'; /* Need to make a separate CSS  because it uses media queries */

const MainNavLinks = (props) => {
  const { mode } = props;

  const displayMode = mode === undefined ? 'header' : mode;
  const ulClassName =
    displayMode === 'header'
      ? 'umnHeaderMainNavLinksUl-header'
      : 'umnHeaderMainNavLinksUl';

  const aClassName =
    displayMode === 'header'
      ? 'umnHeaderMainNavLinksA-header'
      : 'umnHeaderMainNavLinksA';
  return (
    <ul className={ulClassName}>
      <li className='umnHeaderMainNavLinksLi'>
        <a href='http://onestop.umn.edu/' className={aClassName}>
          One Stop
        </a>
      </li>
      <li className='umnHeaderMainNavLinksLi'>
        <a href='https://www.myu.umn.edu/' className={aClassName}>
          <span>MyU </span>
          <LockIcon color={displayMode === 'header' ? '#fff' : '#404d5b'} />
        </a>
      </li>
    </ul>
  );
};

export default MainNavLinks;

// MainNavLinks.propTypes = {
//   mode: PropTypes.string,
// };
// MainNavLinks.defaultProps = {
//   mode: 'header',
// };
