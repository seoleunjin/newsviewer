import * as styles from './newsList.css';
import type { Article, NewsData } from '@/type/NewsType';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ItemBookMark from '@/public/images/itemBookMark.svg';
import NewsTab from './NewsTab';
import Link from 'next/link';
import dayjs from 'dayjs';

export default function NewsList({ news }: { news: NewsData }) {
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
	// 더보기 버튼
	// 초기 아이템 6개만 보이기
	const [item, setItem] = useState(6);

	//버튼 클릭 시 6개씩 더 보이기
	const addArticle = () => {
		setItem(prev => prev + 6);
	};

	return (
		<div>
			<NewsTab></NewsTab>
			<div>
				<ul className={styles.listGrid}>
					{articles.slice(0, item).map(article => {
						const { url, urlToImage, title, publishedAt, source, idx } =
							article; // 구조분해 할당
						return (
							<li key={url}>
								<div className={styles.imageWrap}>
									<Image
										src={urlToImage || '/images/noImage.jpg'}
										alt={title}
										fill
										style={{ objectFit: 'cover', objectPosition: 'top center' }}
										unoptimized
										priority
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
						);
					})}
				</ul>
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
