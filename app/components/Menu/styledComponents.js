import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: #f5f5f5;
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
  background: #000;
  overflow: hidden;
  ${'' /* border-right: 2px solid #000; */}
  box-shadow: 1px 1px 1px #333;
  @media (max-width: 768px) {
    width: 270px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  height: 98%;
  width: 100%;
  background: #f5f5f5;
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

export const MenuLogo = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  img {
    width: 90%;
    margin: 0 auto;
    height: 100%;
    object-fit: contain;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  width: 100%;
  margin: 0;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 1rem;
  margin: 0;
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #777;
  a {
    font-size: 20px;
    padding: 2rem 1rem;
    text-align: center;
    cursor: pointer;
    width: 100%;
  }
`;
