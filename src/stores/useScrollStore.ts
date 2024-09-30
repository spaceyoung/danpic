import { create } from 'zustand';

const useScrollStore = create<{
  isScrolled: boolean;
  setIsScrolled: (active: boolean) => void;
}>((set) => ({
  isScrolled: false,
  setIsScrolled: (active) => set({ isScrolled: active }),
}));

export default useScrollStore;
