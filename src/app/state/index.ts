import { createFeatureSelector } from '@ngrx/store';
import { UserState } from './auth/domain';
import { authReducer } from './auth/reducer';
import { AppState } from './domain';

export const reducerMap = {
  auth: authReducer,
};

// export const authSelector = createFeatureSelector<AppState, UserState>('auth');
