import React from 'react';
import * as theme from '@/styles/theme.css';
import * as styles from './articlePage.css';
import Image from 'next/image';
import { Article } from '@/type/NewsType';
import dayjs from 'dayjs';
import Link from 'next/link';

export default function ArticlePage({ article }: { article: Article }) {
	return (
		<div className={theme.width800}>
			<div className={theme.sectionSpacingY}>
				<Image
					src={article.urlToImage || '/images/noImage.jpg'}
					alt={article.title}
					width={'800'}
					height={'100'}
					style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
					unoptimized
					priority
				/>
				<div className={styles.articleHeader}>
					<span className={styles.Name}>{article.source.name}</span>
					<h2 className={styles.Title}>{article.title}</h2>
					<span className={styles.Name}>
						{dayjs(article.publishedAt).format('YYYY.MM.DD')}
					</span>
				</div>
				<div className={styles.articleContent}>
					<span className={styles.articleTxt}>{article.content}...</span>
					<Link
						className={styles.articleLink}
						href={article.url}
						target="_blank">
						전문 보러가기
					</Link>
				</div>
			</div>
		</div>
	);
}
