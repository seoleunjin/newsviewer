import * as styles from './newsItem.css';
import { Article, NewsData } from '@/type/NewsType';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ItemBookMark from '@/public/images/itemBookMark.svg';
import Link from 'next/link';
import dayjs from 'dayjs';

export default function NewsItem({
	news,
	item,
}: {
	news: NewsData;
	item: number;
}) {
	const { category, articles } = news;
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
	return (
		<div>
			<ul className={styles.listGrid}>
				{articles.slice(0, item).map(article => {
					const { url, urlToImage, title, publishedAt, source, idx } = article;

					return (
						<li key={url}>
							<div className={styles.imageWrap}>
								<Image
									src={urlToImage || '/images/noImage.jpg'}
									alt={title}
									fill
									style={{ objectFit: 'cover', objectPosition: 'center' }}
									sizes="(max-width: 732px) 90vw, (max-width: 992px) 50vw, 453px"
									// priority
								/>
							</div>
							<div>
								<p className={styles.Name}>{source.name}</p>
								<Link href={`/newsItem/${idx}?category=${category}`}>
									<h2 className={styles.Title}>{title}</h2>
								</Link>
								<div className={styles.newsMeta}>
									<span className={styles.newsMetaDay}>
										{dayjs(publishedAt).format('YYYY.MM.DD')}
									</span>
									<button
										onClick={() => handleBookmark(article)}
										aria-label="북마크">
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
					);
				})}
			</ul>
		</div>
	);
}
