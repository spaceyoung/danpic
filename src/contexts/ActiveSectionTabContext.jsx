import { useState, createContext, useContext } from 'react';
import sectionTabList from '@constants/sectionTabList';

const ActiveSectionTabContext = createContext();
const SetActiveSectionTabContext = createContext();

export const ActiveSectionTabProvider = ({ children }) => {
  const [activeSectionTab, setActiveSectionTab] = useState(sectionTabList[0]);

  return (
    <ActiveSectionTabContext.Provider value={activeSectionTab}>
      <SetActiveSectionTabContext.Provider value={setActiveSectionTab}>
        {children}
      </SetActiveSectionTabContext.Provider>
    </ActiveSectionTabContext.Provider>
  );
};

export const useActiveSectionTab = () => {
  const activeSectionTab = useContext(ActiveSectionTabContext);
  if (!activeSectionTab) {
    throw new Error(
      'useActiveSectionTab must be used within ActiveSectionTabProvider'
    );
  }
  return activeSectionTab;
};

export const useSetActiveSectionTab = () => {
  const setActiveSectionTab = useContext(SetActiveSectionTabContext);
  if (!setActiveSectionTab) {
    throw new Error(
      'useSetActiveSectionTab must be used within ActiveSectionTabProvider'
    );
  }
  return setActiveSectionTab;
};
