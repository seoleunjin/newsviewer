import { NewsData } from '@/type/NewsType';
import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const instance = axios.create({
	baseURL: `https://newsapi.org/v2/top-headlines`,
});

//특정 카테고리 뉴스 목록을 요청
function fetchNewsLists(category: string) {
	return instance.get<NewsData>(
		`?country=us&category=${category}&apiKey=${apiKey}`,
	);
}

export { fetchNewsLists };
