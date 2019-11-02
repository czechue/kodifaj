export interface Task {
  id: string;
  title: string;
  author: string;
  repo: string;
  avatarUrl: string;
  images: string[];
  rating: number;
  reviewCount: number;
  createdAt: string;
  technologies: string[];
  difficulty: number;
  content: string;
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
