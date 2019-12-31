import React from 'react';
import MainNavLinks from './HeaderFooter/MainNavLinks.jsx';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  return (
    <FooterWrapper role='contentinfo'>
      <MainNavLinks mode='footer' />
      <p>
        &copy; <span className='year'>{props.year}</span> Regents of the
        University of Minnesota. All rights reserved. The University of
        Minnesota is an equal opportunity educator and employer.{' '}
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
