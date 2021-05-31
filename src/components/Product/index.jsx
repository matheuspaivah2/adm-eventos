import { Container } from "./styles";
import { useCasamento } from "../../providers/Casamento";
import { useFormatura } from "../../providers/Formatura";
import { useConfraternizacao } from "../../providers/Confraternizacao";
const Product = ({
  beer,
  setShowProduct,
  setOpenedProduct,
  addOrRemove,
  type,
}) => {
  const { image_url, name, first_brewed, description, volume } = beer;

  const { removeFromCasamento } = useCasamento();
  const { removeFromFormatura } = useFormatura();
  const { removeFromConfraternizacao } = useConfraternizacao();

  const handleShowProduct = () => {
    setShowProduct(true);
    setOpenedProduct(beer);
  };

  const handleRemoveProduct = () => {
    switch (type) {
      case "casamento":
        removeFromCasamento(beer);
        break;
      case "formatura":
        removeFromFormatura(beer);
        break;
      case "confraternizacao":
        removeFromConfraternizacao(beer);
        break;
      default:
        break;
    }
  };
  return (
    <Container btcolor={addOrRemove}>
      <figure>
        <img src={image_url} alt="beer" />
      </figure>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{first_brewed}</span>
      <span>
        {volume.value} {volume.unit}
      </span>
      <button onClick={addOrRemove ? handleShowProduct : handleRemoveProduct}>
        {addOrRemove ? "ADD" : "REMOVE"}
      </button>
    </Container>
  );
};

export default Product;
