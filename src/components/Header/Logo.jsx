import { useTheme, css } from '@emotion/react';
import { useThemeMode } from '../../contexts/ThemeContext';
import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';

function Logo() {
  const themeMode = useThemeMode();
  const theme = useTheme();

  return (
    <h1>
      <a
        href="#"
        css={css`
          display: flex;
          align-items: center;
          gap: 8px;
        `}
      >
        <figure>
          <img
            src={themeMode === 'light' ? logoLight : logoDark}
            alt="단픽"
            css={css`
              width: 22px;
            `}
          />
        </figure>
        <strong
          css={css`
            color: ${theme.color.text.logo};
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
