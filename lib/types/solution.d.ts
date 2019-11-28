export interface Solution {
	id: string;
	taskId: string;
	userId: string;
	createdAt: string;
	phase: "review" | "done";
	comment: string;
	demoUrl: string;
	repo: string;
}
