import { css } from '@emotion/react';
import reset from 'styled-reset';

const globalStyle = (theme) => css`
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff')
      format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff')
      format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
      format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff')
      format('woff');
    font-weight: 800;
    font-style: normal;
  }

  :root {
    font-synthesis: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    min-width: 360px;
    color: ${theme.color.text.body};
    background-color: ${theme.color.background.default};
    ${theme.typograhpy.body};
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  img,
  input,
  select,
  textarea {
    display: block;
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;

export default globalStyle;
