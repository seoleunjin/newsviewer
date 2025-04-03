import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
  createThemeContract,
  createTheme
} from "@vanilla-extract/css";

export const global = createGlobalTheme(":root", {
  colors: {
    primary: {
      100: "#06B6D4",
      200: "#E0F7FA",
    },
    neutral: {
      0:"#fff",
      100: "#94A3B8",
      200: "#0F172A",
    },
  },
  sizes: {
    16: "1.6rem",
    18: "1.8rem",
    22: "2.2rem",
    24: "2.4rem",
    32: "3.2rem",
    36: "3.6rem",
    48: "4.8rem",
  },
  width: {
    wide: "1440px",
    narrow: "800px",
  }
});

const themeColor = createThemeContract({
  color: {
    mainBackground: null,
    mainFontColor: null,
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    mainBackground: "#fff",
    mainFontColor: "#0F172A",
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    mainBackground: "#0F172A",
    mainFontColor: "#fff",
  },
});


export const vars = { ...global, themeColor };


// 전체 기본 설정
globalStyle("*", {
  boxSizing: "border-box",
  wordBreak: "keep-all",
  margin: 0,
  padding: 0,
  border: 0,
  listStyle: "none",
});

globalStyle("html", {
  overflowY: "scroll",
  fontSize: "62.5%",
  fontFamily: "Pretendard",
});

globalStyle('body', {
  background: vars.themeColor.color.mainBackground,
  transition: 'all 0.25s linear',
  fontSize: vars.sizes[18],
  letterSpacing: "-0.025em",
  lineHeight: "120%",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  color: vars.themeColor.color.mainFontColor,
});

globalStyle(
  "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section",
  {
    display: "block",
  },
);

globalStyle("legend", {
  position: "absolute",
  fontSize: 0,
  lineHeight: 0,
  textIndent: "-9999em",
  overflow: "hidden",
});

globalStyle("label, input, button, select, img", {
  verticalAlign: "middle",
  fontSize: "1em",
});

globalStyle("input, button", {
  margin: 0,
  padding: 0,
  fontSize: "1em",
});

globalStyle('input[type="submit"], button', {
  cursor: "pointer",
});

globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: "0 5px",
});

globalStyle("textarea, select", {
  fontSize: "1em",
});

globalStyle("select", {
  margin: 0,
});

globalStyle("p", {
  margin: 0,
  padding: 0,
  wordBreak: "break-all",
});

globalStyle("hr", {
  display: "none",
});

globalStyle("pre", {
  overflowX: "scroll",
  fontSize: "1.1em",
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle('input[type="text"], input[type="password"], textarea', {
  transition: "all 0.30s ease-in-out",
  outline: "none",
  border: "none",
});

globalFontFace("BookkMyungjo-Bd", {
  src: 'url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/BookkMyungjo-Bd.woff2") format("woff2")',
  fontWeight: "700",
  fontStyle: "normal",
});

globalStyle("a", {
  textDecoration: "none",
  color: vars.themeColor.color.mainFontColor,
});

globalStyle("button", {
  color: vars.themeColor.color.mainFontColor,
  fontFamily: "inherit",
  cursor: "pointer",
  background: "transparent",
  padding:"0",
  margin:"0",
});