import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AppHeader from './AppBanner.jsx';

const UmnHeader = props => {
  return (
    <Header mainNavId={props.mainNavId} mainContentId={props.mainContentId} />
  );
};
UmnHeader.propTypes = {
  mainNavId: PropTypes.string,
  mainContentId: PropTypes.string
};
/* *********************************************************************************************************** */
const AppBanner = props => {
  return <AppHeader appTitle={props.appTitle} />;
};
AppBanner.propTypes = {
  appTitle: PropTypes.string.isRequired
};

/* *********************************************************************************************************** */
const UmnFooter = props => {
  return <Footer year={props.year} />;
};

UmnFooter.propTypes = {
  year: PropTypes.string
};

export { UmnHeader, UmnFooter, AppBanner };
