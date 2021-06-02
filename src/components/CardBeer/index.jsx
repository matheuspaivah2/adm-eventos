import { Container, Buttons, Legenda } from "./styles";
import { useCasamento } from "../../providers/Casamento";
import { useFormatura } from "../../providers/Formatura";
import { useConfraternizacao } from "../../providers/Confraternizacao";
import { toast } from "react-toastify";

const CardBeer = ({ beer }) => {
  const { image_url, name, first_brewed, description, volume } = beer;

  const { addToCasamento, casamento } = useCasamento();
  const { addToFormatura, formatura } = useFormatura();
  const { addToConfraternizacao, confraternizacao } = useConfraternizacao();

  const handleAddToCasamento = () => {
    const haveBeer = casamento.filter((item) => item === beer);
    if (haveBeer[0] === undefined) {
      addToCasamento(beer);
      toast.info(`🍺 Beer added to wedding list`, {
        autoClose: 2000,
      });
    } else {
      toast.error("Beer is already registered on this list", {
        autoClose: 2000,
      });
    }
  };

  const handleAddToFormatura = () => {
    const haveBeer = formatura.filter((item) => item === beer);
    if (haveBeer[0] === undefined) {
      addToFormatura(beer);
      toast.info(`🍺 Beer added to graduation list`, {
        autoClose: 2000,
      });
    } else {
      toast.error("Beer is already registered on this list", {
        autoClose: 2000,
      });
    }
  };

  const handleAddToConfraternizacao = () => {
    const haveBeer = confraternizacao.filter((item) => item === beer);
    if (haveBeer[0] === undefined) {
      addToConfraternizacao(beer);
      toast.info(`🍺 Beer added to confraternization list`, {
        autoClose: 2000,
      });
    } else {
      toast.error("Beer is already registered on this list", {
        autoClose: 2000,
      });
    }
  };
  return (
    <>
      <Container>
        <figure>
          <img src={image_url} alt="beer" />
        </figure>

        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <span>Since: {first_brewed || "unknown"}</span>
          <span>
            {volume.unit}: {volume.value}
          </span>
          <span>IBU: {beer.ibu || "unknown"}</span>
          <span>ABV: {beer.abv || "unknown"}%</span>
          <span>EBC: {beer.ebc || "unknown"}</span>
          <span>PH: {beer.ph || "unknown"}</span>
        </div>
      </Container>
      <Legenda>Add to some list</Legenda>
      <Buttons>
        <button
          onClick={() => {
            handleAddToCasamento();
          }}
        >
          Wedding
        </button>
        <button
          onClick={() => {
            handleAddToFormatura();
          }}
        >
          Graduation
        </button>
        <button
          onClick={() => {
            handleAddToConfraternizacao();
          }}
        >
          Confraternization
        </button>
      </Buttons>
    </>
  );
};

export default CardBeer;
