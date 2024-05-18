import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HandlersContextProps {
  isMenuPopupOpen: boolean;
  clickedAwayInPage: boolean;
  togglePopup: () => void;
  toggleCallMeButton: (value: boolean) => void;
}

const HandlersContext = createContext<HandlersContextProps | undefined>(
  undefined
);

export const useHandlersContext = (): HandlersContextProps => {
  const context = useContext(HandlersContext);
  if (!context) {
    throw new Error(
      'useHandlersContext must be used within a HandlersProvider'
    );
  }
  return context;
};

interface PopupProviderProps {
  children: ReactNode;
}

export const HandlersProvider: React.FC<PopupProviderProps> = ({
  children,
}) => {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [clickedAwayInPage, setClickedAwayInPage] = useState(false);

  const togglePopup = () => {
    setIsMenuPopupOpen(!isMenuPopupOpen);
  };

  const toggleCallMeButton = (value: boolean) => {
    setClickedAwayInPage(value);
  };

  const contextValue: HandlersContextProps = {
    isMenuPopupOpen,
    togglePopup,
    toggleCallMeButton,
    clickedAwayInPage,
  };

  return (
    <HandlersContext.Provider value={contextValue}>
      {children}
    </HandlersContext.Provider>
  );
};
