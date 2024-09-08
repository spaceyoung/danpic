import { css } from '@emotion/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import colorSystem from '../../styles/color';

function ThemeToggleSwitch() {
  return (
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
  );
}

export default ThemeToggleSwitch;
