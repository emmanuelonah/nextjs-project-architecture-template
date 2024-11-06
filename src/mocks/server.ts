import { setupServer } from 'msw/node';
import { handlers } from './api';

export const server = setupServer(...handlers);
