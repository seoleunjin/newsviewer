import Link from 'next/link';
import React from 'react';
import '@/styles/globals.css';
import * as styles from './layout.css';
import * as theme from '@/styles/theme.css';
import ThemeProvider from '@/context/ThemeProvider';
import BookmarkIcon from '@/public/images/bookMark.svg';
import DarkModeBtn from '@/components/modeButton/DarkModeBtn';
import { usePathname } from 'next/navigation';
import Head from 'next/head';

type HeaderProps = {
	children: React.ReactNode;
};

const Layout: React.FC<HeaderProps> = ({ children }) => {
	const pathname = usePathname();
	const isBookMarkActive = pathname === '/bookMark';

	return (
		<ThemeProvider>
			<Head>
				<title>Newsly</title>
			</Head>
			<header className={styles.header}>
				<div className={theme.width}>
					<div className={styles.grid}>
						<Link href="/">
							<h2 className={styles.logo}>
								News<span className={styles.span}>ly</span>
							</h2>
						</Link>
						<nav className={styles.grid}>
							<Link href="/bookMark" aria-label="북마크 페이지">
								<BookmarkIcon
									className={`${styles.bookmark} ${isBookMarkActive ? styles.bookMarkActive : styles.bookmark}`}
									color="transparent"
									width={16}
									height={21}
								/>
							</Link>
							<DarkModeBtn />
						</nav>
					</div>
				</div>
			</header>
			<div>{children}</div>
			<footer className={styles.footer}>
				<div className={theme.width}>
					<h2 className={styles.flogo}>
						News<span className={styles.span}>ly</span>
					</h2>
					<p className={styles.p}>© 2025 Newsly. All rights reserved.</p>
				</div>
			</footer>
		</ThemeProvider>
	);
};

export default Layout;
