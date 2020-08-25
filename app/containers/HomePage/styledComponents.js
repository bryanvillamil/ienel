import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { Element } from 'react-scroll';

export const SectionCarousel = styled(Element)`
  height: 90vh;
  width: 100%;
  position: relative;
`;

export const SectionServices = styled(Element)`
  height: auto;
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 8rem;
`;

export const SectionOurProjects = styled(Element)`
  height: 100vh;
  background: #ccc;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SectionContact = styled(Element)`
  height: 100vh;
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentSvg = styled.div`
  display: flex;
`;

export const SvgSmall = styled.svg`
  fill: #fff !important;
  stroke: #fff;
  position: absolute;
  bottom: -2px;
  left: 0;
  background: none;
  z-index: 9;
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
  z-index: 9;
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

export const Box = styled.div`
  padding-top: 8rem;
  .title {
    padding-bottom: 3rem;
    font-size: 25px;
  }
  ${breakpoint('md')`
    .title {
      font-size: 30px;
    }
  `}
`;
