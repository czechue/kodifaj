export interface Task {
	id: number;
	title: string;
	author: string;
	imageUrl: string;
	rating: string;
	technologies: string[];
	createdAt: string;
	reviewCount: string;
}

export interface UserProfil {
	id: string;
	photo: string;
	login: string;
	githubId: string;
}
