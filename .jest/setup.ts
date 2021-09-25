import '@testing-library/jest-dom';
import 'jest-styled-components';

import dotenv from 'dotenv';

// Enviromental variables setup for tests
dotenv.config({
  path: '.env.development'
});
