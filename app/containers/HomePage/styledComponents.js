import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { Element } from 'react-scroll';

export const SectionCarousel = styled(Element)`
  height: 90vh;
  background: green;
  width: 100%;
  position: relative;
`;

export const SectionServices = styled(Element)`
  height: 100vh;
  background: #fff;
  width: 100%;
`;

export const SectionOurTeam = styled(Element)`
  height: 100vh;
  background: red;
  width: 100%;
`;

export const SectionContact = styled(Element)`
  height: 100vh;
  background: yellow;
  width: 100%;
`;

export const ContentSvgs = styled.div`
  display: flex;
`;

export const SvgSmall = styled.svg`
  fill: #fff !important;
  stroke: #fff;
  position: absolute;
  bottom: -2px;
  left: 0;
  background: none;
  z-index: 99;
  pointer-events: none;
  height: 60px;
  ${breakpoint('xs')`
    height: 100px;
  `}
  ${breakpoint('sm')`
    height: 120px;
  `}
  ${breakpoint('lg')`
    height: 170px;
    bottom: -4px;
  `}
`;

export const SvgBig = styled.svg`
  fill: #fff !important;
  stroke: #fff;
  position: absolute;
  bottom: -2px;
  right: 0;
  background: none;
  z-index: 99;
  left: auto;
  pointer-events: none;
  height: 60px;
  ${breakpoint('xs')`
    height: 100px;
  `}
  ${breakpoint('sm')`
    height: 120px;
    bottom: -2px;
  `}
  ${breakpoint('lg')`
    height: 170px;
    bottom: -4px;
  `}
`;
