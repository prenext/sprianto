import styled from "styled-components";


const AppBar = styled.header`
      background-color: #096bd4;
      width: 100%;
      height: 10vh;
      color: white;
      transition: background-color 0.3s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: relative;
      &:hover {
      background-color: #0056b3;
}`;

export default AppBar;