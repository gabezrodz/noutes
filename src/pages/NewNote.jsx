import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NoteForm from "../components/notes/NoteForm";

const NewNote = () => {
  const history = useHistory();
  const addNoteHandler = (noteData) => {
    console.log(noteData);

    history.push("/notes");
  };

  return <NoteForm onAddNote={addNoteHandler} />;
};

export default NewNote;
