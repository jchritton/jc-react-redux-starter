import { configure } from '@storybook/react';

function loadStories() {
  require('..test/stories/index.js');
}

configure(loadStories, module);
