import { useTheme, css } from '@emotion/react';
import { useIsBorderActive } from '../../contexts/IsBorderActiveContext';
import { Logo, ThemeToggleSwitch } from '@components/Header';

function Header() {
  const theme = useTheme();
  const isBorderActive = useIsBorderActive();

  return (
    <header
      css={css`
        width: 100%;
        height: 72px;
        padding: 0 80px;
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
