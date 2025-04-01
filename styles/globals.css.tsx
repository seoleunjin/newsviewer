import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  colors: {
    grey: {
      50: "hsl(265, 55%, 96%)",
      100: "hsl(265, 19%, 88%)",
      200: "hsl(265, 7%, 70%)",
      300: "hsl(265, 6%, 66%)",
      400: "hsl(265, 4%, 57%)",
      500: "hsl(265, 3%, 53%)",
      600: "hsl(265, 4%, 42%)",
      700: "hsl(265, 4%, 31%)",
      800: "hsl(276, 5%, 20%)",
      900: "hsl(280, 5%, 13%)",
    },
    primary: {
      50: "#c8b3ce",
      100: "#a07aaa",
      200: "#884c97",
      300: "#843897",
      400: "#732392",
      500: "#5a097a",
      600: "#480264",
      700: "#3d0264",
    },
    success: {
      100: "#a2f0bc",
      500: "#12bd4b",
    },
    error: {
      100: "#f1acc9",
      500: "#a10c4a",
    },
  },
  sizes: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    16: "4rem",
    20: "5rem",
    40: "10rem",
  },
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  backgroundColor: vars.colors.grey[50],
  color: "#252525",
  fontFamily: '"BookkMyungjo-Bd"',
});

globalFontFace("BookkMyungjo-Bd", {
  src: 'url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/BookkMyungjo-Bd.woff2") format("woff2")',
  fontWeight: "700",
  fontStyle: "normal",
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("button", {
  fontFamily: "inherit",
  cursor: "pointer",
});