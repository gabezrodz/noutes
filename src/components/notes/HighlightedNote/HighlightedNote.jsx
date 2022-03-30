import { Note } from "./styles";

const HighlightedNote = (props) => {
  return (
    <Note>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </Note>
  );
};

export default HighlightedNote;
