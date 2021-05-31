import { BeersProvider } from "./beers";
import { ListaCasamentoProvider } from "./casamento";
import { ListFormaturaProvider } from "./formatura";
import { ListaConfraternizacaoProvider } from "./confraternizacao";

const Providers = ({ children }) => {
  return (
    <BeersProvider>
      <ListFormaturaProvider>
        <ListaCasamentoProvider>
          <ListaConfraternizacaoProvider>
            {children}
          </ListaConfraternizacaoProvider>
        </ListaCasamentoProvider>
      </ListFormaturaProvider>
    </BeersProvider>
  );
};

export default Providers;
