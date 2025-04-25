import * as styles from './newsList.css';
import type { NewsData } from '@/type/NewsType';
import { useEffect, useState } from 'react';
import NewsTab from '../../category/NewsTab';
import NewsItem from '../newsItem/NewsItem';

export default function NewsList({ news }: { news: NewsData }) {
	const { category, articles } = news;
	// 더보기 버튼
	// 초기 아이템 6개만 보이기
	const [item, setItem] = useState(6);

	useEffect(() => {
		setItem(6);
	}, [category]);

	//버튼 클릭 시 6개씩 더 보이기
	const addArticle = () => {
		setItem(prev => prev + 6);
	};

	return (
		<div>
			<NewsTab></NewsTab>
			<div>
				<NewsItem news={news} item={item}></NewsItem>
				{item < articles.length && (
					<div className={styles.MoreBtnWrap}>
						<button onClick={addArticle} className={styles.MoreBtn}>
							더보기
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
