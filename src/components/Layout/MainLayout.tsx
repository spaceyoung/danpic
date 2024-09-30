import React from 'react';
import { css } from '@emotion/react';
import { mediaQuery } from '@styles/breakpoints';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
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
        ${mediaQuery[2]} {
          padding: 0 1.5rem;
        }
      `}
    >
      {children}
    </main>
  );
}

export default MainLayout;
