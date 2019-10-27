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
	_id: string;
	login: string;
	googleId?: string;
	githubId?: string;
}
