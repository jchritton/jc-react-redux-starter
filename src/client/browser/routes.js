import React from 'react';
import App from './App';
import NavBar from './components/NavBar';

export default [
  {
    ...App,
    routes: [
      {
        ...NavBar,
        path: '/',
        exact: true
      }
    ]
  }
];
