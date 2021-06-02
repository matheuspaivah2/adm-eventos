import Casamento from "../pages/Casamento";
import Formatura from "../pages/Formatura";
import Confraternizacao from "../pages/Confraternizacao";
import Home from "../pages/Home";
import OpenProduct from "../pages/OpenProduct";
import NotFound from "../pages/NotFound";
import { Route, Switch } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/casamento">
          <Casamento />
        </Route>
        <Route path="/formatura">
          <Formatura />
        </Route>
        <Route path="/confraternizacao">
          <Confraternizacao />
        </Route>
        <Route exact path="/beer/:id">
          <OpenProduct />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
