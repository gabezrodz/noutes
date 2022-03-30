import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Header, Navbar, Logo } from "./styles";

const MainNavigation = () => {
  return (
    <Header>
      <Logo>Notineas</Logo>
      <Navbar>
        <ul>
          <li>
            <NavLink to="/notes" activeClassname={"active"}>
              Todas as Notas
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-note" activeClassname={"active"}>
              Nova Nota
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </Header>
  );
};

export default MainNavigation;
