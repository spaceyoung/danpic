import { css } from '@emotion/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import colorSystem from '../../styles/color';
import logo from '../../assets/logo.svg';

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
        <label
          css={css`
            width: 52px;
            height: 28px;
            position: relative;
          `}
        >
          <input
            type="checkbox"
            css={css`
              width: 1px;
              height: 1px;
              clip-path: polygon(0 0, 0 0, 0 0);
            `}
          />
          <span
            css={css`
              width: 100%;
              height: 100%;
              border-radius: 14px;
              background-color: ${colorSystem.grayscale200};
              position: absolute;
              left: 0;
              top: 0;
              cursor: pointer;
              ::before {
                content: '';
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: white;
                position: absolute;
                left: 4px;
                top: 4px;
              }
            `}
          >
            <MdLightMode
              css={css`
                font-size: 16px;
                position: absolute;
                left: 6px;
                top: 6px;
              `}
            />
          </span>
        </label>
      </div>
    </header>
  );
}

export default Header;
