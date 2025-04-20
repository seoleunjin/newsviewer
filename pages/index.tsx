import { fetchNewsLists } from '@/api';
import NewsVisual from '@/components/newslist/NewsVisual';
import * as theme from '@/styles/theme.css';
import type { Article, NewsData } from '@/type/NewsType';
import { GetServerSidePropsContext } from 'next';

export default function Home({ news }: { news: NewsData }) {
	return (
		<div className={theme.width}>
			<NewsVisual query={news.query} news={news.articles} />
		</div>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const rawCategory = context.query.category;
	const rawQuery = context.query.query;

	const category: string = Array.isArray(rawCategory)
		? rawCategory[0]
		: rawCategory || 'general';

	const query: string = Array.isArray(rawQuery) ? rawQuery[0] : rawQuery || '';

	try {
		const { data } = await fetchNewsLists(category, query);

		const updatedArticles = data.articles.map((item: Article) => ({
			...item,
			idx: item.publishedAt,
		}));

		const updatedData = {
			...data,
			articles: updatedArticles,
			category: category,
			query: query,
		};

		return {
			props: {
				news: updatedData,
			},
		};
	} catch (error) {
		console.error('뉴스 불러오기 실패:', error);
		// 예외 처리 후 404 페이지를 반환하도록 수정
		return {
			notFound: true,
		};
	}
}
