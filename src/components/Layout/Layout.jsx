import { css } from '@emotion/react';

function Layout({ children }) {
  return (
    <main
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1080px;
        min-height: calc(100vh - 72px);
        margin: 0 auto;
        padding: 0 40px;
      `}
    >
      {children}
    </main>
  );
}

export default Layout;
