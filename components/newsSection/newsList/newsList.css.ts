import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';

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
