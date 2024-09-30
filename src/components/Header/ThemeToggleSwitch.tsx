import { useShallow } from 'zustand/react/shallow';
import { useTheme, css } from '@emotion/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import useThemeStore from '@stores/useThemeStore';
import { mediaQuery } from '@styles/breakpoints';

function ThemeToggleSwitch() {
  const theme = useTheme();
  const [themeMode, toggleThemeMode] = useThemeStore(
    useShallow((state) => [state.themeMode, state.toggleThemeMode])
  );

  return (
    <label
      css={css`
        width: 52px;
        height: 28px;
        position: relative;
        ${mediaQuery[1]} {
          width: 48px;
          height: 24px;
        }
      `}
    >
      <input
        type="checkbox"
        checked={themeMode === 'light' ? false : true}
        onChange={() => toggleThemeMode()}
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
          font-size: 16px;
          background-color: ${theme.color.background.toggleSwitch};
          position: absolute;
          left: 0;
          top: 0;
          cursor: pointer;
          ::before {
            content: '';
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: ${theme.color.background.default};
            position: absolute;
            left: ${themeMode === 'light' ? '4px' : '28px'};
            top: 4px;
            transition: all 0.2s;
          }
          ${mediaQuery[1]} {
            font-size: 14px;
            ::before {
              width: 18px;
              height: 18px;
              left: ${themeMode === 'light' ? '3px' : '27px'};
              top: 3px;
            }
          }
        `}
      >
        <MdLightMode
          css={css`
            position: absolute;
            left: ${themeMode === 'light' ? '6px' : '30px'};
            top: 6px;
            opacity: ${themeMode === 'light' ? 1 : 0};
            transition: all 0.2s;
            ${mediaQuery[1]} {
              left: ${themeMode === 'light' ? '5px' : '29px'};
              top: 5px;
            }
          `}
        />
        <MdDarkMode
          css={css`
            position: absolute;
            left: ${themeMode === 'light' ? '6px' : '30px'};
            top: 6px;
            opacity: ${themeMode === 'light' ? 0 : 1};
            transition: all 0.2s;
            ${mediaQuery[1]} {
              left: ${themeMode === 'light' ? '5px' : '29px'};
              top: 5px;
            }
          `}
        />
      </span>
    </label>
  );
}

export default ThemeToggleSwitch;