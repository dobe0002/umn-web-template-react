/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AppHeader from './AppBanner.jsx';

const UmnHeader = props => {
  const { mainNavId, mainContentId } = props;
  return <Header mainNavId={mainNavId} mainContentId={mainContentId} />;
};
UmnHeader.propTypes = {
  mainNavId: PropTypes.string,
  mainContentId: PropTypes.string
};
UmnHeader.defaultProps = {
  mainNavId: undefined,
  mainContentId: undefined
};
/* *********************************************************************************************************** */
const AppBanner = props => {
  const { appTitle } = props;
  return <AppHeader appTitle={appTitle} />;
};
AppBanner.propTypes = {
  appTitle: PropTypes.string.isRequired
};

/* *********************************************************************************************************** */
const UmnFooter = props => {
  const { year } = props;
  return <Footer year={year} />;
};

UmnFooter.propTypes = {
  year: PropTypes.string
};
UmnFooter.defaultProps = {
  year: undefined
};

export { UmnHeader, UmnFooter, AppBanner };
