import { useState, createContext, useContext } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from '@styles/theme';

const ThemeModeContext = createContext();
const SetThemeModeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <SetThemeModeContext.Provider value={setThemeMode}>
        <EmotionThemeProvider
          theme={themeMode === 'light' ? lightTheme : darkTheme}
        >
          {children}
        </EmotionThemeProvider>
      </SetThemeModeContext.Provider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const themeMode = useContext(ThemeModeContext);
  if (!themeMode) {
    throw new Error('useThemeMode must be used within ThemeProvider');
  }
  return themeMode;
};

export const useSetThemeMode = () => {
  const setThemeMode = useContext(SetThemeModeContext);
  if (!setThemeMode) {
    throw new Error('useSetThemeMode must be used within ThemeProvider');
  }
  return setThemeMode;
};
