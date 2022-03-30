import { CardStyled } from "./styles";

const Card = (props) => {
  return <CardStyled>{props.children}</CardStyled>;
};

export default Card;
