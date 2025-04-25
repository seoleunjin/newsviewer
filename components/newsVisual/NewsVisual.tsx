import * as theme from '@/styles/theme.css';
import * as styles from './newsVisual.css';
import { useEffect, useState } from 'react';
import NewsList from '@/components/newsSection/newsList/NewsList';
import { NewsData } from '@/type/NewsType';
import SearchIcon from '@/public/images/search.svg';

export default function NewsVisual({ news }: { news: NewsData }) {
	const { query, articles } = news;
	const includesHangul = (text: string): boolean =>
		/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
	const [value, setValue] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [filteredNews, setFilteredNews] = useState<NewsData>(news);

	useEffect(() => {
		setValue('');
		setFilteredNews(news);
	}, [news, query]);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const newValue = e.target.value;
		setValue(newValue);

		setErrorMessage('');
		if (includesHangul(newValue)) {
			setErrorMessage('※ 한글은 입력할 수 없습니다.');
		} else {
			setErrorMessage('');
		}
	}

	function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (includesHangul(value)) {
			setErrorMessage('※ 한글은 입력할 수 없습니다.');
			setFilteredNews(news);
		}

		if (value === '') {
			setErrorMessage('※ 검색어를 작성해주세요.');
			setFilteredNews(news);
			return;
		}

		const filteredArticles = articles.filter(article =>
			article.title.toLowerCase().includes(value.toLowerCase()),
		);

		setFilteredNews({ ...news, articles: filteredArticles });
	}

	return (
		<div>
			<div className={theme.visualSpacingY}>
				<h2 className={styles.Title}>
					당신을 위한 빠른 뉴스 요약 <br /> 세상의 소식을 한눈에
				</h2>
				<div className={styles.searchBarWrap}>
					<form onSubmit={handleFormSubmit} className={styles.searchBar}>
						<input
							className={styles.searchInput}
							onChange={handleInputChange}
							type="text"
							value={value}
							placeholder="검색어를 입력해 주세요."
						/>
						<button type="submit" className={styles.searchIcon}>
							<SearchIcon width={17} height={16} />
						</button>
					</form>
					<p className={styles.errorMessage}> {errorMessage}</p>
				</div>
			</div>
			<div className={theme.sectionPaddingBottom}>
				<NewsList news={filteredNews} />
			</div>
		</div>
	);
}
