import styled from 'styled-components';

export const Wrapper = styled.button`
  position: absolute;
  top: 0;
  right: 2%;
  bottom: 0;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2.6rem;
    height: 0.3rem;
    background: #000;
    border-radius: 20px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    box-shadow: 1px 1px 2px #777;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
