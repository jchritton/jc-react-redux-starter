import React from 'react';
import NavBar from './components/NavBar';

const App = props => (
  <div>
    <NavBar />
    <h1>Hello World! Testing SSR...</h1>
    <span>WE ARE STATELESS! :D</span>
  </div>
);

export default App;
