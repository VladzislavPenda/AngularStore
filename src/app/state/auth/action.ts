import { createAction } from '@ngrx/store';
import { User } from 'src/app/domain/user';

export const setToken = createAction(
  '@app/auth/user/token',
  (payload: { token: string; user: User }) => ({ payload })
);

export const loadToken = createAction('@app/auth/user/token/load');
export const loadTokenSuccess = createAction(
  '@app/auth/user/token/load/success',
  (payload: { token: string; user: User }) => ({ payload })
);
export const loadTokenError = createAction('@app/auth/user/token/load/error');

export const logout = createAction('@app/auth/user/logout');
