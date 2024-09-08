import { useTheme, css } from '@emotion/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useThemeMode, useSetThemeMode } from '../../contexts/ThemeContext';

function ThemeToggleSwitch() {
  const themeMode = useThemeMode();
  const setThemeMode = useSetThemeMode();
  const theme = useTheme();

  const handleThemeToggleSwitch = () => {
    if (themeMode === 'light')
      setThemeMode((prevThemeMode) => (prevThemeMode = 'dark'));
    else if (themeMode === 'dark')
      setThemeMode((prevThemeMode) => (prevThemeMode = 'light'));
  };

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
        checked={themeMode === 'light' ? false : true}
        onChange={() => handleThemeToggleSwitch()}
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
          }
        `}
      >
        {themeMode === 'light' ? (
          <MdLightMode
            css={css`
              color: ${theme.color.emphasis.primary};
              position: absolute;
              left: 6px;
              top: 6px;
            `}
          />
        ) : (
          <MdDarkMode
            css={css`
              color: ${theme.color.emphasis.primary};
              position: absolute;
              left: 30px;
              top: 6px;
            `}
          />
        )}
      </span>
    </label>
  );
}

export default ThemeToggleSwitch;
