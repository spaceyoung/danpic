import { create } from 'zustand';

const useThemeStore = create((set) => ({
  themeMode: 'light',
  toggleThemeMode: () =>
    set((state) => ({
      themeMode: state.themeMode === 'light' ? 'dark' : 'light',
    })),
}));

export default useThemeStore;
