import { BeersProvider } from "./Beers";
import { ListaCasamentoProvider } from "./Casamento";
import { ListaFormaturaProvider } from "./Formatura";
import { ListaConfraternizacaoProvider } from "./Confraternizacao";

const Providers = ({ children }) => {
  return (
    <ListaCasamentoProvider>
      <ListaConfraternizacaoProvider>
        <ListaFormaturaProvider>
          <BeersProvider>{children}</BeersProvider>
        </ListaFormaturaProvider>
      </ListaConfraternizacaoProvider>
    </ListaCasamentoProvider>
  );
};

export default Providers;
