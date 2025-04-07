import {
	createGlobalTheme,
	globalFontFace,
	globalStyle,
	createThemeContract,
	createTheme,
} from '@vanilla-extract/css';

export const global = createGlobalTheme(':root', {
	colors: {
		primary: {
			100: '#E0F7FA',
			200: '#06B6D4',
		},
		neutral: {
			0: '#fff',
			50: '#f7f7f7',
			100: '#94A3B8',
			150: '#1B1B1B',
			200: '#0F172A',
		},
	},
	sizes: {
		FONT_SM: '1.6rem',
		FONT_RE: '1.8rem',
		FONT_MD: '2.2rem',
		FONT_LG: '2.4rem',
		FONT_XL: '3.2rem',
		FONT_2XL: '3.6rem',
		FONT_3XL: '4.8rem',
	},
	width: {
		wide: '1440px',
		narrow: '800px',
	},
	mediaQueries: {
		SCREEN_SM: 'screen and (min-width: 640px)',
		SCREEN_MD: 'screen and (min-width: 768px)',
		SCREEN_LG: 'screen and (min-width: 1024px)',
		SCREEN_XL: 'screen and (min-width: 1280px)',
		SCREEN_2XL: 'screen and (min-width: 1530px)',
		SCREEN_3XL: 'screen and (min-width: 1536px)',
		SCREEN_4XL: 'screen and (min-width: 1850px)',
		SCREEN_5XL: 'screen and (min-width: 2000px)',
		SCREEN_6XL: 'screen and (min-width: 2300px)',
	},
});

const themeColor = createThemeContract({
	color: {
		mainBackground: null,
		tabBackground: null,
		mainFontColor: null,
		footerBackground: null,
		moreBtnBackground: null,
		moreBtnText: null,
	},
});

export const lightTheme = createTheme(themeColor, {
	color: {
		mainBackground: global.colors.neutral[0],
		tabBackground: global.colors.primary[100],
		mainFontColor: global.colors.neutral[200],
		footerBackground: global.colors.neutral[50],
		moreBtnBackground: global.colors.neutral[200],
		moreBtnText: global.colors.neutral[0],
	},
});

export const darkTheme = createTheme(themeColor, {
	color: {
		mainBackground: global.colors.neutral[200],
		tabBackground: 'rgba(255, 255, 255, 0.15)',
		mainFontColor: global.colors.neutral[0],
		footerBackground: global.colors.neutral[150],
		moreBtnBackground: global.colors.neutral[0],
		moreBtnText: global.colors.neutral[200],
	},
});

export const vars = { ...global, themeColor };

// 전체 기본 설정
globalStyle('*', {
	boxSizing: 'border-box',
	wordBreak: 'keep-all',
	margin: 0,
	padding: 0,
	border: 0,
	listStyle: 'none',
});

globalStyle('html', {
	overflowY: 'scroll',
	fontSize: '62.5%',
	fontFamily: 'Pretendard',
});

globalStyle('body', {
	background: vars.themeColor.color.mainBackground,
	transition: 'all 0.25s linear',
	fontSize: vars.sizes.FONT_RE,
	letterSpacing: '-0.025em',
	lineHeight: '120%',
	fontWeight: '400',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
	color: vars.themeColor.color.mainFontColor,
	fontSize: vars.sizes.FONT_RE,
	letterSpacing: '-0.025em',
	lineHeight: '120%',
	fontWeight: '400',
});

globalStyle(
	'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section',
	{
		display: 'block',
	},
);

globalStyle('legend', {
	position: 'absolute',
	fontSize: 0,
	lineHeight: 0,
	textIndent: '-9999em',
	overflow: 'hidden',
});

globalStyle('label, input, button, select, img', {
	verticalAlign: 'middle',
	fontSize: '1em',
});

globalStyle('input, button', {
	margin: 0,
	padding: 0,
	fontSize: '1em',
});

globalStyle('input[type="submit"], button', {
	cursor: 'pointer',
});

globalStyle('table', {
	borderCollapse: 'collapse',
	borderSpacing: '0 5px',
});

globalStyle('textarea, select', {
	fontSize: '1em',
});

globalStyle('select', {
	margin: 0,
});

globalStyle('p', {
	margin: 0,
	padding: 0,
	wordBreak: 'break-all',
});

globalStyle('hr', {
	display: 'none',
});

globalStyle('pre', {
	overflowX: 'scroll',
	fontSize: '1.1em',
});

globalStyle('a', {
	textDecoration: 'none',
});

globalStyle('input[type="text"], input[type="password"], textarea', {
	transition: 'all 0.30s ease-in-out',
	outline: 'none',
	border: 'none',
});

globalFontFace('BookkMyungjo-Bd', {
	src: 'url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/BookkMyungjo-Bd.woff2") format("woff2")',
	fontWeight: '700',
	fontStyle: 'normal',
});

globalStyle('a', {
	textDecoration: 'none',
	color: vars.themeColor.color.mainFontColor,
});

globalStyle('button', {
	color: vars.themeColor.color.mainFontColor,
	fontFamily: 'inherit',
	cursor: 'pointer',
	background: 'transparent',
	padding: '0',
	margin: '0',
});
