import * as styles from './newsList.css';
import type { NewsData } from '@/type/NewsType';
import { useEffect, useState } from 'react';
import NewsTab from '../../category/NewsTab';
import dynamic from 'next/dynamic';

const LazyNewsItem = dynamic(() => import('../newsItem/NewsItem'));

export default function NewsList({ news }: { news: NewsData }) {
	const { category, articles } = news;
	const [item, setItem] = useState(6);
	const [showItem, setShowItem] = useState(true);

	useEffect(() => {
		setItem(6);
		setShowItem(true);
	}, [category]);

	const addArticle = () => {
		setItem(prev => prev + 6);
		setShowItem(true);
	};

	return (
		<div>
			<NewsTab></NewsTab>
			<div>
				{showItem && <LazyNewsItem news={news} item={item} />}
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
