import React from 'react';
import styled from 'styled-components';

const NavBar = props => (
  <StyledNav>
    <figure>LOGO IMAGE</figure>
    <ul>
      <li>
        <img className="avatar" src="http://via.placeholder.com/40x40" />
        <span>Username</span>
      </li>
      <li>Dashboard</li>
      <li>Login</li>
    </ul>
  </StyledNav>
);

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1f3d66;
  color: limegreen;
  height: 3rem;
  padding: 0 1rem;

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    width: 35%;
    justify-content: space-between;
  }
`;

export default NavBar;
