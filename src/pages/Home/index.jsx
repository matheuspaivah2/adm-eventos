import { useState } from "react";
import ProductList from "../../components/ProductsList";
import { Container } from "./styles";
import CardBeer from "../../components/CardBeer";
const Home = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [openedProduct, setOpenedProduct] = useState([]);

  return (
    <Container>
      {showProduct && (
        <CardBeer
          beer={openedProduct}
          setShowProduct={setShowProduct}
          setOpenedProduct={setOpenedProduct}
        />
      )}
      <ProductList
        setShowProduct={setShowProduct}
        setOpenedProduct={setOpenedProduct}
        type={"beers"}
        addOrRemove={true}
      ></ProductList>
    </Container>
  );
};

export default Home;
