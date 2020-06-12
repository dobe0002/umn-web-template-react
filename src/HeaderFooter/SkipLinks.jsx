import React from 'react';
// import styled from 'styled-components'; /* Not using styled-components so  styled-components isn't needed as a dependency */
// import PropTypes from 'prop-types';  /* Disabling this so prop-types isn't needed as a dependency */

import './SkipLinks.css'; /* Need to make a separate CSS  because it uses focus pseudo class */

const SkipLinks = (props) => {
  const { mainNavId, mainContentId } = props;
  if (props.mainNavId || props.mainContentId) {
    return (
      <div className='headerLinks umnHeaderSkipLinksWrapperDiv'>
        <ul className='umnHeaderSkipLinksUl'>
          {mainNavId && (
            <li className='umnHeaderSkipLinksLi'>
              <a href={`#${mainNavId}`}>Main navigation</a>
            </li>
          )}
          {mainContentId && (
            <li className='umnHeaderSkipLinksLi'>
              <a href={`#${mainContentId}`}>Main content</a>
            </li>
          )}
        </ul>
      </div>
    );
  }
  return '';
};

// SkipLinks.propTypes = {
//   mainNavId: PropTypes.string,
//   mainContentId: PropTypes.string,
// };

export default SkipLinks;
