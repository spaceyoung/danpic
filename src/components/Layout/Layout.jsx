import { css } from '@emotion/react';

function Layout({ children }) {
  return (
    <main
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1080px;
        min-height: calc(100vh - 4.5rem);
        margin: 0 auto;
        padding: 0 2.5rem;
      `}
    >
      {children}
    </main>
  );
}

export default Layout;
