export interface Task {
  id: string;
  title: string;
  author: string;
  avatarUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  technologies: string[];
  difficulty: number;
  content: string;
  description: string;
  tips: string[];
  solutions: Solution[];
}

interface Solution {
  id: string;
  taskId: string;
  author: string;
  createdAt: string;
  phase: "review" | "done";
}

export interface UserProfil {
  id: string;
  photo: string;
  login: string;
  githubId: string;
}
