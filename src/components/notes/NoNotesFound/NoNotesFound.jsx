import { NoNotes } from "./styles";
import { Button } from "../../shared/Buttons/styles";

const NoNotesFound = () => {
  return (
    <NoNotes>
      <p>Nenhuma nota encontrada!</p>
      <Button>Adicionar Nota</Button>
    </NoNotes>
  );
};

export default NoNotesFound;