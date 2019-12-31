import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
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
  &:focus-within {
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
  }
`;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  display: inline-block;
  margin-right: 15px;
`;

const SkipLinks = props => {
  const { mainNavId, mainContentId } = props;
  if (props.mainNavId || props.mainContentId) {
    return (
      <Wrapper className='headerLinks'>
        <Ul>
          {mainNavId && (
            <Li>
              <a href={`#${mainNavId}`}>Main navigation</a>
            </Li>
          )}
          {mainContentId && (
            <Li>
              <a href={`#${mainContentId}`}>Main content</a>
            </Li>
          )}
        </Ul>
      </Wrapper>
    );
  }
  return '';
};

SkipLinks.propTypes = {
  mainNavId: PropTypes.string,
  mainContentId: PropTypes.string
};

export default SkipLinks;
