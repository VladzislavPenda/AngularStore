import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../domain';
import { UserState } from './domain';

export const authSelector = createFeatureSelector<AppState, UserState>('auth');
