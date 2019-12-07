import { Document } from "mongoose";

export interface Task extends Document {
  _id: string;
  content: string;
  createdAt: string;
  images: string[];
  tips: string[];
  tags: string[];
  title: string;
  _user: { _id: string; login: string };
}
