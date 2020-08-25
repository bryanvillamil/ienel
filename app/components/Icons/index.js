import React from 'react';
import PropTypes from 'prop-types';

const Icons = props => {
  const { backgroundColor, iconName, width, height } = props;

  switch (iconName) {
    case 'tower':
      return (
        <svg viewBox="0 0 24 24" width={width} height={height}>
          <g data-name="Layer 2">
            <path
              d="M15.3,2H8.7L2,6.46V10H4V8H8v2.79l-4,9V22H6V20.59l6-3.27,6,3.27V22h2V19.79l-4-9V8h4v2h2V6.46ZM14,4V6H10V4ZM6.3,6,8,4.87V6Zm8,6L15,13.42,12,15,9,13.42,9.65,12ZM7.11,17.71,8.2,15.25l1.71.93Zm8.68-2.46,1.09,2.46-2.8-1.53ZM14,10H10V8h4Zm2-5.13L17.7,6H16Z"
              fill={backgroundColor}
            />
          </g>
        </svg>
      );
    case 'focus':
      return (
        <svg
          enableBackground="new 0 0 24 24"
          version="1.0"
          viewBox="0 0 24 24"
          width={width}
          height={height}
        >
          <path
            d="M15,18H9c0,0.2,0,0.8,0,1c0,1.7,1.3,2,3,2s3-0.3,3-2C15,18.8,15,18.2,15,18z"
            fill={backgroundColor}
          />
          <path
            d="M13.5,20h-3c0,0.1,0,0.4,0,0.5c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5C13.5,20.4,13.5,20.1,13.5,20z"
            fill={backgroundColor}
          />
          <path
            d="M19,9c0-3.9-3.2-7.1-7.1-7C8.2,2.1,5.1,5.1,5,8.7c-0.1,2.4,1,4.6,2.8,5.9C8.6,15.2,9,16.1,9,17v0h6v0c0-0.9,0.4-1.8,1.1-2.4  C17.9,13.4,19,11.3,19,9z"
            fill={backgroundColor}
          />
        </svg>
      );
    case 'light-earth':
      return (
        <svg viewBox="0 0 24 24" width={width} height={height}>
          <g data-name="Layer 2">
            <path
              d="M20,14V2H18V6H16.62L15.17,3.11,12.27,7,10.1,1.56,8.38,5H6V2H4V14H2v8H22V14ZM6,7,9.62,7l.28-.56L11.73,11l3.1-4.13L15.38,8H18v6H6Z"
              fill={backgroundColor}
            />
          </g>
        </svg>
      );
    case 'light':
      return (
        <svg
          enableBackground="new 0 0 500 500"
          version="1.1"
          viewBox="0 0 500 500"
          width={width}
          height={height}
        >
          <path
            clipRule="evenodd"
            d="M276.253,195.487L312.781,55.39  c0.542-1.721,0.817-3.55,0.817-5.448c0-9.902-7.993-17.993-17.905-17.993c-5.624,0-10.629,2.544-13.896,6.637L99.451,275.072  c-2.449,3.088-3.902,7-3.902,11.269c0,9.991,8.178,18.172,18.17,18.172h110.018l-36.518,140.097c-0.55,1.731-0.818,3.55-0.818,5.448  c0,9.912,7.996,17.993,17.897,17.993c5.634,0,10.629-2.536,13.902-6.637l182.338-236.488c2.457-3.087,3.913-6.991,3.913-11.268  c0-9.99-8.182-18.171-18.168-18.171H276.253z"
            fill={backgroundColor}
            fillRule="evenodd"
          />
        </svg>
      );
    case 'voltage':
      return (
        <svg viewBox="0 0 24 24" width={width} height={height}>
          <g data-name="Layer 2">
            <path
              d="M10.38,16,8.11,11.45l1.79-.89L12.62,16H22V2H2V16Zm8.17-7.83L17.45,9.83a9.79,9.79,0,0,0-10.89,0L5.45,8.17A11.79,11.79,0,0,1,18.55,8.17Z"
              fill={backgroundColor}
            />
            <rect height="4" width="20" x="2" y="18" />
          </g>
        </svg>
      );
    case 'plug':
      return (
        <svg viewBox="0 0 24 24" width={width} height={height}>
          <g data-name="Layer 2">
            <path
              d="M18,2V15.9a4.1,4.1,0,0,1-8.21,0v-2A4,4,0,0,0,13,10V8h1V6H12V2H10V6H8V2H6V6H4V8H5v2a4,4,0,0,0,2.79,3.79v2.1A6.1,6.1,0,0,0,20,15.9V2Z"
              fill={backgroundColor}
            />
          </g>
        </svg>
      );
    case 'battery':
      return (
        <svg viewBox="0 0 32 32" width={width} height={height}>
          <rect height="3" width="10" x="11" y="16.5" />
          <path
            d="M11,23.5a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1v-2H11Z"
            fill={backgroundColor}
          />
          <path
            d="M22,5V4a3,3,0,0,0-3-3H13a3,3,0,0,0-3,3V5a5,5,0,0,0-5,5V26a5,5,0,0,0,5,5H22a5,5,0,0,0,5-5V10A5,5,0,0,0,22,5Zm1,18.5a3,3,0,0,1-3,3H12a3,3,0,0,1-3-3v-11a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3Z"
            fill={backgroundColor}
          />
          <path
            d="M20,11.5H12a1,1,0,0,0-1,1v2H21v-2A1,1,0,0,0,20,11.5Z"
            fill={backgroundColor}
          />
        </svg>
      );
    case 'close':
      return (
        <svg width={width} height={height}>
          <g id="info" />
          <g id="icons">
            <path
              d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z"
              id="exit"
              fill={backgroundColor}
            />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

Icons.propTypes = {
  iconName: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icons.defaultProps = {
  iconName: '',
  backgroundColor: '#000',
  width: 20,
  height: 20,
};

export default Icons;
