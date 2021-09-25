global.fetch = require('node-fetch');

import { server } from '../src/utils/mockServer/server';

beforeAll(() => {
  // listen to all requests in tests
  server.listen();
});

afterEach(() => {
  // reset handlers after each test
  server.resetHandlers();
});

afterAll(() => {
  // close server and clean tests
  server.close();
});
