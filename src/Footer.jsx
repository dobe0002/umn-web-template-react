/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MainNavLinks from './HeaderFooter/MainNavLinks.jsx';

const FooterWrapper = styled.footer`
  font-family: Helvetica, 'Helvetica Neue', Futura, Verdana, Geneva, sans-serif;
  padding: 20px 54px;
  text-align: center;
  font-size: 0.8rem;
  color: #000;
  border-top: 1px solid #f0f0f0;
`;

const Link = styled.a`
  color: #404d5b;
  text-decoration: underline;
`;
const Footer = props => {
  const { year } = props;
  return (
    <FooterWrapper role='contentinfo'>
      <MainNavLinks mode='footer' />
      <p>
        &copy;
        <span className='year'>{year}</span>
        <span> </span>
        Regents of the University of Minnesota. All rights reserved. The
        University of Minnesota is an equal opportunity educator and employer.
        <span> </span>
        <Link href='http://privacy.umn.edu'>Privacy Statement</Link>
      </p>
    </FooterWrapper>
  );
};
Footer.propTypes = {
  year: PropTypes.string
};
Footer.defaultProps = {
  year: '2019'
};

export default Footer;
