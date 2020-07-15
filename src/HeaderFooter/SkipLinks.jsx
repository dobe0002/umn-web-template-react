/* eslint-disable react/no-danger */
import React from 'react';
// import styled from 'styled-components'; /* Not using styled-components so  styled-components isn't needed as a dependency */
// import PropTypes from 'prop-types';  /* Disabling this so prop-types isn't needed as a dependency */

const SkipLinks = (props) => {
  const { mainNavId, mainContentId } = props;
  const SkipLinksCSS = `
  .umnHeaderSkipLinksWrapperDiv {
    position: absolute;
    top: 0;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    padding: 15px;
    background: #fff;
    border-radius: 0 0 5px 5px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .umnHeaderSkipLinksWrapperDiv:focus-within {
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
  }
  
  .umnHeaderSkipLinksUl {
    margin: 0;
    padding: 0;
  }
  
  .umnHeaderSkipLinksLi {
    display: inline-block;
    margin-right: 15px;
  }
  
  `;
  if (props.mainNavId || props.mainContentId) {
    return (
      <div
        className='headerLinks umnHeaderSkipLinksWrapperDiv'
        id=' umnHeaderSkipLinks'
      >
        <style
          dangerouslySetInnerHTML={{
            __html: SkipLinksCSS,
          }}
        />
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
