import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';

export const articleHeader = style({
	padding: '36px 0',
	borderBottom: '1px solid #e9e9e9',
});

export const Title = style({
	fontSize: vars.sizes.FONT_XL,
	marginBottom: '24px',
	marginTop: '12px',
	fontWeight: '700',
});

export const altName = style({
	fontSize: vars.sizes.FONT_SM,
	color: vars.colors.neutral[100],
	lineHeight: '100%',
	marginBottom: '12px',
});

export const articleContent = style({
	paddingTop: '36px',
});

export const articleTxt = style({
	lineHeight: '160%',
});

export const articleLink = style({
	marginLeft: '10px',
	color: vars.colors.neutral[100],
	borderBottom: `1px solid ${vars.colors.neutral[100]}`,
	transition: 'all 0.2s ease-in',

	selectors: {
		'&:hover': {
			color: vars.themeColor.color.mainFontColor,
			borderBottom: `1px solid ${vars.themeColor.color.mainFontColor}`,
		},
	},
});
