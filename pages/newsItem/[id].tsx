import { fetchNewsLists } from '@/api';
import ArticlePage from '@/components/detail/ArticlePage';
import type { Article } from '@/type/NewsType';
import { GetServerSidePropsContext } from 'next';

export default function NewsItemPage({ article }: { article: Article }) {
	return (
		<div>
			<ArticlePage article={article}></ArticlePage>
		</div>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { id } = context.params as { id: string };
	const rawCategory = context.query.category;
	const rawQuery = context.query.q; // 또는 query, search 등

	const category = Array.isArray(rawCategory)
		? rawCategory[0]
		: rawCategory || 'general';
	const query = Array.isArray(rawQuery) ? rawQuery[0] : rawQuery || '';

	const { data } = await fetchNewsLists(category, query);

	const article = data.articles.find(
		(item: Article) => item.publishedAt === id,
	);

	return {
		props: {
			article: article || null,
			query: query,
		},
	};
}
