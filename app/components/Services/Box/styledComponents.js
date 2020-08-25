import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

export const Box = styled.div`
  min-height: 250px;
  width: 100%;
  margin-top: 1rem;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(55, 55, 55, 0.3);
  transition: all 0.5s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 20px rgba(251, 211, 63, 0.5);
  }
  svg {
    ${'' /* padding-bottom: 1rem; */}
  }
  ${breakpoint('sm')`
    height: 100%;
    margin-right: 1rem;
    margin-top: 0;
    &:last-child {
      margin-right: 0;
    }
  `}
  ${breakpoint('md')`
    margin-right: 0;
    margin-top: 2rem;
  `}
`;

export const BoxTitle = styled.div`
  display: flex;
  width: 92%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
    margin: 0;
    padding-bottom: 1rem;
  }
  ${breakpoint('sm')`
    width: 85%;
    h2 {
      font-size: 15px;
    }
  `}
  ${breakpoint('md')`
    h2 {
      font-size: 19px;
    }
  `}
  ${breakpoint('lg')`
    h2 {
      padding-top: 1rem;
    }
  `}
`;

export const BoxDescription = styled.div`
  display: flex;
  p {
    width: 95%;
    margin: 0 auto;
    text-align: center;
    font-family: 'arial';
    font-size: 1.4rem;
  }
  ${breakpoint('sm')`
    p {
      font-size: 1.2rem;
    }
  `}
  ${breakpoint('lg')`
    p {
      font-size: 1.4rem;
      width: 85%;
    }
  `}
`;
