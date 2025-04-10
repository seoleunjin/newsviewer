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
			<ul className={styles.listGrid}>
				{bookMarkLists.map(bookMarkItem => (
					<li key={bookMarkItem.url} className={styles.itemGrid}>
						<div className={styles.contextWrap}>
							<p className={styles.altName}>{bookMarkItem.source.name}</p>
							<Link href={bookMarkItem.url} target="_blank">
								<h2 className={styles.altTitle}>{bookMarkItem.title}</h2>
							</Link>
							<span className={styles.newsMetaDay}>
								{dayjs(bookMarkItem.publishedAt).format('YYYY.MM.DD')}
							</span>
						</div>
						<div className={styles.imageWrap}>
							<Image
								src={bookMarkItem.urlToImage || '/images/noImage.jpg'}
								alt={bookMarkItem.title}
								fill
								style={{ objectFit: 'cover' }}
								unoptimized
								priority
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
