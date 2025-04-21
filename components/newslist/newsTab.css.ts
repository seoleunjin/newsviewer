import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';

export const tabBtnBox = style({
	display: 'flex',
	justifyContent: 'center',
	marginBottom: '36px',
});

export const tabBtnWrap = style({
	display: 'flex',
	flexWrap: 'nowrap',
	overflowX: 'auto',
	whiteSpace: 'nowrap',
	gap: '4px',
	WebkitOverflowScrolling: 'touch',
	scrollbarWidth: 'none',
	selectors: {
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
});

export const tabBtn = style({
	cursor: 'pointer',
	padding: '14px 16px',
	display: 'inline-block',
	borderRadius: '8px',
	fontSize: vars.sizes.FONT_SM,
	letterSpacing: '0',
	transition: 'all 0.2s ease-in',
	boxSizing: 'border-box',
	lineHeight: '100%',

	selectors: {
		'&:hover': {
			background: vars.themeColor.color.tabBackground,
			color: vars.colors.primary[200],
		},
	},

	'@media': {
		'screen and (max-width: 650px)': {
			padding: '12px 14px',
			fontSize: vars.sizes.FONT_XS,
		},
	},
});

export const activeTabBtn = style({
	cursor: 'pointer',
	padding: '14px 16px',
	display: 'inline-block',
	borderRadius: '8px',
	fontSize: vars.sizes.FONT_SM,
	transition: 'all 0.2s ease-in',
	letterSpacing: '0',
	lineHeight: '100%',
	boxSizing: 'border-box',
	background: vars.themeColor.color.tabBackground,
	color: vars.colors.primary[200],
});
