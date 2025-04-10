import * as theme from '@/styles/theme.css';
import * as styles from './newsList.css';
import type { Article } from '@/type/NewsType';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ItemBookMark from '@/public/images/itemBookMark.svg';
import NewsTab from './NewsTab';
import Link from 'next/link';
import dayjs from 'dayjs';

type NewsListProps = {
	news: Article[];
	category: string;
};

export default function NewsList({ news, category }: NewsListProps) {
	const [bookMarkList, setBookMarkList] = useState<Article[]>([]);

	// 북마크
	// 컴포넌트가 처음 마운트될 때 LocalStorage에서 불러오기
	useEffect(() => {
		const stored = localStorage.getItem('bookmarks');
		if (stored) {
			setBookMarkList(JSON.parse(stored));
		}
	}, []);

	//  북마크 active
	const bookmarkDup = (article: Article) => {
		return bookMarkList.some(item => item.url === article.url);
	};

	const handleBookmark = (article: Article) => {
		let updated;

		// category 값 추가해서 북마크 저장
		const articleWithCategory = { ...article, category };

		if (bookmarkDup(article)) {
			updated = bookMarkList.filter(item => item.url !== article.url);
			alert('북마크를 취소했습니다.');
		} else {
			updated = [...bookMarkList, articleWithCategory];
			alert('북마크에 추가되었습니다!');
		}

		setBookMarkList(updated);
		localStorage.setItem('bookmarks', JSON.stringify(updated));
	};
	// 더보기 버튼
	// 초기 아이템 6개만 보이기
	const [item, setItem] = useState(6);

	//버튼 클릭 시 6개씩 더 보이기
	const addArticle = () => {
		setItem(prev => prev + 6);
	};

	return (
		<div className={theme.sectionPaddingBottom}>
			<NewsTab></NewsTab>
			<div>
				<ul className={styles.listGrid}>
					{news.slice(0, item).map(article => (
						<li key={article.url}>
							<div className={styles.imageWrap}>
								<Image
									src={article.urlToImage || '/images/noImage.jpg'}
									alt={article.title}
									fill
									style={{ objectFit: 'cover' }}
									unoptimized
									priority
								/>
							</div>
							<div>
								<p className={styles.altName}>{article.source.name}</p>
								<Link href={`/newsItem/${article.idx}?category=${category}`}>
									<h2 className={styles.altTitle}>{article.title}##</h2>
								</Link>
								<div className={styles.newsMeta}>
									<span className={styles.newsMetaDay}>
										{dayjs(article.publishedAt).format('YYYY.MM.DD')}
									</span>
									<button onClick={() => handleBookmark(article)}>
										<ItemBookMark
											className={
												bookmarkDup(article)
													? styles.newsMetaBtnActive
													: styles.newsMetaBtn
											}
										/>
									</button>
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
