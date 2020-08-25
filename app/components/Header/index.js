import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from '../Img';
import Menu from '../Menu';
import HamburgerIcon from '../HamburgerIcon';
import Logo from '../../images/logo-ienel.png';
import {
  HeaderContent,
  HeaderSizer,
  HeaderLogo,
  HeaderMenu,
  HeaderNav,
  HeaderList,
  HeaderItem,
  HeaderLink,
} from './styledComponent';

function Header({ isSticky, isMobileView }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onMenuOpen = isOpen => {
    setIsOpenMenu(isOpen);
  };

  return (
    <HeaderContent isSticky={isSticky}>
      <HeaderSizer>
        <HeaderLogo isSticky={isSticky}>
          <h1>
            Ienel
            <Img src={Logo} alt="logo" />
          </h1>
        </HeaderLogo>

        {isMobileView ? (
          <HeaderMenu>
            <HamburgerIcon open={isOpenMenu} setOpen={onMenuOpen} />
            <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
          </HeaderMenu>
        ) : (
          <HeaderMenu>
            <HeaderNav>
              <HeaderList>
                <HeaderItem>
                  <HeaderLink
                    activeClass="active"
                    to="services"
                    spy
                    smooth
                    offset={-100}
                    duration={1000}
                  >
                    Servicios
                  </HeaderLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderLink
                    activeClass="active"
                    to="ourProjects"
                    spy
                    smooth
                    offset={-100}
                    duration={1000}
                  >
                    Nuestros Proyectos
                  </HeaderLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderLink
                    activeClass="active"
                    to="contact"
                    spy
                    smooth
                    offset={-100}
                    duration={1000}
                  >
                    Contáctanos
                  </HeaderLink>
                </HeaderItem>
              </HeaderList>
            </HeaderNav>
          </HeaderMenu>
        )}
      </HeaderSizer>
    </HeaderContent>
  );
}

Header.propTypes = {
  isMobileView: PropTypes.bool,
  isSticky: PropTypes.bool,
};

export default Header;
