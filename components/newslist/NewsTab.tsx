import Link from 'next/link';
import { useRouter } from 'next/router';
import * as styles from './newsTab.css';

const categories = [
	'general',
	'business',
	'entertainment',
	'health',
	'science',
	'sports',
	'technology',
];

export default function NewsTab() {
	const router = useRouter();
	if (!router.isReady) return null;
	const currentCategory = router.query.category || 'general';

	return (
		<div className={styles.tabBtnWrap}>
			{categories.map(category => {
				const isActive = currentCategory === category;
				return (
					<Link
						className={isActive ? styles.activeTabBtn : styles.tabBtn}
						key={category}
						href={`/?category=${category}`}>
						{category}
					</Link>
				);
			})}
		</div>
	);
}
