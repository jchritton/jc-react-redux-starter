import React from 'react';

import NavBar from '../src/client/browser/components/NavBar';

describe('NavBar component tests', () => {
  it('should render correctly', () => {
    const testNav = shallow(<NavBar />);
    expect(testNav).toBeTruthy();
  });

  it('should be able to use passed props', () => {
    const testNav = render(<NavBar color="blue" />);

    expect(testNav.find('.avatar[style="color:blue"]')).toHaveLength(1);
  });
});
