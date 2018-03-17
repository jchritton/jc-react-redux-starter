import React from 'react';
import { styled } from 'styled-components';

const NavBar = props => (
  <nav>
    <figure>LOGO IMAGE</figure>
    <ul>
      <li>
        <div className="avatar" style={{ color: props.color }}>
          IMG
        </div>
        <span>UserName</span>
      </li>
      <li>My Votes</li>
      <li>Login/Logout</li>
    </ul>
  </nav>
);

export default NavBar;
