import { User } from 'src/app/domain/user';

export interface UserState {
  user?: User;
  token?: string;
}
