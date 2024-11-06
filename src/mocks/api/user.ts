import { http, HttpResponse } from 'msw';

import userJSON from './user.json';

export const user = http.get('/user', () => HttpResponse.json(userJSON));
