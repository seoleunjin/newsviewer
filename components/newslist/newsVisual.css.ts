import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';

export const Title = style({
	fontSize: vars.sizes.FONT_3XL,
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
	maxWidth: '500px',
	width: '100%',
	margin: '0 auto',
	marginTop: '36px',

	'@media': {
		'screen and (max-width: 768px)': {
			marginTop: '24px',
		},
	},
});

export const searchBar = style({
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	padding: '14px 18px',
	borderRadius: '100px',
	border: `1px solid ${vars.colors.neutral[100]}`,
	'@media': {
		'screen and (max-width: 650px)': {
			padding: '12px 14px',
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

export const errorMessage = style({
	marginTop: '12px',
	fontSize: vars.sizes.FONT_SM,
	color: vars.colors.neutral[100],
	'@media': {
		'screen and (max-width: 650px)': {
			fontSize: vars.sizes.FONT_XS,
		},
	},
});
