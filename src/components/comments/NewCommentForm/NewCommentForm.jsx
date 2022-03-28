import { useRef } from "react";
import { Form, Control, Actions } from "./styles";
import { Button } from "../../shared/Buttons/styles";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={submitFormHandler}>
      <Control onSubmit={submitFormHandler}>
        <label htmlFor="comment">Seu comentário:</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </Control>
      <Actions>
        <Button>Adicionar comentário</Button>
      </Actions>
    </Form>
  );
};

export default NewCommentForm;
