/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AppBanner from './AppBanner';

const UmnHeader = (props) => {
  const { mainNavId, mainContentId, appTitle } = props;
  return (
    <Header
      mainNavId={mainNavId}
      mainContentId={mainContentId}
      appTitle={appTitle}
    />
  );
};
// UmnHeader.propTypes = {
//   mainNavId: PropTypes.string,
//   mainContentId: PropTypes.string,
//   appTitle: PropTypes.string,
// };
// UmnHeader.defaultProps = {
//   mainNavId: undefined,
//   mainContentId: undefined,
//   appTitle: undefined,
// };

/* *********************************************************************************************************** */
const UmnFooter = (props) => {
  const { year } = props;
  return <Footer year={year} />;
};

// UmnFooter.propTypes = {
//   year: PropTypes.string,
// };
// UmnFooter.defaultProps = {
//   year: undefined,
// };

/* *********************************************************************************************************** */
const UmnAppBanner = (props) => {
  const { appTitle } = props;
  return <AppBanner appTitle={appTitle} />;
};

// AppBanner.propTypes = {
//   appTitle: PropTypes.string.isRequired,
// };

export { UmnHeader, UmnFooter, UmnAppBanner };
