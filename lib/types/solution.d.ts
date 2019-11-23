export interface Solution {
	id: string;
	taskId: string;
	author: string;
	createdAt: string;
	phase: "review" | "done";
	comment: string;
	demoUrl: string;
	repo: string;
}
