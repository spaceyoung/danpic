import { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import { useTheme, css } from '@emotion/react';
import { Logo, ThemeToggleSwitch } from '@components/Header';

function Header() {
  const [activeBorder, setActiveBorder] = useState(false);

  const theme = useTheme();

  const handleScroll = throttle(() => {
    if (window.scrollY > 16)
      setActiveBorder((prevActiveBorder) => (prevActiveBorder = true));
    else setActiveBorder((prevActiveBorder) => (prevActiveBorder = false));
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      css={css`
        width: 100%;
        height: 72px;
        padding: 0 80px;
        border-bottom: 1px solid
          ${activeBorder
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
