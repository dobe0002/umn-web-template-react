/* eslint-disable react/prop-types */
/* eslint-disable no-dupe-keys */
import React from 'react';
// import styled from 'styled-components'; /* Not using styled-components so  styled-components isn't needed as a dependency */
// import PropTypes from 'prop-types';  /* Disabling this so prop-types isn't needed as a dependency */

const bannerCSS = {
  paddingLeft: '10px',
  paddingTop: '8px',
  minHeight: '52px',
  borderBottom: ' #f93 2px solid',
  fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',
  fontSize: '35px',
  fontWeight: 'bold',
  color: '#5b0013',
  marginTop: 0,
  marginBottom: 0,
  background: '#f0e9d1' /* Old browsers */,
  background:
    '-moz-linear-gradient( top, #f0e9d1 0%, #ffde7c 100%)' /* FF3.6-15 */,
  background:
    '-webkit-linear-gradient( top, #f0e9d1 0%, #ffde7c 100%)' /* Chrome10-25,Safari5.1-6 */,
  background:
    'linear-gradient( to bottom, #f0e9d1 0%,#ffde7c 100%)' /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */,
};
const AppBanner = (props) => {
  const { appTitle } = props;
  return (
    <div role='contentinfo' style={bannerCSS}>
      {appTitle}
    </div>
  );
};
// AppBanner.propTypes = {
//   appTitle: PropTypes.string.isRequired,
// };

export default AppBanner;
