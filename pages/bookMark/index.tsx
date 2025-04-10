import BookMarkList from '@/components/bookmarklist/BookMarkList';
import * as theme from '@/styles/theme.css';

export default function BookMarkPage() {
	return (
		<div className={`${theme.width} ${theme.sectionSpacingY}`}>
			<BookMarkList></BookMarkList>
		</div>
	);
}
