import { create } from 'zustand';
import sectionTabList from '@constants/sectionTabList';

const useActiveTabStore = create<{
  activeSectionTab: string;
  setActiveSectionTab: (sectionTab: string) => void;
}>((set) => ({
  activeSectionTab: sectionTabList[0],
  setActiveSectionTab: (sectionTab) => set({ activeSectionTab: sectionTab }),
}));

export default useActiveTabStore;