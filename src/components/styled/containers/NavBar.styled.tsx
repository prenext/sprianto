import styled, { keyframes } from "styled-components";

const animateNavBar = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const NavBar = styled.nav<{ $isVisible?: boolean }>`
  width: 60vw;
  display: flex;
  align-items: start;
  box-shadow: 1px 2px 5px #000000a7;
  justify-content: start;
  flex-direction: column;
  position: fixed;
  box-sizing: border-box;
  overflow: hidden;
  top: 0;
  left: 0;
  background-color: #0056b3d1;
  backdrop-filter: blur(100px);
  height: 100vh;
  transform: ${(props) =>
    props.$isVisible ? "translateX(0%)" : "translateX(-100%)"};
  animation: ${animateNavBar} 1s;
  transition: transform 1s ease-in-out, visibility 1s ease-in-out;
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  &:hover {
    background-color: #0056b3;
  }
`;
