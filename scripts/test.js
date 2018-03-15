process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

const jest = require('jest');

const argv = process.argv.slice(2);

process.on('unhandledRejection', err => {
  throw err;
});

jest.run(argv);
