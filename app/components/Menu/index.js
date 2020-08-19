/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { MenuWrapper, ContentWrapper } from './styledComponents';

const Menu = ({ isOpenMenu }) => (
  <MenuWrapper isOpenMenu={isOpenMenu}>
    <ContentWrapper />
  </MenuWrapper>
);

Menu.propTypes = {
  isOpenMenu: PropTypes.bool,
};

export default Menu;
