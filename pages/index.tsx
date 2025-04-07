import NewsList from '@/components/newslist/NewsList';
import NewsVisual from '@/components/newslist/NewsVisual';
import * as theme from '@/styles/theme.css';
import type { NewsData } from '@/type/NewsType';
import axios from 'axios';

export default function Home({ news }: { news: NewsData }) {
	return (
		<div className={theme.width}>
			<NewsVisual />
			<NewsList news={news.articles} />
		</div>
	);
}

export async function getServerSideProps() {
	const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

	const instance = axios.create({
		baseURL: `https://newsapi.org/v2/top-headlines`,
	});

	const { data } = await instance.get(`?country=us&apiKey=${apiKey}`);

	return {
		props: {
			news: data,
		},
	};
}
