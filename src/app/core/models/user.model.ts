import { ArmyList } from './armyList.model';

export interface User {
  id: string;
  userName: string;
  email: string;
  pswd?: string;
  role: 'admin' | 'user';
  birthDate: Date;
  armyLists?: ArmyList[];
}

export interface UserCreateDto {
  userName: string;
  email: string;
  pswd: string;
  role: 'admin' | 'user';
  birthDate: Date | string;
}

export interface UserUpdateDto {
  userName?: string;
  email?: string;
  pswd?: string;
  birthDate?: Date;
}
