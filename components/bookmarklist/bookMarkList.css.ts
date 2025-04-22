import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';

export const listGrid = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	gap: '40px',

	'@media': {
		'screen and (max-width: 1024px)': {
			gridTemplateColumns: 'repeat(1, 1fr)',
			gap: '40px',
		},
	},
});

export const itemGrid = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

export const contextWrap = style({
	width: '62%',
});

export const imageWrap = style({
	width: '36%',
	borderRadius: '8px',
	height: '160px',
	overflow: 'hidden',
	position: 'relative',
	'@media': {
		'screen and (max-width: 768px)': {
			height: '120px',
		},
		'screen and (max-width: 650px)': {
			height: '87px',
		},
	},
});

export const Name = style({
	fontSize: vars.sizes.FONT_SM,
	color: vars.colors.neutral[100],
	lineHeight: '100%',
	'@media': {
		'screen and (max-width: 650px)': {
			fontSize: vars.sizes.FONT_XS,
		},
	},
});

export const Title = style({
	fontSize: vars.sizes.FONT_MD,
	lineHeight: '130%',
	fontWeight: '700',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	display: '-webkit-box',
	WebkitLineClamp: 2,
	WebkitBoxOrient: 'vertical',
	margin: '8px 0 16px 0',
	'@media': {
		'screen and (max-width: 650px)': {
			fontSize: vars.sizes.FONT_RE,
		},
	},
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

export const emptyBookMark = style({
	fontSize: vars.sizes.FONT_RE,
	textAlign: 'center',
});
