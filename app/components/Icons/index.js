import React from 'react';
import PropTypes from 'prop-types';

const Icons = props => {
  const { backgroundColor, iconName, width, height } = props;

  switch (iconName) {
    case 'dollar':
      return (
        <svg viewBox="0 0 24 24" width={width} height={height}>
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
            fill={backgroundColor}
          />
        </svg>
      );
    case 'mobile':
      return (
        <svg viewBox="0 0 24 24" width={width} height={height}>
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27z"
            fill={backgroundColor}
          />
        </svg>
      );
    case 'location':
      return (
        <svg viewBox="0 0 1792 1792" width={width} height={height}>
          <path
            d="M1593 349l-640 1280q-17 35-57 35-5 0-15-2-22-5-35.5-22.5t-13.5-39.5v-576h-576q-22 0-39.5-13.5t-22.5-35.5 4-42 29-30l1280-640q13-7 29-7 27 0 45 19 15 14 18.5 34.5t-6.5 39.5z"
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
    case 'locationMap':
      return (
        <svg width={width} height={height} viewBox="0 0 1024 1024">
          <g id="XMLID_3_">
            <polygon
              id="XMLID_21_"
              points="651,209.3 651,912.1 373,814.8 373,112"
              fill="#fff"
            />
            <polygon
              id="XMLID_75_"
              points="944,97.9 944,801.7 691,901 691,207.2"
              fill={backgroundColor}
            />
            <polygon
              id="XMLID_76_"
              points="333,112.9 333,816.7 80,926.1 80,222.3"
              fill={backgroundColor}
            />
          </g>
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 48 48" width={width} height={height}>
          <path d="M0 0h48v48H0z" fill={backgroundColor} />
          <path
            d="M36 4H12C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 8h10v16l-5-3-5 3V8z"
            fill="#fff"
          />
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
