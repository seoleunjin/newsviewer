export type Source = {
	id: string | null;
	name: string;
};

export type Article = {
	source: Source;
	author?: string | null;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
	id?: number;
};

export type NewsData = {
	status: string;
	totalResults: number;
	articles: Article[];
};
