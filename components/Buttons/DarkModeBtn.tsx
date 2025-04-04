import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return <div />;

	return (
		<div>
			<button
				onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
				aria-label="DarkModeBtn">
				{resolvedTheme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
			</button>
		</div>
	);
};

export default DarkModeBtn;
