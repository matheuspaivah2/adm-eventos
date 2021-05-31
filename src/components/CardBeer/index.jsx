import { Container, Blackground } from "./styles";
import { useCasamento } from "../../providers/Casamento";
import { useFormatura } from "../../providers/Formatura";
import { useConfraternizacao } from "../../providers/Confraternizacao";
const CardBeer = ({ beer, setShowProduct, setOpenedProduct }) => {
  const { image_url, name, first_brewed, description, volume } = beer;

  const { addToCasamento } = useCasamento();
  const { addToFormatura } = useFormatura();
  const { addToConfraternizacao } = useConfraternizacao();

  const handleClose = () => {
    setOpenedProduct([]);
    setShowProduct(false);
  };
  return (
    <Blackground>
      <Container>
        <div>
          <button onClick={handleClose}>Close</button>
          <figure>
            <img src={image_url} alt="beer" />
          </figure>
          <h3>{name}</h3>
          <p>{description}</p>
          <span>{first_brewed}</span>
          <span>
            {volume.value} {volume.unit}
          </span>
          <div className="buttons">
            <button onClick={() => addToCasamento(beer)}>ADD CASAMENTO</button>
            <button onClick={() => addToFormatura(beer)}>ADD FORMATURA</button>
            <button onClick={() => addToConfraternizacao(beer)}>
              ADD CONFRATERNIZAÇÃO
            </button>
          </div>
        </div>
      </Container>
    </Blackground>
  );
};

export default CardBeer;
