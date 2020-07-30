/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

const WordMark = (props) => {
  const { width, title } = props;
  const displayTitle =
    title === undefined || title === '' ? 'UofM Home page' : title;
  const displayWidth = width === undefined || width === '' ? '288px' : width;

  const svgStyle = {
    width: displayWidth,
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 285.64 37.97'
      style={svgStyle}
      aria-label={displayTitle}
    >
      <defs>
        <style>
          .cls-1
          {'{fill:#ffcd34;}'}
          .cls-2
          {'{fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:0.2px;}'}
          {
            '@media print{.cls-1{fill:#333333} .cls-2{fill:#333333;stroke:#333333}}'
          }
        </style>
      </defs>
      <title>{title}</title>
      <path
        className='cls-1'
        d='M54.6,29.13l-10.21-17H47.2V3.31h-17v8.85H33l-3.9,6.48-3.9-6.48H28V3.31H11v8.85h2.81l-10.21,17H0V38H17.33V29.13H14.22l5.32-8.84,2.06,3.42h-2v8.85h19V23.71h-2l2.07-3.42L44,29.13H40.91V38H58.24V29.13Z'
      />
      <path
        className='cls-2'
        d='M276.19,3.53l.08,2.72h-.36c-.33-1.74-.75-2-3.05-2v8.12a1.21,1.21,0,0,0,1.37,1.37v.39H270v-.39a1.21,1.21,0,0,0,1.38-1.37V4.22c-2.3,0-2.72.29-3.05,2H268L268,3.53Z'
      />
      <path
        className='cls-2'
        d='M262.08,3.33c-2.61,0-4.72,2.14-4.72,5.47s2.11,5.47,4.72,5.47,4.72-2.14,4.72-5.47S264.68,3.33,262.08,3.33Zm0,10.32c-2,0-3.11-1.9-3.11-4.85S260.1,4,262.08,4s3.11,1.9,3.11,4.85S264.06,13.65,262.08,13.65Z'
      />
      <path
        className='cls-2'
        d='M284.43,12.8c-.19-.5-3.73-9.42-3.73-9.42h-.36s-3.13,8.18-3.51,9.14-.85,1.19-1.22,1.19v.39h2.88v-.39a.85.85,0,0,1-.9-.75,1.22,1.22,0,0,1,.05-.4l.7-1.91H282c.38,1,.66,1.8.67,1.84a1.63,1.63,0,0,1,.12.47c0,.41-.33.75-1,.75v.39h3.7v-.39A1.37,1.37,0,0,1,284.43,12.8Zm-5.81-2.89c.71-1.94,1.56-4.22,1.56-4.22S281,8,281.73,9.91Z'
      />
      <path
        className='cls-2'
        d='M246.84,11.35a2.72,2.72,0,0,1-2.74,2.06h-1.67c-.62,0-.88-.21-.88-.71V8.94h2.27c.88,0,1.35.49,1.49,1.43h.35V6.71h-.38c-.05,1-.58,1.51-1.37,1.51h-2.36V4.69c0-.39.25-.47.57-.47h2c1.27,0,1.71.52,2,1.7h.36l-.09-2.39h-7.6v.39c.89,0,1.29.42,1.29,1.37v7.05c0,.95-.4,1.37-1.29,1.37v.39h7.8l.68-2.75Z'
      />
      <path
        className='cls-2'
        d='M254.89,3.31l.3,3.49h-.39C254.28,5.08,253.4,4,252.14,4a1.34,1.34,0,0,0-1.42,1.42c0,.93.68,1.48,1.53,2.06L254,8.66a3.43,3.43,0,0,1,1.54,2.67,2.92,2.92,0,0,1-3,3c-1,0-1.7-.52-2.22-.52-.29,0-.43.29-.5.52h-.36L249,10.8h.38c.64,1.8,1.59,2.86,2.91,2.86A1.67,1.67,0,0,0,254,11.88,2.19,2.19,0,0,0,252.86,10L250.77,8.5A2.82,2.82,0,0,1,249.45,6a2.52,2.52,0,0,1,2.61-2.66c.71,0,1.51.47,1.95.47a.47.47,0,0,0,.49-.47Z'
      />
      <path
        className='cls-2'
        d='M233.89,3.53v.39c.82,0,1.32.63,1.32,1.59v5.56l-5.49-7.54h-2.39v.39a1.31,1.31,0,0,1,1,.46l.31.41v7.09c0,1.2-.42,1.83-1.38,1.83v.39h3.38v-.39c-.83,0-1.32-.54-1.32-1.51V5.71l6.31,8.55h.23V5.76c0-1.35.54-1.84,1.36-1.84V3.53Z'
      />
      <path
        className='cls-2'
        d='M222.17,3.53v.39c.82,0,1.32.63,1.32,1.59v5.56L218,3.53h-2.39v.39a1.31,1.31,0,0,1,1,.46l.31.41v7.09c0,1.2-.42,1.83-1.38,1.83v.39H219v-.39c-.82,0-1.32-.54-1.32-1.51V5.71L224,14.26h.22V5.76c0-1.35.55-1.84,1.38-1.84V3.53Z'
      />
      <path
        className='cls-2'
        d='M208,.49V.1h-3.27l-4.25,11.42L196.21.1h-3.33V.49c1.4,0,1.79.76,1.79,2.14v8.58c0,2-.56,2.5-1.81,2.5v.39h4.31v-.39c-1.21,0-1.79-.52-1.79-2.5v-9l4.45,11.89h.41L204.77,2v9.19c0,2-.45,2.5-1.7,2.5v.39H208v-.39c-1.21,0-1.68-.52-1.68-2.5V2.43C206.33.84,207.18.49,208,.49Z'
      />
      <path
        className='cls-2'
        d='M212,5.29a1.21,1.21,0,0,1,1.37-1.37V3.53h-4.25v.39a1.21,1.21,0,0,1,1.37,1.37v7.05a1.21,1.21,0,0,1-1.37,1.37v.39h4.25v-.39A1.21,1.21,0,0,1,212,12.34Z'
      />
      <path
        className='cls-2'
        d='M173.08,3.34c-2.6,0-4.72,2.15-4.72,5.48s2.12,5.47,4.72,5.47,4.72-2.14,4.72-5.47S175.69,3.34,173.08,3.34Zm0,10.33c-2,0-3.11-1.9-3.11-4.85S171.1,4,173.08,4s3.11,1.9,3.11,4.86S175.06,13.67,173.08,13.67Z'
      />
      <path
        className='cls-2'
        d='M187,3.53h-7.69v.39c.89,0,1.29.42,1.29,1.37v7.05c0,.95-.4,1.37-1.29,1.37v.39h4.09v-.39A1.2,1.2,0,0,1,182,12.34V8.94h2.19c.88,0,1.35.49,1.49,1.43h.35V6.71h-.38c-.06,1-.58,1.51-1.38,1.51H182V4.69c0-.39.24-.47.57-.47h2.12c1.26,0,1.7.52,2,1.7H187Z'
      />
      <path
        className='cls-2'
        d='M151.67,3.55l.08,2.71h-.35c-.33-1.74-.76-2-3.05-2v8.13a1.21,1.21,0,0,0,1.37,1.37v.38h-4.25v-.38a1.21,1.21,0,0,0,1.37-1.37V4.23c-2.29,0-2.71.29-3,2h-.36l.08-2.71Z'
      />
      <path
        className='cls-2'
        d='M159.83,3.93V3.55h3.23v.38a2.29,2.29,0,0,0-1.51,1L159,9.28v3.08c0,1,.37,1.37,1.48,1.37v.38H156v-.38c1.11,0,1.49-.35,1.49-1.37V9.45L154.64,5a2.06,2.06,0,0,0-1.48-1V3.55h4.17v.38c-.58,0-1,.26-1,.56a1.37,1.37,0,0,0,.16.55l2.12,3.49s2-3.53,2.08-3.63a.62.62,0,0,0,.09-.34C160.79,4.27,160.62,3.93,159.83,3.93Z'
      />
      <path
        className='cls-2'
        d='M134.82,3.31l.3,3.49h-.38c-.52-1.72-1.4-2.77-2.66-2.77a1.34,1.34,0,0,0-1.43,1.42c0,.93.68,1.48,1.54,2.06l1.7,1.15a3.45,3.45,0,0,1,1.53,2.67,2.92,2.92,0,0,1-3,3c-1,0-1.7-.52-2.22-.52-.29,0-.43.29-.49.52h-.36l-.44-3.52h.38c.65,1.8,1.59,2.86,2.91,2.86a1.67,1.67,0,0,0,1.73-1.78A2.19,2.19,0,0,0,132.79,10L130.71,8.5A2.82,2.82,0,0,1,129.39,6,2.52,2.52,0,0,1,132,3.31c.72,0,1.51.47,1.95.47a.48.48,0,0,0,.5-.47Z'
      />
      <path
        className='cls-2'
        d='M140.64,5.3A1.21,1.21,0,0,1,142,3.93V3.55h-4.25v.38a1.21,1.21,0,0,1,1.37,1.37v7.06a1.21,1.21,0,0,1-1.37,1.37v.38H142v-.38a1.21,1.21,0,0,1-1.37-1.37Z'
      />
      <path
        className='cls-2'
        d='M116.43,11.35a2.73,2.73,0,0,1-2.74,2.06H112c-.61,0-.88-.21-.88-.71V8.94h2.28c.88,0,1.35.49,1.49,1.43h.35V6.71h-.38c-.06,1-.58,1.51-1.38,1.51h-2.36V4.69c0-.39.25-.47.58-.47h2c1.26,0,1.7.52,2,1.7h.35L116,3.53h-7.6v.39c.89,0,1.29.42,1.29,1.37v7.05c0,.95-.4,1.37-1.29,1.37v.39h7.8l.68-2.75Z'
      />
      <path
        className='cls-2'
        d='M126.48,13.25c-.25-.3-2.59-3.51-3.11-4.22,1.89-.41,2.56-1.37,2.56-2.75,0-1.65-1.24-2.75-3.49-2.75h-4.22v.39c.88,0,1.29.42,1.29,1.37v7.05c0,.95-.41,1.37-1.29,1.37v.39h4.09v-.39c-.89,0-1.3-.42-1.3-1.37V9.24c.29,0,.55,0,.81,0l3.42,4.89h2.31v-.33A1.42,1.42,0,0,1,126.48,13.25ZM121,8.61V5c0-.73.15-.91,1-.91,1.78,0,2.44.88,2.44,2.2,0,1.62-1.23,2.28-3,2.28Z'
      />
      <path
        className='cls-2'
        d='M94,5.29a1.21,1.21,0,0,1,1.37-1.37V3.53H91.15v.39a1.21,1.21,0,0,1,1.38,1.37v7.05a1.21,1.21,0,0,1-1.38,1.37v.39h4.26v-.39A1.21,1.21,0,0,1,94,12.34Z'
      />
      <path
        className='cls-2'
        d='M101,3.92V3.53H97.14v.39c.46,0,1,.3,1.29,1.09l3.81,9.25h.25L105.81,5c.28-.74.74-1.09,1.18-1.09V3.53h-3v.39c.66,0,1,.35,1,.82a1.11,1.11,0,0,1-.08.41l-2.22,6.23s-2.56-6.13-2.63-6.32a1.27,1.27,0,0,1-.09-.47C100,4.17,100.34,3.92,101,3.92Z'
      />
      <path
        className='cls-2'
        d='M65.54.49c1.16,0,1.76.57,1.76,2.22V9.24c0,3.3,1.81,5,5,5a4.48,4.48,0,0,0,4.8-4.83V2.32c0-1.09.33-1.83,1.65-1.83V.1H74.55V.49c1.18,0,1.67.52,1.7,1.94s.11,5.16.11,7.39a3.75,3.75,0,0,1-7.49-.22V2.3c0-1.08.41-1.81,1.64-1.81V.1h-5Z'
      />
      <path
        className='cls-2'
        d='M85.58,3.53v.39c.82,0,1.32.63,1.32,1.59v5.56L81.41,3.53H79v.39a1.35,1.35,0,0,1,1,.46l.3.41v7.09c0,1.2-.42,1.83-1.37,1.83v.39h3.37v-.39c-.82,0-1.32-.54-1.32-1.51V5.71l6.32,8.55h.21V5.76c0-1.35.55-1.84,1.38-1.84V3.53Z'
      />
      <path
        className='cls-1'
        d='M93.89,25h3.92c3.92,0,6.72,2.61,6.72,6.38s-2.78,6.38-6.72,6.38H93.89Zm3.79,10.45c2.83,0,4.13-1.69,4.13-4.07s-1.3-4.07-4.13-4.07H96.52v8.14Z'
      />
      <path
        className='cls-1'
        d='M106.9,29.77h2.54l0,1.44a2.41,2.41,0,0,1,2.35-1.61,2.57,2.57,0,0,1,1.24.32l-.81,2.31a2.1,2.1,0,0,0-1-.25c-1.14,0-1.76.53-1.76,2.24v3.54H106.9Z'
      />
      <path
        className='cls-1'
        d='M115,26.84a1.61,1.61,0,0,1,3.21,0,1.61,1.61,0,0,1-3.21,0Zm.33,2.93h2.54v8h-2.54Z'
      />
      <path
        className='cls-1'
        d='M120,29.77h2.79L124,32.15a13.33,13.33,0,0,1,.66,2.12,12.56,12.56,0,0,1,.62-2.12l1.08-2.38h2.58l-4.28,8.16h-.25Z'
      />
      <path
        className='cls-1'
        d='M134.9,35.83a3.44,3.44,0,0,0,2-.64l1.45,1.56a4.76,4.76,0,0,1-3.42,1.18c-2.85,0-4.69-1.72-4.69-4.18a4.17,4.17,0,0,1,4.41-4.15c2.87,0,4.43,2.14,4.24,4.93h-6.06A1.89,1.89,0,0,0,134.9,35.83Zm1.44-2.76a1.52,1.52,0,0,0-1.67-1.41,1.72,1.72,0,0,0-1.88,1.41Z'
      />
      <path
        className='cls-1'
        d='M141.56,29.77h2.53L144,31.08a2.72,2.72,0,0,1,2.53-1.48c1.75,0,3,1.27,3,3.55v4.61H147V33.31c0-.9-.43-1.4-1.33-1.4a1.46,1.46,0,0,0-1.62,1.57v4.28h-2.53Z'
      />
      <path
        className='cls-1'
        d='M158.3,34.76V31.87h-1.18v-2.1h1.18V25.6h2.52v4.17h2.05v2.1h-2.05v3c0,.8.26,1,.66,1a1.5,1.5,0,0,0,.88-.34l1,1.77a3.38,3.38,0,0,1-2.24.73C159.47,38,158.3,37.16,158.3,34.76Z'
      />
      <path
        className='cls-1'
        d='M165.18,33.78a4.41,4.41,0,1,1,4.41,4.15A4.19,4.19,0,0,1,165.18,33.78Zm6.21,0a1.82,1.82,0,1,0-3.62,0,1.82,1.82,0,1,0,3.62,0Z'
      />
      <path
        className='cls-1'
        d='M182.05,25H186c3.92,0,6.72,2.61,6.72,6.38s-2.78,6.38-6.72,6.38h-3.93Zm3.8,10.45c2.83,0,4.13-1.69,4.13-4.07s-1.3-4.07-4.13-4.07h-1.17v8.14Z'
      />
      <path
        className='cls-1'
        d='M195.27,26.84a1.61,1.61,0,0,1,3.21,0,1.61,1.61,0,0,1-3.21,0Zm.34,2.93h2.53v8h-2.53Z'
      />
      <path
        className='cls-1'
        d='M200.58,36.41l1.48-1.31a2.9,2.9,0,0,0,2,.84c.82,0,1.09-.15,1.09-.49s-.51-.43-1.81-.77A2.59,2.59,0,0,1,201,32.13c0-1.8,1.39-2.53,3.1-2.53A3.9,3.9,0,0,1,207,30.7l-1.35,1.45a2.48,2.48,0,0,0-1.54-.6c-.58,0-.86.15-.86.47s.5.51,1.59.75,2.63.81,2.63,2.5c0,1.46-.77,2.66-3.28,2.66A4.45,4.45,0,0,1,200.58,36.41Z'
      />
      <path
        className='cls-1'
        d='M209.73,33.75a4.13,4.13,0,0,1,4.37-4.15,3.91,3.91,0,0,1,3.36,1.59l-1.8,1.47a1.88,1.88,0,0,0-1.56-.85,1.75,1.75,0,0,0-1.79,1.94,1.77,1.77,0,0,0,1.79,2,2.1,2.1,0,0,0,1.61-.75l1.71,1.5a4.05,4.05,0,0,1-3.32,1.44A4.13,4.13,0,0,1,209.73,33.75Z'
      />
      <path
        className='cls-1'
        d='M219.43,33.78a4.41,4.41,0,1,1,4.41,4.15A4.19,4.19,0,0,1,219.43,33.78Zm6.21,0a1.78,1.78,0,0,0-1.8-2,1.8,1.8,0,0,0-1.82,2,1.81,1.81,0,0,0,1.82,2A1.79,1.79,0,0,0,225.64,33.78Z'
      />
      <path
        className='cls-1'
        d='M229.59,29.77h2.8l1.12,2.38a12.28,12.28,0,0,1,.66,2.12,12.56,12.56,0,0,1,.62-2.12l1.09-2.38h2.57l-4.28,8.16h-.24Z'
      />
      <path
        className='cls-1'
        d='M244.46,35.83a3.5,3.5,0,0,0,2-.64l1.44,1.56a4.74,4.74,0,0,1-3.42,1.18c-2.85,0-4.69-1.72-4.69-4.18a4.18,4.18,0,0,1,4.41-4.15c2.88,0,4.43,2.14,4.25,4.93h-6.07A1.89,1.89,0,0,0,244.46,35.83Zm1.44-2.76a1.51,1.51,0,0,0-1.67-1.41,1.7,1.7,0,0,0-1.87,1.41Z'
      />
      <path
        className='cls-1'
        d='M251.12,29.77h2.54l0,1.44A2.41,2.41,0,0,1,256,29.6a2.5,2.5,0,0,1,1.23.32l-.8,2.31a2.1,2.1,0,0,0-1-.25c-1.14,0-1.76.53-1.76,2.24v3.54h-2.54Z'
      />
      <path
        className='cls-1'
        d='M262.25,28.44a2,2,0,0,1,.72.47,2.53,2.53,0,0,1,.48.66,2.29,2.29,0,0,1,.23,1,2.32,2.32,0,0,1-.3,1.15,2.17,2.17,0,0,1-.85.85,2.23,2.23,0,0,1-2.27,0,2.08,2.08,0,0,1-.84-.85,2.23,2.23,0,0,1-.31-1.15,2.18,2.18,0,0,1,.2-.93,2.35,2.35,0,0,1,.49-.72,2.34,2.34,0,0,1,1.59-.65A2.35,2.35,0,0,1,262.25,28.44Zm1.61,1a2.75,2.75,0,0,0-.52-.77,2.85,2.85,0,0,0-.84-.58,2.54,2.54,0,0,0-1.11-.23,2.77,2.77,0,0,0-1.17.26,2.74,2.74,0,0,0-.75.54,2.63,2.63,0,0,0-.56.83,2.56,2.56,0,0,0-.22,1.07,2.74,2.74,0,0,0,.36,1.36,2.51,2.51,0,0,0,1,1,2.67,2.67,0,0,0,1.34.36,2.69,2.69,0,0,0,1.19-.27,3,3,0,0,0,.78-.57,2.64,2.64,0,0,0,.55-.86,2.7,2.7,0,0,0,.19-1A2.75,2.75,0,0,0,263.86,29.45ZM261.3,31a.84.84,0,0,1,.4.07.5.5,0,0,1,.19.19,1.08,1.08,0,0,1,.07.39,2.76,2.76,0,0,0,.05.45h.64a2.2,2.2,0,0,1,0-.39,1.79,1.79,0,0,0,0-.39.73.73,0,0,0-.12-.3.58.58,0,0,0-.2-.18,1.27,1.27,0,0,0-.33-.12,1,1,0,0,0,.33-.07.77.77,0,0,0,.29-1.07.7.7,0,0,0-.26-.28,1.15,1.15,0,0,0-.42-.16,3.42,3.42,0,0,0-.53,0h-1.07v3h.66V31Zm.36-1.38a.49.49,0,0,1,.24.15A.48.48,0,0,1,262,30a.43.43,0,0,1-.07.25.47.47,0,0,1-.23.18.81.81,0,0,1-.31.06h-.45v-1h.45A1.1,1.1,0,0,1,261.66,29.58Z'
      />
    </svg>
  );
};

export default WordMark;

// WordMark.propTypes = {
//   title: PropTypes.string,
//   width: PropTypes.string,
// };
// WordMark.defaultProps = {
//   title: 'UofM Home page',
//   width: '288px',
// };
