import React from 'react';

type IUIContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const UIContext = React.createContext<IUIContext | null>(null);

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === null)
    throw new Error('useContext deve estar dentro do Provider.');
  return context;
};

export const UIContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = React.useState(false);

  return (
    <UIContext.Provider value={{ dark, setDark }}>
      {children}
    </UIContext.Provider>
  );
};
