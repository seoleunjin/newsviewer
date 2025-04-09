import { fetchNewsLists } from '@/api';
import NewsList from '@/components/newslist/NewsList';
import NewsVisual from '@/components/newslist/NewsVisual';
import * as theme from '@/styles/theme.css';
import type { NewsData } from '@/type/NewsType';
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
	const rawCategory = context.query.category;

	//category 무조건 strung이 아니다.
	//중복으로 주소가 찍 힐 경우 배열로 인식 ex) ?category=health&category=sports
	//그래서 배열일 경우 첫번째 값을 반환해서 타입을 string이 되게 한다
	const category: string = Array.isArray(rawCategory)
		? rawCategory[0]
		: rawCategory || 'general';

	const { data } = await fetchNewsLists(category);

	return {
		props: {
			news: data,
		},
	};
}
