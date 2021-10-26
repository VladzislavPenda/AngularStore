import { UserState } from './domain';
import { createReducer, on } from '@ngrx/store';
import { logout, loadTokenSuccess, setToken } from './action';

const initialState: UserState = {};

export const authReducer = createReducer<UserState>(
  initialState,
  on(logout, () => initialState),

  on(setToken, (_, { payload }) => ({
    token: payload.token,
    user: payload.user,
  })),

  on(loadTokenSuccess, (_, { payload }) => ({
    token: payload.token,
    user: payload.user,
  }))
);
