import { createContext, useContext, useState } from "react";

export const ListaFormaturaContext = createContext([]);

export const ListaFormaturaProvider = ({ children }) => {
  const [formatura, setFormatura] = useState([]);

  const addToFormatura = (item) => {
    setFormatura([...formatura, item]);
  };

  const removeFromFormatura = (item) => {
    const newFormatura = formatura.filter(
      (itemOnFormatura) => itemOnFormatura.name !== item.name
    );
    setFormatura(newFormatura);
  };

  return (
    <ListaFormaturaContext.Provider
      value={{ formatura, addToFormatura, removeFromFormatura }}
    >
      {children}
    </ListaFormaturaContext.Provider>
  );
};

// export const useFormatura = () => useContext(ListaFormaturaContext);
