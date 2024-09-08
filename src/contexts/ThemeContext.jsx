import { useState, createContext, useContext } from 'react';

const ThemeModeContext = createContext();
const SetThemeModeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <SetThemeModeContext.Provider value={setThemeMode}>
        {children}
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
