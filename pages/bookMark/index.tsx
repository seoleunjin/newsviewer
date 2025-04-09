import * as theme from '@/styles/theme.css';
import { Article } from '@/type/NewsType';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BookMarkPage() {
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
			<div className={`${theme.width} ${theme.sectionSpacingY}`}>
				<ul>
					{bookMarkLists.map(bookMarkItem => (
						<li key={bookMarkItem.url}>
							<div>
								<Image
									src={bookMarkItem.urlToImage || '/images/noImage.jpg'}
									alt={bookMarkItem.title}
									width={200}
									height={200}
									style={{ objectFit: 'cover' }}
									unoptimized
									priority
								/>
							</div>
							<div>
								<p>{bookMarkItem.source.name}</p>
								<Link href={bookMarkItem.url} target="_blank">
									<h2>{bookMarkItem.title}</h2>
								</Link>
								<span>
									{dayjs(bookMarkItem.publishedAt).format('YYYY.MM.DD')}
								</span>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
