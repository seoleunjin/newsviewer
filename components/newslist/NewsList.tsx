import * as theme from '@/styles/theme.css';
import * as styles from './newsList.css';
import type { Article } from '@/type/NewsType';
import Image from 'next/image';
import { useState } from 'react';
import ItemBookMark from '@/public/images/itemBookMark.svg';

type NewsListProps = {
	news: Article[];
};

export default function NewsList({ news }: NewsListProps) {
	// 초기 아이템 6개만 보이기
	const [item, setItem] = useState(6);

	//버튼 클릭 시 6개씩 더 보이기
	const addArticle = () => {
		setItem(prev => prev + 6);
	};

	return (
		<div className={theme.sectionPaddingBottom}>
			<div className={theme.width}>
				<ul className={styles.listGrid}>
					{news.slice(0, item).map(article => (
						<li key={article.url} className={styles.itemGrid}>
							<div>
								<Image
									src={article.urlToImage}
									alt={article.title}
									width={400}
									height={250}
									style={{ width: '100%' }}
									unoptimized // 도메인 설정 전엔 이거 필요
								/>
							</div>
							<div>
								<p>{article.source.name}</p>
								<h2>{article.title}</h2>
								<div>
									<span>{article.publishedAt}</span>
									{/* <ItemBookMark /> */}
								</div>
							</div>
						</li>
					))}
				</ul>
				{item < news.length && (
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
