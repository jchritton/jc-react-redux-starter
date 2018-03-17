import React from 'react';

import App from '../src/client/browser/App';

describe('App component tests', () => {
  it('should render correctly', () => {
    const testApp = shallow(<App />);
    expect(testApp).toBeTruthy();
  });
});
