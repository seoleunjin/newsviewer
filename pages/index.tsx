import { fetchNewsLists } from '@/api';
import NewsList from '@/components/newslist/NewsList';
import NewsVisual from '@/components/newslist/NewsVisual';
import * as theme from '@/styles/theme.css';
import type { Article, NewsData } from '@/type/NewsType';
import { GetServerSidePropsContext } from 'next';

export default function Home({ news }: { news: NewsData }) {
	return (
		<div className={theme.width}>
			<NewsVisual />
			<NewsList news={news.articles} category={news.category} />
		</div>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const rawCategory = context.query.category;

	const category: string = Array.isArray(rawCategory)
		? rawCategory[0]
		: rawCategory || 'general';

	const { data } = await fetchNewsLists(category);

	// publishedAt 값을 idx로 추가
	const updatedArticles = data.articles.map((item: Article) => ({
		...item,
		idx: item.publishedAt,
	}));

	const updatedData = {
		...data,
		articles: updatedArticles,
		category: category,
	};

	return {
		props: {
			news: updatedData,
		},
	};
}
