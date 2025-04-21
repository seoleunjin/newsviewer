import Link from 'next/link';
import React from 'react';
import '@/styles/globals.css';
import * as styles from './layout.css';
import * as theme from '@/styles/theme.css';
import ThemeProvider from '@/context/ThemeProvider';
import BookmarkIcon from '@/public/images/bookMark.svg';
import DarkModeBtn from '@/components/Buttons/DarkModeBtn';

type HeaderProps = {
	children: React.ReactNode;
};

const Layout: React.FC<HeaderProps> = ({ children }) => {
	return (
		<ThemeProvider>
			<header className={styles.header}>
				<div className={theme.width}>
					<div className={styles.grid}>
						<Link href="/">
							<h2 className={styles.logo}>
								News<span className={styles.span}>ly</span>
							</h2>
						</Link>
						<nav className={styles.grid}>
							<Link href="/bookMark">
								<BookmarkIcon
									className={styles.bookmark}
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
