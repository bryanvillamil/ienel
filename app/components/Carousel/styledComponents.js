import styled from 'styled-components';

export const CarouselContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  .slick-slider {
    width: 100%;
    height: 100%;
    overflow: hidden;
    div {
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
