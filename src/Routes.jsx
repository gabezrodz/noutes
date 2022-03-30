import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AllNotes from "./pages/AllNotes";
import SingleNote from "./pages/SingleNote";
import NewNote from "./pages/NewNote";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Routes;
