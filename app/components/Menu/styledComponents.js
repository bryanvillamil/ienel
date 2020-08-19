import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  transform: ${({ isOpenMenu }) =>
    isOpenMenu ? 'translateX(0%)' : 'translateX(-100%)'};
  height: 100%;
  text-align: left;
  padding: 2.5rem 0 0;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 99;
  background: #50a8b4;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 95%;
  width: 100%;
  background: #fff;
  border-radius: 25px 25px 0 0;
  padding: 3.5rem 0 0;
  position: relative;
  &:after {
    content: '';
    display: flex;
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    margin: auto;
    background: #999;
    height: 6px;
    width: 18%;
    border-radius: 10px;
  }
`;
