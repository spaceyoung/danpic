import { css } from '@emotion/react';
import colorSystem from '../../styles/color';
import logo from '../../assets/logo.svg';

function Logo() {
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
            font-weight: 800;
            font-size: 24px;
            color: ${colorSystem.primary600};
          `}
        >
          단픽
        </strong>
      </a>
    </h1>
  );
}

export default Logo;
