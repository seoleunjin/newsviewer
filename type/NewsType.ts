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
	idx: string;
	category: string;
};

export type NewsData = {
	status: string;
	totalResults: number;
	articles: Article[];
	category: string;
	query: string;
};
