import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  colors: {
    primary: {
      100: "#06B6D4",
      200: "#E0F7FA",
    },
    neutral: {
      100: "#94A3B8",
      200: "#0F172A",
    },
  },
  sizes: {
    1: "1.6rem",
    2: "1.8rem",
    3: "2.2rem",
    4: "3.2rem",
    5: "3.6rem",
    6: "4.8rem",
  },
});


globalStyle('*', {
  boxSizing: 'border-box',
  wordBreak: 'keep-all',
  margin: 0,
  padding: 0,
  border: 0,
  listStyle: 'none',
});

globalStyle('html', {
  overflowY: 'scroll',
  fontSize: '62.5%',
  background: '#fff',
  fontFamily: 'Pretendard',
});

globalStyle('body', {
  color: vars.colors.neutral[200],
  margin: 0,
  padding: 0,
  fontSize: vars.sizes[2],
  background: '#fff',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: '1em',
});

globalStyle('article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section', {
  display: 'block',
});

globalStyle('legend', {
  position: 'absolute',
  fontSize: 0,
  lineHeight: 0,
  textIndent: '-9999em',
  overflow: 'hidden',
});

globalStyle('label, input, button, select, img', {
  verticalAlign: 'middle',
  fontSize: '1em',
});

globalStyle('input, button', {
  margin: 0,
  padding: 0,
  fontSize: '1em',
});

globalStyle('input[type="submit"], button', {
  cursor: 'pointer',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: '0 5px',
});

globalStyle('textarea, select', {
  fontSize: '1em',
});

globalStyle('select', {
  margin: 0,
});

globalStyle('p', {
  margin: 0,
  padding: 0,
  wordBreak: 'break-all',
});

globalStyle('hr', {
  display: 'none',
});

globalStyle('pre', {
  overflowX: 'scroll',
  fontSize: '1.1em',
});

globalStyle('a', {
  color: '#000',
  textDecoration: 'none',
});


globalStyle('input[type="text"], input[type="password"], textarea', {
  transition: 'all 0.30s ease-in-out',
  outline: 'none',
  border: 'none',
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