import styled from "styled-components";

 const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: blue;
`;

export const LeftButton = styled(CarouselButton)`
  left: 10px;
`;

export const RightButton = styled(CarouselButton)`
  right: 10px;
`;
