import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AllNotes from "./pages/AllNotes";
import SingleNote from "./pages/SingleNote";
import NewNote from "./pages/NewNote";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/notes" />
        </Route>
        <Route path="/notes" exact>
          <AllNotes />
        </Route>
        <Route path="/notes/:noteId">
          <SingleNote />
        </Route>
        <Route path="/new-note">
          <NewNote />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
