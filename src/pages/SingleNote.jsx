import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedNote from "../components/notes/HighlightedNote";

const NOTES_DATA = [
  {
    id: "n1",
    author: "Gabez",
    text: "Wow, laranxinea!",
  },
  { id: "n2", author: "Karloz", text: "Here comes Tata heheheh 🤏" },
];
const SingleNote = () => {
  const params = useParams();

  const note = NOTES_DATA.find((note) => note.id === params.noteId);

  if (!note) {
    return <p>Nenhuma nota encontrada</p>;
  }

  return (
    <>
      <HighlightedNote text={note.text} author={note.author} />
      <Route path={`/notes/${params.noteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default SingleNote;
