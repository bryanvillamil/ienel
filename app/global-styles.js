import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  html {
    font-size: 10px;
    @media (max-width: 551px) {
      font-size: 55%;
    }
    @media (max-width: 768px) {
      font-size: 52%;
    }
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .fade-in-section {
    opacity: 0;
    transform: translateY(20vh);
    visibility: hidden;
    transition: opacity 1500ms ease-out, transform 800ms ease-out,
      visibility 1500ms ease-out;
    will-change: opacity, transform, visibility;
  }
  .fade-in-section.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;

export const PageSizer = styled.div`
  width: 95%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
`;

export default GlobalStyle;
