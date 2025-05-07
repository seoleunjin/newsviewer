import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import DarkModeIcon from '@/public/images/darkMode.svg';
import * as styles from './darkmodebtn.css';

const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return <div />;

	return (
		<div>
			<button
				onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
				aria-label="다크모드 버튼">
				<DarkModeIcon
					className={`${styles.modeIcon} ${resolvedTheme === 'dark' ? 'active' : ''}`}
				/>
			</button>
		</div>
	);
};

export default DarkModeBtn;
