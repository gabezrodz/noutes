import { useRef, useState } from "react";
import Card from "../../shared/Card";
import LoadingSpinner from "../../animations";
import { Actions, Control, Form, Loading } from "./styles";
import { Button } from "../../shared/Buttons/styles";
import { Prompt } from "react-router-dom";

const NoteForm = (props) => {
  const [isEntered, setIsEntered] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddNote({ author: enteredAuthor, text: enteredText });
  };

  const formFocusHandler = () => {
    setIsEntered(true)
  };

  const finishEnteringHandler = () =>{
    setIsEntered(false)
  }

  return (
    <>
      <Prompt when={isEntered} message={(location)=> "Tem certeza que deseja sair? Todo texto digitado será perdido!"}/>
      <Card>
        <Form onFocus={formFocusHandler} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <Loading>
              <LoadingSpinner />
            </Loading>
          )}

          <Control>
            <label htmlFor="Autor">Autor</label>
            <input type="text" id="author" ref={authorInputRef} />
          </Control>
          <Control>
            <label htmlFor="texto">Texto</label>
            <textarea id="texto" rows="5" ref={textInputRef} />
          </Control>
          <Actions>
            <Button onClick={finishEnteringHandler}>Adicionar Nota</Button>
          </Actions>
        </Form>
      </Card>
    </>
  );
};

export default NoteForm;
