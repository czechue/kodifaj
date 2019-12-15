import { Solution } from './solution';
import { Task } from './task';
import { User } from './user';

export interface UserProps extends User {
  solution: Solution[];
  task: Task[];
}
