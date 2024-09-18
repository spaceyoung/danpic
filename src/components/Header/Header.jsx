import { useShallow } from 'zustand/react/shallow';
import { useTheme, css } from '@emotion/react';
import useBorderStore from '@stores/useBorderStore';
import { Logo, ThemeToggleSwitch } from '@components/Header';
import { mediaQuery } from '@styles/breakpoints';

function Header() {
  const theme = useTheme();
  const [isBorderActive] = useBorderStore(
    useShallow((state) => [state.isBorderActive])
  );

  return (
    <header
      css={css`
        width: 100%;
        height: 3.75rem;
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
