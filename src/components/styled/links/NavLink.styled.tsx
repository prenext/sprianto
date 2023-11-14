import styled from 'styled-components';

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 1em;
  width: 100%;
  color: blue;
  padding: 20px 10px;
  border-bottom: 1px solid #5f5f5f1c;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  & > svg:first-of-type {
    margin-right: 10px;
  }
`;
