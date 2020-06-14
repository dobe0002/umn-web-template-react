/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components'; /* Not using styled-components so  styled-components isn't needed as a dependency */
// import PropTypes from 'prop-types';  /* Disabling this so prop-types isn't needed as a dependency */
import MainNavLinks from './MainNavLinks';

const defaultYear = '2020';
const footerCSS = {
  fontFamily:
    'Helvetica, "Helvetica Neue", Futura, Verdana, Geneva, sans-serif',
  padding: '20px 54px',
  textAlign: 'center',
  fontSize: '0.8rem',
  color: '#000',
  borderTop: '1px solid #f0f0f0',
};
const linkCSS = {
  color: '#404d5b',
  textDecoration: 'underline',
};

const Footer = (props) => {
  const { year, label } = props;
  const displayYear = year === '' || year === undefined ? defaultYear : year;
  const displayLabel =
    label === '' || label === undefined
      ? 'University copyright information'
      : label;
  return (
    <footer role='contentinfo' style={footerCSS} aria-label={displayLabel}>
      <MainNavLinks mode='footer' />
      <p>
        &copy;
        <span className='year'>{displayYear}</span>
        <span> </span>
        Regents of the University of Minnesota. All rights reserved. The
        University of Minnesota is an equal opportunity educator and employer.
        <span> </span>
        <a href='http://privacy.umn.edu' style={linkCSS}>
          Privacy Statement
        </a>
      </p>
    </footer>
  );
};
// Footer.propTypes = {
//   year: PropTypes.string,
//   label: PropTypes.string
// };
// Footer.defaultProps = {
//   year: '2020',
//   label: 'University copyright information'
// };

export default Footer;
