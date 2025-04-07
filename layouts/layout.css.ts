import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';

// 해더

export const header = style({
	padding: '18px 0',
	position: 'fixed',
	width: '100%',
	zIndex: '9999',
	background: vars.themeColor.color.mainBackground,
});

export const grid = style({
	display: 'flex',
	justifyContent: 'space-between',
	gap: '24px',
});

export const logo = style({
	fontSize: vars.sizes.FONT_LG,
	fontWeight: '700',
});

export const span = style({
	color: vars.colors.primary[200],
});

export const bookmark = style({
	color: vars.themeColor.color.mainFontColor,
	cursor: 'pointer',

	':hover': {
		color: vars.colors.primary[200],
	},
});

// 푸터
export const footer = style({
	padding: '40px 0',
	background: vars.themeColor.color.footerBackground,
});

export const flogo = style({
	fontSize: vars.sizes.FONT_MD,
	fontWeight: '700',
});

export const p = style({
	fontSize: vars.sizes.FONT_SM,
	color: vars.colors.neutral[100],
	marginTop: '16px',
});
