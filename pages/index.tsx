import NewsList from '@/components/newslist/NewsList';
import NewsVisual from '@/components/newslist/NewsVisual';
import * as theme from '@/styles/theme.css';
import type { NewsData } from '@/type/NewsType';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';

export default function Home({ news }: { news: NewsData }) {
	return (
		<div className={theme.width}>
			<NewsVisual />
			<NewsList news={news.articles} />
		</div>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const apiKey = process.env.NEXT_PUBLIC_API_KEY;
	const category = context.query.category || 'general';

	const instance = axios.create({
		baseURL: `https://newsapi.org/v2/top-headlines`,
	});

	const { data } = await instance.get(
		`?country=us&category=${category}&apiKey=${apiKey}`,
	);

	return {
		props: {
			news: data,
		},
	};
}
