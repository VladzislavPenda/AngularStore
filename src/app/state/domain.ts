import { UserState } from './auth/domain';

export interface AppState {
  authState: UserState;
}
