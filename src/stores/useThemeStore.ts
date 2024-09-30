import { create } from 'zustand';

const useThemeStore = create<{
  themeMode: 'light' | 'dark';
  toggleThemeMode: () => void;
}>((set) => ({
  themeMode: 'light',
  toggleThemeMode: () =>
    set((state) => ({
      themeMode: state.themeMode === 'light' ? 'dark' : 'light',
    })),
}));

export default useThemeStore;
