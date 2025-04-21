import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';

export const Title = style({
	fontSize: vars.sizes.FONT_3XL,
	lineHeight: '130%',
	fontWeight: '700',
	textAlign: 'center',

	'@media': {
		'screen and (max-width: 650px)': {
			fontSize: vars.sizes.FONT_XL,
		},
	},
});

export const searchBarWrap = style({
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	marginTop: '36px',
});

export const searchBar = style({
	display: 'flex',
	justifyContent: 'space-between',
	maxWidth: '500px',
	width: '100%',
	padding: '14px 18px',
	borderRadius: '100px',
	border: `1px solid ${vars.colors.neutral[100]}`,
	'@media': {
		'screen and (max-width: 650px)': {
			padding: '12px 16px',
		},
	},
});

export const searchInput = style({
	fontSize: vars.sizes.FONT_SM,
	color: vars.colors.neutral[100],
	lineHeight: 1,
	background: 'transparent',

	selectors: {
		'&::placeholder': {
			color: vars.colors.neutral[100],
		},
	},

	'@media': {
		'screen and (max-width: 650px)': {
			fontSize: vars.sizes.FONT_XS,
		},
	},
});

export const searchIcon = style({
	color: vars.colors.neutral[100],
	lineHeight: 0.8,
});
