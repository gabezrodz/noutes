import NoteForm from "../components/notes/NoteForm";

const NewNote = () => {
  const addNoteHandler = (noteData) => {
    console.log(noteData)
  };

  return <NoteForm  onAddNote={addNoteHandler}/>;
};

export default NewNote;
