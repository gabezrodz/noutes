import NoteItem from "../NoteItem";
import { List } from "./styles";

const NoteList = (props) => {
  return (
    <>
      <List>
        {props.notes.map((note) => {
          return (
            <NoteItem
              key={note.id}
              id={note.id}
              author={note.author}
              text={note.text}
            />
          );
        })}
      </List>
    </>
  );
};

export default NoteList;
