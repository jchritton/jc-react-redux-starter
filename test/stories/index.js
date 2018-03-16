import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from '../../src/client/browser/components/NavBar';

storiesOf('NavBar', module).add('with color', () => <NavBar color="green" />);
