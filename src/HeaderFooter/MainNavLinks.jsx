import React from 'react';
import LockIcon from './LockIcon.jsx';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainNavLinks = props => {
  const List = styled.ul`
  ${props.mode === 'header' && 'position: absolute;'}
  ${props.mode === 'header' && 'right: 54px;'}
  ${props.mode === 'header' && 'top: 8px;'}
    margin: 0;
    list-style-type: none;
    display: none;
    @media (max-width: 775px) {
      display: ${props.mode === 'header' ? 'none' : 'block'};
    }
    @media (min-width: 776px) {
      display: ${props.mode === 'header' ? 'block' : 'none'};
    }
  `;
  const ListItem = styled.li`
    margin: 0;
    display: inline-block;
    margin-left: 1.25rem;
  `;

  const Link = styled.a`
    text-decoration: none;
    color: ${props.mode === 'header' ? '#fff' : '#404d5b'};
    &:hover {
      text-decoration: underline;
    }
    &:focus {
      text-decoration: underline;
    }
  `;
  return (
    <List>
      <ListItem>
        <Link href='http://onestop.umn.edu/'>One Stop</Link>
      </ListItem>
      <ListItem>
        <Link href='https://www.myu.umn.edu/'>
          MyU <LockIcon color={props.mode === 'header' ? '#fff' : '#404d5b'} />
        </Link>
      </ListItem>
    </List>
  );
};

export default MainNavLinks;

MainNavLinks.propTypes = {
  mode: PropTypes.string
};
MainNavLinks.defaultProps = {
  mode: 'header'
};
