import { createContext, useState } from "react";

export const ListaCasamentoContext = createContext([]);

export const ListaCasamentoProvider = ({ children }) => {
  const [casamento, setCasamento] = useState([]);

  const addToCasamento = (item) => {
    setCasamento([...casamento, item]);
  };

  const removeFromCasamento = (item) => {
    const newCasamento = casamento.filter(
      (itemOnCasamento) => itemOnCasamento.name !== item.name
    );
    setCasamento(newCasamento);
  };

  return (
    <ListaCasamentoContext.Provider
      value={{ casamento, addToCasamento, removeFromCasamento }}
    >
      {children}
    </ListaCasamentoContext.Provider>
  );
};
