/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Events } from 'react-scroll';
import Img from '../Img';
import ImgLogoText from '../../images/logo-ienel-text.png';
import {
  MenuWrapper,
  ContentWrapper,
  MenuLogo,
  MenuNav,
  MenuList,
  MenuItem,
} from './styledComponents';

const Menu = ({ isOpenMenu, setIsOpenMenu }) => {
  useEffect(() => {
    Events.scrollEvent.register('end', function() {
      setIsOpenMenu(false);
    });
  });

  return (
    <MenuWrapper isOpenMenu={isOpenMenu}>
      <ContentWrapper>
        <MenuLogo>
          <Img src={ImgLogoText} alt="logo" />
        </MenuLogo>
        <MenuNav>
          <MenuList>
            <MenuItem>
              <Link
                activeClass="active"
                to="services"
                spy
                smooth
                offset={-100}
                duration={1000}
              >
                Servicios
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="ourProjects"
                spy
                smooth
                offset={-100}
                duration={1000}
              >
                Nuestros Proyectos
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="contact"
                spy
                smooth
                offset={-100}
                duration={1000}
              >
                Contáctanos
              </Link>
            </MenuItem>
          </MenuList>
        </MenuNav>
      </ContentWrapper>
    </MenuWrapper>
  );
};

Menu.propTypes = {
  isOpenMenu: PropTypes.bool,
  setIsOpenMenu: PropTypes.func,
};

export default Menu;
