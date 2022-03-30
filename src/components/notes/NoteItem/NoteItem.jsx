import { Link } from "react-router-dom";
import { Button } from "../../shared/Buttons/styles";
import { Item } from "./styles";

const NoteItem = (props) => {
  return (
    <Item>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/notes/${props.id}`}>
        <Button>Ver em Tela-cheia</Button>
      </Link>
    </Item>
  );
};

export default NoteItem;
