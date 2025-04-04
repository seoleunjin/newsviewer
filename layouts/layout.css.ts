import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/globals.css";

export const width = style({
    width: "96%",
    maxWidth: vars.width.wide,
    margin: "0 auto",
});

export const header = style({
    padding: "18px 0",
})

export const grid = style({
    display:"flex",
    justifyContent: "space-between",
    alignItems:"center",
    gap:"24px"
})

export const logo = style({
    fontSize: vars.sizes.FONT_LG,
    color: vars.themeColor.color.mainFontColor,
})

export const span = style({
    color: vars.colors.primary[100],
})

export const bookmark = style({
  color: vars.themeColor.color.mainFontColor,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      color: vars.colors.primary[200],
    },
  },
})
