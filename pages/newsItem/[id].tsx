import { fetchNewsLists } from '@/api';
import type { Article } from '@/type/NewsType';
import { GetServerSidePropsContext } from 'next';

export default function NewsItemPage({ article }: { article: Article | null }) {
	if (!article) {
		return <div>뉴스를 찾을 수 없습니다.</div>;
	}

	return (
		<div>
			<h1>{article.title}</h1>
			<p>{article.publishedAt}</p>
			<p>{article.description}</p>
			<h1>{article.title}</h1>
			<p>{article.publishedAt}</p>
			<p>{article.description}</p>
			<h1>{article.title}</h1>
			<p>{article.publishedAt}</p>
			<p>{article.description}</p>
		</div>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { id } = context.params as { id: string };
	const rawCategory = context.query.category;

	const category = Array.isArray(rawCategory)
		? rawCategory[0]
		: rawCategory || 'general';

	const { data } = await fetchNewsLists(category);

	const article = data.articles.find(
		(item: Article) => item.publishedAt === id,
	);

	return {
		props: {
			article: article || null,
		},
	};
}
