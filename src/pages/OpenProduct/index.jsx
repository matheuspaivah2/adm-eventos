import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { useBeers } from "../../providers/Beers";
import CardBeer from "../../components/CardBeer";
const OpenProduct = () => {
  const param = useParams();
  const { beers } = useBeers();

  const openBeer = beers.find((element) => element.id === Number(param.id));

  return (
    <Container>
      <CardBeer beer={openBeer} />
    </Container>
  );
};

export default OpenProduct;
