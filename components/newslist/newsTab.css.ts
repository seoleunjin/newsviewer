import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';
import { wrap } from 'module';

export const tabBtnWrap = style({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
	gap: '4px',
	marginBottom: '36px',
});

export const tabBtn = style({
	cursor: 'pointer',
	padding: '16px 14px',
	display: 'inline-block',
	borderRadius: '8px',
	fontSize: vars.sizes.FONT_SM,
	transition: 'all 0.2s ease-in',
	boxSizing: 'border-box',
	lineHeight: '100%',

	selectors: {
		'&:hover': {
			background: vars.themeColor.color.tabBackground,
			color: vars.colors.primary[200],
		},
	},
});

export const activeTabBtn = style({
	cursor: 'pointer',
	padding: '16px 14px',
	display: 'inline-block',
	borderRadius: '8px',
	fontSize: vars.sizes.FONT_SM,
	transition: 'all 0.2s ease-in',
	lineHeight: '100%',
	boxSizing: 'border-box',
	background: vars.themeColor.color.tabBackground,
	color: vars.colors.primary[200],
});
