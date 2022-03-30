import { useRef } from "react";
import Card from "../../shared/Card";
import LoadingSpinner from "../../animations";
import { Actions, Control, Form, Loading } from "./styles";
import { Button } from "../../shared/Buttons/styles";

const NoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddNote({ author: enteredAuthor, text: enteredText });
  };

  return (
    <Card>
      <Form onSubmit={submitFormHandler}>
        {props.isLoading && (
          <Loading>
            <LoadingSpinner />
          </Loading>
        )}
      </Form>
      <Control>
        <label htmlFor="Autor">Autor</label>
        <input type="text" id="author" ref={authorInputRef} />
      </Control>
      <Control>
        <label htmlFor="texto">Texto</label>
        <textarea id="texto" rows="5" ref={textInputRef} />
      </Control>
      <Actions>
        <Button>Adicionar Nota</Button>
      </Actions>
    </Card>
  );
};

export default NoteForm;
