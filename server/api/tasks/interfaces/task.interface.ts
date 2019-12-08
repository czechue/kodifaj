import { Document } from "mongoose";
import {Solution} from "../../solutions/interfaces/solutions.interface";

export interface Task extends Document {
  _id: string;
  content: string;
  createdAt: string;
  images: string[];
  tips: string[];
  tags: string[];
  title: string;
  _user: { _id: string; login: string };
  _solutions: Solution[];
}

export interface TaskWithSolutions extends Task {
}
