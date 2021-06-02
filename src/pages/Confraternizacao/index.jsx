import ProductList from "../../components/ProductsList";
import Loading from "../../components/Loading";
import { Container } from "./styles";
import { useEffect } from "react";
import { useState } from "react";
const Confraternizacao = () => {
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
          <h1>Confraternization List</h1>
          <ProductList type="confraternizacao" addOrRemove={false} />
        </>
      )}
    </Container>
  );
};

export default Confraternizacao;
