import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styledComponents';

const HamburgerIcon = ({ open, setOpen }) => (
  <Wrapper open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </Wrapper>
);

HamburgerIcon.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default HamburgerIcon;
