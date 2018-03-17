import React from 'react';
import NavBar from './components/NavBar';

const App = props => (
  <React.Fragment>
    <NavBar />
    <h1>Hello World! Testing SSR...</h1>
    <span>Webpack?</span>
  </React.Fragment>
);

export default App;
