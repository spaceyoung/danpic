import { useTheme, css } from '@emotion/react';
import logo from '../../assets/logo.svg';

function Logo() {
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
            src={logo}
            alt="단픽"
            css={css`
              width: 22px;
            `}
          />
        </figure>
        <strong
          css={css`
            color: ${theme.color.text.logo};
            ${theme.typograhpy.logo}
          `}
        >
          단픽
        </strong>
      </a>
    </h1>
  );
}

export default Logo;
