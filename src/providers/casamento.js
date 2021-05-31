import { createContext, useContext, useState } from "react";

export const ListaCasamentoContext = createContext([]);

export const ListaCasamentoProvider = ({ childern }) => {
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
      {childern}
    </ListaCasamentoContext.Provider>
  );
};

export const useCasamento = () => useContext(ListaCasamentoContext);
