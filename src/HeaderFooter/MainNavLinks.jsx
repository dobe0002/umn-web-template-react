/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
// import styled from 'styled-components'; /* Not using styled-components so  styled-components isn't needed as a dependency */
// import PropTypes from 'prop-types';  /* Disabling this so prop-types isn't needed as a dependency */

import LockIcon from './icons/LockIcon.jsx';

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

  const MainNavLinksCSS = `
      .umnHeaderMainNavLinksUl,
.umnHeaderMainNavLinksUl-header {
  margin: 0;
  list-style-type: none;
  display: none;
}

.umnHeaderMainNavLinksUl-header {
  position: absolute;
  right: 54px;
  top: 8px;
}

@media (max-width: 775px) {
  .umnHeaderMainNavLinksUl-header {
    display: none;
  }
  .umnHeaderMainNavLinksUl {
    display: block;
  }
}
@media (min-width: 776px) {
  .umnHeaderMainNavLinksUl-header {
    display: block;
  }
  .umnHeaderMainNavLinksUl {
    display: none;
  }
}

.umnHeaderMainNavLinksLi {
  margin: 0;
  display: inline-block;
  margin-left: 1.25rem;
}

.umnHeaderMainNavLinksA,
.umnHeaderMainNavLinksA-header {
  text-decoration: none;
  color: #404d5b;
}
.umnHeaderMainNavLinksA-header {
  color: #fff;
}
.umnHeaderMainNavLinksA:hover,
.umnHeaderMainNavLinksA:focus {
  text-decoration: underline;
  color: #404d5b;
}
.umnHeaderMainNavLinksA-header:hover,
.umnHeaderMainNavLinksA-header:focus {
  text-decoration: underline;
  color: #fff;
}

      `;

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: MainNavLinksCSS,
        }}
      />
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
    </div>
  );
};

export default MainNavLinks;

// MainNavLinks.propTypes = {
//   mode: PropTypes.string,
// };
// MainNavLinks.defaultProps = {
//   mode: 'header',
// };
