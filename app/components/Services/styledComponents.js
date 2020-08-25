import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import FadeInSection from '../FadeInSection';

export const ContentServices = styled(FadeInSection)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding-bottom: 8rem;
`;

export const PageSizer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  ${breakpoint('md')`
    flex-direction: row;
  `}
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  ${breakpoint('sm')`
    flex-direction: row;
    padding: 1rem 1rem 0;
  `}
  ${breakpoint('md')`
    width: 33.333%;
    flex-direction: column;
    padding: 0 2rem 0 0;
    &:first-child {
      margin-left: 2rem;
    }
  `}
`;
