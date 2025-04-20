import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';

export const Title = style({
	fontSize: vars.sizes.FONT_3XL,
	lineHeight: '130%',
	fontWeight: '700',
	textAlign: 'center',
});
