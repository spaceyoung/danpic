import { css } from '@emotion/react';
import Logo from './Logo';
import ThemeToggleSwitch from './ThemeToggleSwitch';

function Header() {
  return (
    <header
      css={css`
        width: 100%;
        height: 72px;
        padding: 0 80px;
        position: sticky;
        left: 0;
        top: 0;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 100%;
        `}
      >
        <Logo />
        <ThemeToggleSwitch />
      </div>
    </header>
  );
}

export default Header;
