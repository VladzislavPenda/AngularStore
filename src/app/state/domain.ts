import { UserState } from './auth/domain';

export interface AppState {
  auth: UserState;
  data: string;
}
