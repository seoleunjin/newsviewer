import { useTheme } from 'next-themes';
import Image from 'next/image';
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
				<Image
					src="/images/darkMode.svg"
					alt="다크모드"
					width={18}
					height={21}></Image>
			</button>
		</div>
	);
};

export default DarkModeBtn;
