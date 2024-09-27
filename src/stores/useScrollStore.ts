import { create } from 'zustand';

const useScrollStore = create((set) => ({
  isScrolled: false,
  setIsScrolled: (active) => set({ isScrolled: active }),
}));

export default useScrollStore;
