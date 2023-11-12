import styled from "styled-components";

export const AppBar = styled.header<{ $scrollTop: number }>`
  width: 100%;
  height: ${(props) => (props.$scrollTop > 100 ? "7vh" : "10vh")};
  margin: 0;
  background-color: ${(props) =>
    props.$scrollTop > 100 ? "#ffffff8d" : "#18b62d99"};
  top: 0;
  box-sizing: border-box;
  position: ${(props) => (props.$scrollTop > 100 ? "fixed" : "")};
  padding: 0 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: height 1s, position 1s;
  border: none;
  z-index: 100;
`;
