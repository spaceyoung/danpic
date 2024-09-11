import { useState, createContext, useContext } from 'react';

const IsBorderActiveContext = createContext();
const SetIsBorderActiveContext = createContext();

export const IsBorderActiveProvider = ({ children }) => {
  const [isBorderActive, setIsBorderActive] = useState(false);

  return (
    <IsBorderActiveContext.Provider value={isBorderActive}>
      <SetIsBorderActiveContext.Provider value={setIsBorderActive}>
        {children}
      </SetIsBorderActiveContext.Provider>
    </IsBorderActiveContext.Provider>
  );
};

export const useIsBorderActive = () => {
  const isBorderActive = useContext(IsBorderActiveContext);
  if (isBorderActive === undefined) {
    throw new Error(
      'useIsBorderActive must be used within IsBorderActiveProvider'
    );
  }
  return isBorderActive;
};

export const useSetIsBorderActive = () => {
  const setIsBorderActive = useContext(SetIsBorderActiveContext);
  if (!setIsBorderActive) {
    throw new Error(
      'useSetIsBorderActive must be used within IsBorderActiveProvider'
    );
  }
  return setIsBorderActive;
};
