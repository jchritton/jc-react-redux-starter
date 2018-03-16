import React from 'react';

const NavBar = props => (
  <nav>
    <figure>LOGO IMAGE</figure>
    <ul>
      <li>
        <div style={{ color: props.color }}>IMG</div>
        <span>UserName</span>
      </li>
      <li>My Votes</li>
      <li>Login/Logout</li>
    </ul>
  </nav>
);

export default NavBar;
