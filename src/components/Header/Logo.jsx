import { useShallow } from 'zustand/react/shallow';
import { useTheme, css } from '@emotion/react';
import useThemeStore from '@stores/useThemeStore';
import logoLight from '@assets/logo-light.svg';
import logoDark from '@assets/logo-dark.svg';

function Logo() {
  const theme = useTheme();
  const [themeMode] = useThemeStore(useShallow((state) => [state.themeMode]));

  return (
    <h1>
      <a
        href="#"
        css={css`
          display: flex;
          align-items: center;
          gap: 0.375rem;
        `}
      >
        <figure>
          <img
            src={themeMode === 'light' ? logoLight : logoDark}
            alt="단픽"
            css={css`
              width: 1.25rem;
            `}
          />
        </figure>
        <strong
          css={css`
            color: ${theme.color.emphasis.primary};
            ${theme.typography.logo}
          `}
        >
          단픽
        </strong>
      </a>
    </h1>
  );
}

export default Logo;
