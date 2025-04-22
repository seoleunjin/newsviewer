import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';

// 뉴스 리스트
export const listGrid = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '60px 40px',
	marginBottom: '96px',

	'@media': {
		'screen and (max-width: 1024px)': {
			gridTemplateColumns: 'repeat(2, 1fr)',
		},
		'screen and (max-width: 768px)': {
			marginBottom: '48px',
		},
		'screen and (max-width: 650px)': {
			gridTemplateColumns: 'repeat(1, 1fr)',
			gap: '40px 0',
		},
	},
});

export const imageWrap = style({
	borderRadius: '16px',
	height: '250px',
	overflow: 'hidden',
	position: 'relative',
	marginBottom: '24px',
	'@media': {
		'screen and (max-width: 650px)': {
			height: '200px',
		},
	},
});

export const Name = style({
	fontSize: vars.sizes.FONT_SM,
	color: vars.colors.neutral[100],
	lineHeight: '100%',
	marginBottom: '12px',

	'@media': {
		'screen and (max-width: 650px)': {
			fontSize: vars.sizes.FONT_XS,
		},
	},
});

export const Title = style({
	fontSize: vars.sizes.FONT_MD,
	fontWeight: '700',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	display: '-webkit-box',
	WebkitLineClamp: 2,
	WebkitBoxOrient: 'vertical',
});

export const newsMeta = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: '24px',
});

export const newsMetaDay = style({
	fontSize: vars.sizes.FONT_SM,
	color: vars.colors.neutral[100],
	lineHeight: '100%',
	letterSpacing: 0,
	'@media': {
		'screen and (max-width: 650px)': {
			fontSize: vars.sizes.FONT_XS,
		},
	},
});

export const newsMetaBtn = style({
	color: vars.colors.neutral[100],
	transition: 'all 0.2s ease-in',

	selectors: {
		'&:hover': {
			color: vars.colors.primary[200],
		},
	},
});

export const newsMetaBtnActive = style({
	color: vars.colors.primary[200],
	transition: 'all 0.2s ease-in',
});

// 더보기 버튼
export const MoreBtnWrap = style({
	display: 'flex',
	justifyContent: 'center',
});

export const MoreBtn = style({
	fontSize: vars.sizes.FONT_RE,
	fontWeight: '700',
	color: vars.themeColor.color.moreBtnText,
	background: vars.themeColor.color.moreBtnBackground,
	width: '170px',
	padding: '14px 0',
	borderRadius: '100px',
	letterSpacing: '0em',
	display: 'inline-block',

	':hover': {
		background: vars.colors.primary[200],
		transition: 'all 0.2s ease',
		color: vars.colors.neutral[0],
	},

	'@media': {
		'screen and (max-width: 1024px)': {
			':hover': {
				background: vars.colors.neutral[200],
			},
		},
	},
});
