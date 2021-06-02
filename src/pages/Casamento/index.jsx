import ProductList from "../../components/ProductsList";
import { Container } from "./styles";
import Loading from "../../components/Loading";
import { useState } from "react";
import { useEffect } from "react";

const Casamento = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>Wedding List</h1>
          <ProductList type="casamento" addOrRemove={false} />
        </>
      )}
    </Container>
  );
};

export default Casamento;
