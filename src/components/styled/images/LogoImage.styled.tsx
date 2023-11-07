import styled from "styled-components";

export const LogoImage = styled.img`
  width: 30%;
  height: auto;
  border: 2px solid #007bff; 
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;


