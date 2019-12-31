import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderWrapper = styled.div`
  padding-left: 10px;
  padding-top: 8px;
  min-height: ${60 - 8}px;
  border-bottom: #f93 2px solid;
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  font-size: 35px;
  font-weight: bold;
  color: #5b0013;
  margin-top: 0;
  margin-bottom: 0;
  background: #f0e9d1; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f0e9d1 0%,
    #ffde7c 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #f0e9d1 0%,
    #ffde7c 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #f0e9d1 0%,
    #ffde7c 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
`;
const AppBanner = props => {
  const { appTitle } = props;
  return <HeaderWrapper role='contentinfo'>{appTitle}</HeaderWrapper>;
};
AppBanner.propTypes = {
  appTitle: PropTypes.string.isRequired
};

export default AppBanner;
