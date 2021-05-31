import { createContext, useState, useContext } from "react";

export const ListaConfraternizacaoContext = createContext([]);

export const ListaConfraternizacaoProvider = ({ children }) => {
  const [confraternizacao, setConfraternizacao] = useState([]);

  const addToConfraternizacao = (item) => {
    setConfraternizacao([...confraternizacao, item]);
  };

  const removeFromConfraternizacao = (item) => {
    const newConfraternizacao = confraternizacao.filter(
      (itemOnConfraternizacao) => itemOnConfraternizacao.name !== item.name
    );
    setConfraternizacao(newConfraternizacao);
  };

  return (
    <ListaConfraternizacaoContext.Provider
      value={{
        confraternizacao,
        addToConfraternizacao,
        removeFromConfraternizacao,
      }}
    >
      {children}
    </ListaConfraternizacaoContext.Provider>
  );
};
export const useConfraternizacao = () =>
  useContext(ListaConfraternizacaoContext);
