import React from 'react';
import PropTypes from 'prop-types';

import Icons from '../../Icons';
import { Box, BoxTitle, BoxDescription } from './styledComponents';

const BoxServices = ({ item, isTabletView, isMobileView }) => (
  <Box className={`item-${item.id}`}>
    <Icons
      iconName={item.icon}
      backgroundColor="#000"
      height={isTabletView || isMobileView ? 40 : 50}
      width={isTabletView || isMobileView ? 40 : 50}
    />
    <BoxTitle>
      <h2>{item.title}</h2>
    </BoxTitle>
    <BoxDescription>
      <p>{item.description}</p>
    </BoxDescription>
  </Box>
);

BoxServices.propTypes = {
  item: PropTypes.object,
  isTabletView: PropTypes.bool,
  isMobileView: PropTypes.bool,
};

export default BoxServices;
