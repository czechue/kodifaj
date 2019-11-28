import { Solution } from "./solution";

export interface Task {
  _id: string;
  title: string;
  _user: {
    _id: string;
    login: string;
  };
  repo: string;
  images: string[];
  rating: number;
  reviewCount: number;
  createdAt: string;
  tags: string[];
  difficulty: number;
  content: string;
  tips: string[];
  solutions: Solution[];
}
