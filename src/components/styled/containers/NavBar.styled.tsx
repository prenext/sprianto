import styled from "styled-components";

export const NavBar = styled.nav<{ $isVisible?: boolean }>`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #096bd4;
  height: 500%;
  visibility: ${(props) => (props.$isVisible ? "hidden" : "visible")};
  &:hover {
    background-color: #0056b3;
  }
`;
