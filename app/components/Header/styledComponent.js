import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';

export const HeaderContent = styled.header`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 85px;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  background: #fff;
  ${({ isSticky }) =>
    isSticky &&
    css`
      height: 70px;
      box-shadow: 0px 6px 8px -6px rgba(0, 0, 0, 0.5);
    `}
`;

export const HeaderSizer = styled.div`
  width: 95%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const HeaderLogo = styled.div`
  display: flex;
  width: ${({ isSticky }) => (isSticky ? '11rem' : '13rem')};
  max-width: 16rem;
  height: fit-content;
  transition: all 0.5s ease;
  h1 {
    font-size: 0;
  }
  img {
    width: 100%;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  padding-left: 2rem;
  position: relative;
`;

export const HeaderNav = styled.nav``;

export const HeaderList = styled.ul`
  display: flex;
`;

export const HeaderItem = styled.li`
  margin: 1rem 1.8rem;
  &:last-child {
    margin: 1rem 0 1rem 1.8rem;
  }
`;

export const HeaderLink = styled(Link)`
  color: #000;
  font-size: 1.7rem;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  transition: all 0.5s;
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0px;
    width: 100%;
    height: 2px;
    transform: scale3d(0, 1, 1);
    transform-origin: left center;
    transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) 0.4s;
    background: #000;
  }
  &:hover,
  &.active {
    &:after {
      transform: scale3d(1, 1, 1);
      transition-delay: 0s;
    }
  }
`;
