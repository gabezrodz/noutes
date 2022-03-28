import { useParams } from "react-router-dom";

const SingleNote = () => {
  const params = useParams();

  return (
    <>
      <h1>Página de uma nota</h1>
      <p>{params.noteId}</p>
    </>
  )
}

export default SingleNote;
