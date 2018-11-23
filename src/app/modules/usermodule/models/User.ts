import {Authority} from './Authority';

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  authorities: Authority[];
  enabled: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}
