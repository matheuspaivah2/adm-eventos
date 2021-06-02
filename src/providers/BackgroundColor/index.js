import { createContext, useContext, useState } from "react";

export const BackgroundColorContext = createContext("");

export const BackgroundColorProvider = ({ children }) => {
  const [color, setColor] = useState("#7166eb");

  return (
    <BackgroundColorContext.Provider value={{ color, setColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};

export const useBackgroundColor = () => useContext(BackgroundColorContext);
