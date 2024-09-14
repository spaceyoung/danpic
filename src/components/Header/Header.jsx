import { useTheme, css } from '@emotion/react';
import { useIsBorderActive } from '@contexts/IsBorderActiveContext';
import { Logo, ThemeToggleSwitch } from '@components/Header';
import { mediaQuery } from '@styles/breakpoints';

function Header() {
  const isBorderActive = useIsBorderActive();
  const theme = useTheme();

  return (
    <header
      css={css`
        width: 100%;
        height: 4.5rem;
        padding: 0 2rem;
        border-bottom: 1px solid
          ${!isBorderActive
            ? theme.color.border.header
            : theme.color.background.default};
        background-color: ${theme.color.background.default};
        position: sticky;
        left: 0;
        top: 0;
        z-index: 1000;
        transition: all 0.2s;
        ${mediaQuery[2]} {
          padding: 0 1.25rem;
        }
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
