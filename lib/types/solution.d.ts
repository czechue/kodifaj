import { UserProfil } from "./user";

export interface Solution {
  comment: string;
  createdAt: string;
  demo: string;
  phase: "review" | "done";
  repo: string;
  _id: string;
  _task: string;
  _user: UserProfil;
}
