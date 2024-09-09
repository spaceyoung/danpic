import { css } from '@emotion/react';

function Layout({ children }) {
  return (
    <main
      css={css`
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
        padding: 0 40px;
      `}
    >
      {children}
    </main>
  );
}

export default Layout;
