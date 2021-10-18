import { User } from 'src/app/domain/user';

export interface UserState {
  data: User;
  token: string;
}
