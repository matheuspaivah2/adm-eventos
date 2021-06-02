import { Container } from "./styles";
import { useBeers } from "../../providers/Beers";
import { useCasamento } from "../../providers/Casamento";
import { useFormatura } from "../../providers/Formatura";
import { useConfraternizacao } from "../../providers/Confraternizacao";
import Product from "../Product";
import { useEffect, useState } from "react";
const ProductsList = ({ type, addOrRemove }) => {
  const { beers } = useBeers();
  const { casamento } = useCasamento();
  const { formatura } = useFormatura();
  const { confraternizacao } = useConfraternizacao();

  const [listBeers, setListBeers] = useState([]);

  useEffect(() => {
    switch (type) {
      case "beers":
        setListBeers(beers);
        break;
      case "casamento":
        setListBeers(casamento);
        break;
      case "formatura":
        setListBeers(formatura);
        break;
      case "confraternizacao":
        setListBeers(confraternizacao);
        break;
      default:
        break;
    }
  });

  return (
    <>
      <Container>
        {listBeers[0] ? (
          <ul>
            {listBeers.map((beer) => (
              <Product
                key={beer.id}
                beer={beer}
                addOrRemove={addOrRemove}
                type={type}
              ></Product>
            ))}
          </ul>
        ) : (
          <span>Empty List</span>
        )}
      </Container>
    </>
  );
};

export default ProductsList;
