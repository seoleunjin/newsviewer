import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';

export const modeIcon = style({
	color: vars.themeColor.color.mainFontColor,
	cursor: 'pointer',
	':hover': {
		color: vars.colors.primary[200],
	},

	selectors: {
		'&.active': {
			color: vars.colors.primary[200],
		},
	},
});
