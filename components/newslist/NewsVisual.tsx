import * as theme from '@/styles/theme.css';
import * as styles from './newsVisual.css';
import { useEffect, useState } from 'react';
import NewsList from '@/components/newslist/NewsList'; // NewsList 컴포넌트 임포트

export default function NewsVisual({ query, news }) {
	const [value, setValue] = useState(query);
	const [filteredArticles, setFilteredArticles] = useState(news);

	// 카테고리가 바뀌면 검색어도 초기화
	useEffect(() => {
		setValue('');
		setFilteredArticles(news);
	}, [news, query]);

	function handleInputChange(e) {
		const newValue = e.target.value;
		setValue(newValue);

		const filtered = news.filter(article =>
			article.title.toLowerCase().includes(newValue.toLowerCase()),
		);
		setFilteredArticles(filtered);
	}

	function handleKeyDown(e) {
		if (e.key === 'Enter') e.preventDefault();
	}

	return (
		<div>
			<div className={theme.sectionSpacingY}>
				<h2 className={styles.Title}>
					당신을 위한 빠른 뉴스 요약 <br /> 세상의 소식을 한눈에
				</h2>
				<div>
					<form action="" onKeyDown={handleKeyDown}>
						<input
							onChange={handleInputChange}
							type="text"
							value={value}
							placeholder="검색어를 입력해 주세요."
						/>
					</form>
				</div>
			</div>
			<div className={theme.sectionPaddingBottom}>
				<NewsList news={filteredArticles} category={query} />
			</div>
		</div>
	);
}
