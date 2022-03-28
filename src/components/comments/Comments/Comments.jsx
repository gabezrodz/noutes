import { useState } from "react";
import { Comment } from "./styles";
import NewCommentForm from "../NewCommentForm";
import { Button } from "../../shared/Buttons/styles";

const Comments = () => {
  const [addingComment, setAddingComent] = useState(false);

  const startAddCommentHandler = () => {
    setAddingComent(true);
  };

  return (
    <Comment>
      <h2>Comentários do Usuário</h2>
      {!addingComment && (
        <Button onClick={startAddCommentHandler}>Adicionar comentário </Button>
      )}
      {addingComment && <NewCommentForm />}
      <p>Comentários...</p>
    </Comment>
  );
};

export default Comments