import { style } from '@vanilla-extract/css';
import { vars } from './globals.css';

export const width = style({
	width: '90%',
	maxWidth: vars.width.wide,
	margin: '0 auto',
});

export const width800 = style({
	width: '90%',
	maxWidth: vars.width.narrow,
	margin: '0 auto',
});

export const sectionSpacingY = style({
	paddingTop: '187px',
	paddingBottom: '120px',
	'@media': {
		'screen and (max-width: 768px)': {
			paddingTop: '127px',
			paddingBottom: '60px',
		},
	},
});

export const sectionPaddingBottom = style({
	paddingBottom: '120px',
	'@media': {
		'screen and (max-width: 768px)': {
			paddingBottom: '60px',
		},
	},
});
