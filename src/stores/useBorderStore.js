import { create } from 'zustand';

const useBorderStore = create((set) => ({
  isBorderActive: false,
  setIsBorderActive: (active) => set({ isBorderActive: active }),
}));

export default useBorderStore;
