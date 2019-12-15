import { Solution } from './solution';
import { Task } from './task';
import { User } from './user';

export interface UserProps extends User {
  _solutions: Solution[];
  _tasks: Task[];
}
