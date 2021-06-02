import { BeersProvider } from "./Beers";
import { ListaCasamentoProvider } from "./Casamento";
import { ListaFormaturaProvider } from "./Formatura";
import { ListaConfraternizacaoProvider } from "./Confraternizacao";
import { BackgroundColorProvider } from "./BackgroundColor";

const Providers = ({ children }) => {
  return (
    <ListaCasamentoProvider>
      <ListaConfraternizacaoProvider>
        <ListaFormaturaProvider>
          <BackgroundColorProvider>
            <BeersProvider>{children}</BeersProvider>
          </BackgroundColorProvider>
        </ListaFormaturaProvider>
      </ListaConfraternizacaoProvider>
    </ListaCasamentoProvider>
  );
};

export default Providers;
