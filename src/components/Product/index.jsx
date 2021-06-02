import { Container } from "./styles";
import { useCasamento } from "../../providers/Casamento";
import { useFormatura } from "../../providers/Formatura";
import { useConfraternizacao } from "../../providers/Confraternizacao";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const Product = ({ beer, addOrRemove, type }) => {
  const { image_url, name, description } = beer;

  const { removeFromCasamento } = useCasamento();
  const { removeFromFormatura } = useFormatura();
  const { removeFromConfraternizacao } = useConfraternizacao();
  const history = useHistory();

  const handleShowProduct = () => {
    history.push(`/beer/${beer.id}`);
  };

  const handleRemoveProduct = () => {
    switch (type) {
      case "casamento":
        removeFromCasamento(beer);
        toast.info("Beer Removed!", {
          autoClose: 2000,
        });
        break;
      case "formatura":
        removeFromFormatura(beer);
        toast.info("Beer Removed!", {
          autoClose: 2000,
        });
        break;
      case "confraternizacao":
        removeFromConfraternizacao(beer);
        toast.info("Beer Removed!", {
          autoClose: 2000,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Container
      btcolor={addOrRemove}
      onClick={addOrRemove ? handleShowProduct : null}
    >
      <figure>
        <img src={image_url} alt="beer" />
      </figure>
      <h3>{name}</h3>
      <p>{description}</p>
      {/* <span>{first_brewed}</span>
      <span>
        {volume.value} {volume.unit}
      </span> */}
      {!addOrRemove && <button onClick={handleRemoveProduct}>REMOVE</button>}
    </Container>
  );
};

export default Product;
