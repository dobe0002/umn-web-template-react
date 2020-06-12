import React from 'react';
import PropTypes from 'prop-types';

const LockIcon = (props) => {
  const { color } = props;
  return (
    <svg
      width='9px'
      height='12px'
      viewBox='0 0 9 12'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g fill={color} fillRule='nonzero'>
          <path d='M0,5.4 L0,12 L9,12 L9,5.4 M0.642857143,5.4 L0.642857143,3.6 C0.642857143,1.62 2.37857143,0 4.5,0 C6.62142857,0 8.35714286,1.62 8.35714286,3.6 L8.35714286,5.4 L7.07142857,5.4 L7.07142857,3.6 C7.07142857,2.28 5.91428571,1.2 4.5,1.2 C3.08571429,1.2 1.92857143,2.28 1.92857143,3.6 L1.92857143,5.4' />
        </g>
      </g>
    </svg>
  );
};

export default LockIcon;

LockIcon.propTypes = {
  color: PropTypes.string,
};
LockIcon.defaultProps = {
  color: '#fff',
};
