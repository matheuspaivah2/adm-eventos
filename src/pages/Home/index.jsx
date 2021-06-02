import ProductList from "../../components/ProductsList";
import { Container } from "./styles";
import Loading from "../../components/Loading";
import { useBeers } from "../../providers/Beers";

const Home = () => {
  const { beers } = useBeers();
  return (
    <Container>
      {beers ? (
        <>
          <h1>Catalog</h1>
          <ProductList type={"beers"} addOrRemove={true}></ProductList>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Home;
