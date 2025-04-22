import * as styles from './bookMarkList.css';
import { Article } from '@/type/NewsType';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

export default function BookMarkList() {
	const [bookMarkLists, setBookMarkLists] = useState<Article[]>([]);

	useEffect(() => {
		const stored = localStorage.getItem('bookmarks');
		if (stored) {
			setBookMarkLists(JSON.parse(stored));
		} else {
			setBookMarkLists([]);
		}
	}, []);

	return (
		<div>
			{/* 삼항 연산자  ? 참 : 거짓 */}
			{bookMarkLists.length === 0 ? (
				<p className={styles.emptyBookMark}>
					마음에 드는 기사를 북마크하면 여기에 모여요!
				</p>
			) : (
				<ul className={styles.listGrid}>
					{bookMarkLists.map(bookMarkItem => {
						const {
							url,
							source,
							title,
							publishedAt,
							urlToImage,
							idx,
							category,
						} = bookMarkItem; // 구조 분해 할당
						return (
							<li key={url} className={styles.itemGrid}>
								<div className={styles.contextWrap}>
									<p className={styles.Name}>{source.name}</p>
									<Link href={`/newsItem/${idx}?category=${category}`}>
										<h2 className={styles.Title}>{title}</h2>
									</Link>
									<span className={styles.newsMetaDay}>
										{dayjs(publishedAt).format('YYYY.MM.DD')}
									</span>
								</div>
								<div className={styles.imageWrap}>
									<Image
										src={urlToImage || '/images/noImage.jpg'}
										alt={title}
										fill
										style={{ objectFit: 'cover' }}
										unoptimized
										priority
									/>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
